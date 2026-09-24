import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  setPersistence,
  browserSessionPersistence,
  browserLocalPersistence
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";
import {
  getFirestore,
  doc,
  collection,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  deleteDoc,
  addDoc,
  onSnapshot,
  writeBatch,
  serverTimestamp,
  deleteField
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";
import {
  initializeAppCheck,
  ReCaptchaEnterpriseProvider
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app-check.js";

const CONFIG = window.MFS_FIREBASE_CONFIG || {};
const FIREBASE = CONFIG.firebase || {};

const SHIFT_LABELS = { manha: "Manhã", tarde: "Tarde", noite: "Noite", integral: "Integral" };
const SHIFT_CODES = { M: "manha", T: "tarde", N: "noite", I: "integral" };
const SHIFT_ORDER = ["manha", "tarde", "noite", "integral"];
const STATUS_INFO = {
  G: { key: "enviada", label: "Com frequência", cls: "sent", short: "OK" },
  R: { key: "pendente", label: "Pendente", cls: "pending", short: "!" },
  J: { key: "justificada", label: "Justificada", cls: "justified", short: "J" },
  X: { key: "nao_letivo", label: "Não letivo", cls: "no-school", short: "–" },
  ".": { key: "sem_registro", label: "Sem registro", cls: "blank", short: "" },
  "?": { key: "desconhecido", label: "Desconhecido", cls: "blank", short: "?" }
};
const STATUS_CHAR = { enviada: "G", pendente: "R", justificada: "J", nao_letivo: "X", sem_registro: "." };
const COLOR_CHAR = {
  "rgb(0,169,157)": "G",
  "rgb(244,34,34)": "R",
  "rgb(247,149,34)": "J",
  "rgb(100,112,121)": "X"
};
const MONTH_NAMES = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
const MONTH_INDEX = { janeiro:1, fevereiro:2, marco:3, abril:4, maio:5, junho:6, julho:7, agosto:8, setembro:9, outubro:10, novembro:11, dezembro:12 };

const state = {
  user: null,
  profile: null,
  schools: {},
  months: {},
  records: {},
  month: localISODate().slice(0, 7),
  search: "",
  shift: "TODOS",
  status: "TODOS",
  preview: null,
  dailyPreview: null,
  chargeGroups: [],
  editor: null,
  unsubSchools: null,
  unsubMonths: null,
  unsubMonthRecords: null
};

let app = null;
let auth = null;
let db = null;
let toastTimer = null;

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

function configured() {
  const required = ["apiKey","authDomain","projectId","appId"];
  return required.every(key => FIREBASE[key] && !String(FIREBASE[key]).includes("COLE_AQUI"));
}

function normalizeText(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>'"]/g, c => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", "'":"&#39;", '"':"&quot;"
  }[c]));
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function showOnlyGate(gateId) {
  ["configGate","loginGate","pendingGate"].forEach(id => { const el = $("#" + id); if (el) el.hidden = id !== gateId; });
  if ($("#appShell")) $("#appShell").hidden = true;
}

function showApp() {
  ["configGate","loginGate","pendingGate"].forEach(id => { const el = $("#" + id); if (el) el.hidden = true; });
  $("#appShell").hidden = false;
}

function showToast(message) {
  const toast = $("#toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3000);
}

function localISODate(date = new Date()) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function formatDateBR(value) {
  const [y,m,d] = String(value || "").split("-");
  return y && m && d ? `${d}/${m}/${y}` : value;
}

function monthLabel(month) {
  const [year, mo] = month.split("-").map(Number);
  return `${MONTH_NAMES[mo - 1] || mo} de ${year}`;
}

function daysInMonth(month) {
  const [year, mo] = month.split("-").map(Number);
  return new Date(year, mo, 0).getDate();
}

function recordShifts(record) {
  return SHIFT_ORDER.filter(shift => record?.s?.[shift]);
}

function statusChar(record, shift, day) {
  const str = record?.s?.[shift] || "";
  return str[day - 1] || ".";
}

function setStatusChar(record, shift, day, char, month) {
  const ndays = daysInMonth(month);
  record.s ||= {};
  let str = String(record.s[shift] || "");
  if (str.length < ndays) str = str.padEnd(ndays, ".");
  if (str.length > ndays) str = str.slice(0, ndays);
  const arr = [...str];
  arr[day - 1] = char;
  record.s[shift] = arr.join("");
  return record;
}

function isAdmin() {
  return state.profile?.active === true && state.profile?.role === "admin";
}

async function startFirebase() {
  $("#currentHostname").textContent = window.location.hostname || "arquivo local";
  if (!configured()) {
    showOnlyGate("configGate");
    return;
  }

  app = initializeApp(FIREBASE);
  auth = getAuth(app);
  db = getFirestore(app);

  if (CONFIG.appCheckSiteKey) {
    try {
      initializeAppCheck(app, {
        provider: new ReCaptchaEnterpriseProvider(CONFIG.appCheckSiteKey),
        isTokenAutoRefreshEnabled: true
      });
    } catch (error) {
      console.warn("App Check não pôde ser inicializado:", error);
    }
  }

  await setPersistence(auth, CONFIG.sessionOnly === false ? browserLocalPersistence : browserSessionPersistence);

  onAuthStateChanged(auth, handleAuthState);
}

async function handleAuthState(user) {
  cleanupSubscriptions();
  state.user = user || null;
  state.profile = null;
  state.schools = {};
  state.months = {};
  state.records = {};

  if (!user) {
    showOnlyGate("loginGate");
    return;
  }

  try {
    const profileSnap = await getDoc(doc(db, "users", user.uid));
    const profile = profileSnap.exists() ? profileSnap.data() : null;

    if (!profile || profile.active !== true) {
      await requestAccess(user);
      $("#pendingUserName").textContent = user.displayName || "Usuário Google";
      $("#pendingUserEmail").textContent = user.email || "";
      $("#pendingUserUid").textContent = user.uid;
      showOnlyGate("pendingGate");
      return;
    }

    state.profile = { uid: user.uid, ...profile };
    enterAuthorizedApp();
  } catch (error) {
    console.error(error);
    showToast("Não foi possível validar seu acesso. Confira as regras do Firestore.");
    showOnlyGate("pendingGate");
    $("#pendingUserName").textContent = user.displayName || "Usuário";
    $("#pendingUserEmail").textContent = user.email || "";
    $("#pendingUserUid").textContent = user.uid;
  }
}

async function requestAccess(user) {
  const ref = doc(db, "accessRequests", user.uid);
  await setDoc(ref, {
    uid: user.uid,
    email: user.email || "",
    displayName: user.displayName || "",
    photoURL: user.photoURL || "",
    requestedAt: serverTimestamp()
  }, { merge: true });
}

function cleanupSubscriptions() {
  for (const key of ["unsubSchools","unsubMonths","unsubMonthRecords"]) {
    if (typeof state[key] === "function") state[key]();
    state[key] = null;
  }
}

function enterAuthorizedApp() {
  showApp();
  const user = state.user;
  $("#userName").textContent = state.profile.displayName || user.displayName || user.email || "Usuário";
  $("#userRole").textContent = state.profile.role === "admin" ? "Administrador" : "Técnico";
  const avatar = $("#userAvatar");
  if (user.photoURL) {
    avatar.src = user.photoURL;
    avatar.hidden = false;
  } else {
    avatar.removeAttribute("src");
    avatar.hidden = true;
  }
  $$(".admin-only").forEach(el => { el.hidden = !isAdmin(); });
  if ($("#dailyDate") && !$("#dailyDate").value) $("#dailyDate").value = localISODate();
  subscribeSchools();
  subscribeMonths();
  subscribeMonthRecords(state.month);
  renderCharges($("#dailyDate")?.value);
  if (isAdmin()) loadUserManagement();
}

function subscribeSchools() {
  state.unsubSchools = onSnapshot(collection(db, "schools"), snapshot => {
    const schools = {};
    snapshot.forEach(snap => { schools[snap.id] = { id: snap.id, ...snap.data() }; });
    state.schools = schools;
    renderMonitor();
  }, error => {
    console.error(error);
    showToast("Falha ao carregar as escolas do Firestore.");
  });
}

function subscribeMonths() {
  state.unsubMonths = onSnapshot(collection(db, "months"), snapshot => {
    const months = {};
    snapshot.forEach(snap => { months[snap.id] = { id: snap.id, ...snap.data() }; });
    state.months = months;
    renderMonthSelect();
    renderMonitor();
  }, error => console.error("Falha ao carregar meses:", error));
}

function subscribeMonthRecords(month) {
  if (typeof state.unsubMonthRecords === "function") state.unsubMonthRecords();
  state.records = {};
  renderMonitor();
  state.unsubMonthRecords = onSnapshot(collection(db, "months", month, "schools"), snapshot => {
    const records = {};
    snapshot.forEach(snap => records[snap.id] = snap.data());
    state.records = records;
    renderMonitor();
    if ($("#dailyDate")?.value?.startsWith(month)) renderCharges($("#dailyDate").value);
  }, error => {
    console.error(error);
    showToast(`Não foi possível carregar ${monthLabel(month)}.`);
  });
}

async function getMonthRecordsOnce(month) {
  if (month === state.month) return clone(state.records);
  const snapshot = await getDocs(collection(db, "months", month, "schools"));
  const records = {};
  snapshot.forEach(snap => records[snap.id] = snap.data());
  return records;
}

function availableMonths() {
  const months = new Set(Object.keys(state.months));
  months.add(state.month);
  return [...months].filter(Boolean).sort();
}

function renderMonthSelect() {
  const select = $("#monthSelect");
  if (!select) return;
  const months = availableMonths();
  select.innerHTML = months.slice().reverse().map(m => `<option value="${m}" ${m === state.month ? "selected" : ""}>${monthLabel(m)}</option>`).join("");
}

function countStatuses(records, shiftFilter = "TODOS") {
  const counts = { G:0, R:0, J:0, X:0, ".":0 };
  Object.values(records || {}).forEach(record => {
    const shifts = shiftFilter === "TODOS" ? recordShifts(record) : [shiftFilter].filter(s => record?.s?.[s]);
    shifts.forEach(shift => {
      for (const ch of record?.s?.[shift] || "") counts[ch] = (counts[ch] || 0) + 1;
    });
  });
  return counts;
}

function latestDataDay(records, month) {
  const max = daysInMonth(month);
  for (let day = max; day >= 1; day--) {
    for (const record of Object.values(records || {})) {
      for (const shift of recordShifts(record)) {
        const ch = statusChar(record, shift, day);
        if (["G","R","J"].includes(ch)) return day;
      }
    }
  }
  return null;
}

function renderSummary() {
  const counts = countStatuses(state.records, state.shift);
  const schoolCount = Object.keys(state.records).length;
  const latest = latestDataDay(state.records, state.month);
  $("#summaryGrid").innerHTML = `
    <article class="card summary-card school-card-kpi clickable" data-summary-filter="TODOS"><span class="label">Escolas</span><strong class="value">${schoolCount}</strong><div class="note">presentes neste mês</div></article>
    <article class="card summary-card sent-card clickable" data-summary-filter="enviada"><span class="label">Com frequência</span><strong class="value">${counts.G || 0}</strong><div class="note">clique para filtrar</div></article>
    <article class="card summary-card pending-card clickable" data-summary-filter="pendente"><span class="label">Pendentes</span><strong class="value">${counts.R || 0}</strong><div class="note">clique para filtrar</div></article>
    <article class="card summary-card justified-card clickable" data-summary-filter="justificada"><span class="label">Justificadas</span><strong class="value">${counts.J || 0}</strong><div class="note">${latest ? `situação até o dia ${String(latest).padStart(2,"0")}` : "sem situação registrada"}</div></article>`;
  $$('[data-summary-filter]').forEach(card => card.addEventListener('click', () => {
    state.status = card.dataset.summaryFilter;
    $("#statusFilter").value = state.status;
    renderMonitor();
  }));
}

function schoolMatches(meta, record) {
  const query = normalizeText(state.search);
  if (query) {
    const hay = normalizeText([meta?.name, meta?.area, meta?.city, meta?.inep].join(" "));
    if (!hay.includes(query)) return false;
  }
  if (state.shift !== "TODOS" && !record?.s?.[state.shift]) return false;
  if (state.status !== "TODOS") {
    const target = STATUS_CHAR[state.status];
    const shifts = state.shift === "TODOS" ? recordShifts(record) : [state.shift];
    if (!shifts.some(shift => (record?.s?.[shift] || "").includes(target))) return false;
  }
  return true;
}

function renderMonitor() {
  if (!$("#schoolList") || $("#appShell")?.hidden) return;
  renderMonthSelect();
  $("#monthTitle").textContent = monthLabel(state.month);
  const meta = state.months[state.month] || {};
  const sourceParts = [];
  if (meta.lastMonitoraFile) sourceParts.push(`Monitora: ${meta.lastMonitoraFile}`);
  if (meta.lastDailyFile) sourceParts.push(`CSV: ${meta.lastDailyFile}`);
  sourceParts.push("dados protegidos no Firestore");
  $("#sourceInfo").textContent = sourceParts.join(" · ");
  $("#monthSelect").value = state.month;
  $("#shiftFilter").value = state.shift;
  $("#statusFilter").value = state.status;
  renderSummary();

  const filtered = Object.entries(state.records)
    .filter(([id, record]) => schoolMatches(state.schools[id] || { id, name:id }, record))
    .sort((a,b) => (state.schools[a[0]]?.name || a[0]).localeCompare(state.schools[b[0]]?.name || b[0], "pt-BR"));
  const latest = latestDataDay(state.records, state.month);
  const shiftLabel = state.shift === "TODOS" ? "todos os turnos" : SHIFT_LABELS[state.shift];
  const statusLabel = state.status === "TODOS" ? "todas as situações" : ({enviada:"com frequência",pendente:"pendentes",justificada:"justificadas"}[state.status] || state.status);
  $("#resultMeta").innerHTML = `<span><strong>${filtered.length}</strong> escola${filtered.length === 1 ? "" : "s"}</span><span>${escapeHtml(shiftLabel)}</span><span>${escapeHtml(statusLabel)}</span>${latest ? `<span>dados até o dia <strong>${String(latest).padStart(2,"0")}</strong></span>` : ""}`;

  if (!filtered.length) {
    $("#schoolList").innerHTML = `<article class="card empty-card large-empty"><strong>${Object.keys(state.records).length ? "Nenhuma escola encontrada" : "Banco sem dados para este mês"}</strong><span>${Object.keys(state.records).length ? "Ajuste os filtros." : (isAdmin() ? "Importe o HTML do Monitora para popular o Firestore." : "Aguarde um administrador importar a base deste mês.")}</span></article>`;
    return;
  }
  $("#schoolList").innerHTML = filtered.map(([id, record]) => renderSchoolCard(id, state.schools[id] || {id,name:id}, record, state.month)).join("");
}

function perSchoolCounts(record, shifts) {
  const out = { G:0, R:0, J:0 };
  shifts.forEach(shift => { for (const ch of record?.s?.[shift] || "") if (ch in out) out[ch]++; });
  return out;
}

function weekdayShort(month, day) {
  const [year, mo] = month.split("-").map(Number);
  return ["DOM","SEG","TER","QUA","QUI","SEX","SAB"][new Date(year, mo - 1, day).getDay()];
}

function shiftCode(shift) {
  return ({manha:"M",tarde:"T",noite:"N",integral:"I"})[shift] || "?";
}

function renderCalendarHalf(id, record, shifts, month, startDay, endDay) {
  const cols = endDay - startDay + 1;
  const headers = [];
  const days = [];
  for (let day = startDay; day <= endDay; day++) {
    headers.push(`<div class="calendar-day-head"><span>${weekdayShort(month, day)}</span><strong>${String(day).padStart(2,"0")}</strong></div>`);
    const chips = shifts.map(shift => {
      const ch = statusChar(record, shift, day);
      const info = STATUS_INFO[ch] || STATUS_INFO["?"];
      const reason = record?.r?.[String(day)]?.[shift] || (ch === "X" ? record?.n?.[String(day)] : "") || "";
      const title = `${String(day).padStart(2,"0")}/${month.slice(5,7)}/${month.slice(0,4)} · ${SHIFT_LABELS[shift]} · ${info.label}${reason ? ` · ${reason}` : ""}`;
      return `<button class="status-chip ${info.cls}${reason ? " has-reason" : ""}" type="button" data-edit-status="1" data-school-id="${escapeHtml(id)}" data-day="${day}" data-shift="${shift}" title="${escapeHtml(title)}">${shiftCode(shift)}</button>`;
    }).join("");
    days.push(`<div class="calendar-day">${chips}</div>`);
  }
  return `<div class="calendar-half"><div class="calendar-body"><div class="calendar-header" style="--cols:${cols}">${headers.join("")}</div><div class="calendar-grid" style="--cols:${cols}">${days.join("")}</div></div></div>`;
}

function renderSchoolCard(id, meta, record, month) {
  const shifts = state.shift === "TODOS" ? recordShifts(record) : [state.shift].filter(s => record?.s?.[s]);
  const counts = perSchoolCounts(record, shifts);
  const ndays = daysInMonth(month);
  const nonSchool = Object.entries(record?.n || {}).map(([day, reason]) => `${day}: ${reason}`).join(" · ");
  return `<article class="card school-card">
    <header class="school-head"><div class="school-name"><h3>${escapeHtml(meta?.name || id)}</h3><div class="school-meta">${meta?.area ? `<span class="meta-pill">${escapeHtml(meta.area)}</span>` : ""}${meta?.city ? `<span class="meta-pill">${escapeHtml(meta.city)}</span>` : ""}${meta?.inep ? `<span class="meta-pill">INEP ${escapeHtml(meta.inep)}</span>` : ""}</div></div><div class="school-counts"><div class="school-count"><strong>${counts.G}</strong><small>freq.</small></div><div class="school-count"><strong>${counts.R}</strong><small>pend.</small></div><div class="school-count"><strong>${counts.J}</strong><small>just.</small></div></div></header>
    <div class="school-calendar">${shifts.length ? renderCalendarHalf(id, record, shifts, month, 1, Math.min(15, ndays)) + (ndays > 15 ? renderCalendarHalf(id, record, shifts, month, 16, ndays) : "") : `<div class="empty-card">Sem turnos registrados neste mês.</div>`}</div>
    <div class="school-footer"><span class="hint">Clique em M, T, N ou I para editar</span><span class="non-school-note" title="${escapeHtml(nonSchool)}">${nonSchool ? `Ocorrências: ${escapeHtml(nonSchool)}` : "Sem ocorrências cadastradas"}</span></div>
  </article>`;
}

function openStatusEditor(schoolId, day, shift) {
  const record = state.records[schoolId];
  if (!record) return;
  const meta = state.schools[schoolId] || {};
  const ch = statusChar(record, shift, day);
  const reason = record?.r?.[String(day)]?.[shift] || (ch === "X" ? record?.n?.[String(day)] : "") || "";
  state.editor = { schoolId, day:Number(day), shift, month:state.month, before:ch };
  $("#editorSchool").textContent = meta.name || schoolId;
  $("#editorDate").textContent = `${String(day).padStart(2,"0")}/${state.month.slice(5,7)}/${state.month.slice(0,4)}`;
  $("#editorShift").textContent = SHIFT_LABELS[shift] || shift;
  $("#editorStatus").value = ["G","R","J","X","."].includes(ch) ? ch : ".";
  $("#editorReason").value = reason;
  updateEditorHint();
  $("#statusModal").classList.add("open");
  $("#statusModal").setAttribute("aria-hidden","false");
}

function closeStatusEditor() {
  state.editor = null;
  $("#statusModal").classList.remove("open");
  $("#statusModal").setAttribute("aria-hidden","true");
}

function updateEditorHint() {
  const status = $("#editorStatus")?.value;
  const map = { G:"Marque quando a frequência foi enviada/regularizada.", R:"A escola ficará pendente e poderá aparecer na cobrança diária.", J:"Informe o motivo da justificativa.", X:"Use para dia/turno não letivo.", ".":"Limpa o status deste dia/turno." };
  $("#editorHint").textContent = map[status] || "A observação é opcional.";
}

async function saveStatusEditor() {
  if (!state.editor) return;
  const { schoolId, day, shift, month, before } = state.editor;
  const record = clone(state.records[schoolId] || { s:{} });
  const after = $("#editorStatus").value;
  const reason = $("#editorReason").value.trim();
  setStatusChar(record, shift, day, after, month);
  const updates = {
    [`s.${shift}`]: record.s[shift],
    updatedAt: serverTimestamp(),
    updatedBy: state.user.uid,
    source: "manual"
  };
  const reasonPath = `r.${day}.${shift}`;
  updates[reasonPath] = reason && after !== "." ? reason : deleteField();
  try {
    await updateDoc(doc(db, "months", month, "schools", schoolId), updates);
    await setDoc(doc(db, "months", month), { label:monthLabel(month), updatedAt:serverTimestamp(), updatedBy:state.user.uid, lastSource:"manual" }, { merge:true });
    await addDoc(collection(db, "auditLogs"), {
      type:"manual_status",
      schoolId,
      month,
      date:`${month}-${String(day).padStart(2,"0")}`,
      shift,
      before,
      after,
      reason,
      createdAt:serverTimestamp(),
      createdBy:state.user.uid,
      createdByEmail:state.user.email || ""
    });
    const editedDate = `${month}-${String(day).padStart(2,"0")}`;
    closeStatusEditor();
    if ($("#dailyDate")?.value === editedDate) renderCharges(editedDate);
    showToast(`Status atualizado: ${STATUS_INFO[after]?.label || "Sem registro"}.`);
  } catch (error) {
    console.error(error);
    showToast("Não foi possível salvar a alteração no Firestore.");
  }
}

function parseMonthYearFromCard(card) {
  for (const b of card.querySelectorAll("b")) {
    const text = b.textContent.replace(/\s+/g," ").trim();
    const match = text.match(/([A-Za-zÀ-ÿ]+)\s+de\s+(20\d{2})/i);
    if (!match) continue;
    const month = MONTH_INDEX[normalizeText(match[1])];
    if (month) return { year:Number(match[2]), month, key:`${match[2]}-${String(month).padStart(2,"0")}` };
  }
  return null;
}

function backgroundChar(span) {
  const normalized = (span.style.backgroundColor || "").replace(/\s+/g,"").toLowerCase();
  return COLOR_CHAR[normalized] || "?";
}

function directDivTexts(header) {
  if (!header) return [];
  return [...header.children].filter(el => el.tagName === "DIV").map(el => el.textContent.replace(/\s+/g," ").trim());
}

function parseReasons(card) {
  const map = {};
  const block = card.querySelector(".lista-justificativas");
  if (!block) return map;
  [...block.children].forEach(div => {
    const text = div.textContent.replace(/\s+/g," ").trim();
    if (!text.includes(":")) return;
    const reason = text.slice(0,text.indexOf(":")).trim();
    const rest = text.slice(text.indexOf(":") + 1);
    if (normalizeText(reason) === "justificativas") return;
    const regex = /\b([MTNI])\s*-\s*([0-9; ,]+)/g;
    let match;
    while ((match = regex.exec(rest))) {
      const shift = SHIFT_CODES[match[1]];
      [...match[2].matchAll(/\d{1,2}/g)].map(m => Number(m[0])).forEach(day => { map[String(day)] ||= {}; map[String(day)][shift] = reason; });
    }
  });
  return map;
}

function parseNonSchoolReasons(card) {
  const map = {};
  const block = card.querySelector(".dias-nao-letivos");
  if (!block) return map;
  [...block.children].forEach(span => {
    const text = span.textContent.replace(/\s+/g," ").trim();
    if (!text.includes(":")) return;
    const reason = text.slice(0,text.indexOf(":")).trim();
    const rest = text.slice(text.indexOf(":") + 1);
    [...rest.matchAll(/\d{1,2}/g)].forEach(m => map[String(Number(m[0]))] = reason);
  });
  return map;
}

function parseMonitoraCard(card) {
  const my = parseMonthYearFromCard(card);
  if (!my) return null;
  const lines = directDivTexts(card.querySelector(".escola-header"));
  if (!lines.length) return null;
  const name = lines[0] || "";
  const area = lines[1] || "";
  const city = (lines[2] || "").replace(/^Cidade:\s*/i,"").trim();
  const inep = (lines[3] || "").replace(/^Inep:\s*/i,"").trim();
  const sourceId = card.dataset.id || "";
  const id = inep || sourceId || normalizeText(name).replace(/[^a-z0-9]+/g,"-");
  const reasons = parseReasons(card);
  const nonSchoolReasons = parseNonSchoolReasons(card);
  const table = card.querySelector("table");
  if (!table) return null;
  const rows = [...table.querySelectorAll("tr")];
  const raw = {};
  const shiftCodes = new Set();
  rows.forEach((row, idx) => {
    const cells = [...row.children].filter(el => ["TD","TH"].includes(el.tagName));
    const headers = [];
    cells.forEach((cell, ci) => {
      const text = cell.textContent.replace(/\s+/g," ").trim();
      const m = text.match(/^([A-ZÇ]{3})\s+(\d{1,2})$/);
      if (m) headers.push({ ci, weekday:m[1], day:Number(m[2]) });
    });
    if (!headers.length || !rows[idx + 1]) return;
    const dataCells = [...rows[idx + 1].children].filter(el => el.tagName === "TD");
    headers.forEach(h => {
      const cell = dataCells[h.ci];
      if (!cell) return;
      const badges = [...cell.querySelectorAll("span.turno-badge")].map(span => {
        const code = span.textContent.replace(/\s+/g," ").trim();
        let dataId = span.dataset.id || "";
        if (!dataId && SHIFT_CODES[code]) dataId = code;
        if (SHIFT_CODES[dataId]) shiftCodes.add(dataId);
        return { code, dataId, ch:backgroundChar(span) };
      });
      raw[h.day] = { weekday:h.weekday, badges };
    });
  });
  const ndays = new Date(my.year, my.month, 0).getDate();
  const strings = {};
  ["M","T","N","I"].filter(code => shiftCodes.has(code)).forEach(code => {
    let str = "";
    for (let day = 1; day <= ndays; day++) {
      const badges = raw[day]?.badges || [];
      const explicit = badges.find(b => b.dataId === code);
      const weekend = badges.some(b => b.code === "S" || b.code === "D");
      str += explicit ? explicit.ch : weekend ? "X" : ".";
    }
    strings[SHIFT_CODES[code]] = str;
  });
  const record = { s:strings };
  if (Object.keys(reasons).length) record.r = reasons;
  if (Object.keys(nonSchoolReasons).length) record.n = nonSchoolReasons;
  return { month:my.key, meta:{ id,name,area,city,inep:inep || id }, record };
}

function parseMonitoraHTML(html, fileName) {
  const docHtml = new DOMParser().parseFromString(html,"text/html");
  const cards = [...docHtml.querySelectorAll("#escola-pdf2 .card.mb-3")];
  if (!cards.length) throw new Error("Não encontrei os cartões do Acompanhamento de Frequência neste HTML.");
  const parsed = cards.map(parseMonitoraCard).filter(Boolean);
  if (!parsed.length) throw new Error("Não encontrei dados mensais no HTML.");
  const months = [...new Set(parsed.map(p => p.month))];
  if (months.length !== 1) throw new Error("Não foi possível identificar um único mês neste arquivo.");
  const records = {}, schoolsMeta = {};
  parsed.forEach(p => { records[p.meta.id] = p.record; schoolsMeta[p.meta.id] = p.meta; });
  return { month:months[0], fileName, records, schoolsMeta };
}

function importCounts(records) {
  return countStatuses(records,"TODOS");
}

function diffImport(parsed, currentRecords) {
  const ndays = daysInMonth(parsed.month);
  let changes=0,resolved=0,newPending=0,newJustified=0,newFrequency=0;
  Object.entries(parsed.records).forEach(([id,next]) => {
    const prev = currentRecords[id] || {s:{}};
    const shifts = [...new Set([...recordShifts(prev),...recordShifts(next)])];
    shifts.forEach(shift => {
      for (let day=1; day<=ndays; day++) {
        const a=statusChar(prev,shift,day), b=statusChar(next,shift,day);
        if (a===b) continue;
        changes++;
        if (a==="R" && ["G","J"].includes(b)) resolved++;
        if (b==="R" && a!=="R") newPending++;
        if (b==="J" && a!=="J") newJustified++;
        if (b==="G" && a!=="G") newFrequency++;
      }
    });
  });
  return {changes,resolved,newPending,newJustified,newFrequency,currentSchools:Object.keys(currentRecords).length};
}

function renderImportPreview(parsed, currentRecords) {
  const counts = importCounts(parsed.records);
  const diff = diffImport(parsed,currentRecords);
  const schoolCount = Object.keys(parsed.records).length;
  $("#previewTitle").textContent = `${parsed.fileName} · ${monthLabel(parsed.month)}`;
  $("#importPreview").className = "";
  $("#importPreview").innerHTML = `<div class="preview-grid"><div class="preview-stat"><strong>${schoolCount}</strong><span>escolas encontradas</span></div><div class="preview-stat"><strong>${counts.R || 0}</strong><span>pendências</span></div><div class="preview-stat"><strong>${counts.G || 0}</strong><span>com frequência</span></div><div class="preview-stat"><strong>${counts.J || 0}</strong><span>justificadas</span></div></div><div class="diff-list"><div class="diff-row"><span>Alterações em relação ao Firestore</span><strong>${diff.changes}</strong></div><div class="diff-row"><span>Pendências regularizadas</span><strong>${diff.resolved}</strong></div><div class="diff-row"><span>Novas pendências</span><strong>${diff.newPending}</strong></div><div class="diff-row"><span>Novas justificativas</span><strong>${diff.newJustified}</strong></div><div class="diff-row"><span>Novos registros com frequência</span><strong>${diff.newFrequency}</strong></div></div>${schoolCount < diff.currentSchools ? `<div class="import-warning">Somente as ${schoolCount} escolas encontradas no HTML serão substituídas. As demais permanecem no banco.</div>` : ""}`;
}

function processFile(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = async () => {
    try {
      const parsed = parseMonitoraHTML(String(reader.result || ""), file.name);
      const currentRecords = await getMonthRecordsOnce(parsed.month);
      parsed.currentRecords = currentRecords;
      state.preview = parsed;
      renderImportPreview(parsed,currentRecords);
      $("#applyImport").disabled = false;
    } catch (error) {
      console.error(error);
      state.preview = null;
      $("#applyImport").disabled = true;
      showToast(error.message || "Não foi possível ler o HTML do Monitora.");
    }
  };
  reader.readAsText(file,"utf-8");
}


const SAFE_BATCH_SIZE = 5;

/*
  Firestore Security Rules do MFS consultam o perfil do usuário e,
  na criação de registros mensais, também verificam a existência da escola.
  Para não ultrapassar os limites de access calls das Rules, as gravações
  em massa são divididas em lotes pequenos.
*/
async function commitWriteOperationsInChunks(operations, chunkSize = SAFE_BATCH_SIZE) {
  for (let index = 0; index < operations.length; index += chunkSize) {
    const batch = writeBatch(db);
    operations.slice(index, index + chunkSize).forEach(operation => operation(batch));
    await batch.commit();
  }
}

async function applyImport() {
  if (!state.preview || !isAdmin()) return;

  const parsed = state.preview;
  const schoolEntries = Object.entries(parsed.schoolsMeta);
  const recordEntries = Object.entries(parsed.records);

  try {
    /*
      ETAPA 1
      Primeiro as escolas precisam existir no Firestore.

      A regra de months/{month}/schools/{schoolId} exige a existência de
      schools/{schoolId}. Por isso não podemos criar escola e registro mensal
      no mesmo batch durante a primeira importação.
    */
    const schoolOperations = schoolEntries.map(([id, meta]) => batch => {
      batch.set(
        doc(db, "schools", id),
        {
          ...meta,
          active: true,
          updatedAt: serverTimestamp(),
          updatedBy: state.user.uid
        },
        { merge: true }
      );
    });

    await commitWriteOperationsInChunks(schoolOperations);

    /*
      ETAPA 2
      Agora que as escolas existem, gravamos os registros mensais.

      Mantemos os lotes pequenos para respeitar os limites de get/exists
      avaliados pelas Firestore Security Rules.
    */
    const recordOperations = recordEntries.map(([id, record]) => batch => {
      batch.set(
        doc(db, "months", parsed.month, "schools", id),
        {
          schoolId: id,
          month: parsed.month,
          s: record.s || {},
          r: record.r || {},
          n: record.n || {},
          source: "monitora",
          sourceFile: parsed.fileName,
          updatedAt: serverTimestamp(),
          updatedBy: state.user.uid
        }
      );
    });

    await commitWriteOperationsInChunks(recordOperations);

    /*
      ETAPA 3
      Metadados do mês e auditoria da importação.
    */
    const finalBatch = writeBatch(db);

    finalBatch.set(
      doc(db, "months", parsed.month),
      {
        label: monthLabel(parsed.month),
        lastMonitoraFile: parsed.fileName,
        lastSource: "monitora",
        updatedAt: serverTimestamp(),
        updatedBy: state.user.uid
      },
      { merge: true }
    );

    const counts = importCounts(parsed.records);
    const importRef = doc(collection(db, "imports"));

    finalBatch.set(importRef, {
      type: "monitora",
      month: parsed.month,
      fileName: parsed.fileName,
      schoolCount: recordEntries.length,
      summary: {
        sent: counts.G || 0,
        pending: counts.R || 0,
        justified: counts.J || 0
      },
      createdAt: serverTimestamp(),
      createdBy: state.user.uid,
      createdByEmail: state.user.email || ""
    });

    await finalBatch.commit();

    state.month = parsed.month;
    subscribeMonthRecords(state.month);
    clearImport(false);
    switchView("monitor");

    showToast(`${recordEntries.length} escolas sincronizadas com o Firestore.`);
  } catch (error) {
    console.error("Erro ao importar HTML do Monitora:", error);

    const code = error?.code ? ` (${error.code})` : "";
    showToast(`A importação não pôde ser gravada${code}. Confira o Console do navegador.`);
  }
}

function clearImport(resetInput=true) {
  state.preview = null;
  $("#applyImport").disabled = true;
  if (resetInput) $("#monitoraInput").value = "";
  $("#previewTitle").textContent = "Nenhum arquivo selecionado";
  $("#importPreview").className = "empty-preview";
  $("#importPreview").innerHTML = `<div class="preview-icon">HTML</div><strong>Aguardando arquivo</strong><span>O mês, as escolas e as alterações aparecerão aqui.</span>`;
}

function parseDelimitedLine(line, delimiter) {
  const out=[]; let current=""; let quoted=false;
  for (let i=0;i<line.length;i++) {
    const ch=line[i];
    if (ch==='"') { if (quoted && line[i+1]==='"') { current+='"'; i++; } else quoted=!quoted; }
    else if (ch===delimiter && !quoted) { out.push(current); current=""; }
    else current+=ch;
  }
  out.push(current); return out;
}

function normalizeHeader(value) { return normalizeText(value).replace(/[^a-z0-9]+/g,""); }

function parseDailyCSV(text) {
  const clean=String(text||"").replace(/^\uFEFF/,"").trim();
  if (!clean) return [];
  const lines=clean.split(/\r?\n/).filter(line=>line.trim());
  const delimiter=(lines[0].match(/;/g)||[]).length >= (lines[0].match(/,/g)||[]).length ? ";" : ",";
  const rows=lines.map(line=>parseDelimitedLine(line,delimiter));
  const headers=rows.shift().map(normalizeHeader);
  return rows.map(cols=>Object.fromEntries(headers.map((h,i)=>[h,String(cols[i]??"").trim()])));
}

function csvFrequencyStatus(value) {
  const text=normalizeText(value);
  if (!text) return "desconhecida";
  if (text.includes("nao enviada") || text.includes("nao enviado") || text==="nao") return "nao_enviada";
  if (text.includes("enviada") || text.includes("enviado") || text==="sim") return "enviada";
  return "desconhecida";
}

function findSchoolByCSVName(name) {
  const target=normalizeText(name);
  if (!target) return null;
  const entries=Object.entries(state.schools);
  const exact=entries.find(([,meta])=>normalizeText(meta?.name)===target);
  if (exact) return {id:exact[0],meta:exact[1],confidence:"exata"};
  const candidates=entries.filter(([,meta])=>{const n=normalizeText(meta?.name);return n&&(n.includes(target)||target.includes(n));});
  if (candidates.length===1) return {id:candidates[0][0],meta:candidates[0][1],confidence:"aproximada"};
  return null;
}

async function buildDailyPreview(fileName, rows) {
  const date=$("#dailyDate").value;
  const shift=$("#dailyShift").value;
  if (!date) throw new Error("Selecione a data antes do CSV.");
  const month=date.slice(0,7);
  const existingRecords=await getMonthRecordsOnce(month);
  const mapped=rows.map(row=>{
    const schoolName=row.escola||row.nomeescola||row.unidade||row.unidadeescolar||"";
    const director=row.diretor||row.diretorada||row.gestor||"";
    const area=row.gerencia||row.gre||row.polo||"";
    const frequency=csvFrequencyStatus(row.frequencia||row.status||row.situacao||"");
    const match=findSchoolByCSVName(schoolName);
    return { schoolName,director,area,frequency,turmas:row.turmas||row.qtdturmas||row.quantidadeturmas||"",alunos:row.alunos||row.qtdalunos||row.quantidadealunos||"",id:match?.id||null,meta:match?.meta||null,matchConfidence:match?.confidence||"nao_reconhecida" };
  }).filter(row=>row.schoolName);
  const summary={ total:mapped.length, sent:mapped.filter(r=>r.frequency==="enviada").length, pending:mapped.filter(r=>r.frequency==="nao_enviada").length, unknownStatus:mapped.filter(r=>r.frequency==="desconhecida").length, unknownSchools:mapped.filter(r=>!r.id).length };
  return {fileName,date,shift,month,rows:mapped,summary,existingRecords};
}

function renderDailyPreview(parsed) {
  const {summary}=parsed;
  $("#dailyPreviewTitle").textContent=`${parsed.fileName} · ${formatDateBR(parsed.date)} · ${SHIFT_LABELS[parsed.shift]}`;
  $("#dailyPreview").className="";
  $("#dailyPreview").innerHTML=`<div class="preview-grid"><div class="preview-stat"><strong>${summary.total}</strong><span>escolas no CSV</span></div><div class="preview-stat"><strong>${summary.sent}</strong><span>com frequência</span></div><div class="preview-stat"><strong>${summary.pending}</strong><span>para cobrar</span></div><div class="preview-stat"><strong>${summary.unknownSchools}</strong><span>não reconhecidas</span></div></div>${summary.unknownStatus?`<div class="import-warning compact-warning">${summary.unknownStatus} registro(s) têm situação não reconhecida e serão ignorados.</div>`:""}${summary.unknownSchools?`<div class="import-warning compact-warning">${summary.unknownSchools} escola(s) não existem no cadastro protegido. Importe primeiro o HTML do Monitora como administrador.</div>`:""}<div class="csv-table-wrap"><table class="csv-table"><thead><tr><th>Escola</th><th>Situação</th><th>Gerência</th><th>Turmas</th><th>Alunos</th></tr></thead><tbody>${parsed.rows.map(row=>{const cls=row.frequency==="enviada"?"sent":row.frequency==="nao_enviada"?"pending":"unknown";const label=row.frequency==="enviada"?"Enviada":row.frequency==="nao_enviada"?"Não enviada":"Revisar";return `<tr><td><strong>${escapeHtml(row.schoolName)}</strong>${!row.id?`<br><small class="muted">não reconhecida</small>`:""}</td><td><span class="csv-status ${cls}">${label}</span></td><td>${escapeHtml(row.area)}</td><td>${escapeHtml(row.turmas)}</td><td>${escapeHtml(row.alunos)}</td></tr>`;}).join("")}</tbody></table></div>`;
}

function processDailyFile(file) {
  if (!file) return;
  const reader=new FileReader();
  reader.onload=async()=>{
    try {
      const rows=parseDailyCSV(String(reader.result||""));
      if (!rows.length) throw new Error("O CSV está vazio ou não pôde ser interpretado.");
      const parsed=await buildDailyPreview(file.name,rows);
      state.dailyPreview=parsed;
      renderDailyPreview(parsed);
      $("#applyDaily").disabled=!parsed.rows.some(r=>r.id&&r.frequency!=="desconhecida");
    } catch(error) {
      console.error(error); state.dailyPreview=null; $("#applyDaily").disabled=true; showToast(error.message||"Não foi possível ler o CSV.");
    }
  };
  reader.readAsText(file,"utf-8");
}

async function applyDailyCSV() {
  if (!state.dailyPreview) return;

  const parsed = state.dailyPreview;

  if ($("#dailyDate").value !== parsed.date || $("#dailyShift").value !== parsed.shift) {
    showToast("A data ou turno mudou. Selecione novamente o CSV.");
    return;
  }

  try {
    const day = Number(parsed.date.slice(-2));
    const appliedRows = [];
    const recordOperations = [];

    parsed.rows.forEach(row => {
      if (!row.id || row.frequency === "desconhecida") return;

      const current = clone(parsed.existingRecords[row.id] || { s: {} });

      setStatusChar(
        current,
        parsed.shift,
        day,
        row.frequency === "enviada" ? "G" : "R",
        parsed.month
      );

      recordOperations.push(batch => {
        batch.set(
          doc(db, "months", parsed.month, "schools", row.id),
          {
            schoolId: row.id,
            month: parsed.month,
            s: { [parsed.shift]: current.s[parsed.shift] },
            source: "csv",
            updatedAt: serverTimestamp(),
            updatedBy: state.user.uid
          },
          { merge: true }
        );
      });

      appliedRows.push(row);
    });

    if (!appliedRows.length) {
      showToast("Nenhum registro válido foi encontrado para aplicar.");
      return;
    }

    /*
      Os registros são enviados em lotes pequenos para que as Security Rules
      possam validar as escolas sem ultrapassar o limite de access calls.
    */
    await commitWriteOperationsInChunks(recordOperations);

    /*
      Depois dos registros, gravamos o resumo do mês, a execução diária
      e o histórico da importação.
    */
    const finalBatch = writeBatch(db);

    finalBatch.set(
      doc(db, "months", parsed.month),
      {
        label: monthLabel(parsed.month),
        lastDailyFile: parsed.fileName,
        lastSource: "csv",
        updatedAt: serverTimestamp(),
        updatedBy: state.user.uid
      },
      { merge: true }
    );

    finalBatch.set(
      doc(db, "dailyRuns", `${parsed.date}_${parsed.shift}`),
      {
        date: parsed.date,
        month: parsed.month,
        shift: parsed.shift,
        fileName: parsed.fileName,
        schoolIds: appliedRows.map(row => row.id),
        importedAt: serverTimestamp(),
        importedBy: state.user.uid,
        importedByEmail: state.user.email || "",
        summary: {
          total: appliedRows.length,
          sent: appliedRows.filter(row => row.frequency === "enviada").length,
          pending: appliedRows.filter(row => row.frequency === "nao_enviada").length
        }
      },
      { merge: true }
    );

    finalBatch.set(
      doc(collection(db, "imports")),
      {
        type: "csv",
        date: parsed.date,
        month: parsed.month,
        shift: parsed.shift,
        fileName: parsed.fileName,
        schoolCount: appliedRows.length,
        summary: {
          sent: appliedRows.filter(row => row.frequency === "enviada").length,
          pending: appliedRows.filter(row => row.frequency === "nao_enviada").length
        },
        createdAt: serverTimestamp(),
        createdBy: state.user.uid,
        createdByEmail: state.user.email || ""
      }
    );

    await finalBatch.commit();

    state.month = parsed.month;
    subscribeMonthRecords(state.month);
    clearDaily(false);
    await renderCharges(parsed.date);

    showToast(`${appliedRows.length} registros gravados no Firestore.`);
  } catch (error) {
    console.error("Erro ao aplicar CSV diário:", error);

    const code = error?.code ? ` (${error.code})` : "";
    showToast(`Não foi possível aplicar o CSV no Firestore${code}. Confira o Console.`);
  }
}

function clearDaily(resetInput=true) {
  state.dailyPreview=null; $("#applyDaily").disabled=true;
  if (resetInput) $("#dailyCsvInput").value="";
  $("#dailyPreviewTitle").textContent="Nenhum arquivo selecionado";
  $("#dailyPreview").className="empty-preview";
  $("#dailyPreview").innerHTML=`<div class="preview-icon">CSV</div><strong>Aguardando arquivo</strong><span>As frequências enviadas e pendentes aparecerão aqui.</span>`;
}

async function buildChargeGroups(date) {
  if (!date) return {groups:[],importedShifts:[]};
  const month=date.slice(0,7), day=Number(date.slice(-2));
  const runSnaps=await Promise.all(SHIFT_ORDER.map(shift=>getDoc(doc(db,"dailyRuns",`${date}_${shift}`))));
  const runs={};
  runSnaps.forEach((snap,i)=>{if(snap.exists()) runs[SHIFT_ORDER[i]]=snap.data();});
  const importedShifts=Object.keys(runs);
  if (!importedShifts.length) return {groups:[],importedShifts:[]};
  const records=month===state.month?state.records:await getMonthRecordsOnce(month);
  const groups=new Map();
  Object.entries(records).forEach(([id,record])=>{
    importedShifts.forEach(shift=>{
      if (!(runs[shift].schoolIds||[]).includes(id)) return;
      if (statusChar(record,shift,day)!=="R") return;
      const meta=state.schools[id]||{};
      if(!groups.has(id)) groups.set(id,{id,schoolName:meta.name||id,area:meta.area||"",shifts:[]});
      const group=groups.get(id); if(!group.shifts.includes(shift)) group.shifts.push(shift);
    });
  });
  return {groups:[...groups.values()].sort((a,b)=>a.schoolName.localeCompare(b.schoolName,"pt-BR")),importedShifts};
}

function chargeMessage(group,date) {
  const shifts=group.shifts.map(shift=>SHIFT_LABELS[shift]);
  const shiftText=shifts.length===1?shifts[0]:shifts.length===2?shifts.join(" e "):`${shifts.slice(0,-1).join(", ")} e ${shifts.at(-1)}`;
  return `Olá! Na conferência da frequência escolar referente ao dia ${formatDateBR(date)}, identificamos que a frequência da ${group.schoolName}, no(s) turno(s) ${shiftText}, não consta como enviada no sistema. Solicitamos, por gentileza, que seja realizada a verificação e, se necessário, a regularização do registro. Após o ajuste, pedimos que nos confirme por aqui. Obrigado!`;
}

function copyText(text) {
  if (navigator.clipboard?.writeText) { navigator.clipboard.writeText(text).then(()=>showToast("Mensagem copiada.")); return; }
  const area=document.createElement("textarea"); area.value=text; document.body.appendChild(area); area.select(); document.execCommand("copy"); area.remove(); showToast("Mensagem copiada.");
}

async function renderCharges(date=$("#dailyDate")?.value) {
  if (!date || !db || !state.profile) return;
  try {
    const {groups,importedShifts}=await buildChargeGroups(date);
    state.chargeGroups=groups;
    $("#chargeTitle").textContent=`Pendências de ${formatDateBR(date)}`;
    $("#chargeSubtitle").textContent=importedShifts.length?`Turnos importados: ${importedShifts.map(s=>SHIFT_LABELS[s]).join(", ")}. ${groups.length} escola(s) aguardando regularização.`:"Importe os turnos do dia para consolidar as cobranças.";
    $("#copyAllCharges").disabled=!groups.length;
    $("#chargeList").innerHTML=groups.length?groups.map((group,index)=>`<article class="charge-item"><div><h3>${escapeHtml(group.schoolName)}</h3><p>${escapeHtml(group.area||"")}</p></div><div class="charge-shifts">${group.shifts.map(shift=>`<span class="charge-shift">${SHIFT_LABELS[shift]}</span>`).join("")}</div><button class="charge-copy" type="button" data-charge-index="${index}">Copiar mensagem</button></article>`).join(""):`<div class="empty-preview small-empty"><strong>Sem pendências nos turnos importados</strong><span>Nenhuma escola permanece marcada como não enviada.</span></div>`;
    $$('[data-charge-index]').forEach(button=>button.addEventListener('click',()=>{const group=state.chargeGroups[Number(button.dataset.chargeIndex)];if(group)copyText(chargeMessage(group,date));}));
  } catch(error) { console.error(error); }
}

function copyAllCharges() {
  const date=$("#dailyDate").value;
  if(!date||!state.chargeGroups.length)return;
  copyText(state.chargeGroups.map(group=>chargeMessage(group,date)).join("\n\n--------------------\n\n"));
}

async function loadUserManagement() {
  if(!isAdmin())return;
  try {
    const [requestsSnap,usersSnap]=await Promise.all([getDocs(collection(db,"accessRequests")),getDocs(collection(db,"users"))]);
    const requests=[]; requestsSnap.forEach(s=>requests.push({uid:s.id,...s.data()}));
    const users=[]; usersSnap.forEach(s=>users.push({uid:s.id,...s.data()}));
    renderAccessRequests(requests);
    renderAuthorizedUsers(users);
  } catch(error) { console.error(error); showToast("Não foi possível carregar os usuários."); }
}

function renderAccessRequests(requests) {
  $("#requestCount").textContent=String(requests.length);
  $("#accessRequestList").innerHTML=requests.length?requests.map(req=>`<div class="access-item"><div class="access-identity"><img class="access-avatar" src="${escapeHtml(req.photoURL||"")}" alt="" onerror="this.style.visibility='hidden'"><div class="access-copy"><strong>${escapeHtml(req.displayName||"Usuário Google")}</strong><span>${escapeHtml(req.email||"")}</span><small>${escapeHtml(req.uid)}</small></div></div><div class="access-actions"><select data-role-for="${escapeHtml(req.uid)}"><option value="tecnico">Técnico</option><option value="admin">Administrador</option></select><button class="mini-button approve" type="button" data-approve-user="${escapeHtml(req.uid)}">Aprovar</button></div></div>`).join(""):`<div class="empty-preview small-empty"><strong>Nenhuma solicitação pendente</strong></div>`;
  $$('[data-approve-user]').forEach(button=>button.addEventListener('click',()=>approveUser(button.dataset.approveUser,requests.find(r=>r.uid===button.dataset.approveUser))));
}

function renderAuthorizedUsers(users) {
  users.sort((a,b)=>(a.displayName||a.email||"").localeCompare(b.displayName||b.email||"","pt-BR"));
  $("#authorizedUserList").innerHTML=users.length?users.map(user=>{const self=user.uid===state.user.uid;return `<div class="access-item"><div class="access-identity"><img class="access-avatar" src="${escapeHtml(user.photoURL||"")}" alt="" onerror="this.style.visibility='hidden'"><div class="access-copy"><strong>${escapeHtml(user.displayName||user.email||user.uid)}</strong><span>${escapeHtml(user.email||"")}</span><small><span class="role-badge ${user.active===false?"inactive":""}">${user.active===false?"Bloqueado":user.role||"tecnico"}</span></small></div></div><div class="access-actions"><select data-change-role="${escapeHtml(user.uid)}" ${self?"disabled":""}><option value="tecnico" ${user.role!=="admin"?"selected":""}>Técnico</option><option value="admin" ${user.role==="admin"?"selected":""}>Administrador</option></select><button class="mini-button ${user.active===false?"approve":"danger"}" type="button" data-toggle-user="${escapeHtml(user.uid)}" data-active="${user.active!==false}" ${self?"disabled":""}>${user.active===false?"Reativar":"Bloquear"}</button></div></div>`;}).join(""):`<div class="empty-preview small-empty"><strong>Nenhum usuário cadastrado</strong></div>`;
  $$('[data-change-role]').forEach(select=>select.addEventListener('change',()=>changeUserRole(select.dataset.changeRole,select.value)));
  $$('[data-toggle-user]').forEach(button=>button.addEventListener('click',()=>toggleUser(button.dataset.toggleUser,button.dataset.active==="true")));
}

async function approveUser(uid,request) {
  if(!isAdmin()||!request)return;
  const role=$(`[data-role-for="${CSS.escape(uid)}"]`)?.value||"tecnico";
  try {
    await setDoc(doc(db,"users",uid),{uid,email:request.email||"",displayName:request.displayName||"",photoURL:request.photoURL||"",role,active:true,createdAt:serverTimestamp(),updatedAt:serverTimestamp(),updatedBy:state.user.uid},{merge:true});
    await deleteDoc(doc(db,"accessRequests",uid));
    await addDoc(collection(db,"auditLogs"),{type:"user_approved",targetUid:uid,role,createdAt:serverTimestamp(),createdBy:state.user.uid,createdByEmail:state.user.email||""});
    showToast("Usuário aprovado."); await loadUserManagement();
  } catch(error){console.error(error);showToast("Não foi possível aprovar o usuário.");}
}

async function changeUserRole(uid,role) {
  if(!isAdmin()||uid===state.user.uid)return;
  try { await updateDoc(doc(db,"users",uid),{role,updatedAt:serverTimestamp(),updatedBy:state.user.uid}); showToast("Perfil atualizado."); await loadUserManagement(); }
  catch(error){console.error(error);showToast("Não foi possível alterar o perfil.");}
}

async function toggleUser(uid,currentlyActive) {
  if(!isAdmin()||uid===state.user.uid)return;
  try { await updateDoc(doc(db,"users",uid),{active:!currentlyActive,updatedAt:serverTimestamp(),updatedBy:state.user.uid}); showToast(!currentlyActive?"Usuário reativado.":"Usuário bloqueado."); await loadUserManagement(); }
  catch(error){console.error(error);showToast("Não foi possível atualizar o acesso.");}
}

function switchView(view) {
  if ((view==="import"||view==="users")&&!isAdmin()) return;
  $$(".nav-button").forEach(btn=>btn.classList.toggle("active",btn.dataset.view===view));
  $$(".view").forEach(panel=>panel.classList.toggle("active",panel.dataset.viewPanel===view));
  const labels={monitor:"Acompanhamento",daily:"CSV diário",import:"Monitora",users:"Usuários"};
  $("#workspaceTitle").textContent=labels[view]||"MFS";
  $("#sidebar").classList.remove("open");
  if(view==="users")loadUserManagement();
}

function bindEvents() {
  $("#googleLoginButton")?.addEventListener("click",async()=>{
    try { const provider=new GoogleAuthProvider(); provider.setCustomParameters({prompt:"select_account"}); await signInWithPopup(auth,provider); }
    catch(error){console.error(error);showToast("Não foi possível entrar com Google.");}
  });
  $("#pendingLogoutButton")?.addEventListener("click",()=>firebaseSignOut(auth));
  $("#userMenuButton")?.addEventListener("click",()=>{ if(confirm("Deseja sair do MFS?")) firebaseSignOut(auth); });
  $("#menuToggle")?.addEventListener("click",()=>$("#sidebar").classList.toggle("open"));
  $$(".nav-button").forEach(button=>button.addEventListener("click",()=>switchView(button.dataset.view)));
  $$('[data-go-view]').forEach(button=>button.addEventListener('click',()=>switchView(button.dataset.goView)));
  $("#monthSelect")?.addEventListener("change",event=>{state.month=event.target.value;subscribeMonthRecords(state.month);});
  $("#schoolSearch")?.addEventListener("input",event=>{state.search=event.target.value;renderMonitor();});
  $("#shiftFilter")?.addEventListener("change",event=>{state.shift=event.target.value;renderMonitor();});
  $("#statusFilter")?.addEventListener("change",event=>{state.status=event.target.value;renderMonitor();});
  $("#schoolList")?.addEventListener("click",event=>{const button=event.target.closest("[data-edit-status]");if(button)openStatusEditor(button.dataset.schoolId,button.dataset.day,button.dataset.shift);});
  $("#closeEditor")?.addEventListener("click",closeStatusEditor);
  $("#cancelEditor")?.addEventListener("click",closeStatusEditor);
  $("#statusModal")?.addEventListener("click",event=>{if(event.target.id==="statusModal")closeStatusEditor();});
  $("#editorStatus")?.addEventListener("change",updateEditorHint);
  $("#saveEditor")?.addEventListener("click",saveStatusEditor);

  const monitoraInput=$("#monitoraInput");
  monitoraInput?.addEventListener("change",()=>processFile(monitoraInput.files?.[0]));
  $("#applyImport")?.addEventListener("click",applyImport);
  $("#clearImport")?.addEventListener("click",()=>clearImport(true));
  const dropZone=$("#dropZone");
  ["dragenter","dragover"].forEach(name=>dropZone?.addEventListener(name,event=>{event.preventDefault();dropZone.classList.add("drag");}));
  ["dragleave","drop"].forEach(name=>dropZone?.addEventListener(name,event=>{event.preventDefault();dropZone.classList.remove("drag");}));
  dropZone?.addEventListener("drop",event=>{const file=event.dataTransfer.files?.[0];if(file)processFile(file);});

  const csvInput=$("#dailyCsvInput");
  csvInput?.addEventListener("change",()=>processDailyFile(csvInput.files?.[0]));
  $("#applyDaily")?.addEventListener("click",applyDailyCSV);
  $("#clearDaily")?.addEventListener("click",()=>clearDaily(true));
  $("#dailyDate")?.addEventListener("change",event=>renderCharges(event.target.value));
  $("#dailyShift")?.addEventListener("change",()=>{if(state.dailyPreview){state.dailyPreview=null;$("#applyDaily").disabled=true;}});
  $("#copyAllCharges")?.addEventListener("click",copyAllCharges);
  const csvDrop=$("#csvDropZone");
  ["dragenter","dragover"].forEach(name=>csvDrop?.addEventListener(name,event=>{event.preventDefault();csvDrop.classList.add("drag");}));
  ["dragleave","drop"].forEach(name=>csvDrop?.addEventListener(name,event=>{event.preventDefault();csvDrop.classList.remove("drag");}));
  csvDrop?.addEventListener("drop",event=>{const file=event.dataTransfer.files?.[0];if(file)processDailyFile(file);});

  $("#refreshUsers")?.addEventListener("click",loadUserManagement);
  document.addEventListener("keydown",event=>{if(event.key==="Escape"&&$("#statusModal")?.classList.contains("open"))closeStatusEditor();});
}

bindEvents();
startFirebase().catch(error=>{console.error(error);showOnlyGate("configGate");});
