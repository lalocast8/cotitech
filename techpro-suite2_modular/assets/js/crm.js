// ========================= CRM NovaCRM =========================
const K={c:'nc_c2',d:'nc_d5',a:'nc_a2',s:'nc_s5',v:'nc_v2',lr:'nc_lr2',kpi:'nc_kpi2',emp:'nc_emp1',h10:'nc_h10'};
const DEMP=[
  {id:1,name:'Quaker Houghton',sector:'Metalurgia',classification:'A',lastContact:'2026-03-20',notes:'Cliente principal fluidos industriales'},
  {id:2,name:'Deacero',sector:'Acero',classification:'A',lastContact:'2026-03-15',notes:'Planta Chely y Saltillo'},
  {id:3,name:'Grupo Alfa',sector:'Industrial',classification:'B',lastContact:'2026-02-10',notes:''},
  {id:4,name:'TechNova SA',sector:'Tecnología',classification:'B',lastContact:'2026-01-05',notes:'Prospecto nuevo'},
  {id:5,name:'AquaPure MX',sector:'Tratamiento agua',classification:'C',lastContact:'2025-12-01',notes:'Sin respuesta'},
];
const DC=[
  {id:1,name:'Laura Méndez',company:'Grupo Alfa',email:'laura@alfa.mx',phone:'81-2200-0011',status:'Cliente',value:48000,notes:''},
  {id:2,name:'Carlos Rivera',company:'TechNova SA',email:'crivera@technova.com',phone:'55-3100-4422',status:'Prospecto',value:22000,notes:''},
  {id:3,name:'Ana Gutiérrez',company:'Inversiones MX',email:'ana.g@invmx.com',phone:'33-4400-9900',status:'Cliente',value:75000,notes:''},
  {id:4,name:'Diego Torres',company:'Constructora Reyes',email:'dtorres@reyes.mx',phone:'81-9900-1122',status:'Interesado',value:31000,notes:''},
  {id:5,name:'Sofía Leal',company:'Moda Plus',email:'sofia@modaplus.mx',phone:'55-7788-3300',status:'Prospecto',value:12000,notes:''},
];
const DS=[
  {name:'1. Prospecto General',prob:10},{name:'2. Prospecto Calificado',prob:25},
  {name:'3. Visita Pendiente',prob:40},{name:'4. Info Pendiente',prob:55},
  {name:'5. Cotizacion Enviada',prob:70},{name:'6. Ganada',prob:100},{name:'Stand BY',prob:20},{name:'Perdida',prob:0}
];
const DD=[
  {id:1,name:'Reduccion liquidos conf',company:'Quaker Houghton',value:0,prob:55,stage:'4. Info Pendiente',seller:'Eduardo',status:'open',date:'2025-03-02',closedDate:null,lossReason:'',followUpDate:'2026-03-09',followUpDesc:'PTAR no funciona y confinan liquidos, preguntar cuanta agua confinan',followUpType:'call'},
  {id:2,name:'Recuperacion acido o sosa',company:'Deacero Chely',value:0,prob:55,stage:'4. Info Pendiente',seller:'Eduardo',status:'open',date:'2025-03-02',closedDate:null,lossReason:'',followUpDate:'2026-03-09',followUpDesc:'ver proyecto para recuperacion de acido o sosa en decapad',followUpType:'call'},
  {id:3,name:'Confinamiento liquidos',company:'Lacteos la Capilla',value:0,prob:55,stage:'4. Info Pendiente',seller:'Eduardo',status:'open',date:'2026-03-18',closedDate:null,lossReason:'',followUpDate:'2026-02-10',followUpDesc:'Mont confinamiento - Analisis fisico quimico',followUpType:'call'},
  {id:4,name:'Cambio de material filtrante',company:'Stellantis Truck',value:0,prob:55,stage:'4. Info Pendiente',seller:'Eduardo',status:'open',date:'2026-03-05',closedDate:null,lossReason:'',followUpDate:'2026-03-18',followUpDesc:'Enviar fotos del equipo',followUpType:'email'},
  {id:5,name:'Recuperacion agua',company:'Stabilus',value:0,prob:55,stage:'4. Info Pendiente',seller:'Eduardo',status:'open',date:'2025-08-26',closedDate:null,lossReason:'',followUpDate:'2026-03-20',followUpDesc:'PTA 1: 800M3 PIPA, PTA 2 1798 M3 PIPA',followUpType:'call'},
  {id:6,name:'resuso agua',company:'Nemak Mty',value:0,prob:55,stage:'4. Info Pendiente',seller:'Eduardo',status:'open',date:'2025-10-28',closedDate:null,lossReason:'',followUpDate:'2026-04-01',followUpDesc:'cita el dia 28/10 3pm, SE ENVIO NDA',followUpType:'meet'},
  {id:7,name:'Rehabilitacion PTAR',company:'Borgwarner',value:0,prob:55,stage:'4. Info Pendiente',seller:'Eduardo',status:'open',date:'2025-02-19',closedDate:null,lossReason:'',followUpDate:'2026-03-17',followUpDesc:'Modificaciones PTAR',followUpType:'call'},
  {id:8,name:'Reuso agua rechazos',company:'Stellantis Truck',value:0,prob:55,stage:'4. Info Pendiente',seller:'Eduardo',status:'open',date:'2026-02-26',closedDate:null,lossReason:'',followUpDate:'2026-03-27',followUpDesc:'minimizar agua a lago de evaporacion - PDTE: Analisis FQ',followUpType:'call'},
  {id:9,name:'Renta dispensadores',company:'Penoles',value:0,prob:55,stage:'4. Info Pendiente',seller:'David Lopez',status:'open',date:'2025-10-09',closedDate:null,lossReason:'',followUpDate:'2026-03-20',followUpDesc:'SE ENVIO INFORMACION POR CORREO',followUpType:'email'},
  {id:10,name:'Osmosis para comedor',company:'Linamar',value:0,prob:55,stage:'4. Info Pendiente',seller:'David Lopez',status:'open',date:'2025-10-06',closedDate:null,lossReason:'',followUpDate:'2026-03-25',followUpDesc:'SE ENVIO CORREO A nancy.cordova@linamar.com',followUpType:'email'},
  {id:11,name:'servicio caldera',company:'Lear Ramos Arizpe',value:0,prob:40,stage:'3. Visita Pendiente',seller:'Eduardo',status:'open',date:'2026-01-29',closedDate:null,lossReason:'',followUpDate:'2026-02-10',followUpDesc:'son 48 calderitas',followUpType:'meet'},
  {id:12,name:'Poliza equipos',company:'Mubea Planta II',value:0,prob:40,stage:'3. Visita Pendiente',seller:'Eduardo',status:'open',date:'2025-02-10',closedDate:null,lossReason:'',followUpDate:'2026-04-01',followUpDesc:'Pdte realizar visita',followUpType:'meet'},
  {id:13,name:'Cambio de 180 membranas',company:'Deacero',value:0,prob:40,stage:'3. Visita Pendiente',seller:'Eduardo',status:'open',date:'2026-02-17',closedDate:null,lossReason:'',followUpDate:'2026-03-25',followUpDesc:'pdte analisis entrada agua',followUpType:'meet'},
  {id:14,name:'Cambio de inhibidor',company:'Deacero',value:0,prob:40,stage:'3. Visita Pendiente',seller:'Eduardo',status:'open',date:'2026-02-17',closedDate:null,lossReason:'',followUpDate:'2026-03-25',followUpDesc:'pdte analisis entrada agua',followUpType:'meet'},
  {id:15,name:'Poliza torres y osmosis',company:'Arcelor Mittal',value:0,prob:40,stage:'3. Visita Pendiente',seller:'Eduardo',status:'open',date:'2026-01-12',closedDate:null,lossReason:'',followUpDate:'2026-03-13',followUpDesc:'Licitacion se abre en Abril',followUpType:'meet'},
  {id:16,name:'Reuso agua',company:'Stellantis Motores Nte',value:0,prob:40,stage:'3. Visita Pendiente',seller:'Eduardo',status:'open',date:'2026-02-10',closedDate:null,lossReason:'',followUpDate:'2026-04-02',followUpDesc:'Seguimiento personal presentar Motores Norte',followUpType:'meet'},
  {id:17,name:'dispensador + enfriador',company:'Caterpillar',value:0,prob:70,stage:'5. Cotizacion Enviada',seller:'Eduardo',status:'open',date:'2026-01-29',closedDate:null,lossReason:'',followUpDate:'2026-03-03',followUpDesc:'Ricardo Bretado',followUpType:'call'},
  {id:18,name:'Rehabilitacion',company:'Lear Ramos Arizpe',value:0,prob:70,stage:'5. Cotizacion Enviada',seller:'Bretado',status:'open',date:'2025-09-11',closedDate:null,lossReason:'',followUpDate:'2026-03-26',followUpDesc:'Pendiente ricardo confirmar refacciones',followUpType:'call'},
  {id:19,name:'Poliza Osmosis 3',company:'Caterpillar',value:0,prob:70,stage:'5. Cotizacion Enviada',seller:'Eduardo',status:'open',date:'2025-10-01',closedDate:null,lossReason:'',followUpDate:'2026-01-08',followUpDesc:'',followUpType:''},
  {id:20,name:'Recuperacion Agua',company:'Plastic Omnium',value:0,prob:70,stage:'5. Cotizacion Enviada',seller:'Eduardo',status:'open',date:'2025-08-26',closedDate:null,lossReason:'',followUpDate:'2026-04-01',followUpDesc:'Cotizar recuperacion de 600 m3/mes',followUpType:'call'},
  {id:21,name:'poliza osmosis',company:'Emerson Ramos Arizpe',value:0,prob:70,stage:'5. Cotizacion Enviada',seller:'Eduardo',status:'open',date:'2026-01-28',closedDate:null,lossReason:'',followUpDate:'2026-03-25',followUpDesc:'',followUpType:''},
  {id:22,name:'ptar',company:'Joyson Safety',value:0,prob:70,stage:'5. Cotizacion Enviada',seller:'Eduardo',status:'open',date:'2026-03-05',closedDate:null,lossReason:'',followUpDate:'2026-01-30',followUpDesc:'Poliza PTAR',followUpType:'call'},
  {id:23,name:'Recuperacion Agua',company:'Sigma Santa Catarina',value:0,prob:70,stage:'5. Cotizacion Enviada',seller:'Eduardo',status:'open',date:'2025-08-26',closedDate:null,lossReason:'',followUpDate:'2026-01-30',followUpDesc:'Cotizar recuperacion venta',followUpType:'call'},
  {id:24,name:'Tanque agua producto',company:'Sigma Santa Catarina',value:0,prob:70,stage:'5. Cotizacion Enviada',seller:'Eduardo',status:'open',date:'2026-02-18',closedDate:null,lossReason:'',followUpDate:'2026-02-25',followUpDesc:'',followUpType:''},
  {id:25,name:'Automatizacion',company:'Stellantis Truck',value:0,prob:70,stage:'5. Cotizacion Enviada',seller:'Eduardo',status:'open',date:'2026-02-16',closedDate:null,lossReason:'',followUpDate:'2026-03-03',followUpDesc:'Automatizacion de 3 equipos de osmosis',followUpType:'call'},
  {id:26,name:'Filtro Zeolita',company:'Nidec mty',value:0,prob:70,stage:'5. Cotizacion Enviada',seller:'Eduardo',status:'open',date:'2026-03-13',closedDate:null,lossReason:'',followUpDate:'2026-03-03',followUpDesc:'Edgar: venta filtro zeolita',followUpType:'call'},
  {id:27,name:'Poliza Torres',company:'Blackhawk',value:0,prob:70,stage:'5. Cotizacion Enviada',seller:'Eduardo',status:'open',date:'2025-09-11',closedDate:null,lossReason:'',followUpDate:'2026-04-04',followUpDesc:'',followUpType:''},
  {id:28,name:'Poliza Chiller 3',company:'MartinRea',value:0,prob:70,stage:'5. Cotizacion Enviada',seller:'Eduardo',status:'open',date:'2026-03-05',closedDate:null,lossReason:'',followUpDate:'2026-03-26',followUpDesc:'',followUpType:''},
  {id:29,name:'Poliza OI',company:'Joyson Safety',value:0,prob:70,stage:'5. Cotizacion Enviada',seller:'Eduardo',status:'open',date:'2025-08-26',closedDate:null,lossReason:'',followUpDate:'2026-03-27',followUpDesc:'',followUpType:''},
  {id:30,name:'UF + OI',company:'Bayer Chiapas',value:0,prob:70,stage:'5. Cotizacion Enviada',seller:'Eduardo',status:'open',date:'2025-12-10',closedDate:null,lossReason:'',followUpDate:'2026-04-04',followUpDesc:'Reuso agua',followUpType:'call'},
  {id:31,name:'Trat quim chiller',company:'Mabe',value:0,prob:70,stage:'5. Cotizacion Enviada',seller:'Eduardo',status:'open',date:'2025-09-09',closedDate:null,lossReason:'',followUpDate:'2026-04-04',followUpDesc:'Cotizar 4t,1v Medianas Plasticos, 2t,1v Chicas',followUpType:'call'},
  {id:32,name:'Torres Enfriamiento',company:'Tupy Salitllo',value:0,prob:70,stage:'5. Cotizacion Enviada',seller:'Eduardo',status:'open',date:'2025-01-05',closedDate:null,lossReason:'',followUpDate:'2026-03-26',followUpDesc:'',followUpType:''},
  {id:33,name:'Osmosis Inversa',company:'Mahle Santa Catarina',value:0,prob:70,stage:'5. Cotizacion Enviada',seller:'Eduardo',status:'open',date:'2026-02-19',closedDate:null,lossReason:'',followUpDate:'2026-03-26',followUpDesc:'Equipo',followUpType:'call'},
  {id:34,name:'Recuperacion Agua - RAZ',company:'Linde',value:0,prob:70,stage:'5. Cotizacion Enviada',seller:'Eduardo',status:'open',date:'2025-08-26',closedDate:null,lossReason:'',followUpDate:'2026-04-27',followUpDesc:'Pendiente: Descarga, suministro, basin, cantidad purga',followUpType:'call'},
  {id:35,name:'Recuperacion Agua',company:'Nova Steel',value:0,prob:70,stage:'5. Cotizacion Enviada',seller:'Eduardo',status:'open',date:'2025-08-26',closedDate:null,lossReason:'',followUpDate:'2026-03-13',followUpDesc:'',followUpType:''},
  {id:36,name:'Tratamiento Torre ENF',company:'Nova Steel',value:0,prob:70,stage:'5. Cotizacion Enviada',seller:'Eduardo',status:'open',date:'2025-08-26',closedDate:null,lossReason:'',followUpDate:'2026-03-13',followUpDesc:'Se envio cotizacion',followUpType:'call'},
  {id:37,name:'Poliza OI',company:'Sanden',value:0,prob:70,stage:'5. Cotizacion Enviada',seller:'Eduardo',status:'open',date:'2025-08-26',closedDate:null,lossReason:'',followUpDate:'2026-03-28',followUpDesc:'',followUpType:''},
  {id:38,name:'Cotiar OI + Desmin',company:'Adler Pelzer',value:0,prob:70,stage:'5. Cotizacion Enviada',seller:'Eduardo',status:'open',date:'2025-08-28',closedDate:null,lossReason:'',followUpDate:'2026-05-17',followUpDesc:'Cotizar OI + Desmin para 10 m3/dia conductividad < 10 uS/cm',followUpType:'call'},
  {id:39,name:'Poliza Osmosis',company:'Borgwarner',value:0,prob:70,stage:'5. Cotizacion Enviada',seller:'Eduardo',status:'open',date:'2026-03-06',closedDate:null,lossReason:'',followUpDate:'2026-03-18',followUpDesc:'',followUpType:''},
  {id:40,name:'Telemetria',company:'HNI',value:0,prob:70,stage:'5. Cotizacion Enviada',seller:'Eduardo',status:'open',date:'2026-03-12',closedDate:null,lossReason:'',followUpDate:'2026-03-19',followUpDesc:'',followUpType:''},
  {id:41,name:'Suavizador',company:'HNI',value:0,prob:70,stage:'5. Cotizacion Enviada',seller:'Eduardo',status:'open',date:'2026-03-12',closedDate:null,lossReason:'',followUpDate:'2026-03-19',followUpDesc:'',followUpType:''},
  {id:42,name:'Chiller 3',company:'MARTIN REA FMG',value:0,prob:70,stage:'5. Cotizacion Enviada',seller:'Eduardo',status:'open',date:'2026-03-12',closedDate:null,lossReason:'',followUpDate:'2026-03-19',followUpDesc:'Poliza Chiller 3',followUpType:'call'},
  {id:43,name:'Recuperacion agua',company:'Marelli',value:0,prob:70,stage:'5. Cotizacion Enviada',seller:'Eduardo',status:'open',date:'2025-03-18',closedDate:null,lossReason:'',followUpDate:'2026-03-16',followUpDesc:'400 m3/mes, agua de ciudad, tiene desmineralizador',followUpType:'call'},
  {id:44,name:'Chiller',company:'Cat Nvo Laredo',value:0,prob:70,stage:'5. Cotizacion Enviada',seller:'Cesar',status:'open',date:'2025-08-28',closedDate:null,lossReason:'',followUpDate:'2026-02-26',followUpDesc:'',followUpType:''},
  {id:45,name:'Mantenimiento equipos',company:'Symrise',value:0,prob:70,stage:'5. Cotizacion Enviada',seller:'Eduardo',status:'open',date:'2025-08-26',closedDate:null,lossReason:'',followUpDate:'2026-02-26',followUpDesc:'',followUpType:''},
  {id:46,name:'Operacion PTAR',company:'Deacero Alambras',value:0,prob:70,stage:'5. Cotizacion Enviada',seller:'Eduardo',status:'open',date:'2026-01-08',closedDate:null,lossReason:'',followUpDate:'2026-01-13',followUpDesc:'SILVER',followUpType:'call'},
  {id:47,name:'Medidores',company:'Caterpillar',value:0,prob:70,stage:'5. Cotizacion Enviada',seller:'Eduardo',status:'open',date:'2026-02-26',closedDate:null,lossReason:'',followUpDate:'2026-03-17',followUpDesc:'',followUpType:''},
  {id:48,name:'Recuperacion Agua',company:'Quaker Houghton',value:0,prob:20,stage:'Stand BY',seller:'Eduardo',status:'open',date:'2025-08-26',closedDate:null,lossReason:'',followUpDate:null,followUpDesc:'Recuperar agua',followUpType:''},
  {id:49,name:'Sigma Corporativo',company:'Sigma Corporativo',value:0,prob:20,stage:'Stand BY',seller:'Eduardo',status:'open',date:'2025-09-18',closedDate:null,lossReason:'',followUpDate:null,followUpDesc:'',followUpType:''},
  {id:50,name:'Osmosis',company:'Deacero',value:0,prob:20,stage:'Stand BY',seller:'Eduardo',status:'open',date:'2025-08-26',closedDate:null,lossReason:'',followUpDate:null,followUpDesc:'',followUpType:''},
  {id:51,name:'POLIZAS DE MANTTO.',company:'FRISA',value:0,prob:20,stage:'Stand BY',seller:'Eduardo',status:'open',date:'2025-12-10',closedDate:null,lossReason:'',followUpDate:null,followUpDesc:'SE EVIO CORREOS, SOLICITARON UNA COTIZACION DE VARIOS SERVICIOS',followUpType:''},
  {id:52,name:'Filracion para lineas generales',company:'HNI',value:0,prob:20,stage:'Stand BY',seller:'Eduardo',status:'open',date:'2025-10-28',closedDate:null,lossReason:'',followUpDate:null,followUpDesc:'TIENE INCRUSTACION EN TUBERIAS DE SERVICIOS GRALES.',followUpType:''},
  {id:53,name:'Renovacion Poliza',company:'Emerson Acuna',value:0,prob:100,stage:'6. Ganada',seller:'Eduardo',status:'won',date:'2026-01-15',closedDate:'2026-01-15',lossReason:'',followUpDate:null,followUpDesc:'',followUpType:''},
  {id:54,name:'membranas',company:'HNI',value:0,prob:100,stage:'6. Ganada',seller:'Eduardo',status:'won',date:'2026-01-28',closedDate:'2026-01-28',lossReason:'',followUpDate:null,followUpDesc:'',followUpType:''},
  {id:55,name:'Renovacion Poliza Chiller',company:'HNI',value:0,prob:100,stage:'6. Ganada',seller:'Eduardo',status:'won',date:'2026-01-28',closedDate:'2026-01-28',lossReason:'',followUpDate:null,followUpDesc:'',followUpType:''},
  {id:56,name:'Renovacion Poliza',company:'Magna Saltillo',value:0,prob:100,stage:'6. Ganada',seller:'Eduardo',status:'won',date:'2026-01-15',closedDate:'2026-01-15',lossReason:'',followUpDate:null,followUpDesc:'',followUpType:''},
  {id:57,name:'Tratamiento quim osmosis',company:'Linde',value:0,prob:100,stage:'6. Ganada',seller:'Eduardo',status:'won',date:'2025-09-05',closedDate:'2025-09-05',lossReason:'',followUpDate:null,followUpDesc:'',followUpType:''},
  {id:58,name:'Membranas + Zeolita',company:'Linde',value:0,prob:100,stage:'6. Ganada',seller:'Eduardo',status:'won',date:'2025-09-11',closedDate:'2025-09-11',lossReason:'',followUpDate:null,followUpDesc:'',followUpType:''},
  {id:59,name:'12 membranas 4x40',company:'Penoles',value:0,prob:100,stage:'6. Ganada',seller:'Bretado',status:'won',date:'2025-09-11',closedDate:'2025-09-11',lossReason:'',followUpDate:null,followUpDesc:'',followUpType:''},
  {id:60,name:'2 membranas 4x40',company:'Corona',value:0,prob:100,stage:'6. Ganada',seller:'Eduardo',status:'won',date:'2025-09-10',closedDate:'2025-09-10',lossReason:'',followUpDate:null,followUpDesc:'',followUpType:''},
  {id:61,name:'Poliza osmosis comedor',company:'Macimex Ramos Arizpe',value:0,prob:100,stage:'6. Ganada',seller:'Eduardo',status:'won',date:'2025-10-06',closedDate:'2025-10-06',lossReason:'',followUpDate:null,followUpDesc:'',followUpType:''},
  {id:62,name:'POLIZA OSMOSIS INVERSA',company:'HNI',value:0,prob:100,stage:'6. Ganada',seller:'Eduardo',status:'won',date:'2025-11-27',closedDate:'2025-11-27',lossReason:'',followUpDate:null,followUpDesc:'',followUpType:''},
  {id:63,name:'Poliza Mnatenimiento Osmosis',company:'Nidec mty',value:0,prob:100,stage:'6. Ganada',seller:'Eduardo',status:'won',date:'2025-11-06',closedDate:'2025-11-06',lossReason:'',followUpDate:null,followUpDesc:'',followUpType:''},
  {id:64,name:'Recuperacion Agua',company:'Quifa',value:0,prob:0,stage:'Perdida',seller:'Eduardo',status:'lost',date:'2025-08-26',closedDate:'2025-08-26',lossReason:'Perdida',followUpDate:null,followUpDesc:'Pdte: rechazo de ambos osmosis',followUpType:''},
  {id:65,name:'Ahorro agua',company:'RegalRexnord',value:0,prob:0,stage:'Perdida',seller:'Eduardo',status:'lost',date:'2025-08-28',closedDate:'2025-08-28',lossReason:'Perdida',followUpDate:null,followUpDesc:'',followUpType:''},
  {id:66,name:'Poliza Osmosis y Chillers',company:'Turck Arteaga',value:0,prob:0,stage:'Perdida',seller:'Eduardo',status:'lost',date:'2025-09-30',closedDate:'2025-09-30',lossReason:'Perdida',followUpDate:null,followUpDesc:'Poliza OI',followUpType:''},
  {id:67,name:'Poliza PTAR',company:'Deacero Fino',value:0,prob:0,stage:'Perdida',seller:'Eduardo',status:'lost',date:'2026-01-12',closedDate:'2026-01-12',lossReason:'Perdida',followUpDate:null,followUpDesc:'gENESIS',followUpType:''},
  {id:68,name:'Poliza Osmosis',company:'Lear Arteaga',value:0,prob:0,stage:'Perdida',seller:'Eduardo',status:'lost',date:'2025-11-18',closedDate:'2025-11-18',lossReason:'Perdida',followUpDate:null,followUpDesc:'Se envio alcance de poliza por correo',followUpType:''},
];
const DA=[
  {id:1,type:'call',title:'Llamada con Laura Méndez',desc:'Seguimiento propuesta Q2',time:'Hace 30 min',contactName:'Laura Méndez',date:'2025-03-18'},
  {id:2,type:'meet',title:'Reunión con Diego Torres',desc:'Presentación de soluciones',time:'Hoy 11:00',contactName:'Diego Torres',date:'2025-03-18'},
];
function crmLd(k,d){try{const v=localStorage.getItem(k);return v?JSON.parse(v):d}catch{return d}}
function crmSv(k,d){try{localStorage.setItem(k,JSON.stringify(d))}catch{}}
let crmContacts=crmLd(K.c,DC),crmDeals=crmLd(K.d,DD),crmActivities=crmLd(K.a,DA),crmCompanies=crmLd(K.emp,DEMP),crmHot10=crmLd(K.h10,[]);
let crmStages=crmLd(K.s,DS),crmSellers=crmLd(K.v,['Eduardo','David Lopez','Cesar','Bretado']),crmLossReasons=crmLd(K.lr,['Precio alto','Competencia','Sin presupuesto','Proyecto cancelado','Sin respuesta']);
if(crmStages.length&&typeof crmStages[0]==='string'){const p={Inicial:10,Contactado:25,Propuesta:50,'Negociación':75,Cerrado:100};crmStages=crmStages.map(s=>({name:s,prob:p[s]||50}));}
crmDeals.forEach(d=>{if(!d.status)d.status='open';if(!d.lossReason)d.lossReason='';if(d.followUpDate===undefined)d.followUpDate=null;if(!d.followUpDesc)d.followUpDesc='';if(!d.followUpType)d.followUpType='';if(!d.seller)d.seller='';if(!d.periodicity)d.periodicity=7;});
crmActivities.forEach(a=>{if(a.done===undefined)a.done=false;if(!a.dealId)a.dealId=null;});
function crmSaveAll(){crmSv(K.c,crmContacts);crmSv(K.d,crmDeals);crmSv(K.a,crmActivities);crmSv(K.s,crmStages);crmSv(K.v,crmSellers);crmSv(K.lr,crmLossReasons);crmSv(K.emp,crmCompanies);crmSv(K.h10,crmHot10);}

// ─── KPI TRACKING ───
function crmThisMonth(){const n=new Date();return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,'0')}`;}
function crmGetKPI(){return crmLd(K.kpi,{advances:0,toCotiz:0,month:crmThisMonth()});}
function crmResetKPIIfNewMonth(){let k=crmGetKPI();if(k.month!==crmThisMonth()){k={advances:0,toCotiz:0,month:crmThisMonth()};crmSv(K.kpi,k);}return k;}
function crmTrackAdvance(toStage){const k=crmResetKPIIfNewMonth();k.advances++;if(toStage&&toStage.toLowerCase().includes('cotiz'))k.toCotiz++;crmSv(K.kpi,k);}
const CRM_AVC=['crm-av-0','crm-av-1','crm-av-2','crm-av-3','crm-av-4','crm-av-5'];
const CRM_STC=['crm-bg-gray','crm-bg-blue','crm-bg-amber','crm-bg-amber','crm-bg-green','crm-bg-teal','crm-bg-purple'];
const CRM_SC={Cliente:'crm-bg-teal',Prospecto:'crm-bg-blue',Interesado:'crm-bg-amber',Inactivo:'crm-bg-gray'};
const CRM_AI={call:'📞',email:'✉️',meet:'📅',note:'📝'};
const CRM_AL={call:'Llamada con',email:'Email a',meet:'Reunión con',note:'Nota:'};
const crmIni=n=>n.split(' ').map(x=>x[0]).join('').substring(0,2).toUpperCase();
const crmAvc=n=>CRM_AVC[n.charCodeAt(0)%CRM_AVC.length];
const crmFmt=v=>'$'+(v||0).toLocaleString('es-MX');
const crmNid=arr=>arr.length?Math.max(...arr.map(x=>x.id))+1:1;
const crmEsc=s=>String(s||'').replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
const crmGsi=name=>crmStages.findIndex(s=>s.name===name);
const crmGsc=name=>{const i=crmGsi(name);return CRM_STC[Math.min(Math.max(i,0),CRM_STC.length-1)];};
const crmTd0=()=>{const d=new Date();d.setHours(0,0,0,0);return d;};
let crmPg='dashboard',crmQ='',crmFSt='Todos',crmFSel='Todos',crmCfgTab='vendedores',crmShowClosed=false,crmMFn=null;
let crmDSeller='Todos',crmDDateFrom='',crmDDateTo='',crmActTab='pending';
function crmShow(p){crmPg=p;crmQ='';crmFSt='Todos';crmFSel='Todos';document.querySelectorAll('#crm-app .crm-nav-item').forEach(el=>el.classList.remove('active'));const navId=p==='empresas'?'crm-nav-contactos':'crm-nav-'+p;const el=document.getElementById(navId);if(el)el.classList.add('active');crmRender();}
function crmRender(){
  const mc=document.getElementById('crm-mc');
  if(!mc)return;
  if(crmPg==='dashboard')mc.innerHTML=crmRDash();
  else if(crmPg==='contactos'||crmPg==='empresas')mc.innerHTML=crmRContacts();
  else if(crmPg==='hot10')mc.innerHTML=crmRHot10();
  else if(crmPg==='pipeline')mc.innerHTML=crmRPipeline();
  else if(crmPg==='actividades')mc.innerHTML=crmRActs();
  else if(crmPg==='vendedores')mc.innerHTML=crmRVendedores();
  else if(crmPg==='configuracion')mc.innerHTML=crmRConfig();
}
function crmRDash(){
  const inRange=(d)=>{const date=d.date||'';if(crmDDateFrom&&date<crmDDateFrom)return false;if(crmDDateTo&&date>crmDDateTo)return false;return true;};
  const bySeller=(d)=>crmDSeller==='Todos'||d.seller===crmDSeller;
  const allF=crmDeals.filter(d=>bySeller(d)&&inRange(d));
  const open=allF.filter(d=>d.status==='open');
  const won=allF.filter(d=>d.status==='won');
  const closed=allF.filter(d=>d.status!=='open');
  const pipe=open.reduce((s,d)=>s+(d.value||0),0);
  const fc=open.reduce((s,d)=>s+(d.value||0)*(d.prob||0)/100,0);
  const conv=closed.length?(won.length/closed.length*100).toFixed(0):0;
  const fbs=crmStages.map(st=>{const sd=open.filter(d=>d.stage===st.name);return{name:st.name,w:sd.reduce((s,d)=>s+(d.value||0)*(d.prob||st.prob)/100,0),t:sd.reduce((s,d)=>s+(d.value||0),0)};}).filter(s=>s.t>0);
  const mxF=Math.max(...fbs.map(s=>s.w),1);
  const kpi=crmResetKPIIfNewMonth();
  const visitas=crmActivities.filter(a=>{if(a.type!=='meet')return false;if(!a.date)return false;if(crmDDateFrom&&a.date<crmDDateFrom)return false;if(crmDDateTo&&a.date>crmDDateTo)return false;return true;}).length;
  const nuevos=allF.length;
  const enCotiz=open.filter(d=>d.stage&&d.stage.toLowerCase().includes('cotiz')).length;
  const meses=['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
  const mesNom=meses[new Date().getMonth()]+' '+new Date().getFullYear();
  const rd=[...allF].reverse().slice(0,5);
  const ra=[...crmActivities].reverse().slice(0,6);
  const isFiltered=crmDSeller!=='Todos'||crmDDateFrom||crmDDateTo;
  return`
  <div class="crm-page-header">
    <div>
      <p class="crm-page-title">📊 Dashboard</p>
      <p class="crm-page-subtitle">${new Date().toLocaleDateString('es-MX',{weekday:'long',day:'numeric',month:'long',year:'numeric'})}</p>
    </div>
  </div>
  <div style="background:var(--crm-surface);border:1px solid var(--crm-border);border-radius:var(--crm-rad-lg);padding:14px 18px;margin-bottom:20px;box-shadow:var(--crm-shadow);display:flex;align-items:center;gap:14px;flex-wrap:wrap;">
    <span style="font-size:12px;font-weight:700;color:var(--crm-text3);text-transform:uppercase;letter-spacing:.5px;">🔽 Filtros</span>
    <div style="display:flex;align-items:center;gap:7px;">
      <label style="font-size:12px;color:var(--crm-text2);font-weight:600;">Vendedor</label>
      <select onchange="crmDSeller=this.value;crmRender()" style="padding:6px 10px;font-size:12px;border:1px solid var(--crm-border);border-radius:7px;background:var(--crm-bg);color:var(--crm-text);outline:none;font-family:inherit;cursor:pointer;">
        <option value="Todos" ${crmDSeller==='Todos'?'selected':''}>Todos</option>
        ${crmSellers.map(s=>`<option value="${crmEsc(s)}" ${crmDSeller===s?'selected':''}>${crmEsc(s)}</option>`).join('')}
      </select>
    </div>
    <div style="display:flex;align-items:center;gap:7px;">
      <label style="font-size:12px;color:var(--crm-text2);font-weight:600;">Desde</label>
      <input type="date" value="${crmDDateFrom}" onchange="crmDDateFrom=this.value;crmRender()" style="padding:6px 10px;font-size:12px;border:1px solid var(--crm-border);border-radius:7px;background:var(--crm-bg);color:var(--crm-text);outline:none;font-family:inherit;">
    </div>
    <div style="display:flex;align-items:center;gap:7px;">
      <label style="font-size:12px;color:var(--crm-text2);font-weight:600;">Hasta</label>
      <input type="date" value="${crmDDateTo}" onchange="crmDDateTo=this.value;crmRender()" style="padding:6px 10px;font-size:12px;border:1px solid var(--crm-border);border-radius:7px;background:var(--crm-bg);color:var(--crm-text);outline:none;font-family:inherit;">
    </div>
    ${isFiltered?`<button class="crm-btn crm-btn-sm" onclick="crmDSeller='Todos';crmDDateFrom='';crmDDateTo='';crmRender()">✕ Limpiar</button>`:''}
    ${isFiltered?`<span style="font-size:12px;color:var(--crm-accent);font-weight:600;">${allF.length} tratos en filtro</span>`:''}
  </div>
  <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-bottom:20px;">
    <div style="background:var(--crm-surface);border:1px solid var(--crm-border);border-radius:var(--crm-rad-lg);padding:16px 18px;box-shadow:var(--crm-shadow);border-top:3px solid #3b82f6;transition:transform .2s,box-shadow .2s;" onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow=var(--crm-shadow-md)" onmouseout="this.style.transform='';this.style.boxShadow=''">
      <div style="font-size:11px;color:var(--crm-text3);font-weight:700;text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px;">📅 Visitas realizadas</div>
      <div style="font-size:30px;font-weight:800;color:#1d4ed8;line-height:1;letter-spacing:-1px;">${visitas}</div>
      <div style="font-size:11px;color:var(--crm-text3);margin-top:6px;">${crmDDateFrom||crmDDateTo?'en el periodo':'este mes'}</div>
    </div>
    <div style="background:var(--crm-surface);border:1px solid var(--crm-border);border-radius:var(--crm-rad-lg);padding:16px 18px;box-shadow:var(--crm-shadow);border-top:3px solid var(--crm-accent);transition:transform .2s,box-shadow .2s;" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform=''">
      <div style="font-size:11px;color:var(--crm-text3);font-weight:700;text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px;">➕ Oportunidades</div>
      <div style="font-size:30px;font-weight:800;color:var(--crm-accent-dark);line-height:1;letter-spacing:-1px;">${nuevos}</div>
      <div style="font-size:11px;color:var(--crm-text3);margin-top:6px;">${isFiltered?'en filtro actual':'total pipeline'}</div>
    </div>
    <div style="background:var(--crm-surface);border:1px solid var(--crm-border);border-radius:var(--crm-rad-lg);padding:16px 18px;box-shadow:var(--crm-shadow);border-top:3px solid #f59e0b;transition:transform .2s,box-shadow .2s;" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform=''">
      <div style="font-size:11px;color:var(--crm-text3);font-weight:700;text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px;">⬆️ Tratos avanzados</div>
      <div style="font-size:30px;font-weight:800;color:#d97706;line-height:1;letter-spacing:-1px;">${kpi.advances}</div>
      <div style="font-size:11px;color:var(--crm-text3);margin-top:6px;">movimientos de etapa</div>
    </div>
    <div style="background:var(--crm-surface);border:1px solid var(--crm-border);border-radius:var(--crm-rad-lg);padding:16px 18px;box-shadow:var(--crm-shadow);border-top:3px solid #8b5cf6;transition:transform .2s,box-shadow .2s;" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform=''">
      <div style="font-size:11px;color:var(--crm-text3);font-weight:700;text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px;">📋 En Cotización</div>
      <div style="font-size:30px;font-weight:800;color:#6d28d9;line-height:1;letter-spacing:-1px;">${enCotiz}</div>
      <div style="font-size:11px;color:var(--crm-text3);margin-top:6px;">tratos activos${isFiltered?' (filtro)':''}</div>
    </div>
  </div>
  <div class="crm-metrics">
    <div class="crm-metric">
      <div class="crm-metric-label">💼 Pipeline abierto</div>
      <div class="crm-metric-value">${crmFmt(pipe)}</div>
      <div class="crm-metric-sub">${open.length} tratos activos</div>
    </div>
    <div class="crm-metric crm-accent">
      <div class="crm-metric-label">⚡ Forecast</div>
      <div class="crm-metric-value">${crmFmt(Math.round(fc))}</div>
      <div class="crm-metric-sub">valor × probabilidad</div>
    </div>
    <div class="crm-metric crm-blue">
      <div class="crm-metric-label">🏆 Ganados</div>
      <div class="crm-metric-value">${won.length}</div>
      <div class="crm-metric-sub">conv. ${conv}% · ${closed.length} cerrados</div>
    </div>
  </div>
  ${fbs.length?`<div class="crm-forecast-section"><div class="crm-forecast-title">📈 Forecast por etapa${isFiltered?' — filtrado':' — '+mesNom}</div>${fbs.map(s=>`<div class="crm-forecast-row"><div class="crm-forecast-label">${crmEsc(s.name)}</div><div class="crm-forecast-bar-wrap"><div class="crm-forecast-bar-fill" style="width:${Math.round(s.w/mxF*100)}%"></div></div><div class="crm-forecast-val">${crmFmt(Math.round(s.w))}</div></div>`).join('')}</div>`:''}
  <div class="crm-grid-2">
    <div class="crm-card">
      <div class="crm-card-pad">
        <div class="crm-card-title">Tratos recientes${isFiltered?' (filtrado)':''}</div>
        <div class="crm-tbl-wrap"><table><thead><tr><th>Trato</th><th>Empresa</th><th>Vendedor</th><th>Etapa</th></tr></thead><tbody>
        ${rd.length?rd.map(d=>`<tr>
          <td><div style="font-weight:600;font-size:13px;color:var(--crm-text);">${crmEsc(d.name)}</div></td>
          <td style="color:var(--crm-text3);font-size:12px;">${crmEsc(d.company)}</td>
          <td style="font-size:12px;">${d.seller?`<span class="crm-badge crm-bg-gray">${crmEsc(d.seller)}</span>`:'-'}</td>
          <td><span class="crm-badge ${crmGsc(d.stage)}" style="font-size:10px;">${crmEsc(d.stage)}</span></td>
        </tr>`).join(''):'<tr><td colspan="4" style="text-align:center;padding:20px;color:var(--crm-text3);">Sin tratos en este filtro</td></tr>'}
        </tbody></table></div>
      </div>
    </div>
    <div class="crm-card">
      <div class="crm-card-pad">
        <div class="crm-card-title">Últimas actividades</div>
        ${ra.map(a=>`<div class="crm-act-item" style="padding:10px 0;">
          <div class="crm-act-icon ${a.type}">${CRM_AI[a.type]||'📌'}</div>
          <div style="flex:1;min-width:0;">
            <div style="font-size:13px;font-weight:600;color:var(--crm-text);">${crmEsc(a.title)}</div>
            <div style="font-size:11px;color:var(--crm-text3);margin-top:2px;">${crmEsc(a.desc)}</div>
          </div>
          <div style="font-size:11px;color:var(--crm-text3);white-space:nowrap;">${a.time}</div>
        </div>`).join('')||'<div class="crm-empty"><div class="crm-empty-icon">⏰</div><p>Sin actividades</p></div>'}
      </div>
    </div>
  </div>
  <div style="text-align:right;margin-top:-8px;">
    <button class="crm-btn crm-btn-sm" onclick="if(confirm('¿Resetear contadores del mes?')){crmSv(K.kpi,{advances:0,toCotiz:0,month:crmThisMonth()});crmRender();crmToast('Contadores reseteados');}">↺ Resetear KPIs</button>
  </div>`;
}
// ── Empresas ──
let crmEmpFilter='Todos',crmEmpClass='Todos',crmEmpQ='';
function crmEmpDays(lc){if(!lc)return 999;const d=new Date(lc+'T00:00:00'),now=crmTd0();return Math.round((now-d)/86400000);}
function crmEmpColor(days){if(days>=60)return'red';if(days>=30)return'yellow';return'green';}
function crmEmpColorLabel(c){const days=crmEmpDays(c.lastContact);if(days>=60)return'🔴 +60 días sin contacto';if(days>=30)return'🟡 +30 días sin contacto';return'🟢 Contacto reciente';}
function crmREmpresas(){
  const qL=crmEmpQ.toLowerCase();
  const list=crmCompanies.filter(c=>
    (!qL||c.name.toLowerCase().includes(qL)||c.sector.toLowerCase().includes(qL))&&
    (crmEmpClass==='Todos'||c.classification===crmEmpClass)&&
    (crmEmpFilter==='Todos'||crmEmpColor(crmEmpDays(c.lastContact))===crmEmpFilter)
  ).sort((a,b)=>{
    const ord={A:0,B:1,C:2};
    return(ord[a.classification]||9)-(ord[b.classification]||9);
  });
  const totA=crmCompanies.filter(c=>c.classification==='A').length;
  const totB=crmCompanies.filter(c=>c.classification==='B').length;
  const totC=crmCompanies.filter(c=>c.classification==='C').length;
  const totRed=crmCompanies.filter(c=>crmEmpColor(crmEmpDays(c.lastContact))==='red').length;
  const totYel=crmCompanies.filter(c=>crmEmpColor(crmEmpDays(c.lastContact))==='yellow').length;
  const totGrn=crmCompanies.filter(c=>crmEmpColor(crmEmpDays(c.lastContact))==='green').length;
  return`
  <div class="crm-page-header">
    <div><p class="crm-page-title">🏢 Empresas</p><p class="crm-page-subtitle">${crmCompanies.length} empresas · ${totA} clave · ${totRed} sin contacto +60d</p></div>
    <button class="crm-btn crm-btn-accent" onclick="crmOpenNewEmpresa()">＋ Nueva empresa</button>
  </div>
  <div style="display:flex;gap:10px;margin-bottom:16px;flex-wrap:wrap;">
    <div style="display:flex;align-items:center;gap:6px;padding:8px 14px;border-radius:8px;background:${crmEmpFilter==='green'?'#d1fae5':'white'};border:1px solid ${crmEmpFilter==='green'?'#10b981':'var(--border)'};cursor:pointer;font-size:0.82rem;font-weight:600;" onclick="crmEmpFilter=crmEmpFilter==='green'?'Todos':'green';crmRender()">
      <span class="emp-stat-dot green"></span> Activos <span style="font-weight:700;color:#10b981;">${totGrn}</span>
    </div>
    <div style="display:flex;align-items:center;gap:6px;padding:8px 14px;border-radius:8px;background:${crmEmpFilter==='yellow'?'#fef3c7':'white'};border:1px solid ${crmEmpFilter==='yellow'?'#f59e0b':'var(--border)'};cursor:pointer;font-size:0.82rem;font-weight:600;" onclick="crmEmpFilter=crmEmpFilter==='yellow'?'Todos':'yellow';crmRender()">
      <span class="emp-stat-dot yellow"></span> +30 días <span style="font-weight:700;color:#f59e0b;">${totYel}</span>
    </div>
    <div style="display:flex;align-items:center;gap:6px;padding:8px 14px;border-radius:8px;background:${crmEmpFilter==='red'?'#fee2e2':'white'};border:1px solid ${crmEmpFilter==='red'?'#ef4444':'var(--border)'};cursor:pointer;font-size:0.82rem;font-weight:600;" onclick="crmEmpFilter=crmEmpFilter==='red'?'Todos':'red';crmRender()">
      <span class="emp-stat-dot red"></span> +60 días <span style="font-weight:700;color:#ef4444;">${totRed}</span>
    </div>
  </div>
  <div class="crm-toolbar">
    <div class="crm-search-wrap">
      <span class="crm-search-icon">🔍</span>
      <input type="text" placeholder="Buscar empresa o sector..." value="${crmEsc(crmEmpQ)}" oninput="crmEmpQ=this.value;crmRender()">
    </div>
    <select class="crm-filter" onchange="crmEmpClass=this.value;crmRender()">
      <option value="Todos">Todas las clasificaciones</option>
      <option value="A" ${crmEmpClass==='A'?'selected':''}>🅰️ Clase A — Clave (${totA})</option>
      <option value="B" ${crmEmpClass==='B'?'selected':''}>🅱️ Clase B — Media (${totB})</option>
      <option value="C" ${crmEmpClass==='C'?'selected':''}>©️ Clase C — Baja (${totC})</option>
    </select>
  </div>
  <div class="emp-grid">
  ${list.length?list.map(c=>{
    const days=crmEmpDays(c.lastContact);
    const color=crmEmpColor(days);
    const deals=crmDeals.filter(d=>d.company&&d.company.toLowerCase()===c.name.toLowerCase());
    const openDeals=deals.filter(d=>d.status==='open');
    const wonDeals=deals.filter(d=>d.status==='won');
    const totalVal=deals.reduce((s,d)=>s+(d.value||0),0);
    const contacts=crmContacts.filter(ct=>ct.company&&ct.company.toLowerCase()===c.name.toLowerCase());
    return`<div class="emp-card emp-status-${color}">
      <div class="emp-status-bar"></div>
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-top:4px;">
        <div style="display:flex;align-items:center;gap:10px;">
          <div class="emp-class emp-class-${c.classification}">${c.classification}</div>
          <div>
            <div style="font-weight:700;font-size:0.95rem;color:var(--txt);">${crmEsc(c.name)}</div>
            <div style="font-size:0.78rem;color:var(--txt2);">${crmEsc(c.sector||'Sin sector')}</div>
          </div>
        </div>
        <div style="display:flex;gap:4px;">
          <button class="crm-btn crm-btn-sm" onclick="crmEditEmpresa(${c.id})" title="Editar">✏️</button>
          <button class="crm-btn crm-btn-sm crm-btn-danger" onclick="crmDeleteEmpresa(${c.id})" title="Eliminar">🗑️</button>
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:6px;margin-top:10px;">
        <span class="emp-stat-dot ${color}"></span>
        <span style="font-size:0.78rem;color:var(--txt2);">${c.lastContact?'Último contacto: '+new Date(c.lastContact+'T00:00:00').toLocaleDateString('es-MX',{day:'2-digit',month:'short',year:'numeric'})+' ('+days+' días)':'Sin registro de contacto'}</span>
      </div>
      <div style="display:flex;gap:12px;margin-top:10px;">
        <div style="text-align:center;padding:6px 10px;background:var(--bg);border-radius:6px;flex:1;">
          <div style="font-size:0.7rem;color:var(--txt3);font-weight:600;">OPORTUNIDADES</div>
          <div style="font-size:1.1rem;font-weight:800;color:var(--accent);">${openDeals.length}</div>
        </div>
        <div style="text-align:center;padding:6px 10px;background:var(--bg);border-radius:6px;flex:1;">
          <div style="font-size:0.7rem;color:var(--txt3);font-weight:600;">GANADOS</div>
          <div style="font-size:1.1rem;font-weight:800;color:var(--green);">${wonDeals.length}</div>
        </div>
        <div style="text-align:center;padding:6px 10px;background:var(--bg);border-radius:6px;flex:1;">
          <div style="font-size:0.7rem;color:var(--txt3);font-weight:600;">VALOR TOTAL</div>
          <div style="font-size:0.88rem;font-weight:800;color:var(--txt);">${crmFmt(totalVal)}</div>
        </div>
        <div style="text-align:center;padding:6px 10px;background:var(--bg);border-radius:6px;flex:1;">
          <div style="font-size:0.7rem;color:var(--txt3);font-weight:600;">CONTACTOS</div>
          <div style="font-size:1.1rem;font-weight:800;color:var(--purple);">${contacts.length}</div>
        </div>
      </div>
      ${c.notes?`<div style="margin-top:8px;font-size:0.78rem;color:var(--txt2);font-style:italic;">${crmEsc(c.notes)}</div>`:''}
      ${openDeals.length?`<div class="emp-deals-list">
        <div style="font-size:0.72rem;font-weight:700;color:var(--txt3);text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">Oportunidades abiertas</div>
        ${openDeals.slice(0,3).map(d=>`<div class="emp-deal-row">
          <span style="font-size:10px;">📈</span>
          <span style="flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${crmEsc(d.name)}</span>
          <span style="font-weight:700;color:var(--accent-dark);font-size:0.75rem;">${crmFmt(d.value)}</span>
          <span style="font-size:0.7rem;color:var(--txt3);">${crmEsc(d.stage)}</span>
        </div>`).join('')}
        ${openDeals.length>3?`<div style="font-size:0.72rem;color:var(--accent);cursor:pointer;margin-top:2px;" onclick="crmFSel='Todos';crmShow('pipeline')">+${openDeals.length-3} más →</div>`:''}
      </div>`:''}
    </div>`;
  }).join(''):`<div style="grid-column:1/-1;"><div class="crm-empty"><div class="crm-empty-icon">🏢</div><p>No hay empresas que coincidan</p></div></div>`}
  </div>`;
}
function crmRContacts(){
  const isEmp=crmPg==='empresas';
  // Toggle bar
  let h=`<div style="display:flex;gap:0;margin-bottom:18px;background:var(--bg);border-radius:10px;padding:3px;border:1px solid var(--border);width:fit-content;">
    <button onclick="crmPg='contactos';crmRender()" style="padding:8px 20px;border:none;border-radius:8px;font-size:0.85rem;font-weight:700;cursor:pointer;transition:all .15s;${!isEmp?'background:white;color:var(--txt);box-shadow:0 1px 3px rgba(0,0,0,0.1);':'background:transparent;color:var(--txt2);'}">👤 Contactos</button>
    <button onclick="crmPg='empresas';crmRender()" style="padding:8px 20px;border:none;border-radius:8px;font-size:0.85rem;font-weight:700;cursor:pointer;transition:all .15s;${isEmp?'background:white;color:var(--txt);box-shadow:0 1px 3px rgba(0,0,0,0.1);':'background:transparent;color:var(--txt2);'}">🏢 Empresas</button>
  </div>`;
  if(isEmp) return h+crmREmpresas();
  // Contacts view
  const qL=crmQ.toLowerCase();
  const list=crmContacts.filter(c=>(!qL||c.name.toLowerCase().includes(qL)||c.company.toLowerCase().includes(qL)||c.email.toLowerCase().includes(qL))&&(crmFSt==='Todos'||c.status===crmFSt));
  return h+`
  <div class="crm-page-header" style="margin-top:0;">
    <div><p class="crm-page-title">👤 Contactos</p><p class="crm-page-subtitle">${crmContacts.length} contactos registrados</p></div>
    <button class="crm-btn crm-btn-accent" onclick="crmOpenNewContact()">＋ Nuevo contacto</button>
  </div>
  <div class="crm-toolbar">
    <div class="crm-search-wrap">
      <span class="crm-search-icon">🔍</span>
      <input type="text" placeholder="Buscar por nombre, empresa o email..." value="${crmEsc(crmQ)}" oninput="crmQ=this.value;crmRender()">
    </div>
    <select class="crm-filter" onchange="crmFSt=this.value;crmRender()">
      <option value="Todos">Todos los estados</option>
      <option value="Cliente" ${crmFSt==='Cliente'?'selected':''}>✅ Clientes</option>
      <option value="Prospecto" ${crmFSt==='Prospecto'?'selected':''}>🎯 Prospectos</option>
      <option value="Interesado" ${crmFSt==='Interesado'?'selected':''}>💡 Interesados</option>
      <option value="Inactivo" ${crmFSt==='Inactivo'?'selected':''}>💤 Inactivos</option>
    </select>
  </div>
  <div class="crm-card">
    <div class="crm-tbl-wrap">
      <table>
        <thead><tr><th>Contacto</th><th>Empresa</th><th>Email</th><th>Teléfono</th><th>Estado</th><th>Valor</th><th style="width:90px;"></th></tr></thead>
        <tbody>
        ${list.length?list.map(c=>`<tr>
          <td><div class="crm-av-row"><div class="crm-av ${crmAvc(c.name)}">${crmIni(c.name)}</div><span style="font-weight:600;color:var(--crm-text);">${crmEsc(c.name)}</span></div></td>
          <td><span class="crm-badge crm-bg-gray" style="font-size:11px;">${crmEsc(c.company)||'—'}</span></td>
          <td style="font-size:12px;"><a href="mailto:${crmEsc(c.email)}" style="color:var(--crm-accent);text-decoration:none;font-weight:500;">${crmEsc(c.email)||'—'}</a></td>
          <td style="font-size:12px;color:var(--crm-text2);">${crmEsc(c.phone)||'—'}</td>
          <td><span class="crm-badge ${CRM_SC[c.status]||'crm-bg-gray'}">${crmEsc(c.status)}</span></td>
          <td style="font-weight:700;color:var(--crm-accent-dark);">${crmFmt(c.value)}</td>
          <td><div style="display:flex;gap:4px;"><button class="crm-btn crm-btn-sm" onclick="crmEditContact(${c.id})" title="Editar">✏️</button><button class="crm-btn crm-btn-sm crm-btn-danger" onclick="crmDeleteContact(${c.id})" title="Eliminar">🗑️</button></div></td>
        </tr>`).join(''):'<tr><td colspan="7"><div class="crm-empty"><div class="crm-empty-icon">👤</div><p>Sin contactos que coincidan con la búsqueda</p></div></td></tr>'}
        </tbody>
      </table>
    </div>
  </div>`;
}
function crmRPipeline(){
  const vis=crmShowClosed?crmDeals:crmDeals.filter(d=>d.status!=='lost');
  const fd=crmFSel==='Todos'?vis:vis.filter(d=>d.seller===crmFSel);
  const grp={};crmStages.forEach(s=>grp[s.name]=[]);fd.forEach(d=>{if(grp[d.stage]!==undefined)grp[d.stage].push(d);});
  const pipe=fd.filter(d=>d.status==='open').reduce((s,d)=>s+(d.value||0),0);
  const fc=fd.filter(d=>d.status==='open').reduce((s,d)=>s+(d.value||0)*(d.prob||0)/100,0);
  return`
  <div class="crm-page-header">
    <div>
      <p class="crm-page-title">📈 Pipeline de ventas</p>
      <p class="crm-page-subtitle">${crmFmt(pipe)} abierto · forecast ${crmFmt(Math.round(fc))}</p>
    </div>
    <div style="display:flex;gap:8px;flex-wrap:wrap;">
      <button class="crm-btn crm-btn-sm" onclick="crmShowClosed=!crmShowClosed;crmRender()">${crmShowClosed?'👁 Ocultar perdidos':'👁 Ver perdidos'}</button>
      <button class="crm-btn crm-btn-sm" onclick="crmShow('configuracion');crmCfgTab='etapas'">⚙️ Etapas</button>
      <button class="crm-btn crm-btn-accent" onclick="crmOpenNewDeal()">＋ Nuevo trato</button>
    </div>
  </div>
  <div class="crm-toolbar">
    <span style="font-size:13px;font-weight:600;color:var(--crm-text2);">Vendedor:</span>
    <select class="crm-filter" onchange="crmFSel=this.value;crmRender()">
      <option value="Todos">Todos</option>
      ${crmSellers.map(s=>`<option value="${crmEsc(s)}" ${crmFSel===s?'selected':''}>${crmEsc(s)}</option>`).join('')}
    </select>
  </div>
  <div class="crm-pipeline-wrap">
    <div class="crm-pipeline" style="grid-template-columns:repeat(${crmStages.length},minmax(175px,1fr));">
    ${crmStages.map((st,si)=>{
      const sd=grp[st.name]||[],sO=sd.filter(d=>d.status==='open');
      const sF=sO.reduce((s,d)=>s+(d.value||0)*(d.prob||st.prob)/100,0);
      return`<div class="crm-stage">
        <div class="crm-stage-head">
          <span ondblclick="crmRenameStage(this,${si})" style="cursor:pointer;border-radius:4px;padding:2px 4px;transition:background .15s;" title="Doble clic para renombrar" onmouseover="this.style.background='var(--crm-border)'" onmouseout="this.style.background=''">${crmEsc(st.name)}</span>
          <div style="display:flex;align-items:center;gap:4px;">
            <span style="background:var(--crm-surface);border:1px solid var(--crm-border);border-radius:999px;padding:1px 8px;font-size:10px;font-weight:700;">${sd.length}</span>
            <button onclick="crmDeleteStage(${si})" class="stage-del-btn" style="background:none;border:none;cursor:pointer;font-size:11px;opacity:0;padding:0 3px;color:var(--crm-text3);transition:opacity .15s;">✕</button>
          </div>
        </div>
        <div class="crm-stage-forecast">${crmFmt(sO.reduce((s,d)=>s+(d.value||0),0))} · forecast ${crmFmt(Math.round(sF))}</div>
        ${sd.map(d=>{
          const canB=si>0&&d.status==='open',canF=si<crmStages.length-1&&d.status==='open';
          const td=crmTd0();let fuH='';
          if(d.followUpDate){
            const fd2=new Date(d.followUpDate+'T00:00:00'),diff=Math.round((fd2-td)/86400000);
            if(diff<0)fuH=`<div class="crm-followup overdue">🔴 Vencida ${fd2.toLocaleDateString('es-MX',{day:'2-digit',month:'short'})}${d.followUpDesc?' · '+crmEsc(d.followUpDesc.substring(0,22)):''}</div>`;
            else if(diff===0)fuH=`<div class="crm-followup today">🟠 Hoy${d.followUpDesc?' · '+crmEsc(d.followUpDesc.substring(0,22)):''}</div>`;
            else fuH=`<div class="crm-followup upcoming">📅 ${fd2.toLocaleDateString('es-MX',{day:'2-digit',month:'short'})}${d.followUpDesc?' · '+crmEsc(d.followUpDesc.substring(0,22)):''}</div>`;
          } else if(d.status==='open'){fuH=`<div class="crm-followup none" onclick="crmEditDeal(${d.id})">＋ Programar seguimiento</div>`;}
          const isOD=d.followUpDate&&new Date(d.followUpDate+'T00:00:00')<td&&d.status==='open';
          const isTd=d.followUpDate&&Math.round((new Date(d.followUpDate+'T00:00:00')-td)/86400000)===0&&d.status==='open';
          return`<div class="crm-deal-card ${d.status}${isOD?' overdue':''}${isTd?' due-today':''}">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:4px;">
              <div style="flex:1;min-width:0;">
                <div class="crm-deal-name">${crmEsc(d.name)}</div>
                <div class="crm-deal-co">${crmEsc(d.company)}${d.seller?` · <span style="color:var(--crm-accent);">👤 ${crmEsc(d.seller)}</span>`:''}</div>
              </div>
              <div style="display:flex;gap:2px;flex-shrink:0;">
                <button onclick="crmEditDeal(${d.id})" style="background:none;border:none;cursor:pointer;font-size:13px;padding:2px 3px;opacity:.35;transition:opacity .15s;" onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=.35" title="Editar">✏️</button>
                <button onclick="crmDeleteDeal(${d.id})" style="background:none;border:none;cursor:pointer;font-size:13px;padding:2px 3px;opacity:.35;transition:opacity .15s;" onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=.35" title="Eliminar">🗑️</button>
              </div>
            </div>
            ${d.status==='won'?'<div style="margin-top:5px;"><span class="crm-badge crm-bg-green" style="font-size:10px;">✓ Ganado</span></div>':d.status==='lost'?`<div style="margin-top:5px;"><span class="crm-badge crm-bg-gray" style="font-size:10px;">✗ ${crmEsc(d.lossReason||'Perdido')}</span></div>`:''}
            <div class="crm-deal-val" style="margin-top:6px;">${crmFmt(d.value)}</div>
            <div class="crm-prob-bar"><div class="crm-prob-fill" style="width:${d.prob||0}%"></div></div>
            ${fuH}
            ${d.status==='open'?`<div style="display:flex;justify-content:space-between;align-items:center;margin-top:6px;">
              <span style="font-size:10px;color:var(--crm-text3);font-weight:600;">${d.prob||0}%</span>
              <div style="display:flex;gap:3px;">
                ${canB?`<button onclick="crmMoveDeal(${d.id},-1)" style="background:var(--crm-surface2);border:1px solid var(--crm-border);border-radius:5px;cursor:pointer;font-size:10px;padding:3px 7px;color:var(--crm-text2);font-weight:600;transition:all .15s;" onmouseover="this.style.background='var(--crm-border)'" onmouseout="this.style.background='var(--crm-surface2)'">← Atrás</button>`:''}
                ${canF?`<button onclick="crmMoveDeal(${d.id},1)" style="background:var(--crm-accent-light);border:1px solid #6ee7b7;border-radius:5px;cursor:pointer;font-size:10px;padding:3px 7px;color:var(--crm-accent-dark);font-weight:700;transition:all .15s;" onmouseover="this.style.background='#a7f3d0'" onmouseout="this.style.background='var(--crm-accent-light)'">Avanzar →</button>`:''}
              </div>
            </div>`:''}
          </div>`;
        }).join('')}
      </div>`;
    }).join('')}
    </div>
  </div>`;
}
function crmRActs(){
  const today=crmTd0();
  const dealActs=crmDeals.filter(d=>d.followUpDate&&d.status==='open').map(d=>{const existing=crmActivities.find(a=>a.dealId===d.id&&!a.done);if(existing)return null;return{id:'deal_'+d.id,type:d.followUpType||'call',title:(CRM_AL[d.followUpType||'call']||'Contacto con')+' '+d.company,desc:d.followUpDesc||'Seguimiento programado',contactName:d.company,date:d.followUpDate,time:'📅 '+new Date(d.followUpDate+'T00:00:00').toLocaleDateString('es-MX',{day:'2-digit',month:'short',year:'numeric'}),dealId:d.id,done:false,doneAt:null,virtual:true};}).filter(Boolean);
  const allActs=[...crmActivities,...dealActs].sort((a,b)=>{const da=a.date||'9999',db=b.date||'9999';return da.localeCompare(db);});
  const filterAct=(a)=>{if(a.done)return crmActTab==='done';if(crmActTab==='done')return false;if(crmActTab==='pending')return true;if(crmActTab==='overdue'){const d=new Date(a.date+'T00:00:00');return a.date&&d<today;}if(crmActTab==='today'){const d=new Date(a.date+'T00:00:00');return a.date&&Math.round((d-today)/86400000)===0;}if(crmActTab==='week'){const d=new Date(a.date+'T00:00:00');const diff=Math.round((d-today)/86400000);return a.date&&diff>=0&&diff<=7;}if(crmActTab==='month'){const d=new Date(a.date+'T00:00:00');const diff=Math.round((d-today)/86400000);return a.date&&diff>=0&&diff<=30;}return true;};
  const filt=allActs.filter(filterAct);
  const counts={pending:allActs.filter(a=>!a.done).length,done:allActs.filter(a=>a.done).length,overdue:allActs.filter(a=>!a.done&&a.date&&new Date(a.date+'T00:00:00')<today).length,today:allActs.filter(a=>!a.done&&a.date&&Math.round((new Date(a.date+'T00:00:00')-today)/86400000)===0).length,week:allActs.filter(a=>!a.done&&a.date&&Math.round((new Date(a.date+'T00:00:00')-today)/86400000)>=0&&Math.round((new Date(a.date+'T00:00:00')-today)/86400000)<=7).length,month:allActs.filter(a=>!a.done&&a.date&&Math.round((new Date(a.date+'T00:00:00')-today)/86400000)>=0&&Math.round((new Date(a.date+'T00:00:00')-today)/86400000)<=30).length};
  const tabs=[{k:'pending',label:'⏳ Pendientes',n:counts.pending},{k:'overdue',label:'🔴 Vencidas',n:counts.overdue},{k:'today',label:'🟠 Hoy',n:counts.today},{k:'week',label:'📅 7 días',n:counts.week},{k:'month',label:'📆 30 días',n:counts.month},{k:'done',label:'✅ Completadas',n:counts.done}];
  return`
  <div class="crm-page-header">
    <div><p class="crm-page-title">⏰ Actividades</p><p class="crm-page-subtitle">${counts.pending} pendientes · ${counts.overdue} vencidas · ${counts.done} completadas</p></div>
    <button class="crm-btn crm-btn-accent" onclick="crmOpenNewActivity()">＋ Nueva actividad</button>
  </div>
  <div style="display:flex;gap:3px;background:var(--crm-surface2);border-radius:10px;padding:3px;margin-bottom:20px;flex-wrap:wrap;width:fit-content;border:1px solid var(--crm-border);">
    ${tabs.map(t=>`<div class="crm-tab ${crmActTab===t.k?'active':''}" onclick="crmActTab='${t.k}';crmRender()" style="white-space:nowrap;">${t.label}${t.n>0?` <span style="background:${crmActTab===t.k?'rgba(16,185,129,0.15)':'var(--crm-border)'};color:${crmActTab===t.k?'var(--crm-accent)':'var(--crm-text3)'};border-radius:999px;padding:1px 7px;font-size:10px;font-weight:700;">${t.n}</span>`:''}</div>`).join('')}
  </div>
  <div class="crm-card">
    <div class="crm-card-pad">
    ${filt.length?filt.map(a=>{
      const deal=a.dealId?crmDeals.find(d=>d.id===a.dealId):null;
      const aDate=a.date?new Date(a.date+'T00:00:00'):null;
      const diff=aDate?Math.round((aDate-today)/86400000):null;
      const isOverdue=!a.done&&aDate&&aDate<today;
      const isToday=!a.done&&diff===0;
      return`<div class="crm-act-item" style="${isOverdue?'background:#fff5f5;margin:-1px -1px 1px -1px;padding:14px 12px;border-radius:8px;border:1px solid #fca5a5;':isToday?'background:#fffbeb;margin:-1px -1px 1px -1px;padding:14px 12px;border-radius:8px;border:1px solid #fbbf24;':''}${a.done?'opacity:.5;':''}" >
        <div style="display:flex;flex-direction:column;align-items:center;gap:6px;flex-shrink:0;width:52px;">
          <div class="crm-act-icon ${a.type}" style="${a.done?'filter:grayscale(.7);':''}">${CRM_AI[a.type]||'📌'}</div>
          ${!a.done
            ?`<button onclick="crmCompleteActById('${a.id}',${a.virtual?true:false})" style="background:none;border:1.5px solid var(--crm-accent);border-radius:999px;cursor:pointer;font-size:9px;padding:2px 6px;color:var(--crm-accent);font-weight:700;white-space:nowrap;transition:all .15s;" onmouseover="this.style.background='var(--crm-accent)';this.style.color='white'" onmouseout="this.style.background='none';this.style.color='var(--crm-accent)'">✓ Listo</button>`
            :`<span style="font-size:9px;color:var(--crm-accent);font-weight:700;">✅ Hecho</span>`
          }
        </div>
        <div style="flex:1;min-width:0;">
          <div style="font-size:13px;font-weight:600;${a.done?'text-decoration:line-through;color:var(--crm-text3);':'color:var(--crm-text);'}">
            ${isOverdue?'🔴 ':''}${isToday?'🟠 ':''}${crmEsc(a.title)}
            ${a.virtual?'<span style="font-size:10px;background:var(--crm-info-light);color:var(--crm-info);border-radius:4px;padding:1px 6px;margin-left:5px;font-weight:600;">Pipeline</span>':''}
          </div>
          ${a.desc?`<div style="font-size:12px;color:var(--crm-text3);margin-top:2px;">${crmEsc(a.desc)}</div>`:''}
          <div style="display:flex;align-items:center;gap:10px;margin-top:4px;flex-wrap:wrap;">
            ${a.contactName?`<span style="font-size:11px;color:var(--crm-text2);">👤 ${crmEsc(a.contactName)}</span>`:''}
            ${deal?`<span class="crm-badge crm-bg-gray" style="font-size:10px;">${crmEsc(deal.name)}</span>`:''}
            ${a.date?`<span style="font-size:11px;color:${isOverdue?'#991b1b':isToday?'#92400e':'var(--crm-text3)'};">${isOverdue?'⚠️ ':isToday?'⏰ ':''}${new Date(a.date+'T00:00:00').toLocaleDateString('es-MX',{day:'2-digit',month:'short',year:'numeric'})}</span>`:''}
          </div>
        </div>
        ${!a.done&&!a.virtual?`<button onclick="crmDeleteActivity('${a.id}')" style="background:none;border:none;cursor:pointer;font-size:13px;opacity:.25;transition:opacity .15s;padding:4px;" onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=.25" title="Eliminar">🗑️</button>`:''}
      </div>`;
    }).join(''):`<div class="crm-empty"><div class="crm-empty-icon">✅</div><p style="font-size:14px;font-weight:600;color:var(--crm-text2);">Sin actividades</p><p style="font-size:12px;margin-top:4px;">No hay actividades en esta categoría</p></div>`}
    </div>
  </div>`;
}
function crmCompleteActById(rawId, isVirtual){
  if(isVirtual){
    const dealId=parseInt(String(rawId).replace('deal_',''));
    const deal=crmDeals.find(d=>d.id===dealId);
    if(!deal)return;
    const now=new Date();
    const completedAct={
      id:crmNid(crmActivities),
      type:deal.followUpType||'call',
      title:(CRM_AL[deal.followUpType||'call']||'Contacto con')+' '+deal.company,
      desc:deal.followUpDesc||'Seguimiento',
      contactName:deal.company,
      date:deal.followUpDate,
      time:now.toLocaleDateString('es-MX',{day:'2-digit',month:'short'}),
      dealId:dealId,
      done:true,
      doneAt:now.toLocaleDateString('es-MX',{day:'2-digit',month:'short',year:'numeric'}),
      virtual:false
    };
    crmActivities.push(completedAct);
    const oldType=deal.followUpType;
    const oldDesc=deal.followUpDesc;
    deal.followUpDate=null;
    deal.followUpDesc='';
    deal.followUpType='';
    crmSaveAll();
    crmRender();
    crmScheduleNext(deal,oldType||'call',oldDesc||'Seguimiento',completedAct.id);
  } else {
    const id=typeof rawId==='string'?parseInt(rawId):rawId;
    crmCompleteActivity(id);
  }
}
function crmScheduleNext(deal,tipo,desc,actId){
  const days=deal.periodicity||7;
  document.getElementById('crm-mt').textContent='✅ Completada — Programar siguiente';
  const mb=document.getElementById('crm-mb');
  const calcDate=(n)=>{const d=new Date();d.setDate(d.getDate()+n);return d.toISOString().split('T')[0];};
  mb.innerHTML=`
    <div style="background:var(--crm-accent-light);border-radius:var(--crm-rad);padding:11px 14px;margin-bottom:14px;font-size:13px;color:var(--crm-accent-dark)">
      ✅ Actividad marcada como completada.
    </div>
    <div style="font-size:12px;color:var(--crm-text3);margin-bottom:14px">🏢 <strong>${crmEsc(deal.name)}</strong> · ${crmEsc(deal.company)} · Periodicidad: <strong>${days} días</strong></div>
    <p style="font-size:13px;font-weight:600;margin-bottom:12px">¿Programar el siguiente seguimiento?</p>
    <div class="crm-form-row">
      <div class="crm-form-field"><label>Tipo</label>
        <select id="crm-next-type">
          <option value="call" ${tipo==='call'?'selected':''}>📞 Llamada</option>
          <option value="email" ${tipo==='email'?'selected':''}>✉️ Email</option>
          <option value="meet" ${tipo==='meet'?'selected':''}>📅 Reunión</option>
          <option value="note">📝 Tarea</option>
        </select>
      </div>
      <div class="crm-form-field"><label>Días hasta el siguiente</label>
        <input type="number" id="crm-next-days" value="${days}" min="1">
      </div>
    </div>
    <div class="crm-form-field"><label>Fecha del próximo seguimiento</label>
      <input type="date" id="crm-next-date" value="${calcDate(days)}">
    </div>
    <div class="crm-form-field"><label>Descripción</label>
      <input id="crm-next-desc" value="${crmEsc(desc)}" placeholder="¿Qué hacer?">
    </div>
    <div style="font-size:11px;color:var(--crm-text3)">💡 Cambia los días y la fecha se recalcula automáticamente.</div>`;
  setTimeout(()=>{
    const nd=document.getElementById('crm-next-days');
    if(nd)nd.addEventListener('input',()=>{const d=new Date();d.setDate(d.getDate()+(parseInt(nd.value)||7));const fd=document.getElementById('crm-next-date');if(fd)fd.value=d.toISOString().split('T')[0];});
  },80);
  document.getElementById('crm-btn-save').textContent='📅 Programar siguiente';
  crmMFn=()=>{
    const t=document.getElementById('crm-next-type').value;
    const dateVal=document.getElementById('crm-next-date').value;
    const descVal=document.getElementById('crm-next-desc').value.trim();
    if(!descVal){crmToast('Escribe una descripción');return;}
    deal.followUpDate=dateVal;
    deal.followUpDesc=descVal;
    deal.followUpType=t;
    crmSaveAll();
    crmCloseModal();
    document.getElementById('crm-btn-save').textContent='Guardar';
    crmRender();
    crmToast('📅 Siguiente seguimiento: '+new Date(dateVal+'T00:00:00').toLocaleDateString('es-MX',{day:'2-digit',month:'short',year:'numeric'}));
  };
  window._schedClose=()=>{crmCloseModal();document.getElementById('crm-btn-save').textContent='Guardar';crmRender();};
  document.getElementById('crm-overlay').onclick=e=>{if(e.target===document.getElementById('crm-overlay'))window._schedClose();};
  crmOpenModal();
}
function crmOpenNewActivity(){
  document.getElementById('crm-mt').textContent='Nueva actividad';
  const mb=document.getElementById('crm-mb');
  mb.innerHTML=`
    <div class="crm-form-row">
      <div class="crm-form-field"><label>Tipo</label>
        <select id="crm-at"><option value="call">📞 Llamada</option><option value="email">✉️ Email</option><option value="meet">📅 Reunión</option><option value="note">📝 Nota</option></select>
      </div>
      <div class="crm-form-field"><label>Fecha</label>
        <input type="date" id="crm-adate" value="${new Date().toISOString().split('T')[0]}">
      </div>
    </div>
    <div class="crm-form-field"><label>Ligar a trato (opcional)</label>
      <select id="crm-adeal">
        <option value="">Sin trato asociado</option>
        ${crmDeals.filter(d=>d.status==='open').map(d=>`<option value="${d.id}">${crmEsc(d.name)} · ${crmEsc(d.company)}</option>`).join('')}
      </select>
    </div>
    <div class="crm-form-field"><label>Descripción *</label>
      <textarea id="crm-ad" placeholder="¿Qué pasó o qué se acordó?"></textarea>
    </div>`;
  crmMFn=()=>{
    const desc=mb.querySelector('#crm-ad').value.trim();
    if(!desc){crmToast('Descripción requerida');return;}
    const t=mb.querySelector('#crm-at').value;
    const dateVal=mb.querySelector('#crm-adate').value;
    const dealIdVal=mb.querySelector('#crm-adeal').value;
    const dealId=dealIdVal?parseInt(dealIdVal):null;
    const deal=dealId?crmDeals.find(d=>d.id===dealId):null;
    const cn=deal?deal.company:'';
    const now=new Date();
    crmActivities.push({id:crmNid(crmActivities),type:t,title:CRM_AL[t]+' '+(cn||''),desc,contactName:cn,date:dateVal||now.toISOString().split('T')[0],time:now.toLocaleDateString('es-MX',{day:'2-digit',month:'short'})+' '+now.toLocaleTimeString('es-MX',{hour:'2-digit',minute:'2-digit'}),dealId,done:false,doneAt:null,virtual:false});
    if(deal&&dateVal){deal.followUpDate=dateVal;deal.followUpDesc=desc;deal.followUpType=t;}
    crmSaveAll();crmCloseModal();crmRender();crmToast('Actividad registrada');
  };
  crmOpenModal();
}
function crmCompleteActivity(id){
  const a=crmActivities.find(x=>x.id===id);if(!a)return;
  a.done=true;
  a.doneAt=new Date().toLocaleDateString('es-MX',{day:'2-digit',month:'short',year:'numeric'});
  const deal=a.dealId?crmDeals.find(d=>d.id===a.dealId):null;
  const oldType=a.type,oldDesc=a.desc;
  if(deal){deal.followUpDate=null;deal.followUpDesc='';deal.followUpType='';}
  crmSaveAll();
  crmRender();
  if(deal){crmScheduleNext(deal,oldType,oldDesc,a.id);}
  else{crmToast('✅ Actividad completada');}
}
function crmDeleteActivity(rawId){
  const id=typeof rawId==='string'&&rawId.startsWith('deal_')?null:parseInt(rawId);
  if(!id){crmToast('Las actividades del pipeline se eliminan desde el trato');return;}
  crmActivities=crmActivities.filter(a=>a.id!==id);crmSaveAll();crmRender();crmToast('Actividad eliminada');
}
function crmRVendedores(){
  const cards=crmSellers.map((s,i)=>{
    const myD=crmDeals.filter(d=>d.seller===s),myV=myD.reduce((t,d)=>t+(d.value||0),0),myC=myD.filter(d=>d.status==='won').reduce((t,d)=>t+(d.value||0),0);
    const openDeals=myD.filter(d=>d.status==='open');
    const wonDeals=myD.filter(d=>d.status==='won');
    const convRate=myD.filter(d=>d.status!=='open').length?(wonDeals.length/myD.filter(d=>d.status!=='open').length*100).toFixed(0):0;
    return`<div class="crm-vendor-card">
      <div style="display:flex;align-items:center;gap:14px;margin-bottom:4px;">
        <div class="crm-av ${crmAvc(s)}" style="width:46px;height:46px;font-size:16px;border-radius:12px;flex-shrink:0;">${crmIni(s)}</div>
        <div style="flex:1;min-width:0;">
          <div style="font-weight:700;font-size:16px;color:var(--crm-text);letter-spacing:-0.3px;">${crmEsc(s)}</div>
          <div style="font-size:12px;color:var(--crm-text3);margin-top:1px;">${myD.length} tratos asignados · conv. ${convRate}%</div>
        </div>
        <div style="display:flex;gap:5px;">
          <button class="crm-btn crm-btn-sm" onclick="crmRenameSeller(${i})" title="Renombrar">✏️</button>
          <button class="crm-btn crm-btn-sm crm-btn-danger" onclick="crmDeleteSeller(${i})" title="Eliminar">🗑️</button>
        </div>
      </div>
      <div class="crm-vendor-stats">
        <div class="crm-vendor-stat">
          <div class="crm-vendor-stat-label">Pipeline</div>
          <div class="crm-vendor-stat-val">${crmFmt(myV)}</div>
          <div style="font-size:11px;color:var(--crm-text3);margin-top:3px;">${openDeals.length} abiertos</div>
        </div>
        <div class="crm-vendor-stat accent">
          <div class="crm-vendor-stat-label">Ganado</div>
          <div class="crm-vendor-stat-val">${crmFmt(myC)}</div>
          <div style="font-size:11px;color:var(--crm-accent);margin-top:3px;">${wonDeals.length} tratos</div>
        </div>
      </div>
    </div>`;
  }).join('');
  return`
  <div class="crm-page-header">
    <div><p class="crm-page-title">🧑‍💼 Vendedores</p><p class="crm-page-subtitle">${crmSellers.length} en el equipo</p></div>
  </div>
  <div class="crm-vendor-grid">
    ${cards||'<p style="color:var(--crm-text3);font-size:14px;padding:20px 0;">Sin vendedores. Agrega el primero abajo.</p>'}
  </div>
  <div class="crm-card">
    <div class="crm-card-pad">
      <div class="crm-card-title">Agregar vendedor</div>
      <div style="display:flex;gap:10px;">
        <input id="crm-new-seller" placeholder="Nombre del vendedor" style="flex:1;padding:9px 12px;font-size:13px;border:1px solid var(--crm-border);border-radius:8px;background:var(--crm-surface2);color:var(--crm-text);outline:none;font-family:inherit;transition:border-color .15s,box-shadow .15s;" onkeydown="if(event.key==='Enter')crmAddSeller()" onfocus="this.style.borderColor='var(--crm-accent)';this.style.boxShadow='0 0 0 3px rgba(16,185,129,0.1)'" onblur="this.style.borderColor='var(--crm-border)';this.style.boxShadow='none'">
        <button class="crm-btn crm-btn-accent" onclick="crmAddSeller()">＋ Agregar</button>
      </div>
    </div>
  </div>`;
}
function crmRConfig(){
  const tabs={vendedores:'👤 Vendedores',etapas:'📋 Etapas',motivos:'❌ Motivos pérdida'};
  if(!tabs[crmCfgTab])crmCfgTab='vendedores';
  const tabBar='<div class="crm-tab-bar">'+Object.keys(tabs).map(t=>`<div class="crm-tab ${crmCfgTab===t?'active':''}" onclick="crmCfgTab='${t}';crmRender()">${tabs[t]}</div>`).join('')+'</div>';
  let inner='';
  if(crmCfgTab==='vendedores'){
    inner='<p style="font-size:13px;color:var(--crm-text2);margin-bottom:16px;line-height:1.5;">Vendedores disponibles para asignar en el pipeline.</p>'+
    (crmSellers.length?crmSellers.map((s,i)=>`<div class="crm-config-item"><div class="crm-av ${crmAvc(s)}" style="width:28px;height:28px;font-size:10px;">${crmIni(s)}</div><span style="flex:1;font-size:14px;font-weight:600;color:var(--crm-text);">${crmEsc(s)}</span><button class="crm-btn crm-btn-sm" onclick="crmRenameSeller(${i})">✏️ Renombrar</button><button class="crm-btn crm-btn-sm crm-btn-danger" onclick="crmDeleteSeller(${i})">🗑️</button></div>`).join(''):'<div class="crm-empty" style="padding:24px 0;"><div class="crm-empty-icon">👤</div><p>Sin vendedores aún.</p></div>')+
    '<div class="crm-config-add"><input id="crm-new-seller" placeholder="Nombre del vendedor" onkeydown="if(event.key===\'Enter\')crmAddSeller()"><button class="crm-btn crm-btn-accent" onclick="crmAddSeller()">＋ Agregar</button></div>';
  } else if(crmCfgTab==='etapas'){
    inner='<p style="font-size:13px;color:var(--crm-text2);margin-bottom:4px;line-height:1.5;">Doble clic en el pipeline para renombrar etapas.</p><p style="font-size:12px;color:var(--crm-text3);margin-bottom:16px;">La probabilidad define el peso en el forecast.</p>'+
    crmStages.map((st,i)=>`<div class="crm-config-item"><span style="flex:1;font-size:14px;font-weight:600;color:var(--crm-text);">${crmEsc(st.name)}</span><span style="font-size:12px;color:var(--crm-text3);font-weight:500;">Prob.:</span><input type="number" min="0" max="100" value="${st.prob}" style="width:60px;padding:5px 8px;font-size:12px;border:1px solid var(--crm-border);border-radius:6px;background:var(--crm-bg);text-align:center;outline:none;font-family:inherit;" onchange="crmStages[${i}].prob=Math.min(100,Math.max(0,parseInt(this.value)||0));crmSaveAll()">${i>0?`<button class="crm-btn crm-btn-sm" onclick="crmMoveStage(${i},-1)">↑</button>`:'<span style="width:38px;"></span>'} ${i<crmStages.length-1?`<button class="crm-btn crm-btn-sm" onclick="crmMoveStage(${i},1)">↓</button>`:'<span style="width:38px;"></span>'} <button class="crm-btn crm-btn-sm crm-btn-danger" onclick="crmDeleteStage(${i})">🗑️</button></div>`).join('')+
    '<div class="crm-config-add"><input id="crm-new-stage" placeholder="Nombre de la etapa" onkeydown="if(event.key===\'Enter\')crmAddStage()"><input type="number" id="crm-new-stage-prob" placeholder="%" min="0" max="100" style="width:90px;"><button class="crm-btn crm-btn-accent" onclick="crmAddStage()">＋ Agregar</button></div>';
  } else {
    inner='<p style="font-size:13px;color:var(--crm-text2);margin-bottom:16px;line-height:1.5;">Razones para marcar un trato como perdido.</p>'+
    (crmLossReasons.length?crmLossReasons.map((r,i)=>`<div class="crm-config-item"><span style="font-size:16px;">❌</span><span style="flex:1;font-size:14px;font-weight:500;color:var(--crm-text);">${crmEsc(r)}</span><button class="crm-btn crm-btn-sm crm-btn-danger" onclick="crmDelLR(${i})">🗑️</button></div>`).join(''):'<div class="crm-empty" style="padding:24px 0;"><div class="crm-empty-icon">❌</div><p>Sin motivos registrados.</p></div>')+
    '<div class="crm-config-add"><input id="crm-new-lr" placeholder="Ej: Precio muy alto" onkeydown="if(event.key===\'Enter\')crmAddLR()"><button class="crm-btn crm-btn-accent" onclick="crmAddLR()">＋ Agregar</button></div>';
  }
  return`
  <div class="crm-page-header">
    <div><p class="crm-page-title">⚙️ Configuración</p><p class="crm-page-subtitle">Personaliza tu CRM</p></div>
  </div>
  ${tabBar}
  <div class="crm-config-section">${inner}</div>`;
}
// CONFIG
function crmAddSeller(){const el=document.getElementById('crm-new-seller');if(!el)return;const v=el.value.trim();if(!v){crmToast('Escribe un nombre');return}if(crmSellers.includes(v)){crmToast('Ya existe');return}crmSellers.push(v);crmSaveAll();crmRender();crmToast('Vendedor agregado');}
function crmDeleteSeller(i){const s=crmSellers[i],n=crmDeals.filter(d=>d.seller===s).length;if(!confirm(n>0?`"${s}" tiene ${n} trato(s). ¿Eliminar?`:`¿Eliminar a "${s}"?`))return;crmSellers.splice(i,1);crmSaveAll();crmRender();crmToast('Vendedor eliminado');}
function crmRenameSeller(i){const n=prompt('Nuevo nombre:',crmSellers[i]);if(!n||!n.trim())return;const nn=n.trim();if(crmSellers.includes(nn)&&nn!==crmSellers[i]){crmToast('Ya existe');return}const old=crmSellers[i];crmDeals.forEach(d=>{if(d.seller===old)d.seller=nn;});crmSellers[i]=nn;crmSaveAll();crmRender();crmToast('Renombrado');}
function crmAddStage(){const n=document.getElementById('crm-new-stage').value.trim();if(!n){crmToast('Escribe un nombre');return}if(crmStages.find(s=>s.name===n)){crmToast('Ya existe');return}const p=parseInt(document.getElementById('crm-new-stage-prob').value)||50;crmStages.push({name:n,prob:p});crmSaveAll();crmRender();crmToast('Etapa agregada');}
function crmDeleteStage(i){const n=crmDeals.filter(d=>d.stage===crmStages[i].name).length;if(!confirm(n>0?`Tiene ${n} trato(s). Se moverán a la primera etapa. ¿Continuar?`:'¿Eliminar etapa?'))return;if(crmStages.length<=1){crmToast('Necesitas al menos una etapa');return}const f=crmStages.find((_,j)=>j!==i);crmDeals.forEach(d=>{if(d.stage===crmStages[i].name)d.stage=f.name;});crmStages.splice(i,1);crmSaveAll();crmRender();crmToast('Etapa eliminada');}
function crmMoveStage(i,dir){const j=i+dir;if(j<0||j>=crmStages.length)return;[crmStages[i],crmStages[j]]=[crmStages[j],crmStages[i]];crmSaveAll();crmRender();}
function crmRenameStage(el,idx){const old=crmStages[idx].name;const inp=document.createElement('input');inp.value=old;inp.style.cssText='font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--crm-text3);border:1px solid var(--crm-accent);border-radius:3px;padding:1px 4px;width:85px;background:var(--crm-surface);outline:none';el.replaceWith(inp);inp.focus();inp.select();const commit=()=>{const nn=inp.value.trim();if(nn&&nn!==old){if(crmStages.find(s=>s.name===nn)){crmToast('Ya existe');crmRender();return}crmDeals.forEach(d=>{if(d.stage===old)d.stage=nn;});crmStages[idx].name=nn;crmSaveAll();crmToast('Etapa renombrada');}crmRender();};inp.addEventListener('blur',commit);inp.addEventListener('keydown',e=>{if(e.key==='Enter')inp.blur();if(e.key==='Escape')crmRender();});}
function crmAddLR(){const v=document.getElementById('crm-new-lr').value.trim();if(!v)return;if(crmLossReasons.includes(v)){crmToast('Ya existe');return}crmLossReasons.push(v);crmSaveAll();crmRender();crmToast('Motivo agregado');}
function crmDelLR(i){if(!confirm('¿Eliminar?'))return;crmLossReasons.splice(i,1);crmSaveAll();}
// HOT 10
function crmOpenNewHot(){
  if(crmHot10.length>=10){crmToast('Máximo 10 prospectos. Sustituye uno vencido.');return;}
  document.getElementById('crm-mt').textContent='🔥 Agregar a HOT 10';
  const mb=document.getElementById('crm-mb');
  mb.innerHTML=`<div class="crm-form-field"><label>Empresa *</label><select id="crm-hco">${crmEmpOpts('')}</select></div>
<div class="crm-form-field"><label>Contacto / Persona</label><input id="crm-hct" placeholder="Nombre del prospecto"></div>
<div class="crm-form-field"><label>Objetivo de la cita</label><input id="crm-hobj" placeholder="¿Qué quieres lograr?"></div>
<div class="crm-form-field"><label>Notas</label><textarea id="crm-hno" placeholder="Info adicional..."></textarea></div>`;
  crmMFn=()=>{
    const co=mb.querySelector('#crm-hco').value;
    if(!co){crmToast('Selecciona una empresa');return;}
    crmHot10.push({id:crmNid(crmHot10),company:co,contact:mb.querySelector('#crm-hct').value,objective:mb.querySelector('#crm-hobj').value,notes:mb.querySelector('#crm-hno').value,addedDate:new Date().toISOString().split('T')[0],status:'active'});
    crmSaveAll();crmCloseModal();crmRender();crmToast('Agregado al HOT 10');
  };crmOpenModal();
}
function crmEditHot(id){
  const h=crmHot10.find(x=>x.id===id);if(!h)return;
  document.getElementById('crm-mt').textContent='Editar HOT 10';
  const mb=document.getElementById('crm-mb');
  mb.innerHTML=`<div class="crm-form-field"><label>Empresa *</label><select id="crm-hco">${crmEmpOpts(h.company)}</select></div>
<div class="crm-form-field"><label>Contacto / Persona</label><input id="crm-hct" value="${crmEsc(h.contact||'')}"></div>
<div class="crm-form-field"><label>Objetivo de la cita</label><input id="crm-hobj" value="${crmEsc(h.objective||'')}"></div>
<div class="crm-form-field"><label>Notas</label><textarea id="crm-hno">${crmEsc(h.notes||'')}</textarea></div>`;
  crmMFn=()=>{
    const co=mb.querySelector('#crm-hco').value;
    if(!co){crmToast('Selecciona una empresa');return;}
    h.company=co;h.contact=mb.querySelector('#crm-hct').value;h.objective=mb.querySelector('#crm-hobj').value;h.notes=mb.querySelector('#crm-hno').value;
    crmSaveAll();crmCloseModal();crmRender();crmToast('Actualizado');
  };crmOpenModal();
}
function crmRemoveHot(id){if(!confirm('¿Quitar del HOT 10?'))return;crmHot10=crmHot10.filter(x=>x.id!==id);crmSaveAll();crmRender();}
function crmHotWon(id){
  const h=crmHot10.find(x=>x.id===id);if(!h)return;
  h.status='achieved';crmSaveAll();crmRender();crmToast('🎉 ¡Cita conseguida!');
}
function crmRHot10(){
  const td=crmTd0();
  const active=crmHot10.filter(h=>h.status==='active');
  const achieved=crmHot10.filter(h=>h.status==='achieved');
  const expired=active.filter(h=>{const d=new Date(h.addedDate+'T00:00:00');return Math.round((td-d)/86400000)>=15;}).length;
  const slots=[];
  for(let i=0;i<10;i++) slots.push(i<crmHot10.length?crmHot10[i]:null);
  return`
  <div class="crm-page-header">
    <div>
      <p class="crm-page-title">🔥 HOT 10 — Prospectos Calientes</p>
      <p class="crm-page-subtitle">${active.length}/10 activos · ${achieved.length} citas logradas${expired?' · <span style="color:#ef4444;font-weight:700;">'+expired+' vencidos</span>':''}</p>
    </div>
    <button class="crm-btn crm-btn-accent" onclick="crmOpenNewHot()" ${crmHot10.length>=10?'disabled style="opacity:0.5"':''}>＋ Agregar prospecto</button>
  </div>
  <div style="display:flex;gap:10px;margin-bottom:16px;flex-wrap:wrap;">
    <div style="background:white;border:1px solid var(--border);border-radius:8px;padding:10px 16px;text-align:center;flex:1;min-width:120px;">
      <div style="font-size:0.7rem;font-weight:700;color:var(--txt3);text-transform:uppercase;">Espacios</div>
      <div style="font-size:1.5rem;font-weight:900;color:var(--txt);">${active.length}<span style="font-size:0.9rem;color:var(--txt3);font-weight:500;">/10</span></div>
    </div>
    <div style="background:white;border:1px solid var(--border);border-radius:8px;padding:10px 16px;text-align:center;flex:1;min-width:120px;">
      <div style="font-size:0.7rem;font-weight:700;color:var(--txt3);text-transform:uppercase;">Citas logradas</div>
      <div style="font-size:1.5rem;font-weight:900;color:#10b981;">${achieved.length}</div>
    </div>
    <div style="background:${expired?'#fee2e2':'white'};border:1px solid ${expired?'#fca5a5':'var(--border)'};border-radius:8px;padding:10px 16px;text-align:center;flex:1;min-width:120px;">
      <div style="font-size:0.7rem;font-weight:700;color:${expired?'#ef4444':'var(--txt3)'};text-transform:uppercase;">Vencidos (+15d)</div>
      <div style="font-size:1.5rem;font-weight:900;color:#ef4444;">${expired}</div>
    </div>
  </div>
  <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:12px;">
  ${slots.map((h,i)=>{
    if(!h) return`<div class="hot-slot-empty" onclick="crmOpenNewHot()"><div style="font-size:1.5rem;margin-bottom:4px;">＋</div>Espacio #${i+1} disponible</div>`;
    const added=new Date(h.addedDate+'T00:00:00');
    const days=Math.round((td-added)/86400000);
    const remain=14-days;
    const pct=Math.min(days/14*100,100);
    const st=h.status==='achieved'?'ok':days>=15?'expired':days>=11?'warning':'ok';
    const isAchieved=h.status==='achieved';
    return`<div class="hot-slot ${st==='expired'?'expired':st==='warning'?'warning':''}">
      <div class="hot-bar ${st}"></div>
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-top:6px;">
        <div style="flex:1;min-width:0;">
          <div style="font-weight:800;font-size:0.95rem;color:var(--txt);">${crmEsc(h.company)}</div>
          ${h.contact?`<div style="font-size:0.8rem;color:var(--txt2);margin-top:2px;">👤 ${crmEsc(h.contact)}</div>`:''}
        </div>
        <div style="text-align:right;">
          ${isAchieved?`<span class="crm-badge crm-bg-green" style="font-size:10px;">✓ Lograda</span>`:
          `<div class="hot-days ${st}">${remain>0?remain:0}</div><div style="font-size:0.65rem;color:var(--txt3);font-weight:600;">${remain>0?'días restantes':'VENCIDO'}</div>`}
        </div>
      </div>
      ${h.objective?`<div style="margin-top:8px;padding:6px 8px;background:var(--bg);border-radius:6px;font-size:0.78rem;color:var(--txt2);">🎯 ${crmEsc(h.objective)}</div>`:''}
      ${!isAchieved?`<div class="hot-progress"><div class="hot-progress-fill" style="width:${pct}%;background:${st==='expired'?'#ef4444':st==='warning'?'#f59e0b':'#10b981'};"></div></div>`:''}
      <div style="font-size:0.72rem;color:var(--txt3);margin-top:6px;">Agregado: ${added.toLocaleDateString('es-MX',{day:'2-digit',month:'short'})} · Día ${days} de 14</div>
      ${h.notes?`<div style="font-size:0.75rem;color:var(--txt2);margin-top:4px;font-style:italic;">${crmEsc(h.notes)}</div>`:''}
      <div style="display:flex;gap:6px;margin-top:10px;justify-content:flex-end;">
        ${!isAchieved?`<button class="crm-btn crm-btn-sm" style="background:#d1fae5;color:#065f46;border-color:#6ee7b7;font-weight:700;" onclick="crmHotWon(${h.id})">🎉 Cita lograda</button>`:''}
        <button class="crm-btn crm-btn-sm" onclick="crmEditHot(${h.id})">✏️</button>
        <button class="crm-btn crm-btn-sm crm-btn-danger" onclick="crmRemoveHot(${h.id})">${st==='expired'?'🔄 Sustituir':'🗑️'}</button>
      </div>
    </div>`;
  }).join('')}
  </div>`;
}
// EMPRESAS
function crmEmpForm(e){
  return`<div class="crm-form-row"><div class="crm-form-field"><label>Nombre empresa *</label><input id="crm-empn" placeholder="Empresa SA de CV"></div><div class="crm-form-field"><label>Sector / Giro</label><input id="crm-emps" placeholder="Ej. Metalurgia, Alimentos..."></div></div>
<div class="crm-form-row"><div class="crm-form-field"><label>Clasificación</label><select id="crm-empc"><option value="A" ${e&&e.classification==='A'?'selected':''}>🅰️ A — Cliente clave / Alta prioridad</option><option value="B" ${e&&e.classification==='B'?'selected':''}>🅱️ B — Prioridad media</option><option value="C" ${!e||e.classification==='C'?'selected':''}>©️ C — Prioridad baja</option></select></div><div class="crm-form-field"><label>Último contacto</label><input id="crm-empd" type="date" value="${e&&e.lastContact?e.lastContact:''}"></div></div>
<div class="crm-form-field"><label>Notas</label><textarea id="crm-empno" placeholder="Info relevante de la empresa...">${e&&e.notes?crmEsc(e.notes):''}</textarea></div>`;
}
function crmOpenNewEmpresa(){
  document.getElementById('crm-mt').textContent='Nueva empresa';
  const mb=document.getElementById('crm-mb');
  mb.innerHTML=crmEmpForm(null);
  mb.querySelector('#crm-empd').value=new Date().toISOString().split('T')[0];
  crmMFn=()=>{
    const n=mb.querySelector('#crm-empn').value.trim();
    if(!n){crmToast('Nombre requerido');return}
    crmCompanies.push({id:crmNid(crmCompanies),name:n,sector:mb.querySelector('#crm-emps').value,classification:mb.querySelector('#crm-empc').value,lastContact:mb.querySelector('#crm-empd').value||null,notes:mb.querySelector('#crm-empno').value});
    crmSaveAll();crmCloseModal();crmRender();crmToast('Empresa guardada');
  };crmOpenModal();
}
function crmEditEmpresa(id){
  const e=crmCompanies.find(x=>x.id===id);if(!e)return;
  document.getElementById('crm-mt').textContent='Editar empresa';
  const mb=document.getElementById('crm-mb');
  mb.innerHTML=crmEmpForm(e);
  mb.querySelector('#crm-empn').value=e.name||'';
  mb.querySelector('#crm-emps').value=e.sector||'';
  crmMFn=()=>{
    const n=mb.querySelector('#crm-empn').value.trim();
    if(!n){crmToast('Nombre requerido');return}
    e.name=n;e.sector=mb.querySelector('#crm-emps').value;e.classification=mb.querySelector('#crm-empc').value;e.lastContact=mb.querySelector('#crm-empd').value||null;e.notes=mb.querySelector('#crm-empno').value;
    crmSaveAll();crmCloseModal();crmRender();crmToast('Empresa actualizada');
  };crmOpenModal();
}
function crmDeleteEmpresa(id){if(!confirm('¿Eliminar empresa?'))return;crmCompanies=crmCompanies.filter(x=>x.id!==id);crmSaveAll();crmRender();crmToast('Empresa eliminada');}
// CONTACTS
function crmEmpOpts(sel){return`<option value="">— Sin empresa —</option>`+crmCompanies.map(c=>`<option value="${crmEsc(c.name)}" ${sel&&sel.toLowerCase()===c.name.toLowerCase()?'selected':''}>${crmEsc(c.name)} (${c.classification})</option>`).join('');}
function crmOpenNewContact(){document.getElementById('crm-mt').textContent='Nuevo contacto';const mb=document.getElementById('crm-mb');mb.innerHTML=`<div class="crm-form-row"><div class="crm-form-field"><label>Nombre *</label><input id="crm-mn" placeholder="Juan Pérez"></div><div class="crm-form-field"><label>Empresa</label><select id="crm-mco">${crmEmpOpts('')}</select></div></div><div class="crm-form-row"><div class="crm-form-field"><label>Email</label><input id="crm-me" type="email" placeholder="juan@empresa.com"></div><div class="crm-form-field"><label>Teléfono</label><input id="crm-mph" placeholder="81-1234-5678"></div></div><div class="crm-form-row"><div class="crm-form-field"><label>Estado</label><select id="crm-ms"><option>Prospecto</option><option>Interesado</option><option>Cliente</option><option>Inactivo</option></select></div><div class="crm-form-field"><label>Valor ($)</label><input id="crm-mv" type="number" placeholder="0"></div></div><div class="crm-form-field"><label>Notas</label><textarea id="crm-mno" placeholder="Info adicional..."></textarea></div>`;crmMFn=()=>{const n=mb.querySelector('#crm-mn').value.trim();if(!n){crmToast('Nombre requerido');return}crmContacts.push({id:crmNid(crmContacts),name:n,company:mb.querySelector('#crm-mco').value,email:mb.querySelector('#crm-me').value,phone:mb.querySelector('#crm-mph').value,status:mb.querySelector('#crm-ms').value,value:parseInt(mb.querySelector('#crm-mv').value)||0,notes:mb.querySelector('#crm-mno').value});crmSaveAll();crmCloseModal();crmRender();crmToast('Contacto guardado');};crmOpenModal();}
function crmEditContact(id){const c=crmContacts.find(x=>x.id===id);if(!c)return;document.getElementById('crm-mt').textContent='Editar contacto';const mb=document.getElementById('crm-mb');mb.innerHTML=`<div class="crm-form-row"><div class="crm-form-field"><label>Nombre *</label><input id="crm-mn"></div><div class="crm-form-field"><label>Empresa</label><select id="crm-mco">${crmEmpOpts(c.company)}</select></div></div><div class="crm-form-row"><div class="crm-form-field"><label>Email</label><input id="crm-me" type="email"></div><div class="crm-form-field"><label>Teléfono</label><input id="crm-mph"></div></div><div class="crm-form-row"><div class="crm-form-field"><label>Estado</label><select id="crm-ms">${['Prospecto','Interesado','Cliente','Inactivo'].map(s=>`<option ${c.status===s?'selected':''}>${s}</option>`).join('')}</select></div><div class="crm-form-field"><label>Valor ($)</label><input id="crm-mv" type="number"></div></div><div class="crm-form-field"><label>Notas</label><textarea id="crm-mno"></textarea></div>`;mb.querySelector('#crm-mn').value=c.name||'';mb.querySelector('#crm-me').value=c.email||'';mb.querySelector('#crm-mph').value=c.phone||'';mb.querySelector('#crm-mv').value=c.value||0;mb.querySelector('#crm-mno').value=c.notes||'';crmMFn=()=>{const n=mb.querySelector('#crm-mn').value.trim();if(!n){crmToast('Nombre requerido');return}c.name=n;c.company=mb.querySelector('#crm-mco').value;c.email=mb.querySelector('#crm-me').value;c.phone=mb.querySelector('#crm-mph').value;c.status=mb.querySelector('#crm-ms').value;c.value=parseInt(mb.querySelector('#crm-mv').value)||0;c.notes=mb.querySelector('#crm-mno').value;crmSaveAll();crmCloseModal();crmRender();crmToast('Contacto actualizado');};crmOpenModal();}
function crmDeleteContact(id){if(!confirm('¿Eliminar este contacto?'))return;crmContacts=crmContacts.filter(c=>c.id!==id);crmSaveAll();crmRender();crmToast('Contacto eliminado');}
// DEALS
function crmDFH(d){return`<div class="crm-form-field"><label>Nombre del trato *</label><input id="crm-dn" placeholder="Ej. Proyecto agua Q3"></div>
<div class="crm-form-row"><div class="crm-form-field"><label>Empresa / Cliente</label><select id="crm-dc">${crmEmpOpts(d?d.company:'')}</select></div><div class="crm-form-field"><label>Valor ($)</label><input id="crm-dv" type="number" placeholder="0"></div></div>
<div class="crm-form-row"><div class="crm-form-field"><label>Etapa</label><select id="crm-dst">${crmStages.map(s=>`<option ${d&&d.stage===s.name?'selected':''}>${crmEsc(s.name)}</option>`).join('')}</select></div><div class="crm-form-field"><label>Probabilidad (%)</label><input id="crm-dp" type="number" min="0" max="100"></div></div>
<div class="crm-form-row"><div class="crm-form-field"><label>Vendedor</label><select id="crm-dsel"><option value="">Sin asignar</option>${crmSellers.map(s=>`<option value="${crmEsc(s)}" ${d&&d.seller===s?'selected':''}>${crmEsc(s)}</option>`).join('')}</select></div><div class="crm-form-field"><label>Estado</label><select id="crm-dstat" onchange="document.getElementById('crm-dlr').style.display=this.value==='lost'?'block':'none'"><option value="open" ${!d||d.status==='open'?'selected':''}>Abierto</option><option value="won" ${d&&d.status==='won'?'selected':''}>✓ Ganado</option><option value="lost" ${d&&d.status==='lost'?'selected':''}>✗ Perdido</option></select></div></div>
<div id="crm-dlr" class="crm-form-field" style="display:${d&&d.status==='lost'?'block':'none'}"><label>Motivo de pérdida</label><select id="crm-dlrv"><option value="">Sin especificar</option>${crmLossReasons.map(r=>`<option value="${crmEsc(r)}" ${d&&d.lossReason===r?'selected':''}>${crmEsc(r)}</option>`).join('')}</select></div>
<div class="crm-form-section-title">Seguimiento y periodicidad</div>
<div class="crm-form-row"><div class="crm-form-field"><label>Tipo de seguimiento</label><select id="crm-dft"><option value="">Sin seguimiento</option><option value="call" ${d&&d.followUpType==='call'?'selected':''}>📞 Llamada</option><option value="email" ${d&&d.followUpType==='email'?'selected':''}>✉️ Email</option><option value="meet" ${d&&d.followUpType==='meet'?'selected':''}>📅 Reunión</option><option value="note" ${d&&d.followUpType==='note'?'selected':''}>📝 Tarea</option></select></div><div class="crm-form-field"><label>Fecha próximo contacto</label><input id="crm-dfd" type="date" value="${d&&d.followUpDate?d.followUpDate:''}"></div></div>
<div class="crm-form-row"><div class="crm-form-field"><label>Notas del seguimiento</label><input id="crm-dfd2" placeholder="¿Qué se debe hacer?"></div><div class="crm-form-field"><label>🔄 Periodicidad (días entre contactos)</label><input id="crm-dper" type="number" min="1" placeholder="7" value="${d&&d.periodicity?d.periodicity:7}" title="Días que se suman automáticamente al completar una actividad"></div></div>`;}
function crmCDeal(mb){const st=mb.querySelector('#crm-dstat').value||'open',lrEl=mb.querySelector('#crm-dlrv');return{company:mb.querySelector('#crm-dc').value,value:parseInt(mb.querySelector('#crm-dv').value)||0,prob:parseInt(mb.querySelector('#crm-dp').value)||0,stage:mb.querySelector('#crm-dst').value,seller:mb.querySelector('#crm-dsel').value||'',status:st,lossReason:st==='lost'&&lrEl?lrEl.value:'',followUpDate:mb.querySelector('#crm-dfd').value||null,followUpDesc:mb.querySelector('#crm-dfd2').value||'',followUpType:mb.querySelector('#crm-dft').value||'',periodicity:parseInt(mb.querySelector('#crm-dper')?mb.querySelector('#crm-dper').value:7)||7};}
function crmOpenNewDeal(){document.getElementById('crm-mt').textContent='Nuevo trato';const mb=document.getElementById('crm-mb');mb.innerHTML=crmDFH(null);mb.querySelector('#crm-dp').value=crmStages[0]?crmStages[0].prob:50;mb.querySelector('#crm-dst').addEventListener('change',e=>{const st=crmStages.find(s=>s.name===e.target.value);if(st)mb.querySelector('#crm-dp').value=st.prob;});crmMFn=()=>{const n=mb.querySelector('#crm-dn').value.trim();if(!n){crmToast('Nombre requerido');return}const data=crmCDeal(mb);crmDeals.push({id:crmNid(crmDeals),name:n,...data,date:new Date().toISOString().split('T')[0],closedDate:data.status!=='open'?new Date().toISOString().split('T')[0]:null});crmSaveAll();crmCloseModal();crmRender();crmToast('Trato guardado');};crmOpenModal();}
function crmEditDeal(id){const d=crmDeals.find(x=>x.id===id);if(!d)return;document.getElementById('crm-mt').textContent='Editar trato';const mb=document.getElementById('crm-mb');mb.innerHTML=crmDFH(d);mb.querySelector('#crm-dn').value=d.name||'';mb.querySelector('#crm-dv').value=d.value||0;mb.querySelector('#crm-dp').value=d.prob||0;mb.querySelector('#crm-dfd2').value=d.followUpDesc||'';crmMFn=()=>{const n=mb.querySelector('#crm-dn').value.trim();if(!n){crmToast('Nombre requerido');return}const data=crmCDeal(mb);Object.assign(d,{name:n,...data});if(d.status!=='open'&&!d.closedDate)d.closedDate=new Date().toISOString().split('T')[0];crmSaveAll();crmCloseModal();crmRender();crmToast('Trato actualizado');};crmOpenModal();}
function crmDeleteDeal(id){if(!confirm('¿Eliminar este trato?'))return;crmDeals=crmDeals.filter(d=>d.id!==id);crmSaveAll();crmRender();crmToast('Trato eliminado');}
function crmMoveDeal(id,dir){const d=crmDeals.find(x=>x.id===id);if(!d)return;const si=crmGsi(d.stage),ni=si+dir;if(ni<0||ni>=crmStages.length)return;d.stage=crmStages[ni].name;d.prob=crmStages[ni].prob;crmTrackAdvance(d.stage);if(ni===crmStages.length-1&&d.status==='open'){d.status='won';d.closedDate=new Date().toISOString().split('T')[0];crmSaveAll();crmRender();crmToast('🎉 ¡Trato ganado!');return;}crmSaveAll();crmRender();crmToast('Movido a: '+d.stage);}
// MODAL
function crmOpenModal(){document.getElementById('crm-overlay').classList.add('open');}
function crmCloseModal(){
  document.getElementById('crm-overlay').classList.remove('open');
  const btn=document.getElementById('crm-btn-save');
  if(btn)btn.textContent='Guardar';
  document.getElementById('crm-overlay').onclick=e=>{if(e.target===document.getElementById('crm-overlay'))crmCloseModal();};
}
function crmSaveModal(){if(crmMFn)crmMFn();}
document.addEventListener('DOMContentLoaded',function(){
  const overlay=document.getElementById('crm-overlay');
  if(overlay){
    overlay.addEventListener('click',e=>{if(e.target===overlay)crmCloseModal();});
  }
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&document.getElementById('crm-overlay')&&document.getElementById('crm-overlay').classList.contains('open'))crmCloseModal();});
});
function crmToast(msg){const t=document.createElement('div');t.className='crm-toast';t.textContent=msg;document.body.appendChild(t);setTimeout(()=>t.remove(),2500);}

