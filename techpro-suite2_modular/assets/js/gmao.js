// ========================= MODULE SWITCHER =========================
let gmaoInitialized = false;
let gmaoRenderScheduled = false;

function setNavActiveByRoute(route) {
  document.querySelectorAll('.nav-dd-item').forEach(i => i.classList.remove('active'));
  document.querySelectorAll('.nav-dd-btn').forEach(b => b.classList.remove('active-parent'));
  if (!route) return;
  const item = document.querySelector(`.nav-dd-item[data-route="${route}"]`);
  if (!item) return;
  item.classList.add('active');
  const parentDD = item.closest('.nav-dd');
  const parentBtn = parentDD ? parentDD.querySelector('.nav-dd-btn') : null;
  if (parentBtn) parentBtn.classList.add('active-parent');
}

function switchModule(mod) {
  var wComercial = document.getElementById('wrap-comercial');
  var wMant = document.getElementById('wrap-mantenimiento');
  var wCrm = document.getElementById('wrap-crm');
  var gmaoApp = document.getElementById('gmao-app');
  var wesApp = document.getElementById('wes-app');

  if (!wComercial || !wMant || !wCrm) return;

  document.querySelectorAll('.nav-dd-menu').forEach(m => m.classList.remove('show'));
  document.querySelectorAll('.nav-dd-btn').forEach(b => b.classList.remove('open'));
  document.querySelectorAll('.nav-dd-sub-menu').forEach(m => m.classList.remove('show'));
  document.querySelectorAll('.nav-dd-sub-btn').forEach(b => b.classList.remove('open'));

  // Ocultar todos
  wComercial.style.display = 'none';
  wMant.style.display = 'none';
  wCrm.style.display = 'none';
  if (gmaoApp) gmaoApp.style.display = 'none';
  if (wesApp) wesApp.style.display = 'none';
  document.body.style.overflow = '';

  if (mod === 'comercial') {
    wComercial.style.display = '';
    const activeRouteItem = document.querySelector('.nav-dd-item.active[data-route]');
    if (activeRouteItem) {
      activeRouteItem.classList.remove('active');
      const parentDD = activeRouteItem.closest('.nav-dd');
      const parentBtn = parentDD ? parentDD.querySelector('.nav-dd-btn') : null;
      if (parentBtn) parentBtn.classList.remove('active-parent');
    }
  } else if (mod === 'crm') {
    wCrm.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    setNavActiveByRoute('comercial-crm');
    crmRender();
  } else if (mod === 'mantenimiento') {
    wMant.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    if (gmaoApp) gmaoApp.style.display = 'flex';
    setNavActiveByRoute('mantenimiento-gmao');
    if (!gmaoInitialized) {
      gmaoInitialized = true;
      gmaoRender();
    } else {
      gmaoRender();
    }
  } else if (mod === 'wes') {
    wMant.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    if (wesApp) wesApp.style.display = 'block';
    setNavActiveByRoute('mantenimiento-wes');
  }
}

// ========================= GMAO PRO =========================
// ═══════════════════════════════════════════════════════
// GMAO - Sistema de Gestión de Mantenimiento Industrial
// ═══════════════════════════════════════════════════════

// ── SVG Icons ──
const icons = {
  dashboard: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>',
  clients: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
  assets: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
  orders: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/><path d="M9 14l2 2 4-4"/></svg>',
  calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
  alerts: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>',
  reports: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg>',
  settings: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72 1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
  plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',
  close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>',
  back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>',
  building: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="1"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M16 6h.01M12 6h.01M8 10h.01M16 10h.01M12 10h.01M8 14h.01M16 14h.01M12 14h.01"/></svg>',
  location: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  warning: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
  eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',
  edit: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>',
  trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',
  warehouse: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35z"/><path d="M6 18h12"/><path d="M6 14h12"/><path d="M6 10h12"/></svg>',
  zap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
  activity: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>',
  list: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>',
  clipboard: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/></svg>',
  download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
  fileText: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>',
  table: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/></svg>',
};

// ── Sample Data ──
const data = {
  clientes: [
    { id: 'CLI-001', razon_social: 'Aceros del Norte S.A. de C.V.', rfc: 'ANO920415KL3', sector: 'Metal-Mecánico', sedes: 3, activos: 47, contratos: 2, estado: 'Activo', contacto: 'Ing. Roberto Garza', email: 'rgarza@aceronorte.mx', telefono: '+52 81 1234 5678' },
    { id: 'CLI-002', razon_social: 'Plásticos Industriales MX', rfc: 'PIM180923AB1', sector: 'Químico', sedes: 2, activos: 31, contratos: 1, estado: 'Activo', contacto: 'Lic. María Torres', email: 'mtorres@plastmx.com', telefono: '+52 844 987 6543' },
    { id: 'CLI-003', razon_social: 'Alimentos del Bajío S.A.', rfc: 'ABA050712CD9', sector: 'Alimentos', sedes: 1, activos: 22, contratos: 1, estado: 'Activo', contacto: 'Ing. Carlos Mendoza', email: 'cmendoza@alibajio.mx', telefono: '+52 477 555 1234' },
    { id: 'CLI-004', razon_social: 'Farmacéutica Vitalis S.A.', rfc: 'FVS110305EF2', sector: 'Farmacéutico', sedes: 1, activos: 56, contratos: 3, estado: 'Activo', contacto: 'Dra. Ana Ruiz', email: 'aruiz@vitalis.com.mx', telefono: '+52 33 4321 8765' },
    { id: 'CLI-005', razon_social: 'Ensambles Automotrices del Centro', rfc: 'EAC990118GH7', sector: 'Automotriz', sedes: 2, activos: 89, contratos: 2, estado: 'Suspendido', contacto: 'Ing. Pedro Sánchez', email: 'psanchez@ensauto.mx', telefono: '+52 449 222 3344' },
  ],
  activos: [
    { id: 'ACT-2024-00145', nombre: 'Motor Trifásico Bomba Hidráulica #3', cliente: 'Aceros del Norte S.A.', sede: 'Planta Monterrey Norte', categoria: 'Eléctrico', criticidad: 'Alta', estado: 'Operativo', metrica: '2,340 hrs', proximo_mtto: '2026-04-15' },
    { id: 'ACT-2024-00146', nombre: 'Compresor Atlas Copco GA-75', cliente: 'Aceros del Norte S.A.', sede: 'Planta Monterrey Norte', categoria: 'Neumático', criticidad: 'Alta', estado: 'Operativo', metrica: '8,120 hrs', proximo_mtto: '2026-03-28' },
    { id: 'ACT-2024-00203', nombre: 'Banda Transportadora L2-SEC4', cliente: 'Plásticos Industriales MX', sede: 'Planta Saltillo', categoria: 'Mecánico', criticidad: 'Media', estado: 'Operativo', metrica: '1,500 ciclos', proximo_mtto: '2026-05-01' },
    { id: 'ACT-2024-00211', nombre: 'Caldera Cleaver-Brooks CB-200', cliente: 'Alimentos del Bajío S.A.', sede: 'Planta León', categoria: 'HVAC', criticidad: 'Alta', estado: 'En mantenimiento', metrica: '6,780 hrs', proximo_mtto: '2026-03-20' },
    { id: 'ACT-2024-00312', nombre: 'Sistema HVAC Carrier 30XA', cliente: 'Farmacéutica Vitalis S.A.', sede: 'Planta GDL', categoria: 'HVAC', criticidad: 'Alta', estado: 'Operativo', metrica: '4,200 hrs', proximo_mtto: '2026-04-10' },
    { id: 'ACT-2024-00350', nombre: 'Torno CNC Mazak QTN-200', cliente: 'Aceros del Norte S.A.', sede: 'Planta Apodaca', categoria: 'Mecánico', criticidad: 'Alta', estado: 'Operativo', metrica: '3,800 hrs', proximo_mtto: '2026-06-01' },
    { id: 'ACT-2024-00401', nombre: 'Inyectora Engel Victory 500', cliente: 'Plásticos Industriales MX', sede: 'Planta Ramos Arizpe', categoria: 'Hidráulico', criticidad: 'Media', estado: 'Fuera de servicio', metrica: '12,400 ciclos', proximo_mtto: '-' },
  ],
  ordenes: [
    { folio: 'OT-2026-003471', activo: 'Motor Trifásico Bomba #3', cliente: 'Aceros del Norte S.A.', tipo: 'Preventivo', prioridad: 'Alto', estado: 'Planificada', tecnico: 'Juan Pérez', supervisor: 'Luis Álvarez', fecha: '2026-04-15', periodicidad: 90, actividad: 'Servicio general a motor eléctrico' },
    { folio: 'OT-2026-003472', activo: 'Caldera CB-200', cliente: 'Alimentos del Bajío', tipo: 'Correctivo', prioridad: 'Alto', estado: 'En ejecución', tecnico: 'Miguel Ángel López', supervisor: 'Fernando Reyes', fecha: '2026-03-18', periodicidad: null, actividad: 'Mantenimiento preventivo a caldera' },
    { folio: 'OT-2026-003468', activo: 'Compresor Atlas GA-75', cliente: 'Aceros del Norte S.A.', tipo: 'Preventivo', prioridad: 'Alto', estado: 'Planificada', tecnico: 'Roberto Díaz', supervisor: 'Luis Álvarez', fecha: '2026-03-28', periodicidad: 60, actividad: 'Mantenimiento a compresor de aire' },
    { folio: 'OT-2026-003465', activo: 'Sistema HVAC Carrier', cliente: 'Farmacéutica Vitalis', tipo: 'Predictivo', prioridad: 'Medio', estado: 'Planificada', tecnico: 'Sin asignar', supervisor: 'Fernando Reyes', fecha: '2026-04-10', periodicidad: null, actividad: 'Servicio a sistema HVAC' },
    { folio: 'OT-2026-003460', activo: 'Banda Transportadora L2', cliente: 'Plásticos Industriales', tipo: 'Preventivo', prioridad: 'Bajo', estado: 'Completada', tecnico: 'Carlos Vega', supervisor: 'Luis Álvarez', fecha: '2026-03-10', periodicidad: 30, actividad: 'Inspección y ajuste de bandas transportadoras' },
    { folio: 'OT-2026-003455', activo: 'Inyectora Engel 500', cliente: 'Plásticos Industriales', tipo: 'Correctivo', prioridad: 'Alto', estado: 'En ejecución', tecnico: 'Juan Pérez', supervisor: 'Fernando Reyes', fecha: '2026-03-16', periodicidad: null, actividad: 'Servicio a sistema hidráulico' },
    { folio: 'OT-2026-003450', activo: 'Torno CNC Mazak', cliente: 'Aceros del Norte S.A.', tipo: 'Preventivo', prioridad: 'Medio', estado: 'Completada', tecnico: 'Roberto Díaz', supervisor: 'Luis Álvarez', fecha: '2026-03-05', periodicidad: 180, actividad: 'Lubricación general de maquinaria' },
  ],
  alertas: [],
  tecnicos: ['Juan Pérez', 'Roberto Díaz', 'Miguel Ángel López', 'Carlos Vega'],
  supervisores: ['Luis Álvarez', 'Fernando Reyes'],
  estadosOT: [
    { value: 'Planificada', color: 'blue', icon: 'calendar' },
    { value: 'En ejecución', color: 'orange', icon: 'zap' },
    { value: 'Completada', color: 'green', icon: 'check' },
    { value: 'Cancelada', color: 'red', icon: 'close' },
  ],
  catalogoActividades: [
    { id: 'ACT-01', nombre: 'Servicio general a motor eléctrico', categoria: 'Eléctrico', descripcion: 'Inspección visual de conexiones, medición de aislamiento con megóhmetro, verificación de vibración, temperatura de rodamientos, lubricación, limpieza de ventilador y carcasa, verificación de alineación.' },
    { id: 'ACT-02', nombre: 'Mantenimiento a compresor de aire', categoria: 'Neumático', descripcion: 'Cambio de filtro de aire y aceite, revisión de bandas, verificación de presiones, purga de condensados, revisión de válvulas de seguridad, limpieza de enfriador.' },
    { id: 'ACT-03', nombre: 'Servicio a sistema hidráulico', categoria: 'Hidráulico', descripcion: 'Verificación de nivel y estado del aceite hidráulico, revisión de mangueras y conexiones, limpieza o cambio de filtros, verificación de presiones de operación, inspección de cilindros y sellos.' },
    { id: 'ACT-04', nombre: 'Inspección y ajuste de bandas transportadoras', categoria: 'Mecánico', descripcion: 'Tensado de banda, alineación de rodillos, lubricación de chumaceras, inspección de estado de la banda, verificación de velocidad y limpieza general del sistema.' },
    { id: 'ACT-05', nombre: 'Mantenimiento preventivo a caldera', categoria: 'HVAC', descripcion: 'Limpieza de quemador, verificación de controles de seguridad, purga de caldera, revisión de niveles de agua, inspección de tubería, verificación de presión de gas y eficiencia de combustión.' },
    { id: 'ACT-06', nombre: 'Servicio a sistema HVAC', categoria: 'HVAC', descripcion: 'Limpieza de filtros y serpentines, verificación de presiones de refrigerante, revisión de motor ventilador, inspección eléctrica de contactores y relevadores, verificación de termostatos.' },
    { id: 'ACT-07', nombre: 'Calibración de instrumentos de medición', categoria: 'Instrumentación', descripcion: 'Verificación y ajuste de sensores de presión, temperatura y flujo. Calibración contra patrones de referencia, documentación de lecturas antes/después, emisión de certificado.' },
    { id: 'ACT-08', nombre: 'Lubricación general de maquinaria', categoria: 'Mecánico', descripcion: 'Aplicación de lubricante en puntos de engrase según carta de lubricación, verificación de niveles de aceite, cambio de aceite si corresponde, limpieza de graseras.' },
    { id: 'ACT-09', nombre: 'Revisión de tablero eléctrico', categoria: 'Eléctrico', descripcion: 'Termografía de conexiones, reapriete de bornes, verificación de protecciones térmicas y magnéticas, limpieza interna, revisión de ventilación del gabinete, verificación de tierras físicas.' },
    { id: 'ACT-10', nombre: 'Alineación láser de motor-bomba', categoria: 'Mecánico', descripcion: 'Alineación de precisión con equipo láser entre motor y equipo acoplado, corrección de desalineación angular y paralela, registro de valores antes/después, verificación de patas flojas.' },
  ]
};

// ── State ──
let state = {
  page: 'dashboard',
  modal: null,
  wizardStep: 0,
  selectedClient: null,
  selectedAsset: null,
  selectedOT: null,
  clientSedes: [],
  tabActive: 'info',
  otTipoMtto: '',
  otPeriodicidad: '',
  otPeriodicidadCustom: '',
  otActividadId: '',
  editingActividad: null,
  editingClient: null,
  newActNombre: '',
  newActCategoria: '',
  newActDescripcion: '',
  settingsTab: 'catalogo',
  // Filters & sorting
  otFilterCliente: '',
  otFilterTecnico: '',
  otFilterEstado: '',
  otSortCol: 'fecha',
  otSortDir: 'desc',
  calFilterCliente: '',
  calFilterTecnico: '',
  dashFilterTecnico: '',
  dashFilterSupervisor: '',
  toast: null,
};

function scheduleGmaoRender() {
  if (!gmaoInitialized || gmaoRenderScheduled) return;
  const wrap = document.getElementById('wrap-mantenimiento');
  if (!wrap || wrap.style.display === 'none') return;
  gmaoRenderScheduled = true;
  const runner = () => {
    gmaoRenderScheduled = false;
    gmaoRender();
  };
  if (typeof requestAnimationFrame === 'function') requestAnimationFrame(runner);
  else setTimeout(runner, 16);
}

function setState(updates) {
  Object.assign(state, updates);
  scheduleGmaoRender();
}

// ── Helpers ──
const $ = sel => document.querySelector(sel);
const $$ = sel => document.querySelectorAll(sel);

function statusClass(estado) {
  const map = { 'Activo': 'green', 'Operativo': 'green', 'Completada': 'green',
    'En mantenimiento': 'yellow', 'Planificada': 'blue',
    'En ejecución': 'orange',
    'Suspendido': 'red', 'Fuera de servicio': 'red', 'Cancelada': 'red',
    'Dado de baja': 'red' };
  return map[estado] || 'blue';
}

function priorityClass(p) {
  return 'priority-' + p.toLowerCase();
}

function clientActivosCount(c) {
  const name = c.razon_social.split(' ')[0];
  return data.activos.filter(a => a.cliente.includes(name)).length;
}

function clientOTs(c) {
  const name = c.razon_social.split(' ')[0];
  return data.ordenes.filter(o => o.cliente.includes(name));
}

function isOverdue(o) {
  if (o.estado === 'Completada' || o.estado === 'Cancelada') return false;
  if (!o.fecha) return false;
  const hoy = new Date('2026-03-19');
  const fecha = new Date(o.fecha);
  return fecha < hoy;
}

function alertColorClass(tipo) {
  return { danger: 'var(--danger)', warning: 'var(--warning)', info: 'var(--accent)', success: 'var(--success)' }[tipo] || 'var(--accent)';
}

// ── Render ──
function gmaoRender() {
  const app = document.getElementById('gmao-app');
  // Close any floating dropdown
  document.getElementById('status-dd-overlay')?.remove();
  // Save scroll positions before re-render
  const contentEl = app.querySelector('.content');
  const contentScroll = contentEl ? contentEl.scrollTop : 0;
  const tableWraps = app.querySelectorAll('.table-wrap');
  const tableScrolls = [];
  tableWraps.forEach(tw => tableScrolls.push(tw.scrollLeft));

  app.innerHTML = `
    ${renderSidebar()}
    <div class="main">
      ${renderHeader()}
      <div class="content">
        ${renderPage()}
      </div>
    </div>
    ${state.modal ? renderModal() : ''}
    ${state.toast ? renderToast() : ''}
  `;
  bindEvents();

  // Restore scroll positions after re-render
  const newContent = app.querySelector('.content');
  if (newContent) newContent.scrollTop = contentScroll;
  const newTableWraps = app.querySelectorAll('.table-wrap');
  newTableWraps.forEach((tw, i) => {
    if (tableScrolls[i] !== undefined) tw.scrollLeft = tableScrolls[i];
  });
}

function renderToast() {
  return `
    <div class="toast" id="toast">
      <div class="toast-icon" style="background:${state.toast.type === 'success' ? 'var(--success-soft)' : 'var(--accent-soft)'}; color:${state.toast.type === 'success' ? 'var(--success)' : 'var(--accent)'};">
        ${state.toast.type === 'success' ? icons.check : icons.calendar}
      </div>
      <div class="toast-content">
        <h4>${state.toast.title}</h4>
        <p>${state.toast.message}</p>
      </div>
    </div>
  `;
}

function renderSidebar() {
  const navItems = [
    { id: 'dashboard', icon: 'dashboard', label: 'Dashboard' },
    { id: 'clientes', icon: 'clients', label: 'Clientes' },
    { id: 'activos', icon: 'assets', label: 'Activos' },
    { id: 'ordenes', icon: 'orders', label: 'Órdenes de Trabajo', badge: data.ordenes.filter(o=>o.estado==='En ejecución').length || null },
    { id: 'calendario', icon: 'calendar', label: 'Calendario' },
    { id: 'alertas', icon: 'alerts', label: 'Alertas' },
    { id: 'reportes', icon: 'reports', label: 'Reportes / KPIs' },
  ];
  return `
    <div class="sidebar">
      <div class="sidebar-logo">
        <div class="logo-icon">GM</div>
        <span>GMAO Pro</span>
      </div>
      <div class="sidebar-nav">
        <div class="nav-section">
          <div class="nav-section-title">Principal</div>
          ${navItems.slice(0,1).map(n => `
            <div class="nav-item ${state.page===n.id?'active':''}" data-nav="${n.id}">
              ${icons[n.icon]}<span>${n.label}</span>
              ${n.badge ? `<span class="nav-badge">${n.badge}</span>` : ''}
            </div>
          `).join('')}
        </div>
        <div class="nav-section">
          <div class="nav-section-title">Operaciones</div>
          ${navItems.slice(1,6).map(n => `
            <div class="nav-item ${state.page===n.id?'active':''}" data-nav="${n.id}">
              ${icons[n.icon]}<span>${n.label}</span>
              ${n.badge ? `<span class="nav-badge">${n.badge}</span>` : ''}
            </div>
          `).join('')}
        </div>
        <div class="nav-section">
          <div class="nav-section-title">Análisis</div>
          ${navItems.slice(6).map(n => `
            <div class="nav-item ${state.page===n.id?'active':''}" data-nav="${n.id}">
              ${icons[n.icon]}<span>${n.label}</span>
            </div>
          `).join('')}
        </div>
        <div class="nav-section" style="margin-top:auto; padding-top:12px; border-top:1px solid rgba(255,255,255,0.15);">
          <div class="nav-item" data-nav="settings">
            ${icons.settings}<span>Configuración</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderHeader() {
  return `
    <div class="header">
      <div class="header-search">
        ${icons.search}
        <input type="text" placeholder="Buscar clientes, activos, OTs...">
      </div>
      <div class="header-actions">
        <button class="header-btn" title="Notificaciones" data-action="show-alerts">
          ${icons.alerts}
          <span class="notif-dot"></span>
        </button>
        <div class="avatar">LA</div>
      </div>
    </div>
  `;
}

function renderPage() {
  switch(state.page) {
    case 'dashboard': return renderDashboard();
    case 'clientes': return state.selectedClient ? renderClientDetail() : renderClientes();
    case 'activos': return state.selectedAsset ? renderAssetDetail() : renderActivos();
    case 'ordenes': return state.selectedOT ? renderOTDetail() : renderOrdenes();
    case 'calendario': return renderCalendario();
    case 'alertas': return renderAlertas();
    case 'reportes': return renderReportes();
    case 'settings': return renderSettings();
    default: return renderDashboard();
  }
}

// ═════════════ DASHBOARD ═════════════
function renderDashboard() {
  // Apply filters
  let dashOTs = [...data.ordenes];
  if (state.dashFilterTecnico) dashOTs = dashOTs.filter(o => o.tecnico === state.dashFilterTecnico);
  if (state.dashFilterSupervisor) dashOTs = dashOTs.filter(o => o.supervisor === state.dashFilterSupervisor);

  const clientesActivos = data.clientes.filter(c => c.estado === 'Activo').length;
  const totalActivos = data.activos.length;
  const fueraServicio = data.activos.filter(a => a.estado === 'Fuera de servicio').length;
  const otsAbiertas = dashOTs.filter(o => o.estado === 'Planificada' || o.estado === 'En ejecución').length;
  const otsVencidas = dashOTs.filter(o => isOverdue(o)).length;
  const completadas = dashOTs.filter(o => o.estado === 'Completada').length;
  const pctComp = dashOTs.length > 0 ? ((completadas / dashOTs.length) * 100).toFixed(1) : 0;

  const allTecnicos = [...new Set(data.ordenes.map(o => o.tecnico).filter(t => t !== 'Sin asignar'))].sort();
  const allSupervisores = [...new Set(data.ordenes.map(o => o.supervisor).filter(Boolean))].sort();

  return `
    <h1 class="page-title">Dashboard</h1>
    <p class="page-subtitle">Resumen operativo &mdash; Marzo 2026</p>
    <div class="filter-bar">
      <label>${icons.search} &nbsp;Filtrar por:</label>
      <select data-filter="dashFilterTecnico">
        <option value="">Todos los técnicos</option>
        ${allTecnicos.map(t => `<option ${state.dashFilterTecnico===t?'selected':''}>${t}</option>`).join('')}
      </select>
      <select data-filter="dashFilterSupervisor">
        <option value="">Todos los supervisores</option>
        ${allSupervisores.map(s => `<option ${state.dashFilterSupervisor===s?'selected':''}>${s}</option>`).join('')}
      </select>
      ${(state.dashFilterTecnico || state.dashFilterSupervisor) ? `
        <div class="filter-sep"></div>
        <button class="btn-clear" data-action="clear-dash-filters">✕ Limpiar filtros</button>
        <span class="filter-count">${dashOTs.length} OTs</span>
      ` : ''}
    </div>
    <div class="stats-grid">
      <div class="stat-card" data-nav="clientes">
        <div class="stat-header">
          <div class="stat-icon" style="background:var(--accent-soft); color:var(--accent);">${icons.clients}</div>
        </div>
        <div class="stat-value">${clientesActivos}</div>
        <div class="stat-label">Clientes activos (${data.clientes.length} total)</div>
      </div>
      <div class="stat-card" data-nav="activos">
        <div class="stat-header">
          <div class="stat-icon" style="background:var(--info-soft); color:var(--info);">${icons.assets}</div>
          ${fueraServicio > 0 ? `<span class="stat-badge" style="background:var(--danger-soft); color:var(--danger);">${fueraServicio} fuera de servicio</span>` : ''}
        </div>
        <div class="stat-value">${totalActivos}</div>
        <div class="stat-label">Activos registrados</div>
      </div>
      <div class="stat-card" data-nav="ordenes">
        <div class="stat-header">
          <div class="stat-icon" style="background:var(--orange-soft); color:var(--orange);">${icons.orders}</div>
          ${otsVencidas > 0 ? `<span class="stat-badge" style="background:var(--danger-soft); color:var(--danger);">${otsVencidas} vencida${otsVencidas>1?'s':''}</span>` : ''}
        </div>
        <div class="stat-value">${otsAbiertas}</div>
        <div class="stat-label">OTs abiertas</div>
      </div>
      <div class="stat-card">
        <div class="stat-header">
          <div class="stat-icon" style="background:var(--success-soft); color:var(--success);">${icons.activity}</div>
        </div>
        <div class="stat-value">${pctComp}<span style="font-size:16px">%</span></div>
        <div class="stat-label">Tasa de completado (${completadas}/${dashOTs.length})</div>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <span class="card-title">Órdenes de Trabajo${state.dashFilterTecnico ? ' — Téc. ' + state.dashFilterTecnico : ''}${state.dashFilterSupervisor ? ' — Sup. ' + state.dashFilterSupervisor : ''}</span>
        <span class="card-action" data-nav="ordenes">Ver todas →</span>
      </div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Folio</th><th>Actividad</th><th>Activo</th><th>Cliente</th><th>Prioridad</th><th>Estado</th><th>Técnico</th><th>Supervisor</th><th>Fecha</th></tr></thead>
          <tbody>
            ${dashOTs.slice(0,10).map(o => {
              const vencida = isOverdue(o);
              return `
              <tr style="cursor:pointer" class="${vencida ? 'overdue' : ''}" data-ot="${o.folio}">
                <td><span style="font-family:'JetBrains Mono',monospace; font-size:12px; color:var(--accent);">${o.folio}</span></td>
                <td style="font-size:12px; max-width:160px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${o.actividad || '<span style="color:var(--text-muted);">—</span>'}</td>
                <td style="font-size:12px;">${o.activo}</td>
                <td style="font-size:12px;">${o.cliente}</td>
                <td><span class="priority-pill ${priorityClass(o.prioridad)}">${o.prioridad}</span></td>
                <td>
                  <span class="status-pill status-${statusClass(o.estado)}">${o.estado}</span>
                  ${vencida ? ' <span class="overdue-badge">⚠ Vencida</span>' : ''}
                </td>
                <td style="font-size:12px;">${o.tecnico}</td>
                <td style="font-size:12px;">${o.supervisor || '—'}</td>
                <td style="font-family:'JetBrains Mono',monospace; font-size:12px; ${vencida ? 'color:var(--danger); font-weight:600;' : ''}">${o.fecha}</td>
              </tr>`;
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// ═════════════ CLIENTES ═════════════
function renderClientes() {
  return `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
      <div>
        <h1 class="page-title">Clientes</h1>
        <p class="page-subtitle">${data.clientes.length} clientes registrados</p>
      </div>
      <button class="btn btn-primary" data-action="new-client">${icons.plus} Nuevo Cliente</button>
    </div>
    <div class="card">
      <div class="table-wrap">
        <table>
          <thead><tr><th>ID</th><th>Razón Social</th><th>RFC</th><th>Sector</th><th>Sedes</th><th>Activos</th><th>Estado</th><th></th></tr></thead>
          <tbody>
            ${data.clientes.map(c => `
              <tr>
                <td><span style="font-family:'JetBrains Mono',monospace; font-size:12px; color:var(--accent);">${c.id}</span></td>
                <td style="font-weight:600;">${c.razon_social}</td>
                <td style="font-family:'JetBrains Mono',monospace; font-size:12px;">${c.rfc}</td>
                <td>${c.sector}</td>
                <td style="text-align:center">${c.sedes}</td>
                <td style="text-align:center">${clientActivosCount(c)}</td>
                <td><span class="status-pill status-${statusClass(c.estado)}">${c.estado}</span></td>
                <td style="white-space:nowrap;">
                  <button class="btn btn-sm btn-secondary" data-client="${c.id}" title="Ver">${icons.eye}</button>
                  <button class="btn btn-sm btn-secondary" data-action="edit-client" data-cid="${c.id}" title="Editar">${icons.edit}</button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderClientDetail() {
  const c = data.clientes.find(x => x.id === state.selectedClient);
  if (!c) return '';
  const clientAssets = data.activos.filter(a => a.cliente.includes(c.razon_social.split(' ')[0]));
  const ots = clientOTs(c);
  const actCount = clientActivosCount(c);
  return `
    <div style="margin-bottom:16px;">
      <button class="btn btn-secondary btn-sm" data-action="back-clients">${icons.back} Volver a Clientes</button>
    </div>
    <div class="detail-header">
      <div>
        <h1 class="page-title">${c.razon_social}</h1>
        <div class="detail-meta">
          <span class="meta-item">${icons.building} ${c.rfc}</span>
          <span class="meta-item">${icons.location} ${c.sector}</span>
          <span class="meta-item"><span class="status-pill status-${statusClass(c.estado)}">${c.estado}</span></span>
        </div>
      </div>
      <div style="display:flex; gap:8px;">
        <button class="btn btn-primary btn-sm" data-action="edit-client" data-cid="${c.id}">${icons.edit} Editar</button>
        <button class="btn btn-sm btn-secondary" style="color:var(--danger);" data-action="delete-client" data-cid="${c.id}">${icons.trash} Eliminar</button>
      </div>
    </div>
    <div class="tabs">
      <div class="tab ${state.tabActive==='info'?'active':''}" data-tab="info">Información</div>
      <div class="tab ${state.tabActive==='sedes'?'active':''}" data-tab="sedes">Sedes (${c.sedes})</div>
      <div class="tab ${state.tabActive==='assets'?'active':''}" data-tab="assets">Activos (${actCount})</div>
      <div class="tab ${state.tabActive==='ots'?'active':''}" data-tab="ots">OTs (${ots.length})</div>
    </div>
    ${state.tabActive === 'info' ? `
      <div class="card"><div class="card-body">
        <div class="info-grid">
          <div class="info-item"><div class="info-label">Contacto Principal</div><div class="info-value">${c.contacto}</div></div>
          <div class="info-item"><div class="info-label">Email</div><div class="info-value">${c.email}</div></div>
          <div class="info-item"><div class="info-label">Teléfono</div><div class="info-value">${c.telefono}</div></div>
          <div class="info-item"><div class="info-label">Sector Industrial</div><div class="info-value">${c.sector}</div></div>
          <div class="info-item"><div class="info-label">Sedes Registradas</div><div class="info-value">${c.sedes}</div></div>
          <div class="info-item"><div class="info-label">Activos Totales</div><div class="info-value">${actCount}</div></div>
        </div>
      </div></div>
    ` : state.tabActive === 'assets' ? `
      <div class="card"><div class="table-wrap"><table>
        <thead><tr><th>ID</th><th>Equipo</th><th>Sede</th><th>Categoría</th><th>Criticidad</th><th>Estado</th></tr></thead>
        <tbody>${clientAssets.map(a => `<tr>
          <td style="font-family:'JetBrains Mono',monospace; font-size:12px; color:var(--accent);">${a.id}</td>
          <td style="font-weight:500;">${a.nombre}</td><td>${a.sede}</td><td>${a.categoria}</td>
          <td><span class="priority-pill ${priorityClass(a.criticidad)}">${a.criticidad}</span></td>
          <td><span class="status-pill status-${statusClass(a.estado)}">${a.estado}</span></td>
        </tr>`).join('')}</tbody>
      </table></div></div>
    ` : state.tabActive === 'ots' ? `
      <div class="card"><div class="table-wrap"><table>
        <thead><tr><th>Folio</th><th>Activo</th><th>Tipo</th><th>Prioridad</th><th>Estado</th><th>Fecha</th></tr></thead>
        <tbody>${ots.map(o => `<tr>
          <td style="font-family:'JetBrains Mono',monospace; font-size:12px; color:var(--accent);">${o.folio}</td>
          <td>${o.activo}</td><td>${o.tipo}</td>
          <td><span class="priority-pill ${priorityClass(o.prioridad)}">${o.prioridad}</span></td>
          <td><span class="status-pill status-${statusClass(o.estado)}">${o.estado}</span></td>
          <td style="font-family:'JetBrains Mono',monospace; font-size:12px;">${o.fecha}</td>
        </tr>`).join('')}</tbody>
      </table></div></div>
    ` : `
      <div class="card"><div class="card-body">
        <p style="color:var(--text-secondary); font-size:13px;">Información de sedes disponible en el sistema completo.</p>
      </div></div>
    `}
  `;
}

// ═════════════ ACTIVOS ═════════════
function renderActivos() {
  return `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
      <div>
        <h1 class="page-title">Activos</h1>
        <p class="page-subtitle">${data.activos.length} equipos registrados</p>
      </div>
      <button class="btn btn-primary" data-action="new-asset">${icons.plus} Nuevo Activo</button>
    </div>
    <div class="card">
      <div class="table-wrap">
        <table>
          <thead><tr><th>Código</th><th>Equipo</th><th>Cliente</th><th>Sede</th><th>Categoría</th><th>Criticidad</th><th>Estado</th><th>Próx. Mtto</th><th></th></tr></thead>
          <tbody>
            ${data.activos.map(a => `
              <tr>
                <td><span style="font-family:'JetBrains Mono',monospace; font-size:12px; color:var(--accent);">${a.id}</span></td>
                <td style="font-weight:500; max-width:200px; overflow:hidden; text-overflow:ellipsis;">${a.nombre}</td>
                <td style="font-size:12px;">${a.cliente}</td>
                <td style="font-size:12px;">${a.sede}</td>
                <td>${a.categoria}</td>
                <td><span class="priority-pill ${priorityClass(a.criticidad)}">${a.criticidad}</span></td>
                <td><span class="status-pill status-${statusClass(a.estado)}">${a.estado}</span></td>
                <td style="font-family:'JetBrains Mono',monospace; font-size:12px;">${a.proximo_mtto}</td>
                <td><button class="btn btn-sm btn-secondary" data-asset="${a.id}">${icons.eye}</button></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderAssetDetail() {
  const a = data.activos.find(x => x.id === state.selectedAsset);
  if (!a) return '';
  return `
    <div style="margin-bottom:16px;">
      <button class="btn btn-secondary btn-sm" data-action="back-assets">${icons.back} Volver a Activos</button>
    </div>
    <div class="detail-header">
      <div>
        <h1 class="page-title">${a.nombre}</h1>
        <div class="detail-meta">
          <span class="meta-item" style="font-family:'JetBrains Mono',monospace; color:var(--accent);">${a.id}</span>
          <span class="meta-item">${icons.building} ${a.cliente}</span>
          <span class="meta-item">${icons.location} ${a.sede}</span>
          <span class="meta-item"><span class="status-pill status-${statusClass(a.estado)}">${a.estado}</span></span>
        </div>
      </div>
      <div style="display:flex; gap:8px;">
        <button class="btn btn-primary btn-sm" data-action="new-ot-from-asset">${icons.orders} Crear OT</button>
        <button class="btn btn-secondary btn-sm">${icons.edit} Editar</button>
      </div>
    </div>
    <div class="grid-2">
      <div class="card">
        <div class="card-header"><span class="card-title">Ficha Técnica</span></div>
        <div class="card-body">
          <div class="info-grid">
            <div class="info-item"><div class="info-label">Categoría</div><div class="info-value">${a.categoria}</div></div>
            <div class="info-item"><div class="info-label">Criticidad</div><div class="info-value"><span class="priority-pill ${priorityClass(a.criticidad)}">${a.criticidad}</span></div></div>
            <div class="info-item"><div class="info-label">Horas / Métrica</div><div class="info-value" style="font-family:'JetBrains Mono',monospace;">${a.metrica}</div></div>
            <div class="info-item"><div class="info-label">Próximo Mantenimiento</div><div class="info-value" style="font-family:'JetBrains Mono',monospace;">${a.proximo_mtto}</div></div>
            <div class="info-item"><div class="info-label">Sede / Planta</div><div class="info-value">${a.sede}</div></div>
            <div class="info-item"><div class="info-label">Cliente</div><div class="info-value">${a.cliente}</div></div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header"><span class="card-title">Plan de Mantenimiento Preventivo</span></div>
        <div class="card-body">
          <div style="margin-bottom:12px;">
            <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
              <span style="font-size:12px; color:var(--text-secondary);">Progreso hacia próximo servicio</span>
              <span style="font-size:12px; font-weight:600; color:var(--warning);">72%</span>
            </div>
            <div class="progress-bar"><div class="progress-fill" style="width:72%; background: linear-gradient(90deg, var(--success), var(--warning));"></div></div>
          </div>
          <div class="info-grid" style="grid-template-columns:1fr 1fr;">
            <div class="info-item"><div class="info-label">Frecuencia</div><div class="info-value">Cada 90 días</div></div>
            <div class="info-item"><div class="info-label">Límite Métr.</div><div class="info-value">500 hrs operación</div></div>
            <div class="info-item"><div class="info-label">Último Servicio</div><div class="info-value">2026-01-15</div></div>
            <div class="info-item"><div class="info-label">Próximo</div><div class="info-value" style="color:var(--warning); font-weight:600;">${a.proximo_mtto}</div></div>
          </div>
        </div>
      </div>
    </div>
    <div class="card" style="margin-top:14px;">
      <div class="card-header"><span class="card-title">Checklist de Mantenimiento Preventivo</span></div>
      <div class="card-body">
        ${['Inspección visual de conexiones eléctricas','Medición de aislamiento con megóhmetro (mín. 1 MΩ)','Verificación de vibración (máx. 4.5 mm/s)','Verificación temperatura rodamientos (máx. 70°C)','Lubricación de rodamientos (Grasa SKF LGMT 2)','Limpieza de ventilador y carcasa','Verificación alineación motor-bomba'].map((t,i) => `
          <div class="checklist-item">
            <div class="check-box ${i<0?'checked':''}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg></div>
            <span class="check-text">${i+1}. ${t}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// ═════════════ ORDENES DE TRABAJO ═════════════
function getFilteredOrdenes() {
  let list = [...data.ordenes];
  if (state.otFilterCliente) list = list.filter(o => o.cliente === state.otFilterCliente);
  if (state.otFilterTecnico) list = list.filter(o => o.tecnico === state.otFilterTecnico);
  if (state.otFilterEstado) {
    list = list.filter(o => o.estado === state.otFilterEstado);
  }
  // Sort
  const col = state.otSortCol;
  const dir = state.otSortDir === 'asc' ? 1 : -1;
  list.sort((a, b) => {
    let va = a[col] || '', vb = b[col] || '';
    if (col === 'fecha') { va = va || '9999'; vb = vb || '9999'; }
    if (col === 'prioridad') {
      const pOrder = { 'Alto': 0, 'Medio': 1, 'Bajo': 2 };
      return (pOrder[va] ?? 9) > (pOrder[vb] ?? 9) ? dir : -dir;
    }
    return va > vb ? dir : va < vb ? -dir : 0;
  });
  return list;
}

function renderOrdenes() {
  const allClientes = [...new Set(data.ordenes.map(o => o.cliente))].sort();
  const allTecnicos = [...new Set(data.ordenes.map(o => o.tecnico).filter(t => t !== 'Sin asignar'))].sort();
  const filtered = getFilteredOrdenes();
  const sc = state.otSortCol;
  const sd = state.otSortDir;
  function thClass(col) { return col === sc ? `sortable ${sd}` : 'sortable'; }

  return `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
      <div>
        <h1 class="page-title">Órdenes de Trabajo</h1>
        <p class="page-subtitle">${data.ordenes.length} órdenes en el sistema</p>
      </div>
      <div style="display:flex; gap:8px; align-items:center;">
        <div style="display:flex; gap:4px; border:1px solid var(--border); border-radius:6px; padding:2px; background:var(--bg-input);">
          <button class="btn btn-sm btn-secondary" data-action="export-excel" title="Exportar a Excel" style="border:none; background:none; gap:4px;">
            ${icons.table} <span style="font-size:11px;">Excel</span>
          </button>
          <div style="width:1px; background:var(--border);"></div>
          <button class="btn btn-sm btn-secondary" data-action="export-pdf" title="Exportar a PDF" style="border:none; background:none; gap:4px;">
            ${icons.fileText} <span style="font-size:11px;">PDF</span>
          </button>
        </div>
        <button class="btn btn-primary" data-action="new-ot">${icons.plus} Nueva OT</button>
      </div>
    </div>
    <div class="filter-bar">
      <label>${icons.search} &nbsp;Filtros:</label>
      <select data-filter="otFilterCliente">
        <option value="">Todos los clientes</option>
        ${allClientes.map(c => `<option ${state.otFilterCliente===c?'selected':''}>${c}</option>`).join('')}
      </select>
      <select data-filter="otFilterTecnico">
        <option value="">Todos los técnicos</option>
        ${allTecnicos.map(t => `<option ${state.otFilterTecnico===t?'selected':''}>${t}</option>`).join('')}
      </select>
      <select data-filter="otFilterEstado">
        <option value="">Todos los estados</option>
        <option ${state.otFilterEstado==='Planificada'?'selected':''}>Planificada</option>
        <option ${state.otFilterEstado==='En ejecución'?'selected':''}>En ejecución</option>
        <option ${state.otFilterEstado==='Completada'?'selected':''}>Completada</option>
        <option ${state.otFilterEstado==='Cancelada'?'selected':''}>Cancelada</option>
      </select>
      ${(state.otFilterCliente || state.otFilterTecnico || state.otFilterEstado) ? `
        <div class="filter-sep"></div>
        <button class="btn-clear" data-action="clear-ot-filters">✕ Limpiar filtros</button>
      ` : ''}
      <span class="filter-count">${filtered.length} de ${data.ordenes.length}</span>
    </div>
    <div class="card">
      <div class="table-wrap">
        <table>
          <thead><tr>
            <th class="${thClass('folio')}" data-sort="folio">Folio</th>
            <th class="${thClass('actividad')}" data-sort="actividad">Actividad</th>
            <th class="${thClass('activo')}" data-sort="activo">Activo</th>
            <th class="${thClass('cliente')}" data-sort="cliente">Cliente</th>
            <th class="${thClass('tipo')}" data-sort="tipo">Tipo</th>
            <th>Period.</th>
            <th class="${thClass('prioridad')}" data-sort="prioridad">Prioridad</th>
            <th>Estado</th>
            <th class="${thClass('tecnico')}" data-sort="tecnico">Técnico</th>
            <th class="${thClass('fecha')}" data-sort="fecha">Fecha</th>
            <th></th>
          </tr></thead>
          <tbody>
            ${filtered.map(o => {
              const vencida = isOverdue(o);
              return `
              <tr class="${vencida ? 'overdue' : ''}">
                <td><span style="font-family:'JetBrains Mono',monospace; font-size:12px; color:var(--accent);">${o.folio}</span></td>
                <td style="font-size:12px; max-width:180px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;" title="${o.actividad || ''}">${o.actividad || '<span style="color:var(--text-muted);">—</span>'}</td>
                <td style="font-weight:500; max-width:160px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${o.activo}</td>
                <td style="font-size:12px;">${o.cliente}</td>
                <td>${o.tipo}</td>
                <td>${o.periodicidad ? `<span style="font-family:'JetBrains Mono',monospace; font-size:11px; background:var(--accent-soft); color:var(--accent); padding:2px 8px; border-radius:10px; font-weight:600;">↻ ${o.periodicidad}d</span>` : '<span style="color:var(--text-muted); font-size:11px;">—</span>'}</td>
                <td><span class="priority-pill ${priorityClass(o.prioridad)}">${o.prioridad}</span></td>
                <td class="status-cell">
                  <span class="status-trigger status-pill status-${statusClass(o.estado)}" data-action="toggle-status" data-folio="${o.folio}">
                    ${o.estado} <span class="status-caret">▼</span>
                  </span>
                  ${vencida ? ' <span class="overdue-badge">⚠ Vencida</span>' : ''}
                </td>
                <td style="font-size:12px;">${o.tecnico}</td>
                <td style="font-family:'JetBrains Mono',monospace; font-size:12px; ${vencida ? 'color:var(--danger); font-weight:600;' : ''}">${o.fecha}</td>
                <td><button class="btn btn-sm btn-secondary" data-ot-detail="${o.folio}">${icons.eye}</button></td>
              </tr>`;
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderOTDetail() {
  const o = data.ordenes.find(x => x.folio === state.selectedOT);
  if (!o) return '';
  const steps = ['Planificada','En ejecución','Completada','Cancelada'];
  const currentStep = steps.indexOf(o.estado);
  return `
    <div style="margin-bottom:16px;">
      <button class="btn btn-secondary btn-sm" data-action="back-ordenes">${icons.back} Volver a OTs</button>
    </div>
    <div class="detail-header">
      <div>
        <h1 class="page-title" style="font-family:'JetBrains Mono',monospace;">${o.folio}</h1>
        <div class="detail-meta">
          <span class="meta-item">${icons.assets} ${o.activo}</span>
          <span class="meta-item">${icons.building} ${o.cliente}</span>
          <span class="meta-item">${icons.clock} ${o.fecha}</span>
        </div>
      </div>
      <div style="display:flex; gap:8px;">
        ${(o.estado !== 'Completada' && o.estado !== 'Cancelada') ? `<button class="btn btn-success btn-sm" data-action="complete-ot" data-folio="${o.folio}">${icons.check} Completar OT</button>` : ''}
        <span class="priority-pill ${priorityClass(o.prioridad)}" style="font-size:13px; padding:6px 14px;">${o.prioridad}</span>
        <span class="status-pill status-${statusClass(o.estado)}" style="font-size:13px; padding:6px 14px;">${o.estado}</span>
      </div>
    </div>
    ${isOverdue(o) ? `
    <div class="card" style="margin-bottom:14px; border-left: 3px solid var(--danger); background:var(--danger-soft);">
      <div class="card-body" style="display:flex; align-items:center; gap:12px; padding:12px 16px;">
        <span style="font-size:20px;">⚠</span>
        <div>
          <div style="font-size:13px; font-weight:700; color:var(--danger);">OT VENCIDA</div>
          <div style="font-size:12px; color:var(--text-secondary);">La fecha programada (${o.fecha}) ya pasó y la OT sigue en estado "${o.estado}". Requiere atención inmediata.</div>
        </div>
      </div>
    </div>
    ` : ''}
    ${o.periodicidad ? `
    <div class="card" style="margin-bottom:14px; border-left: 3px solid var(--accent);">
      <div class="card-body" style="display:flex; align-items:center; gap:14px;">
        <div style="width:40px;height:40px;border-radius:8px;background:var(--accent-soft);color:var(--accent);display:flex;align-items:center;justify-content:center;">${icons.calendar}</div>
        <div style="flex:1;">
          <div style="font-size:13px; font-weight:600;">OT Preventiva Recurrente — cada ${o.periodicidad} días</div>
          <div style="font-size:12px; color:var(--text-secondary);">Al completar esta orden, el sistema generará automáticamente la siguiente OT programada para ${o.periodicidad} días después.</div>
        </div>
        <div style="text-align:center; padding:8px 16px; background:var(--bg-input); border-radius:8px; border:1px solid var(--border);">
          <div style="font-size:10px; color:var(--text-muted); font-weight:600; text-transform:uppercase;">Periodicidad</div>
          <div style="font-size:22px; font-weight:700; font-family:'JetBrains Mono',monospace; color:var(--accent);">${o.periodicidad}<span style="font-size:11px;">d</span></div>
        </div>
      </div>
    </div>
    ` : ''}
    <div class="card" style="margin-bottom:14px;">
      <div class="card-body">
        <div style="display:flex; justify-content:space-between; padding:0 20px;">
          ${steps.map((s, i) => `
            <div style="text-align:center; flex:1; position:relative;">
              <div style="width:28px;height:28px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;
                ${i < currentStep ? 'background:var(--success);color:#fff;' : i === currentStep ? 'background:var(--accent);color:#fff;' : 'background:var(--bg-input);color:var(--text-muted);border:2px solid var(--border);'}
              ">${i < currentStep ? '✓' : i+1}</div>
              <div style="font-size:10px; margin-top:4px; color:${i <= currentStep ? 'var(--text-primary)' : 'var(--text-muted)'};">${s}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
    <div class="grid-2">
      <div class="card">
        <div class="card-header"><span class="card-title">Detalles de la OT</span></div>
        <div class="card-body">
          <div class="info-grid" style="grid-template-columns:1fr 1fr;">
            <div class="info-item"><div class="info-label">Actividad</div><div class="info-value" style="font-weight:600;">${o.actividad || '<span style="color:var(--text-muted);">Sin asignar</span>'}</div></div>
            <div class="info-item"><div class="info-label">Tipo Mantenimiento</div><div class="info-value">${o.tipo}</div></div>
            <div class="info-item"><div class="info-label">Técnico Asignado</div><div class="info-value">${o.tecnico}</div></div>
            <div class="info-item"><div class="info-label">Supervisor</div><div class="info-value">${o.supervisor || '<span style="color:var(--text-muted);">Sin asignar</span>'}</div></div>
            <div class="info-item"><div class="info-label">Fecha Programada</div><div class="info-value" ${isOverdue(o) ? 'style="color:var(--danger); font-weight:600;"' : ''}>${o.fecha}${isOverdue(o) ? ' (VENCIDA)' : ''}</div></div>
            <div class="info-item"><div class="info-label">Periodicidad</div><div class="info-value">${o.periodicidad ? `Cada ${o.periodicidad} días (recurrente)` : 'No aplica'}</div></div>
            <div class="info-item"><div class="info-label">Prioridad</div><div class="info-value"><span class="priority-pill ${priorityClass(o.prioridad)}">${o.prioridad}</span></div></div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header"><span class="card-title">Actividad Reciente</span></div>
        <div class="card-body">
          <div class="feed-item">
            <div class="feed-icon" style="background:var(--accent-soft); color:var(--accent);">${icons.orders}</div>
            <div><div class="feed-text">OT creada automáticamente por plan preventivo</div><div class="feed-time">2026-03-01 06:00</div></div>
          </div>
          <div class="feed-item">
            <div class="feed-icon" style="background:var(--success-soft); color:var(--success);">${icons.check}</div>
            <div><div class="feed-text">Aprobada por Coord. Luis Álvarez</div><div class="feed-time">2026-03-01 09:15</div></div>
          </div>
          <div class="feed-item">
            <div class="feed-icon" style="background:var(--info-soft); color:var(--info);">${icons.clients}</div>
            <div><div class="feed-text">Técnico ${o.tecnico} asignado</div><div class="feed-time">2026-03-02 10:30</div></div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ═════════════ CALENDARIO ═════════════
function renderCalendario() {
  const dayNames = ['Lun','Mar','Mié','Jue','Vie','Sáb','Dom'];
  const daysInMonth = 31;
  const today = 18;
  const allClientes = [...new Set(data.ordenes.map(o => o.cliente))].sort();
  const allTecnicos = [...new Set(data.ordenes.map(o => o.tecnico).filter(t => t !== 'Sin asignar'))].sort();

  // Filter OTs for calendar
  let calOTs = data.ordenes.filter(o => o.estado !== 'Validada' && o.estado !== 'Cancelada' && o.estado !== 'Completada');
  if (state.calFilterCliente) calOTs = calOTs.filter(o => o.cliente === state.calFilterCliente);
  if (state.calFilterTecnico) calOTs = calOTs.filter(o => o.tecnico === state.calFilterTecnico);

  // Get days with events from filtered OTs
  const eventDays = new Set();
  calOTs.forEach(o => {
    if (o.fecha && o.fecha.startsWith('2026-03-')) {
      const d = parseInt(o.fecha.split('-')[2]);
      if (d >= 1 && d <= 31) eventDays.add(d);
    }
  });

  // Build events list sorted by date
  const calEvents = calOTs.filter(o => o.fecha).sort((a,b) => a.fecha > b.fecha ? 1 : -1);

  return `
    <h1 class="page-title">Calendario de Mantenimiento</h1>
    <p class="page-subtitle">Marzo 2026 — Vista mensual</p>
    <div class="filter-bar">
      <label>${icons.search} &nbsp;Filtros:</label>
      <select data-filter="calFilterCliente">
        <option value="">Todos los clientes</option>
        ${allClientes.map(c => `<option ${state.calFilterCliente===c?'selected':''}>${c}</option>`).join('')}
      </select>
      <select data-filter="calFilterTecnico">
        <option value="">Todos los técnicos</option>
        ${allTecnicos.map(t => `<option ${state.calFilterTecnico===t?'selected':''}>${t}</option>`).join('')}
      </select>
      ${(state.calFilterCliente || state.calFilterTecnico) ? `
        <div class="filter-sep"></div>
        <button class="btn-clear" data-action="clear-cal-filters">✕ Limpiar filtros</button>
      ` : ''}
      <span class="filter-count">${calEvents.length} actividades</span>
    </div>
    <div class="card" style="margin-bottom:14px;">
      <div class="card-header">
        <span class="card-title">← Febrero 2026 &nbsp;&nbsp;&nbsp; <strong>Marzo 2026</strong> &nbsp;&nbsp;&nbsp; Abril 2026 →</span>
      </div>
      <div class="card-body">
        <div class="calendar-grid">
          ${dayNames.map(d => `<div class="cal-header">${d}</div>`).join('')}
          ${Array.from({length:6},() => `<div class="cal-day empty"></div>`).join('')}
          ${Array.from({length:daysInMonth},(_, i) => {
            const d = i+1;
            const isToday = d === today;
            const hasEvent = eventDays.has(d);
            return `<div class="cal-day ${isToday?'today':''} ${hasEvent?'has-event':''}">${d}</div>`;
          }).join('')}
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header"><span class="card-title">Actividades Programadas${state.calFilterCliente ? ' — ' + state.calFilterCliente : ''}${state.calFilterTecnico ? ' — Téc. ' + state.calFilterTecnico : ''}</span></div>
      <div class="card-body">
        ${calEvents.length === 0 ? `
          <div style="text-align:center; padding:20px; color:var(--text-muted);">
            <p>No hay actividades que coincidan con los filtros seleccionados.</p>
          </div>
        ` : calEvents.map(ev => {
          const fechaParts = ev.fecha.split('-');
          const dia = parseInt(fechaParts[2]);
          const meses = ['','Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
          const mes = meses[parseInt(fechaParts[1])] || '';
          return `
          <div style="display:flex; align-items:center; gap:14px; padding:10px 0; border-bottom:1px solid var(--border);">
            <div style="min-width:60px; text-align:center;">
              <div style="font-size:18px; font-weight:700; font-family:'JetBrains Mono',monospace; color:var(--accent);">${dia}</div>
              <div style="font-size:11px; color:var(--text-muted);">${mes}</div>
            </div>
            <div style="flex:1;">
              <div style="font-size:13px; font-weight:600;">${ev.tipo} — ${ev.activo}</div>
              <div style="font-size:11px; color:var(--text-secondary);">${ev.folio} · ${ev.cliente} · Téc: ${ev.tecnico}</div>
            </div>
            <span class="status-pill status-${statusClass(ev.estado)}" style="font-size:10px;">${ev.estado}</span>
            <span class="priority-pill ${priorityClass(ev.prioridad)}">${ev.prioridad}</span>
          </div>`;
        }).join('')}
      </div>
    </div>
  `;
}

// ═════════════ ALERTAS ═════════════
function renderAlertas() {
  // Generate alerts dynamically from real data
  const alerts = [];
  // OTs en ejecución
  data.ordenes.filter(o => o.estado === 'En ejecución').forEach(o => {
    alerts.push({ tipo: 'warning', texto: `${o.folio}: "${o.activo}" en ejecución. Técnico: ${o.tecnico}. Cliente: ${o.cliente}.`, tiempo: 'En curso' });
  });
  // OTs planificadas próximas (dentro de 15 días)
  const hoy = new Date('2026-03-19');
  data.ordenes.filter(o => o.estado === 'Planificada').forEach(o => {
    const f = new Date(o.fecha);
    const diff = Math.round((f - hoy) / 86400000);
    if (diff >= 0 && diff <= 15) {
      alerts.push({ tipo: 'info', texto: `${o.folio}: "${o.activo}" programada en ${diff} día${diff!==1?'s':''}. (${o.fecha}). Técnico: ${o.tecnico}.`, tiempo: `Vence en ${diff}d` });
    }
  });
  // Activos fuera de servicio
  data.activos.filter(a => a.estado === 'Fuera de servicio').forEach(a => {
    alerts.push({ tipo: 'danger', texto: `Activo "${a.nombre}" (${a.id}) fuera de servicio en ${a.sede}. Cliente: ${a.cliente}.`, tiempo: 'Requiere atención' });
  });
  // OTs completadas recientes
  data.ordenes.filter(o => o.estado === 'Completada').forEach(o => {
    alerts.push({ tipo: 'success', texto: `${o.folio}: "${o.activo}" completada exitosamente. Técnico: ${o.tecnico}.`, tiempo: 'Completada' });
  });
  // Clientes suspendidos
  data.clientes.filter(c => c.estado === 'Suspendido').forEach(c => {
    alerts.push({ tipo: 'danger', texto: `Cliente "${c.razon_social}" está suspendido. Revisar estado de cuenta y contratos.`, tiempo: 'Suspendido' });
  });

  return `
    <h1 class="page-title">Centro de Alertas</h1>
    <p class="page-subtitle">${alerts.length} alertas generadas automáticamente desde los datos del sistema</p>
    <div class="card">
      <div class="card-body">
        ${alerts.length === 0 ? '<p style="text-align:center; padding:20px; color:var(--text-muted);">No hay alertas activas. Todo está en orden.</p>' :
        alerts.map(a => `
          <div class="alert-item" style="padding:14px 0;">
            <div style="width:36px;height:36px;border-radius:8px;display:flex;align-items:center;justify-content:center;flex-shrink:0;
              background:${a.tipo==='danger'?'var(--danger-soft)':a.tipo==='warning'?'var(--warning-soft)':a.tipo==='success'?'var(--success-soft)':'var(--accent-soft)'};
              color:${alertColorClass(a.tipo)};">
              ${a.tipo==='danger'?icons.warning:a.tipo==='warning'?icons.zap:a.tipo==='success'?icons.check:icons.calendar}
            </div>
            <div class="alert-content" style="flex:1;">
              <div class="alert-text" style="font-size:13.5px;">${a.texto}</div>
              <div class="alert-time">${a.tiempo}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// ═════════════ REPORTES ═════════════
function renderReportes() {
  const totalOTs = data.ordenes.length;
  const completadas = data.ordenes.filter(o => o.estado === 'Completada').length;
  const enEjecucion = data.ordenes.filter(o => o.estado === 'En ejecución').length;
  const planificadas = data.ordenes.filter(o => o.estado === 'Planificada').length;
  const canceladas = data.ordenes.filter(o => o.estado === 'Cancelada').length;
  const activosOp = data.activos.filter(a => a.estado === 'Operativo').length;
  const activosTotal = data.activos.length;
  const dispPct = activosTotal > 0 ? ((activosOp / activosTotal) * 100).toFixed(1) : 0;
  const cumplPct = totalOTs > 0 ? ((completadas / totalOTs) * 100).toFixed(1) : 0;

  // OTs por cliente - real
  const otsPorCliente = {};
  data.ordenes.forEach(o => { otsPorCliente[o.cliente] = (otsPorCliente[o.cliente] || 0) + 1; });
  const clienteArr = Object.entries(otsPorCliente).sort((a,b) => b[1] - a[1]);
  const maxOTCliente = clienteArr.length > 0 ? clienteArr[0][1] : 1;

  // OTs por técnico - real
  const otsPorTec = {};
  const completadasPorTec = {};
  data.ordenes.forEach(o => {
    if (o.tecnico !== 'Sin asignar') {
      otsPorTec[o.tecnico] = (otsPorTec[o.tecnico] || 0) + 1;
      if (o.estado === 'Completada') completadasPorTec[o.tecnico] = (completadasPorTec[o.tecnico] || 0) + 1;
    }
  });
  const tecArr = Object.entries(otsPorTec).sort((a,b) => b[1] - a[1]);

  // OTs por tipo
  const otsPorTipo = {};
  data.ordenes.forEach(o => { otsPorTipo[o.tipo] = (otsPorTipo[o.tipo] || 0) + 1; });

  return `
    <h1 class="page-title">Reportes y KPIs</h1>
    <p class="page-subtitle">Indicadores calculados en tiempo real desde los datos del sistema</p>
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-header"><div class="stat-icon" style="background:var(--accent-soft);color:var(--accent);">${icons.orders}</div></div>
        <div class="stat-value">${totalOTs}</div>
        <div class="stat-label">Total OTs en sistema</div>
      </div>
      <div class="stat-card">
        <div class="stat-header"><div class="stat-icon" style="background:var(--success-soft);color:var(--success);">${icons.check}</div></div>
        <div class="stat-value">${completadas}</div>
        <div class="stat-label">OTs completadas</div>
      </div>
      <div class="stat-card">
        <div class="stat-header"><div class="stat-icon" style="background:var(--accent-soft);color:var(--accent);">${icons.assets}</div></div>
        <div class="stat-value">${dispPct}<span style="font-size:14px">%</span></div>
        <div class="stat-label">Disponibilidad equipos (${activosOp}/${activosTotal})</div>
      </div>
      <div class="stat-card">
        <div class="stat-header"><div class="stat-icon" style="background:var(--warning-soft);color:var(--warning);">${icons.activity}</div></div>
        <div class="stat-value">${cumplPct}<span style="font-size:14px">%</span></div>
        <div class="stat-label">Tasa de completado</div>
      </div>
    </div>
    <div class="grid-2">
      <div class="card">
        <div class="card-header"><span class="card-title">OTs por Estado</span></div>
        <div class="card-body">
          ${[
            { label: 'Planificadas', val: planificadas, color: 'var(--accent)' },
            { label: 'En ejecución', val: enEjecucion, color: 'var(--orange)' },
            { label: 'Completadas', val: completadas, color: 'var(--success)' },
            { label: 'Canceladas', val: canceladas, color: 'var(--danger)' },
          ].map(s => `
            <div style="margin-bottom:12px;">
              <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
                <span style="font-size:12px;">${s.label}</span>
                <span style="font-size:12px; font-weight:600; font-family:'JetBrains Mono',monospace;">${s.val}</span>
              </div>
              <div class="progress-bar"><div class="progress-fill" style="width:${totalOTs>0?(s.val/totalOTs*100):0}%; background:${s.color};"></div></div>
            </div>
          `).join('')}
        </div>
      </div>
      <div class="card">
        <div class="card-header"><span class="card-title">OTs por Tipo de Mantenimiento</span></div>
        <div class="card-body">
          ${Object.entries(otsPorTipo).sort((a,b)=>b[1]-a[1]).map(([tipo, val]) => `
            <div style="margin-bottom:12px;">
              <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
                <span style="font-size:12px;">${tipo}</span>
                <span style="font-size:12px; font-weight:600; font-family:'JetBrains Mono',monospace;">${val} (${(val/totalOTs*100).toFixed(0)}%)</span>
              </div>
              <div class="progress-bar"><div class="progress-fill" style="width:${(val/totalOTs*100)}%; background:var(--accent);"></div></div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
    <div class="grid-2">
      <div class="card">
        <div class="card-header"><span class="card-title">OTs por Cliente</span></div>
        <div class="card-body">
          ${clienteArr.map(([name, val]) => `
            <div style="margin-bottom:12px;">
              <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
                <span style="font-size:12px;">${name}</span>
                <span style="font-size:12px; font-weight:600; font-family:'JetBrains Mono',monospace;">${val}</span>
              </div>
              <div class="progress-bar"><div class="progress-fill" style="width:${(val/maxOTCliente*100)}%; background:var(--accent);"></div></div>
            </div>
          `).join('')}
        </div>
      </div>
      <div class="card">
        <div class="card-header"><span class="card-title">OTs por Técnico</span></div>
        <div class="table-wrap">
          <table>
            <thead><tr><th>Técnico</th><th>Total OTs</th><th>Completadas</th><th>% Completado</th></tr></thead>
            <tbody>
              ${tecArr.map(([name, total]) => {
                const comp = completadasPorTec[name] || 0;
                const pct = total > 0 ? ((comp/total)*100).toFixed(0) : 0;
                return `<tr>
                  <td style="font-weight:500;">${name}</td>
                  <td style="font-family:'JetBrains Mono',monospace;">${total}</td>
                  <td style="font-family:'JetBrains Mono',monospace;">${comp}</td>
                  <td><span style="color:${pct>=70?'var(--success)':pct>=40?'var(--warning)':'var(--danger)'}; font-weight:600;">${pct}%</span></td>
                </tr>`;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="card" style="margin-top:14px;">
      <div class="card-header"><span class="card-title">Activos por Cliente</span></div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Cliente</th><th>Total Activos</th><th>Operativos</th><th>En Mtto.</th><th>Fuera Serv.</th><th>Disponibilidad</th></tr></thead>
          <tbody>
            ${data.clientes.map(c => {
              const name = c.razon_social.split(' ')[0];
              const acts = data.activos.filter(a => a.cliente.includes(name));
              const op = acts.filter(a => a.estado === 'Operativo').length;
              const mtto = acts.filter(a => a.estado === 'En mantenimiento').length;
              const fuera = acts.filter(a => a.estado === 'Fuera de servicio').length;
              const d = acts.length > 0 ? ((op/acts.length)*100).toFixed(0) : 100;
              return `<tr>
                <td style="font-weight:500;">${c.razon_social}</td>
                <td style="font-family:'JetBrains Mono',monospace; text-align:center;">${acts.length}</td>
                <td style="text-align:center;"><span style="color:var(--success); font-weight:600;">${op}</span></td>
                <td style="text-align:center;"><span style="color:var(--warning); font-weight:600;">${mtto}</span></td>
                <td style="text-align:center;"><span style="color:var(--danger); font-weight:600;">${fuera}</span></td>
                <td style="text-align:center;"><span style="color:${d>=80?'var(--success)':'var(--danger)'}; font-weight:600;">${d}%</span></td>
              </tr>`;
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// ═════════════ CONFIGURACIÓN ═════════════
function renderSettings() {
  const cats = data.catalogoActividades;
  const isEditing = state.editingActividad !== null;
  return `
    <h1 class="page-title">Configuración</h1>
    <p class="page-subtitle">Administración del sistema GMAO</p>
    <div class="tabs">
      <div class="tab ${state.settingsTab==='catalogo'?'active':''}" data-stab="catalogo">${icons.list} &nbsp;Catálogo de Actividades</div>
      <div class="tab ${state.settingsTab==='general'?'active':''}" data-stab="general">${icons.settings} &nbsp;General</div>
    </div>
    ${state.settingsTab === 'catalogo' ? `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
        <div>
          <span style="font-size:14px; font-weight:600;">${cats.length} actividades en el catálogo</span>
          <p style="font-size:12px; color:var(--text-secondary); margin-top:2px;">Estas actividades aparecerán como opciones al crear una OT de mantenimiento preventivo.</p>
        </div>
        <button class="btn btn-primary" data-action="show-add-actividad">${icons.plus} Nueva Actividad</button>
      </div>

      ${isEditing ? renderActividadForm() : ''}

      ${cats.map(a => `
        <div class="catalogo-item">
          <div class="cat-icon" style="background:var(--accent-soft); color:var(--accent);">${icons.clipboard}</div>
          <div class="cat-body">
            <div style="display:flex; align-items:center; gap:6px; margin-bottom:2px;">
              <span class="cat-id">${a.id}</span>
              <span class="cat-name">${a.nombre}</span>
            </div>
            <div style="margin-bottom:4px;"><span class="cat-tag">${a.categoria}</span></div>
            <div class="cat-desc">${a.descripcion}</div>
          </div>
          <div class="cat-actions">
            <button class="btn btn-sm btn-secondary" data-action="edit-actividad" data-act-id="${a.id}" title="Editar">${icons.edit}</button>
            <button class="btn btn-sm btn-secondary" style="color:var(--danger);" data-action="delete-actividad" data-act-id="${a.id}" title="Eliminar">${icons.trash}</button>
          </div>
        </div>
      `).join('')}
    ` : `
      <div class="card">
        <div class="card-body" style="padding:30px; text-align:center;">
          <div style="color:var(--text-muted); margin-bottom:8px;">${icons.settings}</div>
          <h3 style="font-size:15px; margin-bottom:4px;">Configuración General</h3>
          <p style="font-size:13px; color:var(--text-secondary);">Próximamente: configuración de notificaciones, usuarios, roles y permisos, integraciones y más.</p>
        </div>
      </div>
    `}
  `;
}

function renderActividadForm() {
  const isNew = state.editingActividad === 'new';
  const existing = !isNew ? data.catalogoActividades.find(a => a.id === state.editingActividad) : null;
  const nombre = isNew ? state.newActNombre : (existing ? existing.nombre : '');
  const categoria = isNew ? state.newActCategoria : (existing ? existing.categoria : '');
  const descripcion = isNew ? state.newActDescripcion : (existing ? existing.descripcion : '');
  return `
    <div class="cat-form-inline">
      <h4>${icons.clipboard} &nbsp;${isNew ? 'Nueva Actividad' : 'Editar Actividad ' + state.editingActividad}</h4>
      <div class="form-row">
        <div class="form-group"><label class="form-label">Nombre de la Actividad <span class="req">*</span></label>
          <input class="form-input" id="act-nombre" placeholder="Ej: Servicio general a motor eléctrico" value="${nombre}">
        </div>
        <div class="form-group"><label class="form-label">Categoría <span class="req">*</span></label>
          <select class="form-select" id="act-categoria">
            <option value="">Seleccionar...</option>
            ${['Mecánico','Eléctrico','Hidráulico','Neumático','Instrumentación','HVAC','Otro'].map(c => `<option ${c===categoria?'selected':''}>${c}</option>`).join('')}
          </select>
        </div>
      </div>
      <div class="form-group"><label class="form-label">Descripción detallada del trabajo <span class="req">*</span></label>
        <textarea class="form-textarea" id="act-descripcion" placeholder="Liste las tareas que incluye esta actividad de mantenimiento...">${descripcion}</textarea>
      </div>
      <div style="display:flex; gap:8px; justify-content:flex-end;">
        <button class="btn btn-secondary btn-sm" data-action="cancel-actividad">Cancelar</button>
        <button class="btn btn-success btn-sm" data-action="save-actividad">${icons.check} ${isNew ? 'Agregar al Catálogo' : 'Guardar Cambios'}</button>
      </div>
    </div>
  `;
}

// ═════════════ MODALES ═════════════
function renderModal() {
  if (state.modal === 'new-client') return renderNewClientModal();
  if (state.modal === 'edit-client') return renderEditClientModal();
  if (state.modal === 'new-asset') return renderNewAssetModal();
  if (state.modal === 'new-ot') return renderNewOTModal();
  return '';
}

function renderNewClientModal() {
  const steps = ['Datos Generales', 'Sedes', 'Contratos', 'Resumen'];
  return `
    <div class="modal-overlay" data-action="close-modal">
      <div class="modal" style="max-width:720px;" onclick="event.stopPropagation()">
        <div class="modal-header">
          <span class="modal-title">${icons.clients} &nbsp;Nuevo Cliente</span>
          <button class="modal-close" data-action="close-modal">${icons.close}</button>
        </div>
        <div class="modal-body">
          <div class="wizard-steps">
            ${steps.map((s,i) => `
              <div class="wizard-step ${i < state.wizardStep ? 'done' : ''} ${i === state.wizardStep ? 'active' : ''}">
                <span class="step-num">${i < state.wizardStep ? '✓' : i+1}</span>
                <span class="step-label">${s}</span>
              </div>
            `).join('')}
          </div>
          ${state.wizardStep === 0 ? `
            <div class="form-row">
              <div class="form-group"><label class="form-label">Razón Social <span class="req">*</span></label><input class="form-input" placeholder="Ej: Aceros del Norte S.A. de C.V."></div>
              <div class="form-group"><label class="form-label">Nombre Comercial</label><input class="form-input" placeholder="Nombre comercial"></div>
            </div>
            <div class="form-row">
              <div class="form-group"><label class="form-label">RFC / CIF <span class="req">*</span></label><input class="form-input" placeholder="Ej: ANO920415KL3"></div>
              <div class="form-group"><label class="form-label">Sector Industrial <span class="req">*</span></label>
                <select class="form-select"><option value="">Seleccionar...</option><option>Automotriz</option><option>Alimentos</option><option>Farmacéutico</option><option>Químico</option><option>Metal-Mecánico</option><option>Energía</option><option>Otro</option></select>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group"><label class="form-label">Dirección Fiscal <span class="req">*</span></label><input class="form-input" placeholder="Dirección completa"></div>
              <div class="form-group"><label class="form-label">Código Postal <span class="req">*</span></label><input class="form-input" placeholder="Ej: 64000"></div>
            </div>
            <div class="form-row">
              <div class="form-group"><label class="form-label">Teléfono <span class="req">*</span></label><input class="form-input" placeholder="+52 81 1234 5678"></div>
              <div class="form-group"><label class="form-label">Email Corporativo <span class="req">*</span></label><input class="form-input" placeholder="contacto@empresa.mx"></div>
            </div>
            <div class="form-row">
              <div class="form-group"><label class="form-label">Condiciones de Pago <span class="req">*</span></label>
                <select class="form-select"><option value="">Seleccionar...</option><option>Contado</option><option>15 días</option><option>30 días</option><option>45 días</option><option>60 días</option></select>
              </div>
              <div class="form-group"><label class="form-label">Moneda <span class="req">*</span></label>
                <select class="form-select"><option>MXN</option><option>USD</option><option>EUR</option></select>
              </div>
            </div>
            <div class="form-group"><label class="form-label">Notas internas</label><textarea class="form-textarea" placeholder="Observaciones internas..."></textarea></div>
          ` : state.wizardStep === 1 ? `
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px;">
              <span style="font-size:13px; color:var(--text-secondary);">Registre las sedes / plantas del cliente</span>
              <button class="btn btn-sm btn-primary" data-action="add-sede">${icons.plus} Agregar Sede</button>
            </div>
            ${state.clientSedes.length === 0 ? `
              <div class="empty-state">
                ${icons.building}
                <h3>Sin sedes registradas</h3>
                <p>Haga clic en "Agregar Sede" para registrar la primera planta.</p>
              </div>
            ` : state.clientSedes.map((s, i) => `
              <div class="sede-card">
                <div class="sede-card-header">
                  <h4>${icons.location} &nbsp;${s.nombre}</h4>
                  <button class="btn btn-sm btn-secondary" style="color:var(--danger);" data-action="remove-sede" data-idx="${i}">${icons.trash}</button>
                </div>
                <p>${s.direccion} · ${s.contacto}</p>
              </div>
            `).join('')}
          ` : state.wizardStep === 2 ? `
            <div style="text-align:center; padding:20px;">
              <p style="color:var(--text-secondary); margin-bottom:12px;">Los contratos se pueden configurar después del alta.</p>
              <button class="btn btn-secondary">+ Agregar Contrato (Opcional)</button>
            </div>
          ` : `
            <div style="padding:10px;">
              <div style="background:var(--success-soft); border:1px solid rgba(16,185,129,0.2); border-radius:8px; padding:16px; margin-bottom:16px; text-align:center;">
                <div style="font-size:32px; margin-bottom:8px;">✓</div>
                <div style="font-size:15px; font-weight:600; color:var(--success);">Resumen listo para confirmar</div>
                <p style="font-size:12px; color:var(--text-secondary); margin-top:4px;">Revise la información antes de crear el cliente.</p>
              </div>
              <div class="info-grid" style="grid-template-columns:1fr 1fr;">
                <div class="info-item"><div class="info-label">Razón Social</div><div class="info-value">Nuevo Cliente S.A.</div></div>
                <div class="info-item"><div class="info-label">RFC</div><div class="info-value">NCL260318XX0</div></div>
                <div class="info-item"><div class="info-label">Sedes Registradas</div><div class="info-value">${state.clientSedes.length}</div></div>
                <div class="info-item"><div class="info-label">Contratos</div><div class="info-value">Pendiente</div></div>
              </div>
            </div>
          `}
        </div>
        <div class="modal-footer">
          ${state.wizardStep > 0 ? `<button class="btn btn-secondary" data-action="wizard-prev">← Anterior</button>` : ''}
          <div style="flex:1"></div>
          ${state.wizardStep < 3 ? `<button class="btn btn-primary" data-action="wizard-next">Siguiente →</button>` :
            `<button class="btn btn-success" data-action="create-client">${icons.check} Crear Cliente</button>`}
        </div>
      </div>
    </div>
  `;
}

function renderEditClientModal() {
  const c = data.clientes.find(x => x.id === state.editingClient);
  if (!c) return '';
  return `
    <div class="modal-overlay" data-action="close-modal">
      <div class="modal" style="max-width:680px;" onclick="event.stopPropagation()">
        <div class="modal-header">
          <span class="modal-title">${icons.edit} &nbsp;Editar Cliente — ${c.id}</span>
          <button class="modal-close" data-action="close-modal">${icons.close}</button>
        </div>
        <div class="modal-body">
          <div class="form-row">
            <div class="form-group"><label class="form-label">Razón Social <span class="req">*</span></label><input class="form-input" id="ec-razon" value="${c.razon_social}"></div>
            <div class="form-group"><label class="form-label">RFC <span class="req">*</span></label><input class="form-input" id="ec-rfc" value="${c.rfc}"></div>
          </div>
          <div class="form-row">
            <div class="form-group"><label class="form-label">Sector Industrial</label>
              <select class="form-select" id="ec-sector">
                ${['Automotriz','Alimentos','Farmacéutico','Químico','Metal-Mecánico','Energía','Otro'].map(s => `<option ${s===c.sector?'selected':''}>${s}</option>`).join('')}
              </select>
            </div>
            <div class="form-group"><label class="form-label">Estado</label>
              <select class="form-select" id="ec-estado">
                <option ${c.estado==='Activo'?'selected':''}>Activo</option>
                <option ${c.estado==='Suspendido'?'selected':''}>Suspendido</option>
                <option ${c.estado==='Inactivo'?'selected':''}>Inactivo</option>
              </select>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group"><label class="form-label">Contacto Principal</label><input class="form-input" id="ec-contacto" value="${c.contacto}"></div>
            <div class="form-group"><label class="form-label">Email</label><input class="form-input" id="ec-email" value="${c.email}"></div>
          </div>
          <div class="form-row">
            <div class="form-group"><label class="form-label">Teléfono</label><input class="form-input" id="ec-tel" value="${c.telefono}"></div>
            <div class="form-group"><label class="form-label">Sedes</label><input class="form-input" id="ec-sedes" type="number" value="${c.sedes}"></div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-sm" style="color:var(--danger); background:var(--danger-soft); border:1px solid rgba(239,68,68,0.2);" data-action="delete-client" data-cid="${c.id}">${icons.trash} Eliminar Cliente</button>
          <div style="flex:1"></div>
          <button class="btn btn-secondary" data-action="close-modal">Cancelar</button>
          <button class="btn btn-success" data-action="save-client">${icons.check} Guardar Cambios</button>
        </div>
      </div>
    </div>
  `;
}

function renderNewAssetModal() {
  return `
    <div class="modal-overlay" data-action="close-modal">
      <div class="modal" style="max-width:720px;" onclick="event.stopPropagation()">
        <div class="modal-header">
          <span class="modal-title">${icons.assets} &nbsp;Nuevo Activo</span>
          <button class="modal-close" data-action="close-modal">${icons.close}</button>
        </div>
        <div class="modal-body">
          <h3 style="font-size:13px; color:var(--accent); margin-bottom:12px; font-weight:600;">VINCULACIÓN</h3>
          <div class="form-row-3">
            <div class="form-group"><label class="form-label">Cliente <span class="req">*</span></label>
              <select class="form-select"><option value="">Seleccionar cliente...</option>${data.clientes.map(c=>`<option>${c.razon_social}</option>`).join('')}</select>
            </div>
            <div class="form-group"><label class="form-label">Sede / Planta <span class="req">*</span></label>
              <select class="form-select"><option value="">Seleccionar sede...</option><option>Planta Monterrey Norte</option><option>Planta Apodaca</option></select>
            </div>
            <div class="form-group"><label class="form-label">Área / Línea</label>
              <select class="form-select"><option value="">Seleccionar...</option><option>Nave 1 - Línea A</option><option>Nave 2 - Línea B</option><option>Nave 3 - Línea C</option></select>
            </div>
          </div>
          <hr style="border:none; border-top:1px solid var(--border); margin:16px 0;">
          <h3 style="font-size:13px; color:var(--accent); margin-bottom:12px; font-weight:600;">IDENTIFICACIÓN</h3>
          <div class="form-row">
            <div class="form-group"><label class="form-label">Código Interno <span class="req">*</span></label><input class="form-input" value="ACT-2026-00412" style="font-family:'JetBrains Mono',monospace;"></div>
            <div class="form-group"><label class="form-label">Nombre del Equipo <span class="req">*</span></label><input class="form-input" placeholder="Ej: Motor Trifásico Bomba #3"></div>
          </div>
          <div class="form-row-3">
            <div class="form-group"><label class="form-label">No. de Serie</label><input class="form-input" placeholder="Serie del fabricante"></div>
            <div class="form-group"><label class="form-label">Modelo</label><input class="form-input" placeholder="Modelo"></div>
            <div class="form-group"><label class="form-label">Fabricante</label><input class="form-input" placeholder="Fabricante"></div>
          </div>
          <hr style="border:none; border-top:1px solid var(--border); margin:16px 0;">
          <h3 style="font-size:13px; color:var(--accent); margin-bottom:12px; font-weight:600;">CLASIFICACIÓN</h3>
          <div class="form-row-3">
            <div class="form-group"><label class="form-label">Categoría <span class="req">*</span></label>
              <select class="form-select"><option value="">Seleccionar...</option><option>Mecánico</option><option>Eléctrico</option><option>Hidráulico</option><option>Neumático</option><option>Instrumentación</option><option>HVAC</option></select>
            </div>
            <div class="form-group"><label class="form-label">Criticidad <span class="req">*</span></label>
              <select class="form-select"><option value="">Seleccionar...</option><option>Alta</option><option>Media</option><option>Baja</option></select>
            </div>
            <div class="form-group"><label class="form-label">Estado <span class="req">*</span></label>
              <select class="form-select"><option>Operativo</option><option>En mantenimiento</option><option>Fuera de servicio</option></select>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group"><label class="form-label">Potencia / Capacidad</label><input class="form-input" placeholder="Ej: 15 HP"></div>
            <div class="form-group"><label class="form-label">Voltaje</label><input class="form-input" placeholder="Ej: 440V trifásico"></div>
          </div>
          <hr style="border:none; border-top:1px solid var(--border); margin:16px 0;">
          <h3 style="font-size:13px; color:var(--accent); margin-bottom:12px; font-weight:600;">MÉTRICAS DE USO</h3>
          <div class="form-row-3">
            <div class="form-group"><label class="form-label">Tipo de Métrica</label>
              <select class="form-select"><option>Ninguna</option><option>Horas de operación</option><option>Ciclos</option><option>Kilómetros</option></select>
            </div>
            <div class="form-group"><label class="form-label">Valor Actual</label><input class="form-input" placeholder="0" type="number"></div>
            <div class="form-group"><label class="form-label">Ubicación Física</label><input class="form-input" placeholder="Ej: Nave 3, Pos. 5"></div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" data-action="close-modal">Cancelar</button>
          <button class="btn btn-success" data-action="close-modal">${icons.check} Guardar Activo</button>
        </div>
      </div>
    </div>
  `;
}

function renderNewOTModal() {
  const periodos = [
    { label: '7 días', value: 7 },
    { label: '15 días', value: 15 },
    { label: '30 días', value: 30 },
    { label: '60 días', value: 60 },
    { label: '90 días', value: 90 },
    { label: '180 días', value: 180 },
    { label: '365 días', value: 365 },
    { label: 'Personalizado', value: 'custom' },
  ];
  const isPreventivo = state.otTipoMtto === 'Preventivo';
  const selectedPeriod = state.otPeriodicidad;
  const customDays = state.otPeriodicidadCustom;
  const effectiveDays = selectedPeriod === 'custom' ? (parseInt(customDays) || 0) : (parseInt(selectedPeriod) || 0);

  let nextDateStr = '';
  if (isPreventivo && effectiveDays > 0) {
    const today = new Date();
    const next = new Date(today.getTime() + effectiveDays * 86400000);
    nextDateStr = next.toLocaleDateString('es-MX', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  }

  return `
    <div class="modal-overlay" data-action="close-modal">
      <div class="modal" style="max-width:700px;" onclick="event.stopPropagation()">
        <div class="modal-header">
          <span class="modal-title">${icons.orders} &nbsp;Nueva Orden de Trabajo</span>
          <button class="modal-close" data-action="close-modal">${icons.close}</button>
        </div>
        <div class="modal-body">
          <div class="form-row">
            <div class="form-group"><label class="form-label">Tipo de Mantenimiento <span class="req">*</span></label>
              <select class="form-select" id="ot-tipo-mtto">
                <option value="">Seleccionar...</option>
                <option ${state.otTipoMtto==='Preventivo'?'selected':''}>Preventivo</option>
                <option ${state.otTipoMtto==='Correctivo'?'selected':''}>Correctivo</option>
                <option ${state.otTipoMtto==='Predictivo'?'selected':''}>Predictivo</option>
                <option ${state.otTipoMtto==='Mejora'?'selected':''}>Mejora</option>
              </select>
            </div>
            <div class="form-group"><label class="form-label">Prioridad <span class="req">*</span></label>
              <select class="form-select"><option value="">Seleccionar...</option><option>Bajo</option><option>Medio</option><option>Alto</option></select>
            </div>
          </div>

          ${isPreventivo ? `
          <div class="preventivo-panel">
            <h4>${icons.calendar} &nbsp;Programación Preventiva Recurrente</h4>
            <label class="form-label" style="margin-bottom:8px;">Periodicidad: cada cuántos días se reprogramará automáticamente</label>
            <div class="period-chips">
              ${periodos.map(p => `
                <div class="period-chip ${selectedPeriod == p.value ? 'active' : ''}" data-action="set-period" data-period="${p.value}">${p.label}</div>
              `).join('')}
            </div>
            ${selectedPeriod === 'custom' ? `
              <div class="custom-days-input">
                <span>Repetir cada</span>
                <input class="form-input" type="number" id="ot-custom-days" min="1" max="730" value="${customDays}" placeholder="0">
                <span>días</span>
              </div>
            ` : ''}
            ${nextDateStr ? `
              <div class="next-date-preview">
                <div class="nxt-icon">${icons.calendar}</div>
                <div>
                  <div class="nxt-label">Al completar esta OT, la siguiente se programará para:</div>
                  <div class="nxt-value">${nextDateStr} (${effectiveDays} días después)</div>
                </div>
              </div>
            ` : ''}
          </div>
          ` : ''}

          <div class="form-row" style="margin-top:14px;">
            <div class="form-group"><label class="form-label">Cliente <span class="req">*</span></label>
              <select class="form-select"><option value="">Seleccionar...</option>${data.clientes.map(c=>`<option>${c.razon_social}</option>`).join('')}</select>
            </div>
            <div class="form-group"><label class="form-label">Activo <span class="req">*</span></label>
              <select class="form-select"><option value="">Seleccionar activo...</option>${data.activos.map(a=>`<option>${a.nombre}</option>`).join('')}</select>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group"><label class="form-label">Técnico Asignado</label>
              <select class="form-select"><option value="">Sin asignar</option><option>Juan Pérez</option><option>Roberto Díaz</option><option>Miguel Á. López</option><option>Carlos Vega</option></select>
            </div>
            <div class="form-group"><label class="form-label">Fecha Programada</label><input class="form-input" type="date"></div>
          </div>
          <div class="form-group"><label class="form-label">Descripción del trabajo <span class="req">*</span></label><textarea class="form-textarea" placeholder="Describa el trabajo requerido..." id="ot-descripcion"></textarea></div>

          ${isPreventivo && data.catalogoActividades.length > 0 ? `
          <div class="form-group">
            <label class="form-label" style="display:flex; align-items:center; gap:6px;">
              ${icons.list} Seleccionar del Catálogo de Actividades <span style="font-weight:400; color:var(--text-muted);">(opcional)</span>
            </label>
            <div class="activity-picker" style="max-height:200px; overflow-y:auto; border:1px solid var(--border); border-radius:6px; padding:6px;">
              ${data.catalogoActividades.map(a => `
                <div class="activity-picker-item ${state.otActividadId === a.id ? 'selected' : ''}" data-action="pick-actividad" data-act-id="${a.id}">
                  <div class="api-radio"></div>
                  <span class="api-name">${a.nombre}</span>
                  <span class="api-tag">${a.categoria}</span>
                </div>
              `).join('')}
            </div>
            ${state.otActividadId ? (() => {
              const sel = data.catalogoActividades.find(a => a.id === state.otActividadId);
              return sel ? `
                <div class="selected-activity-preview">
                  <div class="sap-label">Descripción de la actividad seleccionada — se copiará a la OT</div>
                  <div class="sap-text">${sel.descripcion}</div>
                </div>
              ` : '';
            })() : ''}
          </div>
          ` : ''}
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" data-action="close-modal">Cancelar</button>
          <button class="btn btn-success" data-action="create-ot">${icons.check} Crear OT${isPreventivo && effectiveDays > 0 ? ' Recurrente' : ''}</button>
        </div>
      </div>
    </div>
  `;
}

// ═════════════ EVENT BINDING ═════════════
function bindEvents() {
  // Navigation
  document.querySelectorAll('[data-nav]').forEach(el => {
    el.addEventListener('click', () => {
      setState({ page: el.dataset.nav, selectedClient: null, selectedAsset: null, selectedOT: null, tabActive: 'info' });
    });
  });

  // Tabs
  document.querySelectorAll('[data-tab]').forEach(el => {
    el.addEventListener('click', () => setState({ tabActive: el.dataset.tab }));
  });

  // Client detail
  document.querySelectorAll('[data-client]').forEach(el => {
    el.addEventListener('click', () => setState({ selectedClient: el.dataset.client, tabActive: 'info' }));
  });

  // Asset detail
  document.querySelectorAll('[data-asset]').forEach(el => {
    el.addEventListener('click', () => setState({ selectedAsset: el.dataset.asset }));
  });

  // OT detail
  document.querySelectorAll('[data-ot-detail]').forEach(el => {
    el.addEventListener('click', () => setState({ selectedOT: el.dataset.otDetail, page: 'ordenes' }));
  });
  document.querySelectorAll('[data-ot]').forEach(el => {
    el.addEventListener('click', () => setState({ selectedOT: el.dataset.ot, page: 'ordenes' }));
  });

  // Actions
  document.querySelectorAll('[data-action]').forEach(el => {
    el.addEventListener('click', (e) => {
      const action = el.dataset.action;
      if (action === 'new-client') setState({ modal: 'new-client', wizardStep: 0, clientSedes: [] });
      else if (action === 'new-asset') setState({ modal: 'new-asset' });
      else if (action === 'new-ot' || action === 'new-ot-from-asset') setState({ modal: 'new-ot', otTipoMtto: '', otPeriodicidad: '', otPeriodicidadCustom: '', otActividadId: '' });
      else if (action === 'close-modal') setState({ modal: null });
      else if (action === 'wizard-next') setState({ wizardStep: Math.min(state.wizardStep + 1, 3) });
      else if (action === 'wizard-prev') setState({ wizardStep: Math.max(state.wizardStep - 1, 0) });
      else if (action === 'back-clients') setState({ selectedClient: null });
      // ── Client edit/delete ──
      else if (action === 'edit-client') {
        const cid = el.dataset.cid;
        setState({ modal: 'edit-client', editingClient: cid });
      }
      else if (action === 'save-client') {
        const c = data.clientes.find(x => x.id === state.editingClient);
        if (c) {
          c.razon_social = document.getElementById('ec-razon')?.value || c.razon_social;
          c.rfc = document.getElementById('ec-rfc')?.value || c.rfc;
          c.sector = document.getElementById('ec-sector')?.value || c.sector;
          c.estado = document.getElementById('ec-estado')?.value || c.estado;
          c.contacto = document.getElementById('ec-contacto')?.value || c.contacto;
          c.email = document.getElementById('ec-email')?.value || c.email;
          c.telefono = document.getElementById('ec-tel')?.value || c.telefono;
          c.sedes = parseInt(document.getElementById('ec-sedes')?.value) || c.sedes;
        }
        setState({ modal: null, editingClient: null, toast: { type: 'success', title: 'Cliente actualizado', message: `"${c?.razon_social}" se guardó correctamente.` } });
        setTimeout(() => setState({ toast: null }), 4000);
      }
      else if (action === 'delete-client') {
        const cid = el.dataset.cid;
        const c = data.clientes.find(x => x.id === cid);
        if (c && confirm(`¿Eliminar el cliente "${c.razon_social}"?\nEsta acción no se puede deshacer.`)) {
          data.clientes = data.clientes.filter(x => x.id !== cid);
          setState({ modal: null, editingClient: null, selectedClient: null, page: 'clientes', toast: { type: 'success', title: 'Cliente eliminado', message: `"${c.razon_social}" fue removido del sistema.` } });
          setTimeout(() => setState({ toast: null }), 4000);
        }
      }
      else if (action === 'back-assets') setState({ selectedAsset: null });
      else if (action === 'back-ordenes') setState({ selectedOT: null });
      else if (action === 'show-alerts') setState({ page: 'alertas' });
      else if (action === 'create-client') setState({ modal: null, page: 'clientes' });
      else if (action === 'set-period') {
        const val = el.dataset.period;
        setState({ otPeriodicidad: val, otPeriodicidadCustom: '' });
      }
      else if (action === 'create-ot') {
        // Calculate periodicidad
        let periodicidad = null;
        if (state.otTipoMtto === 'Preventivo') {
          periodicidad = state.otPeriodicidad === 'custom'
            ? (parseInt(state.otPeriodicidadCustom) || null)
            : (parseInt(state.otPeriodicidad) || null);
        }
        // Generate new folio
        const maxFolio = data.ordenes.reduce((max, o) => {
          const num = parseInt(o.folio.split('-').pop());
          return num > max ? num : max;
        }, 0);
        const newFolio = `OT-2026-${String(maxFolio + 1).padStart(6, '0')}`;
        const today = new Date();
        const fechaStr = today.toISOString().split('T')[0];
        // Add the new OT
        const selActividad = state.otActividadId ? (data.catalogoActividades.find(a => a.id === state.otActividadId)?.nombre || '') : '';
        data.ordenes.unshift({
          folio: newFolio,
          activo: 'Nuevo activo asignado',
          cliente: 'Cliente asignado',
          tipo: state.otTipoMtto || 'Correctivo',
          prioridad: 'Medio',
          estado: 'Planificada',
          tecnico: 'Sin asignar',
          fecha: fechaStr,
          periodicidad: periodicidad,
          actividad: selActividad
        });
        const toastMsg = periodicidad
          ? { type: 'success', title: `${newFolio} creada con recurrencia`, message: `OT preventiva creada. Al completarla, se generará automáticamente la siguiente en ${periodicidad} días.` }
          : { type: 'success', title: `${newFolio} creada exitosamente`, message: `Orden de trabajo de tipo ${state.otTipoMtto || 'Correctivo'} registrada en el sistema.` };
        setState({ modal: null, page: 'ordenes', toast: toastMsg });
        setTimeout(() => setState({ toast: null }), 5000);
      }
      else if (action === 'complete-ot') {
        const folio = el.dataset.folio;
        const ot = data.ordenes.find(o => o.folio === folio);
        if (ot) {
          ot.estado = 'Completada';
          // If it has periodicidad, auto-create next OT
          if (ot.periodicidad) {
            const maxFolio = data.ordenes.reduce((max, o) => {
              const num = parseInt(o.folio.split('-').pop());
              return num > max ? num : max;
            }, 0);
            const newFolio = `OT-2026-${String(maxFolio + 1).padStart(6, '0')}`;
            const nextDate = new Date();
            nextDate.setDate(nextDate.getDate() + ot.periodicidad);
            const nextDateStr = nextDate.toISOString().split('T')[0];
            data.ordenes.unshift({
              folio: newFolio,
              activo: ot.activo,
              cliente: ot.cliente,
              tipo: 'Preventivo',
              prioridad: ot.prioridad,
              estado: 'Planificada',
              tecnico: ot.tecnico,
              fecha: nextDateStr,
              periodicidad: ot.periodicidad,
              actividad: ot.actividad || ''
            });
            setState({
              selectedOT: null,
              toast: {
                type: 'success',
                title: `${folio} completada — siguiente OT generada`,
                message: `Se programó automáticamente ${newFolio} para el ${nextDateStr} (${ot.periodicidad} días). Activo: ${ot.activo}.`
              }
            });
          } else {
            setState({
              selectedOT: null,
              toast: { type: 'success', title: `${folio} completada`, message: `La orden de trabajo ha sido marcada como completada exitosamente.` }
            });
          }
          setTimeout(() => setState({ toast: null }), 6000);
        }
      }
      else if (action === 'add-sede') {
        const sedes = [...state.clientSedes, {
          nombre: `Planta ${state.clientSedes.length + 1}`,
          direccion: 'Dirección por configurar',
          contacto: 'Contacto por asignar'
        }];
        setState({ clientSedes: sedes });
      }
      else if (action === 'remove-sede') {
        const idx = parseInt(el.dataset.idx);
        const sedes = state.clientSedes.filter((_, i) => i !== idx);
        setState({ clientSedes: sedes });
      }
      // ── Catálogo de actividades ──
      else if (action === 'show-add-actividad') {
        setState({ editingActividad: 'new', newActNombre: '', newActCategoria: '', newActDescripcion: '' });
      }
      else if (action === 'edit-actividad') {
        setState({ editingActividad: el.dataset.actId });
      }
      else if (action === 'cancel-actividad') {
        setState({ editingActividad: null });
      }
      else if (action === 'save-actividad') {
        const nombre = document.getElementById('act-nombre')?.value.trim();
        const categoria = document.getElementById('act-categoria')?.value;
        const descripcion = document.getElementById('act-descripcion')?.value.trim();
        if (!nombre || !categoria || !descripcion) return;

        if (state.editingActividad === 'new') {
          const maxNum = data.catalogoActividades.reduce((max, a) => {
            const n = parseInt(a.id.split('-')[1]);
            return n > max ? n : max;
          }, 0);
          const newId = 'ACT-' + String(maxNum + 1).padStart(2, '0');
          data.catalogoActividades.push({ id: newId, nombre, categoria, descripcion });
          setState({ editingActividad: null, toast: { type: 'success', title: 'Actividad agregada', message: `"${nombre}" se añadió al catálogo con ID ${newId}.` } });
        } else {
          const act = data.catalogoActividades.find(a => a.id === state.editingActividad);
          if (act) {
            act.nombre = nombre;
            act.categoria = categoria;
            act.descripcion = descripcion;
          }
          setState({ editingActividad: null, toast: { type: 'success', title: 'Actividad actualizada', message: `"${nombre}" se actualizó correctamente.` } });
        }
        setTimeout(() => setState({ toast: null }), 4000);
      }
      else if (action === 'delete-actividad') {
        const id = el.dataset.actId;
        const act = data.catalogoActividades.find(a => a.id === id);
        data.catalogoActividades = data.catalogoActividades.filter(a => a.id !== id);
        setState({ toast: { type: 'success', title: 'Actividad eliminada', message: `"${act?.nombre || id}" fue removida del catálogo.` } });
        setTimeout(() => setState({ toast: null }), 4000);
      }
      // ── Quick status change ──
      else if (action === 'toggle-status') {
        e.stopPropagation();
        // Close any existing dropdown
        const existing = document.getElementById('status-dd-overlay');
        if (existing) { existing.remove(); return; }
        const folio = el.dataset.folio;
        const ot = data.ordenes.find(o => o.folio === folio);
        if (!ot) return;
        // Position dropdown below the trigger
        const rect = el.getBoundingClientRect();
        const statuses = ['Planificada','En ejecución','Completada','Cancelada'];
        const dotColor = (st) => {
          const c = statusClass(st);
          return { green:'var(--success)', orange:'var(--orange)', red:'var(--danger)', blue:'var(--accent)' }[c] || 'var(--text-muted)';
        };
        const ddHTML = `
          <div id="status-dd-overlay" style="position:fixed;inset:0;z-index:140;" data-action="close-dd">
            <div class="status-dropdown" style="top:${rect.bottom + 4}px; left:${rect.left}px;" onclick="event.stopPropagation()">
              ${statuses.map(st => `
                <div class="status-dropdown-item" data-action="set-ot-status" data-folio="${ot.folio}" data-status="${st}">
                  <div class="sdi-dot" style="background:${dotColor(st)}"></div>
                  <span class="sdi-label">${st}</span>
                  ${ot.estado === st ? '<span class="sdi-check">✓</span>' : ''}
                </div>
              `).join('')}
            </div>
          </div>`;
        document.getElementById('gmao-app').insertAdjacentHTML('beforeend', ddHTML);
        // Bind dropdown item clicks
        document.querySelectorAll('#status-dd-overlay [data-action="set-ot-status"]').forEach(item => {
          item.addEventListener('click', (ev) => {
            ev.stopPropagation();
            const f = item.dataset.folio;
            const ns = item.dataset.status;
            const o2 = data.ordenes.find(x => x.folio === f);
            if (!o2) return;
            const old = o2.estado;
            o2.estado = ns;
            document.getElementById('status-dd-overlay')?.remove();
            if (ns === 'Completada' && o2.periodicidad) {
              const maxF = data.ordenes.reduce((mx, x) => { const n = parseInt(x.folio.split('-').pop()); return n>mx?n:mx; }, 0);
              const nf = 'OT-2026-' + String(maxF+1).padStart(6,'0');
              const nd = new Date(); nd.setDate(nd.getDate() + o2.periodicidad);
              data.ordenes.unshift({ folio:nf, activo:o2.activo, cliente:o2.cliente, tipo:'Preventivo', prioridad:o2.prioridad, estado:'Planificada', tecnico:o2.tecnico, fecha:nd.toISOString().split('T')[0], periodicidad:o2.periodicidad, actividad:o2.actividad||'' });
              setState({ toast: { type:'success', title:f+' → '+ns, message:'Nueva OT '+nf+' programada para '+o2.periodicidad+' días.' } });
            } else {
              setState({ toast: { type:'success', title:f+' → '+ns, message:'Estado actualizado de "'+old+'" a "'+ns+'".' } });
            }
            setTimeout(() => setState({ toast: null }), 4000);
          });
        });
        // Close on overlay click
        document.getElementById('status-dd-overlay')?.addEventListener('click', () => {
          document.getElementById('status-dd-overlay')?.remove();
        });
        return; // Don't re-render
      }
      else if (action === 'set-ot-status') {
        return; // Handled by DOM above
      }
      // ── Clear filters ──
      else if (action === 'clear-ot-filters') {
        setState({ otFilterCliente: '', otFilterTecnico: '', otFilterEstado: '' });
      }
      else if (action === 'clear-dash-filters') {
        setState({ dashFilterTecnico: '', dashFilterSupervisor: '' });
      }
      else if (action === 'export-excel') {
        exportOTsExcel();
        setState({ toast: { type: 'success', title: 'Excel exportado', message: 'Archivo CSV descargado. Ábrelo con Excel o Google Sheets.' } });
        setTimeout(() => setState({ toast: null }), 4000);
      }
      else if (action === 'export-pdf') {
        exportOTsPDF();
        return; // Don't re-render, the overlay is added to DOM directly
      }
      else if (action === 'clear-cal-filters') {
        setState({ calFilterCliente: '', calFilterTecnico: '' });
      }
      // ── Activity picker in OT modal ──
      else if (action === 'pick-actividad') {
        const actId = el.dataset.actId;
        const newId = state.otActividadId === actId ? '' : actId;
        // Fill textarea with description
        const act = data.catalogoActividades.find(a => a.id === newId);
        state.otActividadId = newId;
        gmaoRender();
        // After re-render, set textarea value
        const textarea = document.getElementById('ot-descripcion');
        if (textarea && act) textarea.value = act.descripcion;
        else if (textarea && !newId) textarea.value = '';
        return; // Already called render
      }
    });
  });

  // Settings tabs
  document.querySelectorAll('[data-stab]').forEach(el => {
    el.addEventListener('click', () => setState({ settingsTab: el.dataset.stab }));
  });

  // Filter dropdowns
  document.querySelectorAll('[data-filter]').forEach(el => {
    el.addEventListener('change', (e) => {
      setState({ [el.dataset.filter]: e.target.value });
    });
  });

  // Sortable columns
  document.querySelectorAll('[data-sort]').forEach(el => {
    el.addEventListener('click', () => {
      const col = el.dataset.sort;
      const newDir = (state.otSortCol === col && state.otSortDir === 'asc') ? 'desc' : 'asc';
      setState({ otSortCol: col, otSortDir: newDir });
    });
  });

  // OT tipo mantenimiento dropdown change
  const tipoSelect = document.getElementById('ot-tipo-mtto');
  if (tipoSelect) {
    tipoSelect.addEventListener('change', (e) => {
      setState({ otTipoMtto: e.target.value, otPeriodicidad: '', otPeriodicidadCustom: '', otActividadId: '' });
    });
  }

  // Custom days input
  const customInput = document.getElementById('ot-custom-days');
  if (customInput) {
    customInput.addEventListener('input', (e) => {
      setState({ otPeriodicidadCustom: e.target.value });
    });
    customInput.focus();
  }

  // Checklist toggle
  document.querySelectorAll('.check-box').forEach(el => {
    el.addEventListener('click', () => {
      el.classList.toggle('checked');
      const text = el.nextElementSibling;
      if (text) text.classList.toggle('done');
    });
  });
}

// ═════════════ EXPORT FUNCTIONS ═════════════
function exportOTsExcel() {
  const rows = getFilteredOrdenes();
  const headers = ['Folio','Actividad','Activo','Cliente','Tipo','Periodicidad (días)','Prioridad','Estado','Técnico','Fecha'];
  const csvRows = [headers.join(',')];
  rows.forEach(o => {
    const row = [
      o.folio,
      '"' + (o.actividad || '').replace(/"/g, '""') + '"',
      '"' + (o.activo || '').replace(/"/g, '""') + '"',
      '"' + (o.cliente || '').replace(/"/g, '""') + '"',
      o.tipo,
      o.periodicidad || '',
      o.prioridad,
      o.estado,
      '"' + (o.tecnico || '').replace(/"/g, '""') + '"',
      o.fecha
    ];
    csvRows.push(row.join(','));
  });
  const BOM = '\uFEFF';
  const blob = new Blob([BOM + csvRows.join('\n')], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'OTs_GMAO_' + new Date().toISOString().split('T')[0] + '.csv';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function exportOTsPDF() {
  const rows = getFilteredOrdenes();
  const filtros = [];
  if (state.otFilterCliente) filtros.push('Cliente: ' + state.otFilterCliente);
  if (state.otFilterTecnico) filtros.push('Técnico: ' + state.otFilterTecnico);
  if (state.otFilterEstado) filtros.push('Estado: ' + state.otFilterEstado);

  const fechaGen = new Date().toLocaleDateString('es-MX', { weekday:'long', year:'numeric', month:'long', day:'numeric', hour:'2-digit', minute:'2-digit' });

  const tableRows = rows.map(o => {
    const pColor = o.prioridad === 'Alto' ? '#ef4444' : o.prioridad === 'Medio' ? '#e8a308' : '#10b981';
    const eBg = o.estado === 'Planificada' ? '#e8f4fc' : o.estado === 'En ejecución' ? '#fff3e0' : o.estado === 'Completada' ? '#e6f7ef' : '#fde8e8';
    const eColor = o.estado === 'Planificada' ? '#0ea5c7' : o.estado === 'En ejecución' ? '#f97316' : o.estado === 'Completada' ? '#10b981' : '#ef4444';
    return '<tr><td style="font-weight:600;color:#0ea5c7;">' + o.folio + '</td><td style="font-size:10px;">' + (o.actividad || '\u2014') + '</td><td>' + o.activo + '</td><td>' + o.cliente + '</td><td>' + o.tipo + '</td><td>' + (o.periodicidad ? o.periodicidad + 'd' : '\u2014') + '</td><td style="color:' + pColor + ';font-weight:700;">' + o.prioridad + '</td><td><span style="display:inline-block;padding:1px 8px;border-radius:8px;font-size:10px;font-weight:600;background:' + eBg + ';color:' + eColor + ';">' + o.estado + '</span></td><td>' + o.tecnico + '</td><td>' + o.fecha + '</td></tr>';
  }).join('');

  // Remove existing overlay
  document.getElementById('pdf-overlay')?.remove();

  const overlay = document.createElement('div');
  overlay.id = 'pdf-overlay';
  overlay.style.cssText = 'position:fixed;inset:0;z-index:300;background:#fff;overflow-y:auto;';
  overlay.innerHTML = `
    <div style="max-width:1100px;margin:0 auto;padding:20px;font-family:Arial,sans-serif;color:#1a3a4a;font-size:12px;">
      <div id="pdf-no-print" style="display:flex;align-items:center;gap:12px;padding:12px 16px;background:#f0f9fc;border:1px solid #c4dfe6;border-radius:8px;margin-bottom:20px;">
        <button onclick="window.print()" style="padding:8px 24px;background:#0ea5c7;color:#fff;border:none;border-radius:6px;font-size:13px;font-weight:600;cursor:pointer;font-family:Arial;">Imprimir / Guardar PDF</button>
        <span style="font-size:12px;color:#4a7a8a;">Selecciona "Guardar como PDF" en el diálogo de impresión.</span>
        <button onclick="document.getElementById('pdf-overlay').remove()" style="margin-left:auto;padding:6px 14px;background:#fff;border:1px solid #ccc;border-radius:6px;font-size:12px;cursor:pointer;font-family:Arial;">✕ Cerrar</button>
      </div>
      <div style="text-align:center;margin-bottom:16px;border-bottom:2px solid #0ea5c7;padding-bottom:12px;">
        <h1 style="font-size:20px;color:#0ea5c7;margin:0 0 4px;">GMAO Pro \u2014 Reporte de Órdenes de Trabajo</h1>
        <p style="font-size:11px;color:#666;margin:0;">Generado el ${fechaGen}</p>
      </div>
      ${filtros.length > 0 ? '<div style="background:#f0f9fc;border:1px solid #c4dfe6;border-radius:4px;padding:6px 10px;margin-bottom:12px;font-size:11px;color:#4a7a8a;">Filtros: ' + filtros.join(' | ') + '</div>' : ''}
      <div style="display:flex;gap:16px;margin-bottom:16px;">
        <div style="flex:1;background:#f0f9fc;border:1px solid #c4dfe6;border-radius:6px;padding:10px;text-align:center;">
          <div style="font-size:24px;font-weight:700;color:#0ea5c7;">${rows.length}</div><div style="font-size:10px;color:#666;text-transform:uppercase;">Total</div>
        </div>
        <div style="flex:1;background:#f0f9fc;border:1px solid #c4dfe6;border-radius:6px;padding:10px;text-align:center;">
          <div style="font-size:24px;font-weight:700;color:#0ea5c7;">${rows.filter(o=>o.estado==='Planificada').length}</div><div style="font-size:10px;color:#666;text-transform:uppercase;">Planificadas</div>
        </div>
        <div style="flex:1;background:#fff3e0;border:1px solid #fde0b0;border-radius:6px;padding:10px;text-align:center;">
          <div style="font-size:24px;font-weight:700;color:#f97316;">${rows.filter(o=>o.estado==='En ejecución').length}</div><div style="font-size:10px;color:#666;text-transform:uppercase;">En ejecución</div>
        </div>
        <div style="flex:1;background:#e6f7ef;border:1px solid #b0e0c8;border-radius:6px;padding:10px;text-align:center;">
          <div style="font-size:24px;font-weight:700;color:#10b981;">${rows.filter(o=>o.estado==='Completada').length}</div><div style="font-size:10px;color:#666;text-transform:uppercase;">Completadas</div>
        </div>
        <div style="flex:1;background:#fde8e8;border:1px solid #f0b0b0;border-radius:6px;padding:10px;text-align:center;">
          <div style="font-size:24px;font-weight:700;color:#ef4444;">${rows.filter(o=>o.estado==='Cancelada').length}</div><div style="font-size:10px;color:#666;text-transform:uppercase;">Canceladas</div>
        </div>
      </div>
      <table style="width:100%;border-collapse:collapse;">
        <thead><tr>
          <th style="background:#0ea5c7;color:#fff;text-align:left;padding:7px 8px;font-size:10px;text-transform:uppercase;letter-spacing:0.5px;">Folio</th>
          <th style="background:#0ea5c7;color:#fff;text-align:left;padding:7px 8px;font-size:10px;text-transform:uppercase;">Actividad</th>
          <th style="background:#0ea5c7;color:#fff;text-align:left;padding:7px 8px;font-size:10px;text-transform:uppercase;">Activo</th>
          <th style="background:#0ea5c7;color:#fff;text-align:left;padding:7px 8px;font-size:10px;text-transform:uppercase;">Cliente</th>
          <th style="background:#0ea5c7;color:#fff;text-align:left;padding:7px 8px;font-size:10px;text-transform:uppercase;">Tipo</th>
          <th style="background:#0ea5c7;color:#fff;text-align:left;padding:7px 8px;font-size:10px;text-transform:uppercase;">Period.</th>
          <th style="background:#0ea5c7;color:#fff;text-align:left;padding:7px 8px;font-size:10px;text-transform:uppercase;">Prioridad</th>
          <th style="background:#0ea5c7;color:#fff;text-align:left;padding:7px 8px;font-size:10px;text-transform:uppercase;">Estado</th>
          <th style="background:#0ea5c7;color:#fff;text-align:left;padding:7px 8px;font-size:10px;text-transform:uppercase;">Técnico</th>
          <th style="background:#0ea5c7;color:#fff;text-align:left;padding:7px 8px;font-size:10px;text-transform:uppercase;">Fecha</th>
        </tr></thead>
        <tbody>${tableRows}</tbody>
      </table>
      <div style="margin-top:20px;text-align:center;font-size:10px;color:#999;border-top:1px solid #ddd;padding-top:10px;">
        GMAO Pro \u2014 Sistema de Gestión de Mantenimiento Industrial \u00b7 Documento generado automáticamente
      </div>
    </div>
    <style>@media print { #pdf-no-print { display:none !important; } #pdf-overlay { position:static !important; } body > .app { display:none !important; } }</style>
  `;
  document.getElementById('gmao-app').appendChild(overlay);
}

// ── Initial Render ──
// Se inicializa bajo demanda al cambiar al módulo de mantenimiento.

