const STORAGE_KEY = "crm_local_v1";

const state = loadState();

const kpis = document.getElementById("kpis");
const contactList = document.getElementById("contactList");
const companyList = document.getElementById("companyList");
const dealList = document.getElementById("dealList");
const taskList = document.getElementById("taskList");
const dealFilter = document.getElementById("dealFilter");

document.getElementById("contactForm").addEventListener("submit", onAddContact);
document.getElementById("companyForm").addEventListener("submit", onAddCompany);
document.getElementById("dealForm").addEventListener("submit", onAddDeal);
document.getElementById("taskForm").addEventListener("submit", onAddTask);
document.getElementById("seedBtn").addEventListener("click", seedData);
dealFilter.addEventListener("change", render);

render();

function defaultState() {
  return {
    contacts: [],
    companies: [],
    deals: [],
    tasks: []
  };
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState();
    const parsed = JSON.parse(raw);
    return {
      contacts: parsed.contacts || [],
      companies: parsed.companies || [],
      deals: parsed.deals || [],
      tasks: parsed.tasks || []
    };
  } catch {
    return defaultState();
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function uid() {
  return crypto.randomUUID ? crypto.randomUUID() : String(Date.now() + Math.random());
}

function onAddContact(e) {
  e.preventDefault();
  const data = new FormData(e.target);
  state.contacts.unshift({
    id: uid(),
    name: String(data.get("name") || "").trim(),
    email: String(data.get("email") || "").trim(),
    phone: String(data.get("phone") || "").trim()
  });
  e.target.reset();
  persistAndRender();
}

function onAddCompany(e) {
  e.preventDefault();
  const data = new FormData(e.target);
  state.companies.unshift({
    id: uid(),
    name: String(data.get("name") || "").trim(),
    sector: String(data.get("sector") || "").trim(),
    website: String(data.get("website") || "").trim()
  });
  e.target.reset();
  persistAndRender();
}

function onAddDeal(e) {
  e.preventDefault();
  const data = new FormData(e.target);
  state.deals.unshift({
    id: uid(),
    title: String(data.get("title") || "").trim(),
    amount: Number(data.get("amount") || 0),
    stage: String(data.get("stage") || "Prospección")
  });
  e.target.reset();
  persistAndRender();
}

function onAddTask(e) {
  e.preventDefault();
  const data = new FormData(e.target);
  state.tasks.unshift({
    id: uid(),
    title: String(data.get("title") || "").trim(),
    dueDate: String(data.get("dueDate") || ""),
    priority: String(data.get("priority") || "Media"),
    done: false
  });
  e.target.reset();
  persistAndRender();
}

function deleteById(collection, id) {
  const idx = collection.findIndex((x) => x.id === id);
  if (idx >= 0) collection.splice(idx, 1);
}

function toggleTask(id) {
  const task = state.tasks.find((t) => t.id === id);
  if (!task) return;
  task.done = !task.done;
  persistAndRender();
}

function moveDealStage(id) {
  const stages = ["Prospección", "Calificación", "Propuesta", "Negociación", "Ganada", "Perdida"];
  const deal = state.deals.find((d) => d.id === id);
  if (!deal) return;
  const i = stages.indexOf(deal.stage);
  deal.stage = stages[(i + 1) % stages.length];
  persistAndRender();
}

function persistAndRender() {
  saveState();
  render();
}

function render() {
  renderKpis();
  renderContacts();
  renderCompanies();
  renderDeals();
  renderTasks();
}

function renderKpis() {
  const wonAmount = state.deals
    .filter((d) => d.stage === "Ganada")
    .reduce((sum, d) => sum + Number(d.amount || 0), 0);
  const pipelineAmount = state.deals
    .filter((d) => !["Ganada", "Perdida"].includes(d.stage))
    .reduce((sum, d) => sum + Number(d.amount || 0), 0);
  const pendingTasks = state.tasks.filter((t) => !t.done).length;

  const items = [
    ["Contactos", state.contacts.length],
    ["Empresas", state.companies.length],
    ["Oportunidades", state.deals.length],
    ["Pipeline", formatMoney(pipelineAmount)],
    ["Ventas ganadas", formatMoney(wonAmount)],
    ["Tareas pendientes", pendingTasks]
  ];

  kpis.innerHTML = items
    .map(
      ([label, value]) =>
        `<article class="kpi"><span class="label">${label}</span><span class="value">${value}</span></article>`
    )
    .join("");
}

function renderContacts() {
  contactList.innerHTML = state.contacts
    .map(
      (c) => `
      <li class="item">
        <h3>${escapeHtml(c.name)}</h3>
        <p class="meta">${escapeHtml(c.email || "-")}</p>
        <p class="meta">${escapeHtml(c.phone || "-")}</p>
        <div class="actions">
          <button class="danger" data-del-contact="${c.id}">Eliminar</button>
        </div>
      </li>`
    )
    .join("");

  contactList.querySelectorAll("[data-del-contact]").forEach((btn) => {
    btn.addEventListener("click", () => {
      deleteById(state.contacts, btn.dataset.delContact);
      persistAndRender();
    });
  });
}

function renderCompanies() {
  companyList.innerHTML = state.companies
    .map(
      (c) => `
      <li class="item">
        <h3>${escapeHtml(c.name)}</h3>
        <p class="meta">Sector: ${escapeHtml(c.sector || "-")}</p>
        <p class="meta">Web: ${escapeHtml(c.website || "-")}</p>
        <div class="actions">
          <button class="danger" data-del-company="${c.id}">Eliminar</button>
        </div>
      </li>`
    )
    .join("");

  companyList.querySelectorAll("[data-del-company]").forEach((btn) => {
    btn.addEventListener("click", () => {
      deleteById(state.companies, btn.dataset.delCompany);
      persistAndRender();
    });
  });
}

function renderDeals() {
  const selected = dealFilter.value;
  const deals = selected === "Todas" ? state.deals : state.deals.filter((d) => d.stage === selected);

  dealList.innerHTML = deals
    .map(
      (d) => `
      <li class="item">
        <h3>${escapeHtml(d.title)}</h3>
        <p class="meta">Monto: ${formatMoney(d.amount)}</p>
        <p class="meta">Etapa: ${escapeHtml(d.stage)}</p>
        <div class="actions">
          <button data-next-deal="${d.id}">Siguiente etapa</button>
          <button class="danger" data-del-deal="${d.id}">Eliminar</button>
        </div>
      </li>`
    )
    .join("");

  dealList.querySelectorAll("[data-next-deal]").forEach((btn) => {
    btn.addEventListener("click", () => moveDealStage(btn.dataset.nextDeal));
  });

  dealList.querySelectorAll("[data-del-deal]").forEach((btn) => {
    btn.addEventListener("click", () => {
      deleteById(state.deals, btn.dataset.delDeal);
      persistAndRender();
    });
  });
}

function renderTasks() {
  taskList.innerHTML = state.tasks
    .map(
      (t) => `
      <li class="item">
        <h3>${escapeHtml(t.title)}</h3>
        <p class="meta">Fecha: ${escapeHtml(t.dueDate || "-")}</p>
        <p class="meta">Prioridad: ${escapeHtml(t.priority)}</p>
        <p class="meta">Estado: ${t.done ? "Completada" : "Pendiente"}</p>
        <div class="actions">
          <button data-toggle-task="${t.id}">${t.done ? "Reabrir" : "Completar"}</button>
          <button class="danger" data-del-task="${t.id}">Eliminar</button>
        </div>
      </li>`
    )
    .join("");

  taskList.querySelectorAll("[data-toggle-task]").forEach((btn) => {
    btn.addEventListener("click", () => toggleTask(btn.dataset.toggleTask));
  });

  taskList.querySelectorAll("[data-del-task]").forEach((btn) => {
    btn.addEventListener("click", () => {
      deleteById(state.tasks, btn.dataset.delTask);
      persistAndRender();
    });
  });
}

function seedData() {
  state.contacts = [
    { id: uid(), name: "Ana López", email: "ana@acme.com", phone: "+52 55 1234 5678" },
    { id: uid(), name: "Luis Mendoza", email: "luis@nova.mx", phone: "+52 81 5555 1122" }
  ];

  state.companies = [
    { id: uid(), name: "Acme SA", sector: "Tecnología", website: "acme.com" },
    { id: uid(), name: "Nova Retail", sector: "Retail", website: "novaretail.mx" }
  ];

  state.deals = [
    { id: uid(), title: "Licencias Q2", amount: 120000, stage: "Propuesta" },
    { id: uid(), title: "Implementación CRM", amount: 450000, stage: "Negociación" }
  ];

  state.tasks = [
    { id: uid(), title: "Llamar a Ana", dueDate: todayPlusDays(1), priority: "Alta", done: false },
    { id: uid(), title: "Enviar propuesta a Nova", dueDate: todayPlusDays(2), priority: "Media", done: false }
  ];

  persistAndRender();
}

function todayPlusDays(days) {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}

function formatMoney(value) {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0
  }).format(Number(value || 0));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
