"use strict";

/*
  Protótipo 0.1 - GitHub Pages ready.
  Sem dependências e sem backend.
  Na próxima etapa, localStorage/importação podem ser substituídos por Firebase Auth + Firestore.
*/

const APP_MONTH = "2026-08";
const STORAGE_KEY = "frequencia-demo-imports-v1";

const calendars = {
  SEDUC: {
    id: "seduc-pi-2026",
    label: "SEDUC-PI 2026",
    expectedDays: [3,4,5,6,7,10,11,12,13,14,17,18,19,20,21,22,24,25,26,27,28,29,31],
    specialDays: [22,29],
    note: "23 dias letivos em agosto; sábados letivos em 22 e 29."
  },
  SEMEC: {
    id: "semec-teresina-2026",
    label: "SEMEC Teresina 2026",
    expectedDays: [5,6,7,10,11,12,13,14,17,18,19,20,21,24,25,26,27,28,31],
    specialDays: [],
    note: "19 dias letivos; aulas do 2º semestre a partir de 05/08."
  }
};

const schools = [
  {
    id: "seduc-001",
    name: "CETI DEPUTADO ALBERTO MONTEIRO",
    network: "SEDUC",
    area: "04ª GRE - Teresina",
    shifts: ["manha", "tarde"]
  },
  {
    id: "seduc-002",
    name: "CEJA PROFESSORA SHIRLEY COSTA E SILVA",
    network: "SEDUC",
    area: "19ª GRE - Teresina",
    shifts: ["tarde", "noite"]
  },
  {
    id: "seduc-003",
    name: "CETI PROFESSOR FLORESTAN FERNANDES",
    network: "SEDUC",
    area: "21ª GRE - Teresina",
    shifts: ["integral"]
  },
  {
    id: "seduc-004",
    name: "CETI FRANCISCO LUIS DE MORAES",
    network: "SEDUC",
    area: "18ª GRE - Grande Teresina",
    shifts: ["manha", "tarde"]
  },
  {
    id: "seduc-005",
    name: "CETI HELENA AQUINO",
    network: "SEDUC",
    area: "Teresina",
    shifts: ["manha", "tarde"]
  },
  {
    id: "semec-001",
    name: "EM NOVA BRASILIA",
    network: "SEMEC",
    area: "Teresina",
    shifts: ["manha", "tarde"]
  },
  {
    id: "semec-002",
    name: "EM SANTA TERESA",
    network: "SEMEC",
    area: "Teresina",
    shifts: ["manha", "tarde"]
  },
  {
    id: "semec-003",
    name: "EM MASCARENHAS DE MORAES",
    network: "SEMEC",
    area: "Teresina",
    shifts: ["manha", "tarde"]
  },
  {
    id: "semec-004",
    name: "CMEI MINERVINA RODRIGUES CHAVES",
    network: "SEMEC",
    area: "Teresina",
    shifts: ["integral"]
  },
  {
    id: "semec-005",
    name: "CMEI MARIA HAYDEE COSTA MEDEIROS",
    network: "SEMEC",
    area: "Teresina",
    shifts: ["manha", "tarde"]
  }
];

const shiftLabels = {
  manha: "Manhã",
  integral: "Integral",
  tarde: "Tarde",
  noite: "Noite"
};

const appState = {
  dashboardNetwork: "TODAS",
  pendingNetwork: "TODAS",
  monitorNetwork: "TODAS",
  monitorSchool: "TODAS",
  monitorShift: "TODOS",
  monitorStatus: "TODOS",
  importPreview: null
};

const qs = (selector, root = document) => root.querySelector(selector);
const qsa = (selector, root = document) => [...root.querySelectorAll(selector)];

function hashString(text) {
  let hash = 2166136261;

  for (let i = 0; i < text.length; i++) {
    hash ^= text.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }

  return Math.abs(hash >>> 0);
}

function readImports() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

function writeImports(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function importedStatus(schoolId, day, shift) {
  const imports = readImports();

  return (
    imports[
      `${schoolId}|${APP_MONTH}-${String(day).padStart(2, "0")}|${shift}`
    ] || null
  );
}

function demoStatus(school, day, shift) {
  const calendar = calendars[school.network];

  if (!school.shifts.includes(shift)) {
    return "disabled";
  }

  if (!calendar.expectedDays.includes(day)) {
    return "no-class";
  }

  const imported = importedStatus(school.id, day, shift);

  if (imported) {
    return imported.status === "enviada"
      ? "enviada-importada"
      : "pendente-importada";
  }

  const seed = hashString(`${school.id}-${day}-${shift}`) % 100;

  return seed < 14 ? "pendente" : "enviada";
}

function statusBase(status) {
  if (status.includes("enviada")) {
    return "enviada";
  }

  if (status.includes("pendente")) {
    return "pendente";
  }

  return status;
}

function getSchoolMetrics(school, shiftFilter = "TODOS") {
  let expected = 0;
  let sent = 0;
  let pending = 0;

  const shifts =
    shiftFilter === "TODOS"
      ? school.shifts
      : school.shifts.filter((s) => s === shiftFilter);

  shifts.forEach((shift) => {
    calendars[school.network].expectedDays.forEach((day) => {
      expected += 1;

      const status = statusBase(
        demoStatus(school, day, shift)
      );

      if (status === "enviada") {
        sent += 1;
      }

      if (status === "pendente") {
        pending += 1;
      }
    });
  });

  return {
    expected,
    sent,
    pending,
    rate: expected ? (sent / expected) * 100 : 0
  };
}

function getFilteredSchools(network = "TODAS") {
  return schools.filter(
    (school) =>
      network === "TODAS" ||
      school.network === network
  );
}

function aggregateMetrics(network = "TODAS") {
  return getFilteredSchools(network).reduce(
    (acc, school) => {
      const metrics = getSchoolMetrics(school);

      acc.expected += metrics.expected;
      acc.sent += metrics.sent;
      acc.pending += metrics.pending;

      return acc;
    },
    {
      expected: 0,
      sent: 0,
      pending: 0
    }
  );
}

function networkBadge(network) {
  return `
    <span class="network-badge ${network.toLowerCase()}">
      ${network}
    </span>
  `;
}

function renderDashboard() {
  const metrics = aggregateMetrics(
    appState.dashboardNetwork
  );

  const rate = metrics.expected
    ? (metrics.sent / metrics.expected) * 100
    : 0;

  const schoolCount =
    getFilteredSchools(
      appState.dashboardNetwork
    ).length;

  qs("#kpiGrid").innerHTML = [
    kpi(
      "▦",
      "teal",
      metrics.expected,
      "Frequências previstas",
      `${schoolCount} escolas no filtro`
    ),
    kpi(
      "✓",
      "blue",
      metrics.sent,
      "Enviadas",
      `${rate
        .toFixed(1)
        .replace(".", ",")}% de conclusão`
    ),
    kpi(
      "!",
      "red",
      metrics.pending,
      "Pendentes",
      "Registros demonstrativos para agosto"
    ),
    kpi(
      "%",
      "amber",
      `${rate.toFixed(0)}%`,
      "Taxa de envio",
      "Meta operacional: acompanhar até regularizar"
    )
  ].join("");

  qs("#calendarScopeLabel").textContent =
    appState.dashboardNetwork === "TODAS"
      ? "SEDUC + SEMEC"
      : calendars[
          appState.dashboardNetwork
        ].label;

  const networks =
    appState.dashboardNetwork === "TODAS"
      ? ["SEDUC", "SEMEC"]
      : [appState.dashboardNetwork];

  qs("#networkSummary").innerHTML =
    networks
      .map((network) => {
        const metrics =
          aggregateMetrics(network);

        const rate = metrics.expected
          ? (metrics.sent /
              metrics.expected) *
            100
          : 0;

        return `
          <div class="network-row">

            <div>
              ${networkBadge(network)}
            </div>

            <div>

              <div class="progress-track">
                <div
                  class="progress-fill"
                  style="width:${rate.toFixed(1)}%"
                ></div>
              </div>

              <small class="subtle">
                ${metrics.sent} enviadas
                de ${metrics.expected}
                previstas
              </small>

            </div>

            <div class="network-numbers">

              <strong>
                ${rate.toFixed(0)}%
              </strong>

              <small>
                ${metrics.pending}
                pend.
              </small>

            </div>

          </div>
        `;
      })
      .join("");

  const priorities =
    buildPendingGroups(
      appState.dashboardNetwork
    ).slice(0, 5);

  qs("#priorityPending").innerHTML =
    priorities.length
      ? priorities
          .map(
            (group) => `
              <div class="priority-item">

                <div class="priority-main">

                  <strong>
                    ${escapeHtml(
                      group.school.name
                    )}
                  </strong>

                  <small>
                    ${
                      group.school.network
                    }
                    ·
                    ${group.items[0].day
                      .toString()
                      .padStart(2, "0")}/08
                    ·
                    ${group.items
                      .map(
                        (item) =>
                          shiftLabels[
                            item.shift
                          ]
                      )
                      .join(", ")}
                  </small>

                </div>

                <div class="pending-count">
                  ${group.items.length}
                </div>

              </div>
            `
          )
          .join("")
      : emptyInline(
          "Nenhuma pendência no filtro."
        );
}

function kpi(
  icon,
  tone,
  value,
  label,
  foot
) {
  return `
    <article class="card kpi-card">

      <div class="kpi-icon ${tone}">
        ${icon}
      </div>

      <div class="kpi-value">
        ${value}
      </div>

      <div class="kpi-label">
        ${label}
      </div>

      <div class="kpi-foot">
        ${foot}
      </div>

    </article>
  `;
}

function populateSchoolFilter() {
  const select =
    qs("#monitorSchool");

  const current =
    select.value || "TODAS";

  const list =
    getFilteredSchools(
      appState.monitorNetwork
    );

  select.innerHTML =
    `<option value="TODAS">
      Todas as escolas
    </option>` +
    list
      .map(
        (school) => `
          <option value="${school.id}">
            ${escapeHtml(
              school.name
            )}
          </option>
        `
      )
      .join("");

  if (
    [...select.options].some(
      (option) =>
        option.value === current
    )
  ) {
    select.value = current;
  } else {
    select.value = "TODAS";
  }

  appState.monitorSchool =
    select.value;
}

function renderMonitor() {
  let list =
    getFilteredSchools(
      appState.monitorNetwork
    );

  if (
    appState.monitorSchool !==
    "TODAS"
  ) {
    list = list.filter(
      (school) =>
        school.id ===
        appState.monitorSchool
    );
  }

  if (
    appState.monitorShift !==
    "TODOS"
  ) {
    list = list.filter((school) =>
      school.shifts.includes(
        appState.monitorShift
      )
    );
  }

  if (
    appState.monitorStatus ===
    "pendente"
  ) {
    list = list.filter(
      (school) =>
        getSchoolMetrics(
          school,
          appState.monitorShift
        ).pending > 0
    );
  }

  if (
    appState.monitorStatus ===
    "enviada"
  ) {
    list = list.filter(
      (school) =>
        getSchoolMetrics(
          school,
          appState.monitorShift
        ).sent > 0
    );
  }

  qs(
    "#monitorResultCount"
  ).textContent =
    `${list.length} escola${
      list.length === 1
        ? ""
        : "s"
    }`;

  qs(
    "#schoolMonitorList"
  ).innerHTML = list.length
    ? list
        .map(renderSchoolCard)
        .join("")
    : `
      <div class="card panel-card">
        ${emptyInline(
          "Nenhuma escola encontrada para estes filtros."
        )}
      </div>
    `;
}

function renderSchoolCard(school) {
  const metrics =
    getSchoolMetrics(
      school,
      appState.monitorShift
    );

  const selectedShifts =
    appState.monitorShift ===
    "TODOS"
      ? school.shifts
      : school.shifts.filter(
          (shift) =>
            shift ===
            appState.monitorShift
        );

  return `
    <article class="card school-card">

      <header class="school-card-head">

        <div class="school-title">

          <h3>
            ${escapeHtml(
              school.name
            )}
          </h3>

          <div class="school-meta">

            ${networkBadge(
              school.network
            )}

            <span>
              ${escapeHtml(
                school.area
              )}
            </span>

            <span>·</span>

            <span>
              ${
                calendars[
                  school.network
                ].label
              }
            </span>

          </div>

        </div>

        <div class="school-stats">

          <div class="mini-stat">

            <strong>
              ${metrics.sent}
            </strong>

            <small>
              enviadas
            </small>

          </div>

          <div class="mini-stat">

            <strong>
              ${metrics.pending}
            </strong>

            <small>
              pendentes
            </small>

          </div>

          <div class="mini-stat">

            <strong>
              ${metrics.rate.toFixed(
                0
              )}%
            </strong>

            <small>
              conclusão
            </small>

          </div>

        </div>

      </header>

      ${selectedShifts
        .map((shift) =>
          renderShiftCalendar(
            school,
            shift
          )
        )
        .join("")}

    </article>
  `;
}

function renderShiftCalendar(
  school,
  shift
) {
  let sent = 0;
  let pending = 0;

  const cells = [];

  for (
    let day = 1;
    day <= 31;
    day++
  ) {
    const raw =
      demoStatus(
        school,
        day,
        shift
      );

    const base =
      statusBase(raw);

    const special =
      calendars[
        school.network
      ].specialDays.includes(
        day
      ) &&
      base === "enviada";

    if (
      base === "enviada"
    ) {
      sent += 1;
    }

    if (
      base === "pendente"
    ) {
      pending += 1;
    }

    const css =
      base === "enviada"
        ? "sent"
        : base ===
          "pendente"
        ? "pending"
        : base ===
          "no-class"
        ? "no-class"
        : "disabled";

    const specialClass =
      special
        ? " special"
        : "";

    const importedClass =
      raw.includes(
        "importada"
      )
        ? " imported"
        : "";

    const label =
      base === "enviada"
        ? "Enviada"
        : base ===
          "pendente"
        ? "Não enviada"
        : base ===
          "no-class"
        ? "Não letivo"
        : "Não aplicável";

    cells.push(`
      <div
        class="day-cell ${css}${specialClass}${importedClass}"
        title="${String(day).padStart(
          2,
          "0"
        )}/08 · ${
          shiftLabels[
            shift
          ]
        } · ${label}"
      >

        <span>
          ${day}
        </span>

        <small>
          ${
            base ===
            "enviada"
              ? "OK"
              : base ===
                "pendente"
              ? "!"
              : "–"
          }
        </small>

      </div>
    `);
  }

  return `
    <section class="shift-section">

      <div class="shift-label-row">

        <span class="shift-label">
          ${shiftLabels[shift]}
        </span>

        <span class="shift-summary">
          ${sent} enviadas ·
          ${pending} pendentes
        </span>

      </div>

      <div class="days-scroll">

        <div class="days-grid">
          ${cells.join("")}
        </div>

      </div>

    </section>
  `;
}

function buildPendingGroups(
  network = "TODAS"
) {
  const groups = [];

  getFilteredSchools(
    network
  ).forEach((school) => {
    calendars[
      school.network
    ].expectedDays.forEach(
      (day) => {
        const items =
          school.shifts
            .map(
              (shift) => ({
                day,
                shift,
                status:
                  statusBase(
                    demoStatus(
                      school,
                      day,
                      shift
                    )
                  )
              })
            )
            .filter(
              (item) =>
                item.status ===
                "pendente"
            );

        if (items.length) {
          groups.push({
            school,
            items
          });
        }
      }
    );
  });

  return groups.sort(
    (a, b) =>
      b.items.length -
        a.items.length ||
      a.items[0].day -
        b.items[0].day
  );
}

function renderPending() {
  const groups =
    buildPendingGroups(
      appState.pendingNetwork
    );

  qs("#pendingList").innerHTML =
    groups.length
      ? groups
          .map(
            (
              group,
              index
            ) => {
              const day =
                group.items[0]
                  .day;

              const shifts =
                group.items.map(
                  (item) =>
                    shiftLabels[
                      item.shift
                    ]
                );

              return `
                <div class="pending-card">

                  <div>

                    <h3>
                      ${escapeHtml(
                        group.school
                          .name
                      )}
                    </h3>

                    <p>
                      ${
                        group.school
                          .network
                      }
                      ·
                      ${String(
                        day
                      ).padStart(
                        2,
                        "0"
                      )}/08/2026
                      ·
                      ${escapeHtml(
                        group.school
                          .area
                      )}
                    </p>

                  </div>

                  <div class="pending-tags">

                    ${shifts
                      .map(
                        (shift) => `
                          <span class="pending-tag">
                            ${shift}
                          </span>
                        `
                      )
                      .join("")}

                  </div>

                  <button
                    class="copy-button"
                    data-copy-pending="${index}"
                  >
                    Copiar mensagem
                  </button>

                </div>
              `;
            }
          )
          .join("")
      : emptyInline(
          "Nenhuma pendência encontrada."
        );

  qsa(
    "[data-copy-pending]"
  ).forEach((button) =>
    button.addEventListener(
      "click",
      () => {
        const group =
          groups[
            Number(
              button.dataset
                .copyPending
            )
          ];

        const date =
          `${String(
            group.items[0]
              .day
          ).padStart(
            2,
            "0"
          )}/08/2026`;

        const shifts =
          group.items
            .map(
              (item) =>
                shiftLabels[
                  item.shift
                ]
            )
            .join(" e ");

        const message =
          `Olá! Na conferência da frequência escolar referente ao dia ${date}, identificamos que a frequência da ${group.school.name}, no(s) turno(s) ${shifts}, não consta como enviada no sistema. Solicitamos, por gentileza, que seja realizada a verificação e, se necessário, a regularização do registro. Após o ajuste, pedimos que nos confirme por aqui. Obrigado!`;

        copyText(message);
      }
    )
  );
}

function renderSchoolTable() {
  qs(
    "#schoolTableBody"
  ).innerHTML =
    schools
      .map(
        (school) => `
          <tr>

            <td>
              <strong>
                ${escapeHtml(
                  school.name
                )}
              </strong>
            </td>

            <td>
              ${networkBadge(
                school.network
              )}
            </td>

            <td>
              ${escapeHtml(
                school.area
              )}
            </td>

            <td>
              ${
                calendars[
                  school.network
                ].label
              }
            </td>

            <td>

              <div class="shift-pills">

                ${school.shifts
                  .map(
                    (shift) => `
                      <span class="shift-pill">
                        ${
                          shiftLabels[
                            shift
                          ]
                        }
                      </span>
                    `
                  )
                  .join("")}

              </div>

            </td>

          </tr>
        `
      )
      .join("");
}

function parseCSV(text) {
  const clean =
    text
      .replace(
        /^\uFEFF/,
        ""
      )
      .trim();

  if (!clean) {
    return [];
  }

  const firstLine =
    clean.split(
      /\r?\n/
    )[0];

  const delimiter =
    firstLine.includes(";")
      ? ";"
      : ",";

  const rows =
    clean
      .split(/\r?\n/)
      .filter(Boolean)
      .map((line) =>
        parseCSVLine(
          line,
          delimiter
        )
      );

  const headers =
    rows
      .shift()
      .map(
        normalizeHeader
      );

  return rows.map(
    (cols) =>
      Object.fromEntries(
        headers.map(
          (
            header,
            index
          ) => [
            header,
            (
              cols[index] ||
              ""
            ).trim()
          ]
        )
      )
  );
}

function parseCSVLine(
  line,
  delimiter
) {
  const out = [];

  let current = "";
  let quoted = false;

  for (
    let i = 0;
    i < line.length;
    i++
  ) {
    const ch =
      line[i];

    if (ch === '"') {
      if (
        quoted &&
        line[i + 1] ===
          '"'
      ) {
        current += '"';
        i++;
      } else {
        quoted =
          !quoted;
      }
    } else if (
      ch ===
        delimiter &&
      !quoted
    ) {
      out.push(
        current
      );

      current = "";
    } else {
      current += ch;
    }
  }

  out.push(current);

  return out;
}

function normalizeHeader(
  value
) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(
      /[\u0300-\u036f]/g,
      ""
    )
    .replace(
      /[^a-z0-9]+/g,
      ""
    )
    .trim();
}

function normalizeText(
  value
) {
  return String(
    value || ""
  )
    .toUpperCase()
    .normalize("NFD")
    .replace(
      /[\u0300-\u036f]/g,
      ""
    )
    .replace(
      /[^A-Z0-9 ]+/g,
      " "
    )
    .replace(
      /\s+/g,
      " "
    )
    .trim();
}

function findSchoolByName(
  name
) {
  const normalized =
    normalizeText(name);

  if (!normalized) {
    return null;
  }

  return (
    schools.find(
      (school) =>
        normalizeText(
          school.name
        ) === normalized
    ) ||
    schools.find(
      (school) =>
        normalizeText(
          school.name
        ).includes(
          normalized
        ) ||
        normalized.includes(
          normalizeText(
            school.name
          )
        )
    ) ||
    null
  );
}

function frequencyStatus(
  value
) {
  const normalized =
    normalizeText(value);

  if (
    normalized.includes(
      "NAO ENVIADA"
    ) ||
    normalized.includes(
      "N ENVIADA"
    ) ||
    normalized === "NAO"
  ) {
    return "nao_enviada";
  }

  if (
    normalized.includes(
      "ENVIADA"
    ) ||
    normalized === "SIM"
  ) {
    return "enviada";
  }

  return "desconhecida";
}

function buildImportPreview(
  fileName,
  rows
) {
  const mapped =
    rows
      .map((row) => {
        const schoolName =
          row.escola ||
          row.nomeescola ||
          row.unidade ||
          row.unidadeescolar ||
          "";

        const frequency =
          row.frequencia ||
          row.status ||
          row.situacao ||
          "";

        const school =
          findSchoolByName(
            schoolName
          );

        return {
          raw: row,
          schoolName,
          school,
          frequency:
            frequencyStatus(
              frequency
            ),
          turmas:
            row.turmas ||
            row.qtdturmas ||
            row.quantidadeturmas ||
            "",
          alunos:
            row.alunos ||
            row.qtdalunos ||
            row.quantidadealunos ||
            ""
        };
      })
      .filter(
        (row) =>
          row.schoolName
      );

  const summary = {
    total:
      mapped.length,

    sent:
      mapped.filter(
        (row) =>
          row.frequency ===
          "enviada"
      ).length,

    notSent:
      mapped.filter(
        (row) =>
          row.frequency ===
          "nao_enviada"
      ).length,

    unknown:
      mapped.filter(
        (row) =>
          !row.school
      ).length
  };

  appState.importPreview = {
    fileName,
    rows: mapped,
    summary
  };

  qs(
    "#previewTitle"
  ).textContent =
    fileName;

  qs(
    "#confirmImport"
  ).disabled =
    !mapped.length;

  qs(
    "#importPreview"
  ).className = "";

  qs(
    "#importPreview"
  ).innerHTML = `
    <div class="preview-stats">

      <div class="preview-stat">
        <strong>
          ${summary.total}
        </strong>
        <small>
          Registros
        </small>
      </div>

      <div class="preview-stat">
        <strong>
          ${summary.sent}
        </strong>
        <small>
          Enviadas
        </small>
      </div>

      <div class="preview-stat">
        <strong>
          ${summary.notSent}
        </strong>
        <small>
          Não enviadas
        </small>
      </div>

      <div class="preview-stat">
        <strong>
          ${summary.unknown}
        </strong>
        <small>
          Não identificadas
        </small>
      </div>

    </div>

    <div class="preview-table-wrap">

      <table class="preview-table">

        <thead>
          <tr>
            <th>
              Escola
            </th>
            <th>
              Rede
            </th>
            <th>
              Status
            </th>
            <th>
              Turmas
            </th>
            <th>
              Alunos
            </th>
          </tr>
        </thead>

        <tbody>

          ${mapped
            .slice(
              0,
              100
            )
            .map(
              (row) => `
                <tr class="${
                  !row.school
                    ? "row-warning"
                    : ""
                }">

                  <td>
                    ${escapeHtml(
                      row.schoolName
                    )}
                  </td>

                  <td>
                    ${
                      row.school
                        ? row.school
                            .network
                        : "Revisar"
                    }
                  </td>

                  <td>
                    ${
                      row.frequency ===
                      "enviada"
                        ? "Enviada"
                        : row.frequency ===
                          "nao_enviada"
                        ? "Não enviada"
                        : "Desconhecido"
                    }
                  </td>

                  <td>
                    ${escapeHtml(
                      row.turmas
                    )}
                  </td>

                  <td>
                    ${escapeHtml(
                      row.alunos
                    )}
                  </td>

                </tr>
              `
            )
            .join("")}

        </tbody>

      </table>

    </div>
  `;
}

function confirmImport() {
  if (
    !appState.importPreview
  ) {
    return;
  }

  const date =
    qs(
      "#importDate"
    ).value;

  const shift =
    qs(
      "#importShift"
    ).value;

  if (
    !date ||
    !date.startsWith(
      APP_MONTH
    )
  ) {
    showToast(
      "Nesta versão de exemplo, use uma data de agosto de 2026."
    );

    return;
  }

  const day =
    Number(
      date.slice(-2)
    );

  const store =
    readImports();

  let applied = 0;
  let ignored = 0;

  appState.importPreview.rows.forEach(
    (row) => {
      if (
        !row.school ||
        row.frequency ===
          "desconhecida"
      ) {
        ignored += 1;
        return;
      }

      if (
        !row.school.shifts.includes(
          shift
        )
      ) {
        ignored += 1;
        return;
      }

      if (
        !calendars[
          row.school.network
        ].expectedDays.includes(
          day
        )
      ) {
        ignored += 1;
        return;
      }

      store[
        `${row.school.id}|${date}|${shift}`
      ] = {
        status:
          row.frequency,

        turmas:
          row.turmas,

        alunos:
          row.alunos,

        importedAt:
          new Date().toISOString(),

        fileName:
          appState.importPreview
            .fileName
      };

      applied += 1;
    }
  );

  writeImports(store);

  renderAll();

  showToast(
    `${applied} registro(s) atualizado(s). ${
      ignored
        ? `${ignored} ignorado(s).`
        : ""
    }`
  );
}

function resetImport() {
  appState.importPreview =
    null;

  qs(
    "#csvInput"
  ).value = "";

  qs(
    "#confirmImport"
  ).disabled = true;

  qs(
    "#previewTitle"
  ).textContent =
    "Nenhum arquivo selecionado";

  qs(
    "#importPreview"
  ).className =
    "empty-state";

  qs(
    "#importPreview"
  ).innerHTML = `
    <div class="empty-icon">
      CSV
    </div>

    <strong>
      A prévia aparecerá aqui
    </strong>

    <span>
      O sistema valida as escolas antes de gravar.
    </span>
  `;
}

function copyText(text) {
  if (
    navigator.clipboard
      ?.writeText
  ) {
    navigator.clipboard
      .writeText(text)
      .then(() =>
        showToast(
          "Mensagem copiada para a área de transferência."
        )
      );
  } else {
    const area =
      document.createElement(
        "textarea"
      );

    area.value = text;

    document.body.appendChild(
      area
    );

    area.select();

    document.execCommand(
      "copy"
    );

    area.remove();

    showToast(
      "Mensagem copiada para a área de transferência."
    );
  }
}

function emptyInline(
  message
) {
  return `
    <div
      style="
        padding:18px;
        text-align:center;
        color:var(--muted);
        font-size:11px
      "
    >
      ${escapeHtml(
        message
      )}
    </div>
  `;
}

function escapeHtml(value) {
  return String(
    value ?? ""
  ).replace(
    /[&<>'"]/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;"
      }[character])
  );
}

let toastTimer;

function showToast(
  message
) {
  const toast =
    qs("#toast");

  toast.textContent =
    message;

  toast.classList.add(
    "show"
  );

  clearTimeout(
    toastTimer
  );

  toastTimer =
    setTimeout(
      () =>
        toast.classList.remove(
          "show"
        ),
      2800
    );
}

const viewMeta = {
  dashboard: [
    "Visão geral",
    "Dashboard"
  ],

  monitoramento: [
    "Calendário por escola",
    "Acompanhamento"
  ],

  importacao: [
    "Atualização diária",
    "Importar CSV"
  ],

  pendencias: [
    "Frequências não enviadas",
    "Pendências"
  ],

  escolas: [
    "Cadastro e rede",
    "Escolas"
  ]
};

function switchView(
  view
) {
  qsa(
    ".nav-item"
  ).forEach((item) =>
    item.classList.toggle(
      "active",
      item.dataset.view ===
        view
    )
  );

  qsa(
    ".view"
  ).forEach((panel) =>
    panel.classList.toggle(
      "active",
      panel.dataset
        .viewPanel === view
    )
  );

  qs(
    "#viewEyebrow"
  ).textContent =
    viewMeta[view][0];

  qs(
    "#viewTitle"
  ).textContent =
    viewMeta[view][1];

  qs(
    "#sidebar"
  ).classList.remove(
    "open"
  );

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function bindSegment(
  containerSelector,
  stateKey,
  onChange
) {
  qsa(
    `${containerSelector} .segment`
  ).forEach(
    (button) => {
      button.addEventListener(
        "click",
        () => {
          qsa(
            `${containerSelector} .segment`
          ).forEach(
            (item) =>
              item.classList.remove(
                "active"
              )
          );

          button.classList.add(
            "active"
          );

          appState[stateKey] =
            button.dataset.network;

          onChange();
        }
      );
    }
  );
}

function bindEvents() {
  qsa(
    ".nav-item"
  ).forEach(
    (button) =>
      button.addEventListener(
        "click",
        () =>
          switchView(
            button.dataset.view
          )
      )
  );

  qsa(
    "[data-go]"
  ).forEach(
    (button) =>
      button.addEventListener(
        "click",
        () =>
          switchView(
            button.dataset.go
          )
      )
  );

  qs(
    "#menuButton"
  ).addEventListener(
    "click",
    () =>
      qs(
        "#sidebar"
      ).classList.toggle(
        "open"
      )
  );

  bindSegment(
    "#dashboardNetworkFilter",
    "dashboardNetwork",
    renderDashboard
  );

  bindSegment(
    "#pendingNetworkFilter",
    "pendingNetwork",
    renderPending
  );

  qs(
    "#monitorNetwork"
  ).addEventListener(
    "change",
    (event) => {
      appState.monitorNetwork =
        event.target.value;

      populateSchoolFilter();

      renderMonitor();
    }
  );

  qs(
    "#monitorSchool"
  ).addEventListener(
    "change",
    (event) => {
      appState.monitorSchool =
        event.target.value;

      renderMonitor();
    }
  );

  qs(
    "#monitorShift"
  ).addEventListener(
    "change",
    (event) => {
      appState.monitorShift =
        event.target.value;

      renderMonitor();
    }
  );

  qs(
    "#monitorStatus"
  ).addEventListener(
    "change",
    (event) => {
      appState.monitorStatus =
        event.target.value;

      renderMonitor();
    }
  );

  const input =
    qs("#csvInput");

  input.addEventListener(
    "change",
    () => {
      const file =
        input.files?.[0];

      if (!file) {
        return;
      }

      const reader =
        new FileReader();

      reader.onload =
        () => {
          try {
            const rows =
              parseCSV(
                String(
                  reader.result ||
                    ""
                )
              );

            buildImportPreview(
              file.name,
              rows
            );
          } catch (error) {
            console.error(
              error
            );

            showToast(
              "Não foi possível interpretar este CSV."
            );
          }
        };

      reader.readAsText(
        file,
        "utf-8"
      );
    }
  );

  const drop =
    qs("#dropZone");

  [
    "dragenter",
    "dragover"
  ].forEach((eventName) =>
    drop.addEventListener(
      eventName,
      (event) => {
        event.preventDefault();

        drop.classList.add(
          "drag"
        );
      }
    )
  );

  [
    "dragleave",
    "drop"
  ].forEach((eventName) =>
    drop.addEventListener(
      eventName,
      (event) => {
        event.preventDefault();

        drop.classList.remove(
          "drag"
        );
      }
    )
  );

  drop.addEventListener(
    "drop",
    (event) => {
      const file =
        event.dataTransfer
          .files?.[0];

      if (!file) {
        return;
      }

      const dt =
        new DataTransfer();

      dt.items.add(file);

      input.files =
        dt.files;

      input.dispatchEvent(
        new Event("change")
      );
    }
  );

  qs(
    "#resetImport"
  ).addEventListener(
    "click",
    resetImport
  );

  qs(
    "#confirmImport"
  ).addEventListener(
    "click",
    confirmImport
  );

  qs(
    "#userChip"
  ).addEventListener(
    "click",
    () =>
      showToast(
        "Firebase Authentication será conectado após aprovarmos esta interface."
      )
  );
}

function renderAll() {
  renderDashboard();
  renderMonitor();
  renderPending();
  renderSchoolTable();
}

function init() {
  populateSchoolFilter();
  bindEvents();
  renderAll();
}

document.addEventListener(
  "DOMContentLoaded",
  init
);