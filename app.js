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
  chargeView: sessionStorage.getItem("mfs-charge-view") || "cards",
  editor: null,
  bulkSelection: new Map(),
  dragSelection: null,
  suppressStatusClickUntil: 0,
  schoolProfileId: null,
  schoolProfileData: null,
  schoolCredentials: [],
  vaultPassphrase: null,
  assistantSettings: { waterIntervalMinutes: 90, lastWaterAt: null },
  tasks: {},
  assistantEvents: {},
  assistantOps: null,
  unsubTasks: null,
  unsubAssistantSettings: null,
  unsubAssistantEvents: null,
  clockTimer: null,
  assistantRefreshTimer: null,
  alertTimer: null,
  dayWatchTimer: null,
  autoPendingBusy: false,
  lastAutoPendingDate: null,
  lastAutoPendingSchoolCount: 0,
  autoPendingDebounce: null,
  unsubSchools: null,
  unsubMonths: null,
  unsubMonthRecords: null
};

let app = null;
let auth = null;
let db = null;
let toastTimer = null;
let calendarObserver = null;
let monitorRenderTimer = null;
let monitorSearchTimer = null;
const VIRTUAL_CALENDAR_MARGIN = "600px 0px 800px 0px";

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


let activeSelectPortal = null;
let selectPortalFrame = 0;

function restoreSelectMenu(wrapper) {
  if (!wrapper) return;
  const menu = wrapper._mfsMenu;
  const trigger = wrapper._mfsTrigger;
  if (!menu) return;

  menu.classList.remove("portal-open", "portal-above");
  menu.removeAttribute("style");
  if (menu.parentNode !== wrapper) wrapper.appendChild(menu);
  trigger?.setAttribute("aria-expanded", "false");
  wrapper.classList.remove("open");

  if (activeSelectPortal === wrapper) activeSelectPortal = null;
}

function closeCustomSelects(except = null) {
  $$(".mfs-select.open").forEach(wrapper => {
    if (wrapper !== except) restoreSelectMenu(wrapper);
  });
}

function positionSelectPortal(wrapper) {
  if (!wrapper || !wrapper.classList.contains("open")) return;

  const trigger = wrapper._mfsTrigger;
  const menu = wrapper._mfsMenu;
  if (!trigger || !menu) return;

  const rect = trigger.getBoundingClientRect();
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  if (rect.bottom < -8 || rect.top > vh + 8) {
    restoreSelectMenu(wrapper);
    return;
  }

  if (vw <= 720) {
    menu.style.position = "fixed";
    menu.style.left = "12px";
    menu.style.right = "12px";
    menu.style.top = "auto";
    menu.style.bottom = "12px";
    menu.style.width = "auto";
    menu.style.maxHeight = "min(52vh, 360px)";
    menu.classList.remove("portal-above");
    return;
  }

  const margin = 10;
  const gap = 6;
  const width = Math.min(Math.max(rect.width, 150), vw - margin * 2);
  let left = rect.left;
  if (left + width > vw - margin) left = vw - margin - width;
  left = Math.max(margin, left);

  const spaceBelow = vh - rect.bottom - gap - margin;
  const spaceAbove = rect.top - gap - margin;
  const openAbove = spaceBelow < 180 && spaceAbove > spaceBelow;
  const available = Math.max(110, openAbove ? spaceAbove : spaceBelow);

  menu.style.position = "fixed";
  menu.style.left = `${Math.round(left)}px`;
  menu.style.right = "auto";
  menu.style.width = `${Math.round(width)}px`;
  menu.style.maxHeight = `${Math.min(300, Math.floor(available))}px`;

  if (openAbove) {
    menu.style.top = "auto";
    menu.style.bottom = `${Math.round(vh - rect.top + gap)}px`;
    menu.classList.add("portal-above");
  } else {
    menu.style.top = `${Math.round(rect.bottom + gap)}px`;
    menu.style.bottom = "auto";
    menu.classList.remove("portal-above");
  }
}

function scheduleSelectPortalPosition() {
  if (!activeSelectPortal) return;
  cancelAnimationFrame(selectPortalFrame);
  selectPortalFrame = requestAnimationFrame(() => positionSelectPortal(activeSelectPortal));
}

function openSelectPortal(wrapper) {
  if (!wrapper || wrapper.classList.contains("disabled")) return;
  closeCustomSelects(wrapper);

  const menu = wrapper._mfsMenu;
  const trigger = wrapper._mfsTrigger;
  if (!menu || !trigger) return;

  wrapper.classList.add("open");
  trigger.setAttribute("aria-expanded", "true");
  document.body.appendChild(menu);
  menu.classList.add("portal-open");
  activeSelectPortal = wrapper;
  positionSelectPortal(wrapper);
}

function enhanceSelect(select) {
  if (!select || select.multiple) return;

  // Selects já inicializados não devem ser reconstruídos automaticamente.
  // A atualização explícita é feita por syncCustomSelect() quando necessário.
  if (select.dataset.mfsSelect === "1") return;

  select.dataset.mfsSelect = "1";
  const wrapper = document.createElement("div");
  wrapper.className = "mfs-select";
  select.parentNode.insertBefore(wrapper, select);
  wrapper.appendChild(select);
  select.classList.add("mfs-native-select");

  const trigger = document.createElement("button");
  trigger.type = "button";
  trigger.className = "mfs-select-trigger";
  trigger.setAttribute("aria-haspopup", "listbox");
  trigger.setAttribute("aria-expanded", "false");
  trigger.innerHTML = '<span class="mfs-select-value"></span><span class="mfs-select-chevron">⌄</span>';

  const menu = document.createElement("div");
  menu.className = "mfs-select-menu mfs-select-portal";
  menu.setAttribute("role", "listbox");

  wrapper.append(trigger, menu);
  wrapper._mfsMenu = menu;
  wrapper._mfsTrigger = trigger;

  let lastMenuSignature = "";

  const refresh = () => {
    const selected = select.options[select.selectedIndex] || select.options[0];
    trigger.querySelector(".mfs-select-value").textContent = selected?.textContent?.trim() || "Selecionar";
    trigger.disabled = select.disabled;
    wrapper.classList.toggle("disabled", select.disabled);

    // Só reconstrói as opções quando alguma opção realmente mudou.
    // Isso evita churn de DOM e mantém o elemento clicado estável entre pointerdown/click.
    const signature = [...select.options].map(option => [
      option.value,
      option.textContent.trim(),
      option.selected ? "1" : "0",
      option.disabled ? "1" : "0"
    ].join("\u0001")).join("\u0002");

    if (signature === lastMenuSignature) return;
    lastMenuSignature = signature;

    menu.innerHTML = [...select.options].map(option => `
      <button type="button" class="mfs-select-option ${option.selected ? "selected" : ""}" role="option"
        data-value="${escapeHtml(option.value)}" aria-selected="${option.selected ? "true" : "false"}" ${option.disabled ? "disabled" : ""}>
        <span>${escapeHtml(option.textContent.trim())}</span>${option.selected ? '<i>✓</i>' : ''}
      </button>`).join("");
  };

  select._mfsRefresh = refresh;
  refresh();

  trigger.addEventListener("click", event => {
    event.stopPropagation();
    if (select.disabled) return;
    if (wrapper.classList.contains("open")) restoreSelectMenu(wrapper);
    else openSelectPortal(wrapper);
  });

  menu.addEventListener("click", event => {
    event.stopPropagation();
    const optionButton = event.target.closest(".mfs-select-option");
    if (!optionButton || optionButton.disabled) return;
    const nextValue = optionButton.dataset.value;
    if (select.value !== nextValue) {
      select.value = nextValue;
      select.dispatchEvent(new Event("change", { bubbles: true }));
    } else {
      syncCustomSelect(select);
    }
    if (wrapper.isConnected) restoreSelectMenu(wrapper);
  });

  select.addEventListener("change", refresh);
}

function enhanceAllSelects(root = document) {
  $$("select", root).forEach(enhanceSelect);
}

function syncCustomSelect(select) {
  select?._mfsRefresh?.();
}

function initCustomSelectSystem() {
  // Inicializa apenas os selects já existentes. Selects criados dinamicamente
  // são inicializados explicitamente pelo componente que os criou.
  // NÃO observar o body inteiro: isso causava um loop de MutationObserver ->
  // refresh -> innerHTML -> MutationObserver, travando a interface e invalidando cliques.
  enhanceAllSelects();

  document.addEventListener("click", event => {
    if (event.target.closest(".mfs-select-menu")) return;
    closeCustomSelects();
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeCustomSelects();
  });

  window.addEventListener("resize", scheduleSelectPortalPosition, { passive: true });
  window.addEventListener("scroll", scheduleSelectPortalPosition, { passive: true, capture: true });
}

function initMotionInteractions() {
  document.addEventListener("pointerdown", event => {
    const target = event.target.closest(".button,.mini-button,.quick-action,.view-switch-button,.assistant-top-button,.google-login-button");
    if (!target || target.disabled) return;
    const rect = target.getBoundingClientRect();
    const ripple = document.createElement("span");
    ripple.className = "mfs-ripple";
    ripple.style.left = `${event.clientX - rect.left}px`;
    ripple.style.top = `${event.clientY - rect.top}px`;
    target.appendChild(ripple);
    ripple.addEventListener("animationend", () => ripple.remove(), { once: true });
  });
}

function statusBadgeHtml(char, compact = false) {
  const info = STATUS_INFO[char] || STATUS_INFO["?"];
  return `<span class="transition-status ${info.cls} ${compact ? "compact" : ""}">${escapeHtml(info.label)}</span>`;
}

function changeBadgeHtml(before, after) {
  const same = before === after;
  return `<span class="transition-change ${same ? "same" : "changed"}">${same ? "Sem mudança" : "Atualiza"}</span>`;
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
  for (const key of ["unsubSchools","unsubMonths","unsubMonthRecords","unsubTasks","unsubAssistantSettings","unsubAssistantEvents"]) {
    if (typeof state[key] === "function") state[key]();
    state[key] = null;
  }
  for (const timerKey of ["clockTimer","assistantRefreshTimer","alertTimer","dayWatchTimer"]) {
    if (state[timerKey]) clearInterval(state[timerKey]);
    state[timerKey] = null;
  }
  if (state.autoPendingDebounce) clearTimeout(state.autoPendingDebounce);
  state.autoPendingDebounce = null;
  state.vaultPassphrase = null;
}

function enterAuthorizedApp() {
  showApp();
  setMonitorPerformanceMode(true);
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
  enhanceAllSelects();
  startAssistantEngine();
  scheduleTodayPendingSync(900);
}

function subscribeSchools() {
  state.unsubSchools = onSnapshot(collection(db, "schools"), snapshot => {
    const schools = {};
    snapshot.forEach(snap => { schools[snap.id] = { id: snap.id, ...snap.data() }; });
    state.schools = schools;
    scheduleMonitorRender();
    scheduleTodayPendingSync(500);
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
    scheduleMonitorRender();
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
    scheduleMonitorRender();
    scheduleTodayPendingSync(500);
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
  enhanceSelect(select);
  syncCustomSelect(select);
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

function scheduleMonitorRender(delay = 90) {
  clearTimeout(monitorRenderTimer);
  monitorRenderTimer = setTimeout(() => {
    requestAnimationFrame(() => renderMonitor());
  }, delay);
}

function virtualCalendarPlaceholder() {
  return `<div class="calendar-virtual-placeholder" aria-hidden="true">
    <div class="virtual-placeholder-bar"></div>
    <div class="virtual-placeholder-grid"></div>
    <span>Calendário otimizado</span>
  </div>`;
}

function restoreBulkSelectionInCalendar(calendar) {
  if (!calendar || !state.bulkSelection?.size) return;
  calendar.querySelectorAll("[data-selection-key]").forEach(button => {
    if (state.bulkSelection.has(button.dataset.selectionKey)) {
      button.classList.add("bulk-selected");
    }
  });
}

function hydrateSchoolCalendar(card) {
  if (!card?.isConnected || card.dataset.calendarHydrated === "1") return;
  const schoolId = card.dataset.schoolId;
  const calendar = card.querySelector(".virtual-calendar");
  const record = state.records[schoolId];
  if (!calendar || !record) return;

  const shifts = state.shift === "TODOS"
    ? recordShifts(record)
    : [state.shift].filter(shift => record?.s?.[shift]);

  const ndays = daysInMonth(state.month);
  calendar.innerHTML = shifts.length
    ? renderCalendarHalf(schoolId, record, shifts, state.month, 1, Math.min(15, ndays)) +
      (ndays > 15 ? renderCalendarHalf(schoolId, record, shifts, state.month, 16, ndays) : "")
    : `<div class="empty-card">Sem turnos registrados neste mês.</div>`;

  card.dataset.calendarHydrated = "1";
  calendar.classList.add("is-hydrated");
  restoreBulkSelectionInCalendar(calendar);
}

function dehydrateSchoolCalendar(card) {
  if (!card?.isConnected || card.dataset.calendarHydrated !== "1") return;
  const calendar = card.querySelector(".virtual-calendar");
  if (!calendar) return;
  if (calendar.contains(document.activeElement)) return;

  calendar.innerHTML = virtualCalendarPlaceholder();
  calendar.classList.remove("is-hydrated");
  card.dataset.calendarHydrated = "0";
}

function setupCalendarVirtualization() {
  if (calendarObserver) {
    calendarObserver.disconnect();
    calendarObserver = null;
  }

  const cards = $$(".school-card[data-school-id]", $("#schoolList"));
  if (!cards.length) return;

  if (!("IntersectionObserver" in window)) {
    cards.forEach(hydrateSchoolCalendar);
    return;
  }

  calendarObserver = new IntersectionObserver(entries => {
    for (const entry of entries) {
      const card = entry.target;
      if (entry.isIntersecting) {
        hydrateSchoolCalendar(card);
      } else {
        dehydrateSchoolCalendar(card);
      }
    }
  }, {
    root: null,
    rootMargin: VIRTUAL_CALENDAR_MARGIN,
    threshold: 0
  });

  cards.forEach(card => calendarObserver.observe(card));
}

function setMonitorPerformanceMode(enabled) {
  document.body.classList.toggle("monitor-performance-mode", Boolean(enabled));
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
  syncCustomSelect($("#monthSelect"));
  syncCustomSelect($("#shiftFilter"));
  syncCustomSelect($("#statusFilter"));
  renderSummary();

  const filtered = Object.entries(state.records)
    .filter(([id, record]) => schoolMatches(state.schools[id] || { id, name:id }, record))
    .sort((a,b) => (state.schools[a[0]]?.name || a[0]).localeCompare(state.schools[b[0]]?.name || b[0], "pt-BR"));
  const latest = latestDataDay(state.records, state.month);
  const shiftLabel = state.shift === "TODOS" ? "todos os turnos" : SHIFT_LABELS[state.shift];
  const statusLabel = state.status === "TODOS" ? "todas as situações" : ({enviada:"com frequência",pendente:"pendentes",justificada:"justificadas"}[state.status] || state.status);
  $("#resultMeta").innerHTML = `<span><strong>${filtered.length}</strong> escola${filtered.length === 1 ? "" : "s"}</span><span>${escapeHtml(shiftLabel)}</span><span>${escapeHtml(statusLabel)}</span>${latest ? `<span>dados até o dia <strong>${String(latest).padStart(2,"0")}</strong></span>` : ""}`;

  if (!filtered.length) {
    if (calendarObserver) calendarObserver.disconnect();
    $("#schoolList").innerHTML = `<article class="card empty-card large-empty"><strong>${Object.keys(state.records).length ? "Nenhuma escola encontrada" : "Banco sem dados para este mês"}</strong><span>${Object.keys(state.records).length ? "Ajuste os filtros." : (isAdmin() ? "Importe o HTML do Monitora para popular o Firestore." : "Aguarde um administrador importar a base deste mês.")}</span></article>`;
    return;
  }
  $("#schoolList").innerHTML = filtered.map(([id, record]) => renderSchoolCard(id, state.schools[id] || {id,name:id}, record, state.month)).join("");
  setupCalendarVirtualization();
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
    const todayKey = localISODate();
    const isToday = month === todayKey.slice(0,7) && day === Number(todayKey.slice(-2));
    headers.push(`<div class="calendar-day-head ${isToday ? "today-column" : ""}"><span>${weekdayShort(month, day)}</span><strong>${String(day).padStart(2,"0")}</strong>${isToday ? '<i class="today-dot"></i>' : ''}</div>`);
    const chips = shifts.map(shift => {
      const ch = statusChar(record, shift, day);
      const info = STATUS_INFO[ch] || STATUS_INFO["?"];
      const reason = record?.r?.[String(day)]?.[shift] || (ch === "X" ? record?.n?.[String(day)] : "") || "";
      const title = `${String(day).padStart(2,"0")}/${month.slice(5,7)}/${month.slice(0,4)} · ${SHIFT_LABELS[shift]} · ${info.label}${reason ? ` · ${reason}` : ""}`;
      return `<button class="status-chip ${info.cls}${reason ? " has-reason" : ""}" type="button" data-edit-status="1" data-school-id="${escapeHtml(id)}" data-day="${day}" data-shift="${shift}" data-status-char="${ch}" data-selection-key="${escapeHtml(`${id}|${day}|${shift}`)}" title="${escapeHtml(title)}">${shiftCode(shift)}</button>`;
    }).join("");
    days.push(`<div class="calendar-day ${isToday ? "today-column" : ""}">${chips}</div>`);
  }
  return `<div class="calendar-half"><div class="calendar-body"><div class="calendar-header" style="--cols:${cols}">${headers.join("")}</div><div class="calendar-grid" style="--cols:${cols}">${days.join("")}</div></div></div>`;
}

function renderSchoolCard(id, meta, record, month) {
  const shifts = state.shift === "TODOS" ? recordShifts(record) : [state.shift].filter(s => record?.s?.[s]);
  const counts = perSchoolCounts(record, shifts);
  const nonSchool = Object.entries(record?.n || {}).map(([day, reason]) => `${day}: ${reason}`).join(" · ");
  return `<article class="card school-card" data-school-id="${escapeHtml(id)}" data-calendar-hydrated="0">
    <header class="school-head"><div class="school-name"><h3>${escapeHtml(meta?.name || id)}</h3><div class="school-meta">${meta?.area ? `<span class="meta-pill">${escapeHtml(meta.area)}</span>` : ""}${meta?.city ? `<span class="meta-pill">${escapeHtml(meta.city)}</span>` : ""}${meta?.inep ? `<span class="meta-pill">INEP ${escapeHtml(meta.inep)}</span>` : ""}</div></div><div class="school-head-actions"><button class="school-profile-button" type="button" data-school-profile="${escapeHtml(id)}">Perfil</button><div class="school-counts"><div class="school-count"><strong>${counts.G}</strong><small>freq.</small></div><div class="school-count"><strong>${counts.R}</strong><small>pend.</small></div><div class="school-count"><strong>${counts.J}</strong><small>just.</small></div></div></div></header>
    <div class="school-calendar virtual-calendar">${virtualCalendarPlaceholder()}</div>
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
  syncCustomSelect($("#editorStatus"));
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

function buildImportTransitionRows(parsed, currentRecords) {
  const rows = [];
  const ndays = daysInMonth(parsed.month);
  Object.entries(parsed.records).forEach(([id, next]) => {
    const prev = currentRecords[id] || { s: {} };
    const meta = parsed.schoolsMeta[id] || state.schools[id] || { name: id };
    const shifts = recordShifts(next);
    shifts.forEach(shift => {
      for (let day = 1; day <= ndays; day++) {
        const before = statusChar(prev, shift, day);
        const after = statusChar(next, shift, day);
        const reason = next?.r?.[String(day)]?.[shift] || (after === "X" ? next?.n?.[String(day)] : "") || "";
        rows.push({ id, schoolName: meta.name || id, day, shift, before, after, reason });
      }
    });
  });
  return rows;
}

function renderImportPreview(parsed, currentRecords) {
  const counts = importCounts(parsed.records);
  const diff = diffImport(parsed,currentRecords);
  const schoolCount = Object.keys(parsed.records).length;
  const transitions = buildImportTransitionRows(parsed, currentRecords);
  const changed = transitions.filter(row => row.before !== row.after).length;
  const same = transitions.length - changed;
  $("#previewTitle").textContent = `${parsed.fileName} · ${monthLabel(parsed.month)}`;
  $("#importPreview").className = "";
  $("#importPreview").innerHTML = `
    <div class="preview-grid">
      <div class="preview-stat"><strong>${schoolCount}</strong><span>escolas encontradas</span></div>
      <div class="preview-stat"><strong>${counts.R || 0}</strong><span>pendências no arquivo</span></div>
      <div class="preview-stat"><strong>${changed}</strong><span>situações que mudam</span></div>
      <div class="preview-stat"><strong>${same}</strong><span>situações mantidas</span></div>
    </div>
    <div class="diff-list">
      <div class="diff-row"><span>Pendências regularizadas</span><strong>${diff.resolved}</strong></div>
      <div class="diff-row"><span>Novas pendências</span><strong>${diff.newPending}</strong></div>
      <div class="diff-row"><span>Novas justificativas</span><strong>${diff.newJustified}</strong></div>
      <div class="diff-row"><span>Novos registros com frequência</span><strong>${diff.newFrequency}</strong></div>
    </div>
    ${schoolCount < diff.currentSchools ? `<div class="import-warning">Somente as ${schoolCount} escolas encontradas no HTML serão substituídas. As demais permanecem no banco.</div>` : ""}
    <div class="transition-head"><div><strong>Antes → depois</strong><span>Todas as situações que o HTML vai gravar, inclusive quando nada muda.</span></div><span class="transition-total">${transitions.length} registros</span></div>
    <div class="transition-table-wrap">
      <table class="transition-table">
        <thead><tr><th>Escola</th><th>Data</th><th>Turno</th><th>Situação atual</th><th></th><th>Após importar</th><th>Resultado</th><th>Motivo</th></tr></thead>
        <tbody>${transitions.map(row => `<tr class="${row.before === row.after ? "same-row" : "changed-row"}">
          <td><strong>${escapeHtml(row.schoolName)}</strong></td>
          <td>${String(row.day).padStart(2,"0")}/${parsed.month.slice(5,7)}</td>
          <td>${escapeHtml(SHIFT_LABELS[row.shift] || row.shift)}</td>
          <td>${statusBadgeHtml(row.before, true)}</td>
          <td class="transition-arrow">→</td>
          <td>${statusBadgeHtml(row.after, true)}</td>
          <td>${changeBadgeHtml(row.before,row.after)}</td>
          <td class="transition-reason">${escapeHtml(row.reason || "—")}</td>
        </tr>`).join("")}</tbody>
      </table>
    </div>`;
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
          shifts: recordShifts(parsed.records[id] || { s: {} }),
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
  const day=Number(date.slice(-2));
  const existingRecords=await getMonthRecordsOnce(month);
  const mapped=rows.map(row=>{
    const schoolName=row.escola||row.nomeescola||row.unidade||row.unidadeescolar||"";
    const director=row.diretor||row.diretorada||row.gestor||"";
    const area=row.gerencia||row.gre||row.polo||"";
    const frequency=csvFrequencyStatus(row.frequencia||row.status||row.situacao||"");
    const match=findSchoolByCSVName(schoolName);
    const beforeChar=match?.id ? statusChar(existingRecords[match.id],shift,day) : "?";
    const afterChar=frequency==="enviada"?"G":frequency==="nao_enviada"?"R":"?";
    return { schoolName,director,area,frequency,beforeChar,afterChar,turmas:row.turmas||row.qtdturmas||row.quantidadeturmas||"",alunos:row.alunos||row.qtdalunos||row.quantidadealunos||"",id:match?.id||null,meta:match?.meta||null,matchConfidence:match?.confidence||"nao_reconhecida" };
  }).filter(row=>row.schoolName);
  const summary={ total:mapped.length, sent:mapped.filter(r=>r.frequency==="enviada").length, pending:mapped.filter(r=>r.frequency==="nao_enviada").length, unknownStatus:mapped.filter(r=>r.frequency==="desconhecida").length, unknownSchools:mapped.filter(r=>!r.id).length, changed:mapped.filter(r=>r.id&&r.afterChar!=="?"&&r.beforeChar!==r.afterChar).length, same:mapped.filter(r=>r.id&&r.afterChar!=="?"&&r.beforeChar===r.afterChar).length };
  return {fileName,date,shift,month,rows:mapped,summary,existingRecords};
}

function renderDailyPreview(parsed) {
  const {summary}=parsed;
  $("#dailyPreviewTitle").textContent=`${parsed.fileName} · ${formatDateBR(parsed.date)} · ${SHIFT_LABELS[parsed.shift]}`;
  $("#dailyPreview").className="";
  $("#dailyPreview").innerHTML=`
    <div class="preview-grid">
      <div class="preview-stat"><strong>${summary.total}</strong><span>escolas no CSV</span></div>
      <div class="preview-stat"><strong>${summary.sent}</strong><span>com frequência</span></div>
      <div class="preview-stat"><strong>${summary.changed}</strong><span>situações que mudam</span></div>
      <div class="preview-stat"><strong>${summary.same}</strong><span>situações mantidas</span></div>
    </div>
    ${summary.unknownStatus?`<div class="import-warning compact-warning">${summary.unknownStatus} registro(s) têm situação não reconhecida e serão ignorados.</div>`:""}
    ${summary.unknownSchools?`<div class="import-warning compact-warning">${summary.unknownSchools} escola(s) não existem no cadastro protegido. Importe primeiro o HTML do Monitora como administrador.</div>`:""}
    <div class="transition-head compact-transition-head"><div><strong>Situação atual → situação após importar</strong><span>Mesmo quando o CSV mantém o mesmo status, a comparação aparece abaixo.</span></div></div>
    <div class="csv-table-wrap transition-table-wrap daily-transition-wrap">
      <table class="csv-table transition-table">
        <thead><tr><th>Escola</th><th>Atual</th><th></th><th>Após importar</th><th>Resultado</th><th>Gerência</th><th>Turmas</th><th>Alunos</th></tr></thead>
        <tbody>${parsed.rows.map(row=>`<tr class="${row.beforeChar===row.afterChar?"same-row":"changed-row"}">
          <td><strong>${escapeHtml(row.schoolName)}</strong>${!row.id?`<br><small class="muted">não reconhecida</small>`:""}</td>
          <td>${row.id?statusBadgeHtml(row.beforeChar,true):'<span class="transition-status blank compact">Não cadastrada</span>'}</td>
          <td class="transition-arrow">→</td>
          <td>${row.afterChar!=="?"?statusBadgeHtml(row.afterChar,true):'<span class="transition-status blank compact">Revisar</span>'}</td>
          <td>${row.id&&row.afterChar!=="?"?changeBadgeHtml(row.beforeChar,row.afterChar):'<span class="transition-change same">Ignora</span>'}</td>
          <td>${escapeHtml(row.area)}</td><td>${escapeHtml(row.turmas)}</td><td>${escapeHtml(row.alunos)}</td>
        </tr>`).join("")}</tbody>
      </table>
    </div>`;
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
    refreshAssistantStatus();
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
  const records=month===state.month?state.records:await getMonthRecordsOnce(month);
  const groups=new Map();

  Object.entries(records).forEach(([id,record])=>{
    recordShifts(record).forEach(shift=>{
      if (statusChar(record,shift,day)!=="R") return;
      const meta=state.schools[id]||{};
      if(!groups.has(id)) groups.set(id,{id,schoolName:meta.name||id,area:meta.area||"",shifts:[],importedShifts:[]});
      const group=groups.get(id);
      if(!group.shifts.includes(shift)) group.shifts.push(shift);
      if(runs[shift] && (runs[shift].schoolIds||[]).includes(id) && !group.importedShifts.includes(shift)) group.importedShifts.push(shift);
    });
  });

  return {groups:[...groups.values()].sort((a,b)=>a.schoolName.localeCompare(b.schoolName,"pt-BR")),importedShifts};
}

function greetingByTime(date = new Date()) {
  const hour = date.getHours();
  if (hour >= 5 && hour < 12) return "bom dia";
  if (hour >= 12 && hour < 18) return "boa tarde";
  return "boa noite";
}

function naturalShiftText(shifts) {
  const labels = shifts.map(shift => SHIFT_LABELS[shift] || shift);
  if (labels.length === 1) return labels[0];
  if (labels.length === 2) return labels.join(" e ");
  return `${labels.slice(0,-1).join(", ")} e ${labels.at(-1)}`;
}

function chargeMessage(group,date) {
  const greeting = greetingByTime();
  const today = localISODate();
  const dateText = date === today ? "a frequência de hoje" : `a frequência do dia ${formatDateBR(date)}`;
  const shiftText = naturalShiftText(group.shifts);
  const shiftPhrase = group.shifts.length === 1 ? `no turno ${shiftText}` : `nos turnos ${shiftText}`;
  return `Olá, ${greeting}! Venho comunicar que, ao verificar ${dateText}, identifiquei que ela ainda está pendente no sistema ${shiftPhrase}. Você consegue confirmar para mim se a frequência foi realizada corretamente ou se houve algum problema? Caso ainda seja necessário algum ajuste, pode me informar se está disponível para eu liberar a correção da frequência e deixarmos tudo ok? Obrigado!`;
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
    $("#chargeSubtitle").textContent=importedShifts.length?`CSV recebido em: ${importedShifts.map(s=>SHIFT_LABELS[s]).join(", ")}. ${groups.length} escola(s) continuam pendentes no dia.`:`${groups.length} escola(s) pendentes pela abertura automática do dia. Você já pode visualizar ou copiar cobranças antes do CSV.`;
    $("#copyAllCharges").disabled=!groups.length;

    $$('[data-charge-view]').forEach(button=>button.classList.toggle("active",button.dataset.chargeView===state.chargeView));
    const list=$("#chargeList");
    list.className=`charge-list charge-view-${state.chargeView}`;

    if (!groups.length) {
      list.innerHTML=`<div class="empty-preview small-empty"><strong>Sem pendências nos turnos importados</strong><span>Nenhuma escola permanece marcada como não enviada.</span></div>`;
      return;
    }

    if (state.chargeView === "list") {
      list.innerHTML=`<div class="charge-table-wrap"><table class="charge-table"><thead><tr><th>Escola</th><th>Área/GRE</th><th>Turnos pendentes</th><th></th></tr></thead><tbody>${groups.map((group,index)=>`<tr><td><strong>${escapeHtml(group.schoolName)}</strong></td><td>${escapeHtml(group.area||"—")}</td><td><div class="charge-shifts">${group.shifts.map(shift=>`<span class="charge-shift">${SHIFT_LABELS[shift]}</span>`).join("")}</div></td><td><button class="charge-copy" type="button" data-charge-index="${index}">Copiar mensagem</button></td></tr>`).join("")}</tbody></table></div>`;
    } else {
      list.innerHTML=groups.map((group,index)=>`<article class="charge-item charge-card-item"><div class="charge-card-icon">!</div><div class="charge-card-copy"><h3>${escapeHtml(group.schoolName)}</h3><p>${escapeHtml(group.area||"")}</p><div class="charge-shifts">${group.shifts.map(shift=>`<span class="charge-shift">${SHIFT_LABELS[shift]}</span>`).join("")}</div></div><button class="charge-copy" type="button" data-charge-index="${index}">Copiar mensagem</button></article>`).join("");
    }

    $$('[data-charge-index]').forEach(button=>button.addEventListener('click',()=>{const group=state.chargeGroups[Number(button.dataset.chargeIndex)];if(group)copyText(chargeMessage(group,date));}));
  } catch(error) { console.error(error); }
}

function copyAllCharges() {
  const date=$("#dailyDate").value;
  if(!date||!state.chargeGroups.length)return;
  copyText(state.chargeGroups.map(group=>chargeMessage(group,date)).join("\n\n--------------------\n\n"));
}



function pad2(value) { return String(value).padStart(2,"0"); }
function dateKeyFromDate(date) { return `${date.getFullYear()}-${pad2(date.getMonth()+1)}-${pad2(date.getDate())}`; }
function addDaysToDateKey(dateKey, delta) {
  const [y,m,d] = dateKey.split("-").map(Number);
  const dt = new Date(y,m-1,d); dt.setDate(dt.getDate()+delta); return dateKeyFromDate(dt);
}
function minutesOfDay(date = new Date()) { return date.getHours()*60 + date.getMinutes(); }
function hhmmToMinutes(value) { const [h,m] = value.split(":").map(Number); return h*60+m; }
function formatClock(date = new Date()) { return `${pad2(date.getHours())}:${pad2(date.getMinutes())}:${pad2(date.getSeconds())}`; }
function formatLongDate(date = new Date()) { return new Intl.DateTimeFormat("pt-BR",{weekday:"long",day:"2-digit",month:"long",year:"numeric"}).format(date); }


function previousMonthKey(month) {
  const [year, mo] = month.split("-").map(Number);
  const date = new Date(year, mo - 2, 1);
  return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,"0")}`;
}

async function getMonthRecordsFresh(month) {
  const snapshot = await getDocs(collection(db,"months",month,"schools"));
  const records = {};
  snapshot.forEach(snap => records[snap.id] = snap.data());
  return records;
}

function scheduleTodayPendingSync(delay = 250) {
  if (!state.user || !state.profile || !db) return;
  if (state.autoPendingDebounce) clearTimeout(state.autoPendingDebounce);
  state.autoPendingDebounce = setTimeout(() => {
    state.autoPendingDebounce = null;
    ensureTodayPending().catch(error => console.error("Falha ao abrir pendências automáticas do dia:", error));
  }, delay);
}

async function ensureTodayPending() {
  if (!state.user || !state.profile || state.autoPendingBusy) return;
  const today = localISODate();
  const month = today.slice(0,7);
  const day = Number(today.slice(-2));
  const dateObj = new Date(`${today}T12:00:00`);
  const weekend = [0,6].includes(dateObj.getDay());
  const currentSchoolCount = Object.keys(state.schools).length;
  if (state.lastAutoPendingDate === today && state.lastAutoPendingSchoolCount === currentSchoolCount) return;

  state.autoPendingBusy = true;
  try {
    if (!Object.keys(state.schools).length) return;

    const currentRecords = await getMonthRecordsFresh(month);
    let previousRecords = {};
    const needsPrevious = Object.keys(state.schools).some(id => {
      const current = currentRecords[id];
      const stored = Array.isArray(state.schools[id]?.shifts) ? state.schools[id].shifts : [];
      return !recordShifts(current).length && !stored.length;
    });
    if (needsPrevious) previousRecords = await getMonthRecordsFresh(previousMonthKey(month));

    const operations = [];
    let changedCount = 0;
    let schoolCount = 0;

    Object.entries(state.schools).forEach(([schoolId, meta]) => {
      if (meta?.active === false) return;
      const existed = Boolean(currentRecords[schoolId]);
      const current = clone(currentRecords[schoolId] || { s:{}, r:{}, n:{} });
      if (current?.n?.[String(day)]) return;

      let shifts = recordShifts(current);
      if (!shifts.length && Array.isArray(meta?.shifts)) shifts = meta.shifts.filter(shift => SHIFT_ORDER.includes(shift));
      if (!shifts.length) shifts = recordShifts(previousRecords[schoolId]);
      if (!shifts.length) return;

      // Sem um calendário mensal já criado, não presumimos sábado/domingo.
      // Se o Monitora já trouxe o mês, os X de não-letivo são respeitados normalmente.
      if (!existed && weekend) return;

      let changed = false;
      shifts.forEach(shift => {
        const currentStatus = statusChar(current, shift, day);
        if (currentStatus !== ".") return;
        setStatusChar(current, shift, day, "R", month);
        changed = true;
        changedCount += 1;
      });

      if (!changed) return;
      schoolCount += 1;
      operations.push(batch => batch.set(doc(db,"months",month,"schools",schoolId),{
        schoolId,
        month,
        s:current.s || {},
        source:"auto_day_open",
        autoPendingDate:today,
        updatedAt:serverTimestamp(),
        updatedBy:state.user.uid
      },{merge:true}));
    });

    if (operations.length) {
      await commitWriteOperationsInChunks(operations);
      await setDoc(doc(db,"months",month),{
        label:monthLabel(month),
        lastSource:"auto_day_open",
        lastAutoPendingDate:today,
        updatedAt:serverTimestamp(),
        updatedBy:state.user.uid
      },{merge:true});

      const noticeKey=`mfs-auto-pending:${today}`;
      if (!sessionStorage.getItem(noticeKey)) {
        sessionStorage.setItem(noticeKey,"1");
        showToast(`Dia aberto: ${changedCount} turno(s) de ${schoolCount} escola(s) marcados como pendentes.`);
      }
    }

    state.lastAutoPendingDate = today;
    state.lastAutoPendingSchoolCount = currentSchoolCount;
  } finally {
    state.autoPendingBusy = false;
  }
}

function startAssistantEngine() {
  if (!state.user || !state.profile) return;
  subscribeAssistantSettings();
  subscribeTasks();
  subscribeAssistantEvents();
  tickClock();
  state.clockTimer = setInterval(tickClock,1000);
  refreshAssistantStatus();
  state.assistantRefreshTimer = setInterval(refreshAssistantStatus,5*60*1000);
  checkScheduledAlerts();
  state.alertTimer = setInterval(checkScheduledAlerts,30*1000);
  scheduleTodayPendingSync(500);
  state.dayWatchTimer = setInterval(() => {
    const today = localISODate();
    if (state.lastAutoPendingDate !== today) scheduleTodayPendingSync(100);
  }, 60*1000);
  if ($("#taskDateInput") && !$("#taskDateInput").value) $("#taskDateInput").value = localISODate();
  if ($("#eventDateInput") && !$("#eventDateInput").value) $("#eventDateInput").value = localISODate();
}

function tickClock() {
  const now = new Date();
  const time = formatClock(now);
  const shortDate = `${pad2(now.getDate())}/${pad2(now.getMonth()+1)}/${now.getFullYear()}`;
  if ($("#topClockTime")) $("#topClockTime").textContent = time;
  if ($("#topClockDate")) $("#topClockDate").textContent = shortDate;
  if ($("#assistantClockTime")) $("#assistantClockTime").textContent = time;
  if ($("#assistantClockDate")) $("#assistantClockDate").textContent = formatLongDate(now);
  if ($("#assistantGreeting")) {
    const name = (state.profile?.displayName || state.user?.displayName || "").split(" ")[0];
    $("#assistantGreeting").textContent = `${greetingByTime(now).replace(/^./,c=>c.toUpperCase())}${name ? `, ${name}` : ""}`;
  }
  renderRoutineTimeline();
  renderWaterStatus();
}

function defaultAssistantSettings() {
  return { waterIntervalMinutes:90, lastWaterAt:null };
}

function subscribeAssistantSettings() {
  if (typeof state.unsubAssistantSettings === "function") state.unsubAssistantSettings();
  const ref = doc(db,"users",state.user.uid,"settings","assistant");
  state.unsubAssistantSettings = onSnapshot(ref,snap=>{
    state.assistantSettings = { ...defaultAssistantSettings(), ...(snap.exists()?snap.data():{}) };
    if ($("#waterIntervalSelect")) {
      $("#waterIntervalSelect").value = String(state.assistantSettings.waterIntervalMinutes || 90);
      syncCustomSelect($("#waterIntervalSelect"));
    }
    renderWaterStatus();
  },error=>console.error("Falha nas configurações do assistente:",error));
}

async function saveAssistantSetting(data) {
  await setDoc(doc(db,"users",state.user.uid,"settings","assistant"),{
    ...data, updatedAt:serverTimestamp(), updatedBy:state.user.uid
  },{merge:true});
}

function subscribeTasks() {
  if (typeof state.unsubTasks === "function") state.unsubTasks();
  state.unsubTasks = onSnapshot(collection(db,"users",state.user.uid,"tasks"),snapshot=>{
    const tasks={}; snapshot.forEach(s=>tasks[s.id]={id:s.id,...s.data()}); state.tasks=tasks; renderTasks();
  },error=>console.error("Falha ao carregar tarefas:",error));
}

function taskDueStamp(task) { return `${task.dueDate || "9999-12-31"}T${task.dueTime || "23:59"}`; }
function renderTasks() {
  if (!$("#taskList")) return;
  const nowStamp = `${localISODate()}T${pad2(new Date().getHours())}:${pad2(new Date().getMinutes())}`;
  const tasks = Object.values(state.tasks).sort((a,b)=>Number(a.done)-Number(b.done) || taskDueStamp(a).localeCompare(taskDueStamp(b)));
  const openCount = tasks.filter(t=>!t.done).length;
  $("#taskCount").textContent = String(openCount);
  $("#taskList").innerHTML = tasks.length ? tasks.map(task=>{
    const overdue=!task.done && taskDueStamp(task)<nowStamp;
    return `<div class="task-item ${task.done?"done":""}"><button class="task-check" type="button" data-task-toggle="${task.id}" title="${task.done?"Reabrir":"Concluir"}">${task.done?"✓":""}</button><div class="task-copy"><strong>${escapeHtml(task.title||"Tarefa")}</strong><small class="${overdue?"task-overdue":""}">${task.dueDate?formatDateBR(task.dueDate):"Sem data"}${task.dueTime?` · ${task.dueTime}`:""}${overdue?" · ATRASADA":""}</small></div><button class="task-delete" type="button" data-task-delete="${task.id}" title="Excluir">×</button></div>`;
  }).join("") : `<div class="assistant-loading">Nenhuma tarefa aberta. Bom sinal.</div>`;
}

async function addTask() {
  const title=$("#taskTitleInput")?.value.trim(); if(!title){showToast("Digite uma tarefa.");return;}
  const dueDate=$("#taskDateInput")?.value||""; const dueTime=$("#taskTimeInput")?.value||"";
  await addDoc(collection(db,"users",state.user.uid,"tasks"),{title,dueDate,dueTime,done:false,createdAt:serverTimestamp(),updatedAt:serverTimestamp(),updatedBy:state.user.uid});
  $("#taskTitleInput").value=""; showToast("Tarefa adicionada ao Assistente.");
}
async function toggleTask(taskId){const task=state.tasks[taskId];if(!task)return;await updateDoc(doc(db,"users",state.user.uid,"tasks",taskId),{done:!task.done,updatedAt:serverTimestamp(),updatedBy:state.user.uid});}
async function deleteTaskById(taskId){await deleteDoc(doc(db,"users",state.user.uid,"tasks",taskId));}

function workRoutineFor(date=new Date()) {
  const friday=date.getDay()===5;
  return [
    {time:"09:30",title:"Pausa de 10 minutos",detail:"Retorno às 09:40",key:"break-morning"},
    {time:"12:20",title:"Almoço",detail:"Intervalo de almoço",key:"lunch"},
    {time:"13:20",title:"Volta do almoço",detail:"Retomar atendimentos e monitoramento",key:"lunch-return"},
    {time:"15:00",title:"Pausa de 10 minutos",detail:"Retorno às 15:10",key:"break-afternoon"},
    {time:friday?"16:20":"17:20",title:"Fim do expediente",detail:friday?"Sexta-feira · saída às 16:20":"Saída às 17:20",key:"end-work"}
  ];
}
function renderRoutineTimeline(){if(!$("#routineTimeline"))return;const now=minutesOfDay();const items=workRoutineFor();$("#routineTimeline").innerHTML=items.map((item,i)=>{const t=hhmmToMinutes(item.time);const next=items.find(x=>hhmmToMinutes(x.time)>=now);return `<div class="routine-item ${next===item?"current":""}"><span class="routine-time">${item.time}</span><i class="routine-dot"></i><div class="routine-copy"><strong>${item.title}</strong><small>${item.detail}</small></div></div>`}).join("");}

function notifyUser(title,body){showToast(body||title);if("Notification" in window && Notification.permission==="granted"){try{new Notification(title,{body,icon:""});}catch{}}}
async function requestBrowserNotifications(){if(!("Notification" in window)){showToast("Este navegador não oferece notificações Web.");return;}const result=await Notification.requestPermission();showToast(result==="granted"?"Notificações ativadas.":"Notificações não foram autorizadas.");}

function waterDueInfo(){const interval=Number(state.assistantSettings?.waterIntervalMinutes||90);const last=state.assistantSettings?.lastWaterAt?new Date(state.assistantSettings.lastWaterAt):null;const now=new Date();if(!last)return{due:true,next:null,minutes:0};const next=new Date(last.getTime()+interval*60000);return{due:now>=next,next,minutes:Math.max(0,Math.ceil((next-now)/60000))};}
function renderWaterStatus(){if(!$("#waterStatusText"))return;const info=waterDueInfo();if(info.due){$("#waterStatusText").textContent="Hora de beber água. Registre quando beber para reiniciar o lembrete.";}else{$("#waterStatusText").textContent=`Próximo lembrete em aproximadamente ${info.minutes} min · ${pad2(info.next.getHours())}:${pad2(info.next.getMinutes())}.`;}}
async function registerWater(){await saveAssistantSetting({lastWaterAt:new Date().toISOString(),waterIntervalMinutes:Number($("#waterIntervalSelect").value||90)});showToast("Água registrada. Próximo lembrete programado.");}

function sessionAlertKey(key,time,date=localISODate()){return `mfs-alert:${date}:${key}:${time}`;}
function checkScheduledAlerts(){if(!state.user||!state.profile)return;const now=new Date();const hm=`${pad2(now.getHours())}:${pad2(now.getMinutes())}`;for(const item of workRoutineFor(now)){if(hm!==item.time)continue;const key=sessionAlertKey(item.key,item.time);if(sessionStorage.getItem(key))continue;sessionStorage.setItem(key,"1");notifyUser(`MFS · ${item.title}`,item.detail);}const water=waterDueInfo();if(water.due){const bucket=Math.floor(Date.now()/(30*60*1000));const key=`mfs-water:${bucket}`;if(!sessionStorage.getItem(key)){sessionStorage.setItem(key,"1");notifyUser("MFS · Hora da água","Reserve um minuto para beber água e depois registre no Assistente.");}}checkTaskAlerts();}
function checkTaskAlerts(){const now=new Date();const today=localISODate();const hm=`${pad2(now.getHours())}:${pad2(now.getMinutes())}`;Object.values(state.tasks).forEach(task=>{if(task.done||task.dueDate!==today||!task.dueTime||task.dueTime!==hm)return;const key=sessionAlertKey(`task-${task.id}`,hm);if(sessionStorage.getItem(key))return;sessionStorage.setItem(key,"1");notifyUser("MFS · Tarefa agora",task.title||"Você tem uma tarefa agendada.");});}

async function refreshAssistantStatus(){if(!state.user||!state.profile)return;try{await ensureTodayPending();const today=localISODate();const yesterday=addDaysToDateKey(today,-1);const checks=[{date:yesterday,shift:"noite",label:"Noite de ontem",due:"08:00"},{date:today,shift:"manha",label:"Manhã",due:"12:00"},{date:today,shift:"integral",label:"Integral",due:"12:00"},{date:today,shift:"tarde",label:"Tarde",due:"15:30"}];const snaps=await Promise.all(checks.map(item=>getDoc(doc(db,"dailyRuns",`${item.date}_${item.shift}`))));const now=minutesOfDay();const results=checks.map((item,i)=>({...item,done:snaps[i].exists(),overdue:!snaps[i].exists()&&now>=hhmmToMinutes(item.due)}));state.assistantOps=results;renderAssistantChecklist();await renderCalendarAlerts();updateAssistantNextAction();}catch(error){console.error("Falha ao atualizar Assistente:",error);}}
function renderAssistantChecklist(){if(!$("#assistantChecklist"))return;const items=state.assistantOps||[];$("#assistantChecklist").innerHTML=items.map(item=>{const cls=item.done?"done":item.overdue?"pending":"wait";const icon=item.done?"✓":item.overdue?"!":"◷";const text=item.done?"Importado":item.overdue?"Atrasado":"Aguardando horário";return `<div class="assistant-check-item"><span class="assistant-check-icon ${cls}">${icon}</span><div class="assistant-check-copy"><strong>${item.label}</strong><small>${item.date===localISODate()?"Hoje":formatDateBR(item.date)} · conferir até ${item.due}</small></div><span class="assistant-check-badge">${text}</span></div>`}).join("");}
function updateAssistantNextAction(){const now=minutesOfDay();const overdue=(state.assistantOps||[]).filter(i=>i.overdue&&!i.done);let title="Rotina em dia";let sub="Continue usando o MFS para registrar as próximas atualizações.";if(overdue.length){title=`${overdue.length} atualização(ões) atrasada(s)`;sub=`Prioridade: ${overdue.map(x=>x.label).join(", ")}. Abra CSV diário e atualize quando possível.`;}else{const nextOps=(state.assistantOps||[]).filter(i=>!i.done&&hhmmToMinutes(i.due)>now).sort((a,b)=>hhmmToMinutes(a.due)-hhmmToMinutes(b.due));const nextRoutine=workRoutineFor().filter(i=>hhmmToMinutes(i.time)>now).sort((a,b)=>hhmmToMinutes(a.time)-hhmmToMinutes(b.time))[0];const nextOp=nextOps[0];if(nextOp&&(!nextRoutine||hhmmToMinutes(nextOp.due)<=hhmmToMinutes(nextRoutine.time))){title=`${nextOp.label} · até ${nextOp.due}`;sub="O Assistente vai sinalizar se esse turno continuar sem importação depois do horário.";}else if(nextRoutine){title=`${nextRoutine.time} · ${nextRoutine.title}`;sub=nextRoutine.detail;}}if($("#assistantNextAction"))$("#assistantNextAction").innerHTML=`<span>Próxima ação</span><strong>${escapeHtml(title)}</strong>`;if($("#assistantNextText"))$("#assistantNextText").textContent=sub;if($("#assistantTopText"))$("#assistantTopText").textContent=overdue.length?`${overdue.length} pendência(s) de rotina`:"Assistente";if($("#assistantTopSub"))$("#assistantTopSub").textContent=overdue.length?overdue.map(x=>x.label).join(" · "):title;}

function subscribeAssistantEvents(){if(typeof state.unsubAssistantEvents==="function")state.unsubAssistantEvents();state.unsubAssistantEvents=onSnapshot(collection(db,"assistantEvents"),snapshot=>{const events={};snapshot.forEach(s=>events[s.id]={id:s.id,...s.data()});state.assistantEvents=events;renderCalendarAlerts();},error=>console.error("Falha ao carregar eventos:",error));}
async function addAssistantEvent(){if(!isAdmin())return;const title=$("#eventTitleInput")?.value.trim(),date=$("#eventDateInput")?.value,time=$("#eventTimeInput")?.value||"";if(!title||!date){showToast("Informe título e data do evento.");return;}await addDoc(collection(db,"assistantEvents"),{title,date,time,active:true,createdAt:serverTimestamp(),createdBy:state.user.uid,updatedAt:serverTimestamp(),updatedBy:state.user.uid});$("#eventTitleInput").value="";showToast("Evento compartilhado adicionado.");}
async function renderCalendarAlerts(){if(!$("#calendarAlerts"))return;const today=localISODate();const tomorrow=addDaysToDateKey(today,1);const relevant=Object.values(state.assistantEvents).filter(e=>e.active!==false&&[today,tomorrow].includes(e.date)).sort((a,b)=>(a.date+a.time).localeCompare(b.date+b.time));let occurrenceRows=[];try{const month=today.slice(0,7);const records=month===state.month?state.records:await getMonthRecordsOnce(month);const day=String(Number(today.slice(-2)));const grouped=new Map();Object.entries(records).forEach(([id,record])=>{const reason=record?.n?.[day];if(reason){const key=reason;if(!grouped.has(key))grouped.set(key,[]);grouped.get(key).push(state.schools[id]?.name||id);}});occurrenceRows=[...grouped.entries()].map(([reason,schools])=>({title:reason,date:today,time:"",detail:`${schools.length} escola(s) com ocorrência no calendário`}));}catch{}const all=[...relevant.map(e=>({...e,detail:e.detail||"Evento compartilhado"})),...occurrenceRows];$("#calendarAlerts").innerHTML=all.length?all.map(e=>`<div class="calendar-alert"><strong>${escapeHtml(e.title)}</strong><span>${e.date===today?"Hoje":"Amanhã"}${e.time?` · ${e.time}`:""} · ${escapeHtml(e.detail||"")}</span></div>`).join(""):`<div class="assistant-loading">Nenhum evento ou ocorrência relevante para hoje e amanhã.</div>`;}

function selectionKey(schoolId,day,shift){return `${schoolId}|${day}|${shift}`;}
function selectPendingChip(button){if(button?.dataset.statusChar!=="R")return;const key=button.dataset.selectionKey||selectionKey(button.dataset.schoolId,button.dataset.day,button.dataset.shift);state.bulkSelection.set(key,{schoolId:button.dataset.schoolId,day:Number(button.dataset.day),shift:button.dataset.shift,month:state.month});button.classList.add("bulk-selected");}
function clearBulkSelection(){state.bulkSelection.clear();$$('.status-chip.bulk-selected').forEach(el=>el.classList.remove('bulk-selected'));if($("#bulkActionBar"))$("#bulkActionBar").hidden=true;document.body.classList.remove("bulk-selecting");}
function updateBulkBar(){const count=state.bulkSelection.size;if(!$("#bulkActionBar"))return;$("#bulkActionBar").hidden=!count;$("#bulkCount").textContent=`${count} pendência${count===1?"":"s"} selecionada${count===1?"":"s"}`;}
function beginPendingDrag(event,button){if(event.button!==0||button.dataset.statusChar!=="R")return;event.preventDefault();state.dragSelection={active:true,moved:false,startKey:button.dataset.selectionKey};clearBulkSelection();state.dragSelection={active:true,moved:false,startKey:button.dataset.selectionKey};selectPendingChip(button);document.body.classList.add("bulk-selecting");}
function movePendingDrag(button){if(!state.dragSelection?.active||button.dataset.statusChar!=="R")return;const key=button.dataset.selectionKey;if(key!==state.dragSelection.startKey)state.dragSelection.moved=true;selectPendingChip(button);}
function finishPendingDrag(){if(!state.dragSelection?.active)return;const moved=state.dragSelection.moved;state.dragSelection=null;document.body.classList.remove("bulk-selecting");if(moved){state.suppressStatusClickUntil=Date.now()+350;updateBulkBar();}else{clearBulkSelection();}}

function bulkChargeMessages(){const groups=new Map();for(const item of state.bulkSelection.values()){if(!groups.has(item.schoolId))groups.set(item.schoolId,{schoolId:item.schoolId,schoolName:state.schools[item.schoolId]?.name||item.schoolId,dates:new Map()});const g=groups.get(item.schoolId);const date=`${item.month}-${pad2(item.day)}`;if(!g.dates.has(date))g.dates.set(date,[]);g.dates.get(date).push(item.shift);}return [...groups.values()].map(group=>{const greeting=greetingByTime();const pieces=[...group.dates.entries()].sort().map(([date,shifts])=>`${date===localISODate()?"hoje":formatDateBR(date)} (${naturalShiftText(shifts)})`);const datesText=pieces.length===1?pieces[0]:pieces.length===2?pieces.join(" e "):`${pieces.slice(0,-1).join(", ")} e ${pieces.at(-1)}`;return `Olá, ${greeting}! Ao revisar as frequências da ${group.schoolName}, verifiquei que ainda existem pendências em ${datesText}. Você consegue confirmar para mim se essas frequências foram realizadas corretamente ou se houve algum problema? Caso ainda seja necessário algum ajuste, me avise se está disponível para eu liberar a correção e deixarmos tudo certo. Obrigado!`;});}
function copyBulkCharges(){const messages=bulkChargeMessages();if(!messages.length)return;copyText(messages.join("\n\n--------------------\n\n"));showToast(`${messages.length} cobrança(s) gerada(s) a partir da seleção.`);}

async function applyBulkStatus(){if(!state.bulkSelection.size)return;const after=$("#bulkStatusSelect").value;const reason=$("#bulkReasonInput").value.trim();const grouped=new Map();for(const item of state.bulkSelection.values()){if(!grouped.has(item.schoolId))grouped.set(item.schoolId,[]);grouped.get(item.schoolId).push(item);}const operations=[];for(const [schoolId,items] of grouped){const current=clone(state.records[schoolId]||{s:{},r:{}});current.r ||= {};for(const item of items){setStatusChar(current,item.shift,item.day,after,item.month);current.r[String(item.day)] ||= {};if(reason&&after!==".")current.r[String(item.day)][item.shift]=reason;else delete current.r[String(item.day)][item.shift];if(!Object.keys(current.r[String(item.day)]).length)delete current.r[String(item.day)];}operations.push(batch=>batch.set(doc(db,"months",state.month,"schools",schoolId),{schoolId,month:state.month,s:current.s||{},r:current.r||{},n:current.n||{},source:"bulk_manual",updatedAt:serverTimestamp(),updatedBy:state.user.uid},{merge:true}));}
  try{await commitWriteOperationsInChunks(operations);await addDoc(collection(db,"auditLogs"),{type:"bulk_status",month:state.month,count:state.bulkSelection.size,after,reason,createdAt:serverTimestamp(),createdBy:state.user.uid,createdByEmail:state.user.email||""});clearBulkSelection();showToast("Alteração em massa aplicada.");}catch(error){console.error(error);showToast("Não foi possível aplicar a alteração em massa.");}}

function onlyDigits(value){return String(value||"").replace(/\D/g,"");}
function openWhatsapp(phone){const digits=onlyDigits(phone);if(!digits){showToast("Informe um número de WhatsApp.");return;}window.open(`https://wa.me/${digits}`,"_blank","noopener,noreferrer");}
function bytesToBase64(bytes){let binary="";bytes.forEach(b=>binary+=String.fromCharCode(b));return btoa(binary);}
function base64ToBytes(value){const binary=atob(value);return Uint8Array.from(binary,c=>c.charCodeAt(0));}
async function deriveVaultKey(passphrase,salt){const enc=new TextEncoder();const material=await crypto.subtle.importKey("raw",enc.encode(passphrase),"PBKDF2",false,["deriveKey"]);return crypto.subtle.deriveKey({name:"PBKDF2",salt,iterations:250000,hash:"SHA-256"},material,{name:"AES-GCM",length:256},false,["encrypt","decrypt"]);}
async function encryptVaultPayload(payload,passphrase){const salt=crypto.getRandomValues(new Uint8Array(16));const iv=crypto.getRandomValues(new Uint8Array(12));const key=await deriveVaultKey(passphrase,salt);const data=new TextEncoder().encode(JSON.stringify(payload));const cipher=new Uint8Array(await crypto.subtle.encrypt({name:"AES-GCM",iv},key,data));return{version:1,salt:bytesToBase64(salt),iv:bytesToBase64(iv),ciphertext:bytesToBase64(cipher)};}
async function decryptVaultPayload(secret,passphrase){const salt=base64ToBytes(secret.salt),iv=base64ToBytes(secret.iv),cipher=base64ToBytes(secret.ciphertext);const key=await deriveVaultKey(passphrase,salt);const clear=await crypto.subtle.decrypt({name:"AES-GCM",iv},key,cipher);return JSON.parse(new TextDecoder().decode(clear));}
async function unlockVault(){const configRef=doc(db,"vault","config");const snap=await getDoc(configRef);if(!snap.exists()){if(!isAdmin()){showToast("O cofre ainda não foi inicializado por um administrador.");return false;}const pass=prompt("Crie a senha mestre do cofre MFS. Ela NÃO será salva. Use uma senha forte e compartilhe somente com técnicos autorizados.");if(!pass||pass.length<10){showToast("Use uma senha mestre com pelo menos 10 caracteres.");return false;}const confirmPass=prompt("Digite novamente a mesma senha mestre para confirmar:");if(pass!==confirmPass){showToast("As senhas não coincidem.");return false;}const verifier=await encryptVaultPayload({ok:true,label:"MFS_VAULT"},pass);await setDoc(configRef,{...verifier,createdAt:serverTimestamp(),createdBy:state.user.uid,updatedAt:serverTimestamp(),updatedBy:state.user.uid});state.vaultPassphrase=pass;showToast("Cofre inicializado e desbloqueado nesta sessão.");return true;}const pass=prompt("Senha mestre do cofre MFS:");if(!pass)return false;try{const result=await decryptVaultPayload(snap.data(),pass);if(!result?.ok)throw new Error("invalid");state.vaultPassphrase=pass;showToast("Cofre desbloqueado nesta sessão.");return true;}catch{showToast("Senha mestre incorreta.");return false;}}

async function openSchoolProfile(schoolId){state.schoolProfileId=schoolId;const meta=state.schools[schoolId]||{};$("#profileSchoolName").textContent=meta.name||schoolId;$("#profileSchoolMeta").textContent=[meta.area,meta.city,meta.inep?`INEP ${meta.inep}`:""].filter(Boolean).join(" · ");const [profileSnap,secretSnap]=await Promise.all([getDoc(doc(db,"schoolProfiles",schoolId)),getDoc(doc(db,"schoolSecrets",schoolId))]);const profile=profileSnap.exists()?profileSnap.data():{};state.schoolProfileData=profile;$("#profileDirectorName").value=profile.directorName||"";$("#profileDirectorPhone").value=profile.directorPhone||"";$("#profileOperatorName").value=profile.operatorName||"";$("#profileOperatorPhone").value=profile.operatorPhone||"";$("#profileAnyDesk").value=profile.anydeskId||"";$("#profileNotes").value=profile.notes||"";state.schoolCredentials=[];if(secretSnap.exists()&&state.vaultPassphrase){try{const payload=await decryptVaultPayload(secretSnap.data(),state.vaultPassphrase);state.schoolCredentials=Array.isArray(payload.credentials)?payload.credentials:[];}catch{state.vaultPassphrase=null;}}renderCredentials();updateVaultStatus();$("#schoolProfileModal").classList.add("open");$("#schoolProfileModal").setAttribute("aria-hidden","false");}
function closeSchoolProfile(){state.schoolProfileId=null;$("#schoolProfileModal").classList.remove("open");$("#schoolProfileModal").setAttribute("aria-hidden","true");}
function updateVaultStatus(){if(!$("#vaultStatusText"))return;$("#vaultStatusText").textContent=state.vaultPassphrase?"Cofre desbloqueado nesta sessão":"Cofre bloqueado";$("#unlockVaultButton").textContent=state.vaultPassphrase?"Desbloqueado":"Desbloquear cofre";}
function renderCredentials(){if(!$("#credentialList"))return;$("#credentialList").innerHTML=state.schoolCredentials.length?state.schoolCredentials.map((cred,index)=>`<div class="credential-row" data-cred-index="${index}"><div class="credential-grid"><input data-cred-field="name" value="${escapeHtml(cred.name||"")}" placeholder="Plataforma" /><input data-cred-field="url" value="${escapeHtml(cred.url||"")}" placeholder="https://..." /><input data-cred-field="username" value="${escapeHtml(cred.username||"")}" placeholder="Login" /><input data-cred-field="password" type="password" value="${escapeHtml(cred.password||"")}" placeholder="Senha" /><button class="credential-action credential-remove" type="button" data-remove-credential="${index}">×</button></div><div class="credential-copy-row"><button class="credential-action" type="button" data-open-credential="${index}">Abrir</button><button class="credential-action" type="button" data-copy-user="${index}">Copiar login</button><button class="credential-action" type="button" data-copy-pass="${index}">Copiar senha</button></div></div>`).join(""):`<div class="assistant-loading">${state.vaultPassphrase?"Nenhum acesso cadastrado para esta escola.":"Desbloqueie o cofre para visualizar ou cadastrar acessos."}</div>`;}
function syncCredentialDraftFromDom(){const rows=$$("#credentialList .credential-row");if(!rows.length)return;state.schoolCredentials=rows.map(row=>({name:row.querySelector('[data-cred-field="name"]')?.value.trim()||"",url:row.querySelector('[data-cred-field="url"]')?.value.trim()||"",username:row.querySelector('[data-cred-field="username"]')?.value||"",password:row.querySelector('[data-cred-field="password"]')?.value||""}));}
async function ensureVaultForProfile(){if(state.vaultPassphrase)return true;const ok=await unlockVault();if(ok&&state.schoolProfileId){const snap=await getDoc(doc(db,"schoolSecrets",state.schoolProfileId));if(snap.exists()){try{const payload=await decryptVaultPayload(snap.data(),state.vaultPassphrase);state.schoolCredentials=Array.isArray(payload.credentials)?payload.credentials:[];}catch{showToast("Não foi possível abrir os acessos desta escola.");return false;}}renderCredentials();updateVaultStatus();return true;}return false;}
async function saveSchoolProfile(){const schoolId=state.schoolProfileId;if(!schoolId)return;syncCredentialDraftFromDom();const profile={schoolId,directorName:$("#profileDirectorName").value.trim(),directorPhone:$("#profileDirectorPhone").value.trim(),operatorName:$("#profileOperatorName").value.trim(),operatorPhone:$("#profileOperatorPhone").value.trim(),anydeskId:$("#profileAnyDesk").value.trim(),notes:$("#profileNotes").value.trim(),updatedAt:serverTimestamp(),updatedBy:state.user.uid};try{await setDoc(doc(db,"schoolProfiles",schoolId),profile,{merge:true});if(state.vaultPassphrase){const secret=await encryptVaultPayload({credentials:state.schoolCredentials},state.vaultPassphrase);await setDoc(doc(db,"schoolSecrets",schoolId),{schoolId,...secret,updatedAt:serverTimestamp(),updatedBy:state.user.uid},{merge:true});}await addDoc(collection(db,"auditLogs"),{type:"school_profile_updated",schoolId,createdAt:serverTimestamp(),createdBy:state.user.uid,createdByEmail:state.user.email||""});closeSchoolProfile();showToast("Perfil da escola salvo.");}catch(error){console.error(error);showToast("Não foi possível salvar o perfil da escola.");}}


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
  enhanceAllSelects($("#accessRequestList"));
}

function renderAuthorizedUsers(users) {
  users.sort((a,b)=>(a.displayName||a.email||"").localeCompare(b.displayName||b.email||"","pt-BR"));
  $("#authorizedUserList").innerHTML=users.length?users.map(user=>{const self=user.uid===state.user.uid;return `<div class="access-item"><div class="access-identity"><img class="access-avatar" src="${escapeHtml(user.photoURL||"")}" alt="" onerror="this.style.visibility='hidden'"><div class="access-copy"><strong>${escapeHtml(user.displayName||user.email||user.uid)}</strong><span>${escapeHtml(user.email||"")}</span><small><span class="role-badge ${user.active===false?"inactive":""}">${user.active===false?"Bloqueado":user.role||"tecnico"}</span></small></div></div><div class="access-actions"><select data-change-role="${escapeHtml(user.uid)}" ${self?"disabled":""}><option value="tecnico" ${user.role!=="admin"?"selected":""}>Técnico</option><option value="admin" ${user.role==="admin"?"selected":""}>Administrador</option></select><button class="mini-button ${user.active===false?"approve":"danger"}" type="button" data-toggle-user="${escapeHtml(user.uid)}" data-active="${user.active!==false}" ${self?"disabled":""}>${user.active===false?"Reativar":"Bloquear"}</button></div></div>`;}).join(""):`<div class="empty-preview small-empty"><strong>Nenhum usuário cadastrado</strong></div>`;
  $$('[data-change-role]').forEach(select=>select.addEventListener('change',()=>changeUserRole(select.dataset.changeRole,select.value)));
  $$('[data-toggle-user]').forEach(button=>button.addEventListener('click',()=>toggleUser(button.dataset.toggleUser,button.dataset.active==="true")));
  enhanceAllSelects($("#authorizedUserList"));
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
  if ((view === "import" || view === "users") && !isAdmin()) return;

  closeCustomSelects();

  const current = $(".view.active");
  const next = $(`.view[data-view-panel="${view}"]`);

  if (current === next) {
    setMonitorPerformanceMode(view === "monitor");
    if (view === "users") loadUserManagement();
    if (view === "assistant") refreshAssistantStatus();
    $("#sidebar").classList.remove("open");
    return;
  }

  $$(".nav-button").forEach(btn => btn.classList.toggle("active", btn.dataset.view === view));
  $$(".view").forEach(panel => panel.classList.toggle("active", panel === next));

  const labels = { monitor:"Acompanhamento", daily:"CSV diário", assistant:"Assistente", import:"Monitora", users:"Usuários" };
  setMonitorPerformanceMode(view === "monitor");
  $("#workspaceTitle").textContent = labels[view] || "MFS";
  $("#sidebar").classList.remove("open");

  if (next) {
    next.classList.remove("soft-view-enter");
    requestAnimationFrame(() => next.classList.add("soft-view-enter"));
  }

  if (view === "users") loadUserManagement();
  if (view === "assistant") refreshAssistantStatus();
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
  $("#schoolSearch")?.addEventListener("input",event=>{
    state.search=event.target.value;
    clearTimeout(monitorSearchTimer);
    monitorSearchTimer=setTimeout(()=>renderMonitor(),110);
  });
  $("#shiftFilter")?.addEventListener("change",event=>{state.shift=event.target.value;renderMonitor();});
  $("#statusFilter")?.addEventListener("change",event=>{state.status=event.target.value;renderMonitor();});
  $("#schoolList")?.addEventListener("click",event=>{
    const profileButton=event.target.closest("[data-school-profile]");
    if(profileButton){openSchoolProfile(profileButton.dataset.schoolProfile);return;}
    const button=event.target.closest("[data-edit-status]");
    if(button){if(Date.now()<state.suppressStatusClickUntil)return;openStatusEditor(button.dataset.schoolId,button.dataset.day,button.dataset.shift);}
  });
  $("#schoolList")?.addEventListener("pointerdown",event=>{const button=event.target.closest('.status-chip[data-status-char="R"]');if(button)beginPendingDrag(event,button);});
  $("#schoolList")?.addEventListener("pointerover",event=>{const button=event.target.closest('.status-chip[data-status-char="R"]');if(button)movePendingDrag(button);});
  document.addEventListener("pointerup",finishPendingDrag);
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
  $$('[data-charge-view]').forEach(button=>button.addEventListener("click",()=>{
    state.chargeView=button.dataset.chargeView;
    sessionStorage.setItem("mfs-charge-view",state.chargeView);
    renderCharges($("#dailyDate")?.value);
  }));
  const csvDrop=$("#csvDropZone");
  ["dragenter","dragover"].forEach(name=>csvDrop?.addEventListener(name,event=>{event.preventDefault();csvDrop.classList.add("drag");}));
  ["dragleave","drop"].forEach(name=>csvDrop?.addEventListener(name,event=>{event.preventDefault();csvDrop.classList.remove("drag");}));
  csvDrop?.addEventListener("drop",event=>{const file=event.dataTransfer.files?.[0];if(file)processDailyFile(file);});


  $("#assistantTopButton")?.addEventListener("click",()=>switchView("assistant"));
  $("#refreshAssistantButton")?.addEventListener("click",refreshAssistantStatus);
  $("#notificationButton")?.addEventListener("click",requestBrowserNotifications);
  $("#waterDoneButton")?.addEventListener("click",registerWater);
  $("#waterIntervalSelect")?.addEventListener("change",event=>saveAssistantSetting({waterIntervalMinutes:Number(event.target.value)}));
  $("#addTaskButton")?.addEventListener("click",addTask);
  $("#taskTitleInput")?.addEventListener("keydown",event=>{if(event.key==="Enter")addTask();});
  $("#taskList")?.addEventListener("click",event=>{const toggle=event.target.closest("[data-task-toggle]");if(toggle){toggleTask(toggle.dataset.taskToggle);return;}const del=event.target.closest("[data-task-delete]");if(del)deleteTaskById(del.dataset.taskDelete);});
  $("#addEventButton")?.addEventListener("click",addAssistantEvent);
  $("#bulkChargeButton")?.addEventListener("click",copyBulkCharges);
  $("#bulkApplyButton")?.addEventListener("click",applyBulkStatus);
  $("#bulkClearButton")?.addEventListener("click",clearBulkSelection);
  $("#closeSchoolProfile")?.addEventListener("click",closeSchoolProfile);
  $("#cancelSchoolProfile")?.addEventListener("click",closeSchoolProfile);
  $("#saveSchoolProfile")?.addEventListener("click",saveSchoolProfile);
  $("#schoolProfileModal")?.addEventListener("click",event=>{if(event.target.id==="schoolProfileModal")closeSchoolProfile();});
  $$(".profile-tab").forEach(button=>button.addEventListener("click",()=>{$$(".profile-tab").forEach(x=>x.classList.toggle("active",x===button));$$(".profile-tab-panel").forEach(panel=>panel.classList.toggle("active",panel.dataset.profilePanel===button.dataset.profileTab));}));
  $("#unlockVaultButton")?.addEventListener("click",ensureVaultForProfile);
  $("#addCredentialButton")?.addEventListener("click",async()=>{if(!(await ensureVaultForProfile()))return;syncCredentialDraftFromDom();state.schoolCredentials.push({name:"",url:"",username:"",password:""});renderCredentials();});
  $("#credentialList")?.addEventListener("click",event=>{const row=event.target.closest(".credential-row");if(!row)return;syncCredentialDraftFromDom();const index=Number(row.dataset.credIndex);if(event.target.closest("[data-remove-credential]")){state.schoolCredentials.splice(index,1);renderCredentials();return;}if(event.target.closest("[data-copy-user]")){copyText(state.schoolCredentials[index]?.username||"");return;}if(event.target.closest("[data-copy-pass]")){copyText(state.schoolCredentials[index]?.password||"");return;}if(event.target.closest("[data-open-credential]")){const url=state.schoolCredentials[index]?.url;if(url)window.open(url,"_blank","noopener,noreferrer");}});
  $("#directorWhatsappButton")?.addEventListener("click",()=>openWhatsapp($("#profileDirectorPhone").value));
  $("#operatorWhatsappButton")?.addEventListener("click",()=>openWhatsapp($("#profileOperatorPhone").value));
  $("#copyAnyDeskButton")?.addEventListener("click",()=>copyText($("#profileAnyDesk").value));

  $("#refreshUsers")?.addEventListener("click",loadUserManagement);
  document.addEventListener("keydown",event=>{if(event.key!=="Escape")return;if($("#statusModal")?.classList.contains("open"))closeStatusEditor();if($("#schoolProfileModal")?.classList.contains("open"))closeSchoolProfile();});
}

bindEvents();
initCustomSelectSystem();
initMotionInteractions();
startFirebase().catch(error=>{console.error(error);showOnlyGate("configGate");});
