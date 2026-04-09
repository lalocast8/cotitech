
// ═══════════════════════ EMBEDDED IMAGES ═══════════════════════
const IMG_PRED='assets/img/img_pred.png';
const IMG_PREV='assets/img/img_prev.png';

// ═══════════════════════ DATA ═══════════════════════
let catalog=[
  // ── Filtro Zeolita ──
  {tag:'FZ25',desc:'Filtro Zeolita',type:'filtro',flow:25,unit:'GPM',cost:29875,exp:0.58,prov:'—',notes:'Bracket $1,195/GPM'},
  {tag:'FZ50',desc:'Filtro Zeolita',type:'filtro',flow:50,unit:'GPM',cost:87500,exp:0.58,prov:'—',notes:'Bracket $1,750/GPM'},
  {tag:'FZ100',desc:'Filtro Zeolita',type:'filtro',flow:100,unit:'GPM',cost:170000,exp:0.58,prov:'—',notes:'Bracket $1,700/GPM'},
  {tag:'FZ250',desc:'Filtro Zeolita',type:'filtro',flow:250,unit:'GPM',cost:412500,exp:0.58,prov:'—',notes:'Bracket $1,650/GPM'},
  {tag:'FZ500',desc:'Filtro Zeolita',type:'filtro',flow:500,unit:'GPM',cost:800000,exp:0.58,prov:'—',notes:'Bracket $1,600/GPM'},
  // ── Clarificador Lamella ──
  {tag:'CL25',desc:'Clarificador Lamella',type:'otro',flow:25,unit:'GPM',cost:1237800,exp:0.65,prov:'—',notes:'Con tablero de control automático'},
  {tag:'CL50',desc:'Clarificador Lamella',type:'otro',flow:50,unit:'GPM',cost:1750000,exp:0.65,prov:'—',notes:'Bracket $35,000/GPM'},
  {tag:'CL100',desc:'Clarificador Lamella',type:'otro',flow:100,unit:'GPM',cost:1600000,exp:0.65,prov:'—',notes:'Bracket $16,000/GPM'},
  {tag:'CL250',desc:'Clarificador Lamella',type:'otro',flow:250,unit:'GPM',cost:3875000,exp:0.65,prov:'—',notes:'Clarificador con Coagulante y Floculante'},
  {tag:'CL500',desc:'Clarificador Lamella',type:'otro',flow:500,unit:'GPM',cost:5250000,exp:0.65,prov:'—',notes:'Bracket $10,500/GPM'},
  // ── Filtro Carbón Activado ──
  {tag:'FCA6',desc:'Filtro Carbón Activado',type:'filtro',flow:6,unit:'GPM',cost:18444,exp:0.55,prov:'—',notes:'Bracket $3,074/GPM'},
  {tag:'FCA25',desc:'Filtro Carbón Activado',type:'filtro',flow:25,unit:'GPM',cost:51250,exp:0.55,prov:'—',notes:'Bracket $2,050/GPM'},
  {tag:'FCA50',desc:'Filtro Carbón Activado',type:'filtro',flow:50,unit:'GPM',cost:110550,exp:0.55,prov:'—',notes:'Bracket $2,211/GPM'},
  {tag:'FCA100',desc:'Filtro Carbón Activado',type:'filtro',flow:100,unit:'GPM',cost:221100,exp:0.55,prov:'—',notes:'Bracket $2,211/GPM'},
  {tag:'FCA250',desc:'Filtro Carbón Activado',type:'filtro',flow:250,unit:'GPM',cost:552750,exp:0.55,prov:'—',notes:'Bracket $2,211/GPM'},
  {tag:'FCA500',desc:'Filtro Carbón Activado',type:'filtro',flow:500,unit:'GPM',cost:1075000,exp:0.55,prov:'—',notes:'Bracket $2,150/GPM'},
  // ── Bomba Centrífuga ──
  {tag:'BC6',desc:'Bomba Centrífuga',type:'bomba',flow:6,unit:'GPM',cost:24000,exp:0.40,prov:'—',notes:'Bracket $4,000/GPM'},
  {tag:'BC25',desc:'Bomba Centrífuga',type:'bomba',flow:25,unit:'GPM',cost:17500,exp:0.40,prov:'—',notes:'Bracket $700/GPM'},
  {tag:'BC50',desc:'Bomba Centrífuga',type:'bomba',flow:50,unit:'GPM',cost:20000,exp:0.40,prov:'—',notes:'Bracket $400/GPM'},
  {tag:'BC100',desc:'Bomba Centrífuga',type:'bomba',flow:100,unit:'GPM',cost:31500,exp:0.40,prov:'—',notes:'Bracket $315/GPM'},
  {tag:'BC250',desc:'Bomba Centrífuga',type:'bomba',flow:250,unit:'GPM',cost:62500,exp:0.40,prov:'—',notes:'Bracket $250/GPM'},
  {tag:'BC500',desc:'Bomba Centrífuga',type:'bomba',flow:500,unit:'GPM',cost:49000,exp:0.40,prov:'—',notes:'Bracket $98/GPM'},
  // ── Ultrafiltración Fibra Hueca (PAN) ──
  {tag:'UF25',desc:'Ultrafiltración Fibra Hueca (PAN)',type:'filtro',flow:25,unit:'GPM',cost:387600,exp:0.70,prov:'—',notes:'Max 15 FOG, FLUX 14 AQUADYN'},
  {tag:'UF50',desc:'Ultrafiltración Fibra Hueca (PAN)',type:'filtro',flow:50,unit:'GPM',cost:675000,exp:0.70,prov:'—',notes:'Max 15 FOG, FLUX 14 AQUADYN'},
  {tag:'UF100',desc:'Ultrafiltración Fibra Hueca (PAN)',type:'filtro',flow:100,unit:'GPM',cost:1313800,exp:0.70,prov:'—',notes:'Max 15 FOG, FLUX 14 AQUADYN'},
  {tag:'UF250',desc:'Ultrafiltración Fibra Hueca (PAN)',type:'filtro',flow:250,unit:'GPM',cost:3282500,exp:0.70,prov:'—',notes:'Max 15 FOG, FLUX 14 AQUADYN'},
  {tag:'UF500',desc:'Ultrafiltración Fibra Hueca (PAN)',type:'filtro',flow:500,unit:'GPM',cost:6250000,exp:0.70,prov:'—',notes:'Max 15 FOG, FLUX 14 AQUADYN'},
  // ── Ósmosis Inversa ──
  {tag:'OI25',desc:'Ósmosis Inversa',type:'otro',flow:25,unit:'GPM',cost:453125,exp:0.72,prov:'—',notes:'Con tablero de control'},
  {tag:'OI50',desc:'Ósmosis Inversa',type:'otro',flow:50,unit:'GPM',cost:895000,exp:0.72,prov:'—',notes:'Equipo con PLC'},
  {tag:'OI100',desc:'Ósmosis Inversa',type:'otro',flow:100,unit:'GPM',cost:1750000,exp:0.72,prov:'—',notes:'Equipo con PLC'},
  {tag:'OI250',desc:'Ósmosis Inversa',type:'otro',flow:250,unit:'GPM',cost:4250000,exp:0.72,prov:'—',notes:'Equipo con PLC'},
  {tag:'OI500',desc:'Ósmosis Inversa',type:'otro',flow:500,unit:'GPM',cost:8425000,exp:0.72,prov:'—',notes:'Equipo con PLC'},
  // ── Ultrafiltración I-Tech ──
  {tag:'UF-I25',desc:'Ultrafiltración I-Tech',type:'filtro',flow:25,unit:'GPM',cost:575000,exp:0.70,prov:'—',notes:'ISEP GFD: 24'},
  {tag:'UF-I50',desc:'Ultrafiltración I-Tech',type:'filtro',flow:50,unit:'GPM',cost:1045000,exp:0.70,prov:'—',notes:'ISEP GFD: 24'},
  {tag:'UF-I100',desc:'Ultrafiltración I-Tech',type:'filtro',flow:100,unit:'GPM',cost:2090000,exp:0.70,prov:'—',notes:'ISEP GFD: 24'},
  {tag:'UF-I250',desc:'Ultrafiltración I-Tech',type:'filtro',flow:250,unit:'GPM',cost:5225000,exp:0.70,prov:'—',notes:'ISEP GFD: 24'},
  {tag:'UF-I500',desc:'Ultrafiltración I-Tech',type:'filtro',flow:500,unit:'GPM',cost:10450000,exp:0.70,prov:'—',notes:'ISEP GFD: 24'},
  // ── Tanque Almacenamiento ──
  {tag:'TA5M3',desc:'Tanque Almacenamiento',type:'tanque',flow:5,unit:'M3',cost:20000,exp:0.60,prov:'—',notes:'Tanque almacenamiento 5m³'},
  {tag:'TA22M3',desc:'Tanque Almacenamiento',type:'tanque',flow:22,unit:'M3',cost:124560,exp:0.60,prov:'—',notes:'Tanque almacenamiento 22m³'},
  {tag:'TA100M3',desc:'Tanque Almacenamiento',type:'tanque',flow:100,unit:'M3',cost:1221000,exp:0.60,prov:'—',notes:'Inox soldable, incl. instalación. 4.60 Diam × 6.10 mts Altura'},
  {tag:'TA200M3',desc:'Tanque Almacenamiento',type:'tanque',flow:200,unit:'M3',cost:1560420,exp:0.60,prov:'—',notes:'Inox soldable, incl. instalación. 5.90 Diam × 7.32 mts Altura'},
  {tag:'TA400M3',desc:'Tanque Almacenamiento',type:'tanque',flow:400,unit:'M3',cost:2672000,exp:0.60,prov:'—',notes:'Inox soldable, incl. instalación. 7.80 Diam × 8.54 mts Altura'},
];
let lines=[];
let indItems=[
  {num:'3.1',concept:'Tubería Interconexión (Mat. Hidráulico)',mode:'pct',pct:8,qty:1,fixed:0},
  {num:'3.2',concept:'Material Eléctrico',mode:'pct',pct:6,qty:1,fixed:0},
  {num:'3.3',concept:'Material Soportería',mode:'pct',pct:1,qty:1,fixed:0},
  {num:'3.4',concept:'Fletes y Maniobras',mode:'pct',pct:1.5,qty:1,fixed:0},
  {num:'3.5',concept:'Fianzas',mode:'pct',pct:2,qty:1,fixed:0},
  {num:'3.6',concept:'Ingeniería (DTI, Layout, Manual, Diag. Eléc., Planos)',mode:'pct',pct:5,qty:1,fixed:0},
  {num:'3.7',concept:'Instalación Mecánica y Eléctrica',mode:'pct',pct:8,qty:1,fixed:0},
  {num:'3.8',concept:'Obra Civil',mode:'fixed',pct:0,qty:0,fixed:0},
  {num:'3.9',concept:'Viáticos',mode:'fixed',pct:0,qty:0,fixed:150000},
  {num:'3.10',concept:'Tablero Eléctrico con PLC',mode:'fixed',pct:0,qty:1,fixed:1357000},
  {num:'3.11',concept:'Puesta en Marcha y Capacitación',mode:'pct',pct:1,qty:1,fixed:0},
];
let tarifas=[
  {rol:'Ayudante General',tipo:'personal',tarifa:2000},
  {rol:'Supervisor',tipo:'personal',tarifa:4000},
  {rol:'Gerente de Ingeniería',tipo:'personal',tarifa:24000},
  {rol:'Transporte (por día)',tipo:'transporte',tarifa:2000},
  {rol:'Alimentación (por persona/día)',tipo:'alimentacion',tarifa:350},
];
let moLines=[], matSvcLines=[];
const TC={tanque:'chip-blue',intercambiador:'chip-pink',bomba:'chip-green',compresor:'chip-amber',torre:'chip-purple',reactor:'chip-orange',filtro:'chip-gray',caldera:'chip-orange',otro:'chip-gray'};
const TTC={personal:'chip-blue',transporte:'chip-amber',herramienta:'chip-green',alimentacion:'chip-orange',hospedaje:'chip-purple',otro:'chip-gray'};

// ═══════════════════════ PRINT SHEET ═══════════════════════
function printSheet(moduleId){
  const mod=document.getElementById(moduleId);
  mod.setAttribute('data-print-target','1');
  document.body.setAttribute('data-printing','1');
  window.print();
  setTimeout(()=>{
    mod.removeAttribute('data-print-target');
    document.body.removeAttribute('data-printing');
  },500);
}

// ═══════════════════════ NAV ═══════════════════════
function toggleDD(id){
  const menu=document.getElementById(id+'-menu');
  const btn=document.querySelector('#'+id+' .nav-dd-btn');
  if(!menu||!btn)return;
  const open=menu.classList.contains('show');
  document.querySelectorAll('.nav-dd-menu').forEach(m=>m.classList.remove('show'));
  document.querySelectorAll('.nav-dd-btn').forEach(b=>b.classList.remove('open'));
  document.querySelectorAll('.nav-dd-sub-menu').forEach(m=>m.classList.remove('show'));
  document.querySelectorAll('.nav-dd-sub-btn').forEach(b=>b.classList.remove('open'));
  if(!open){menu.classList.add('show');btn.classList.add('open');}
}
function toggleDDSub(id){
  const menu=document.getElementById(id+'-menu');
  const btn=document.querySelector('#'+id+' .nav-dd-sub-btn');
  if(!menu||!btn)return;
  const open=menu.classList.contains('show');
  document.querySelectorAll('.nav-dd-sub-menu').forEach(m=>m.classList.remove('show'));
  document.querySelectorAll('.nav-dd-sub-btn').forEach(b=>b.classList.remove('open'));
  if(!open){menu.classList.add('show');btn.classList.add('open');}
}
document.addEventListener('click',e=>{
  if(!e.target.closest('.nav-dd')){
    document.querySelectorAll('.nav-dd-menu').forEach(m=>m.classList.remove('show'));
    document.querySelectorAll('.nav-dd-btn').forEach(b=>b.classList.remove('open'));
    document.querySelectorAll('.nav-dd-sub-menu').forEach(m=>m.classList.remove('show'));
    document.querySelectorAll('.nav-dd-sub-btn').forEach(b=>b.classList.remove('open'));
  }
});

function go(id){
  if(typeof switchModule==='function'){switchModule('comercial');}
  document.querySelectorAll('.module').forEach(m=>m.classList.remove('active'));
  const mod=document.getElementById('mod-'+id);
  if(mod){mod.classList.add('active');}
  document.querySelectorAll('.nav-dd-menu').forEach(m=>m.classList.remove('show'));
  document.querySelectorAll('.nav-dd-sub-menu').forEach(m=>m.classList.remove('show'));
  document.querySelectorAll('.nav-dd-btn').forEach(b=>{b.classList.remove('open');b.classList.remove('active-parent');});
  document.querySelectorAll('.nav-dd-sub-btn').forEach(b=>b.classList.remove('open'));
  document.querySelectorAll('.nav-flat').forEach(b=>b.classList.remove('active'));
  document.querySelectorAll('.nav-dd-item').forEach(i=>i.classList.remove('active'));
  if(id==='config'){
    const cfgBtn=document.querySelector('.nav-flat');
    if(cfgBtn){cfgBtn.classList.add('active');}
  }else{
    const item=document.querySelector(`.nav-dd-item[data-mod="${id}"]`);
    if(item){
      item.classList.add('active');
      const parentDD=item.closest('.nav-dd');
      const parentBtn=parentDD?parentDD.querySelector('.nav-dd-btn'):null;
      if(parentBtn){parentBtn.classList.add('active-parent');}
    }
  }
  if(id==='proyectos')refreshQSelect();
  if(id==='servicios')refreshMOSel();
  if(id==='polizas')refreshComodSel();
}
function cfgGo(id){
  document.querySelectorAll('.cfg-panel').forEach(p=>p.classList.remove('active'));
  document.getElementById('cfg-'+id).classList.add('active');
  document.querySelectorAll('.cfg-nav-item').forEach(n=>n.classList.remove('active'));
  event.currentTarget.classList.add('active');
  if(id==='cat-equipos')renderCat();
  if(id==='cat-tarifas'){renderTarifas();}
  if(id==='cat-indirectos')renderIndCfg();
  if(id==='cat-comodato')renderComodCat();
}

function fmt(n){return '$'+n.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});}
function fmtM(n){return '$'+n.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2})+' MXN';}

// ═══════════════════════ CATÁLOGO EQUIPOS ═══════════════════════
function renderCat(){
  const tb=document.getElementById('catBody');tb.innerHTML='';
  catalog.forEach((c,i)=>{const tr=document.createElement('tr');tr.innerHTML=`<td class="mono">${c.tag}</td><td>${c.desc}</td><td><span class="chip ${TC[c.type]||'chip-gray'}">${c.type}</span></td><td class="mono">${c.flow.toLocaleString()}</td><td>${c.unit}</td><td class="mono">${fmt(c.cost)}</td><td><span class="exp-chip">n=${c.exp}</span></td><td>${c.prov}</td><td style="color:var(--txt3);font-size:0.8rem">${c.notes}</td><td><button class="btn btn-d btn-sm" onclick="delCat(${i})">✕</button></td>`;tb.appendChild(tr);});
  document.getElementById('catCount').textContent=catalog.length;
}
function addCat(){
  const tag=document.getElementById('cTag').value.trim(),desc=document.getElementById('cDesc').value.trim(),type=document.getElementById('cType').value,flow=parseFloat(document.getElementById('cFlow').value),unit=document.getElementById('cUnit').value.trim(),cost=parseFloat(document.getElementById('cCost').value),exp=parseFloat(document.getElementById('cExp').value),prov=document.getElementById('cProv').value.trim(),notes=document.getElementById('cNotes').value.trim();
  if(!tag||!desc||isNaN(flow)||isNaN(cost)||isNaN(exp)){alert('Completa campos requeridos.');return;}
  catalog.push({tag,desc,type,flow,unit,cost,exp,prov:prov||'—',notes:notes||'—'});
  ['cTag','cDesc','cFlow','cCost','cProv','cNotes'].forEach(id=>document.getElementById(id).value='');
  document.getElementById('cExp').value='0.6';renderCat();
}
function delCat(i){catalog.splice(i,1);renderCat();}

// ═══════════════════════ CATÁLOGO INDIRECTOS (CONFIG) ═══════════════════════
function renderIndCfg(){
  const tb=document.getElementById('indCfgBody');tb.innerHTML='';
  indItems.forEach((item,i)=>{
    const tr=document.createElement('tr');
    tr.innerHTML=`
      <td><input class="ind-pct-input" value="${item.num}" style="width:50px" onchange="indItems[${i}].num=this.value;renderInd()"></td>
      <td><input class="f-input" value="${item.concept}" style="font-size:0.82rem;padding:0.35rem 0.5rem" onchange="indItems[${i}].concept=this.value;renderInd()"></td>
      <td><select class="f-select" style="font-size:0.78rem;padding:0.3rem" onchange="indItems[${i}].mode=this.value;renderIndCfg();renderInd();calcTotals()">
        <option value="pct" ${item.mode==='pct'?'selected':''}>% Equipos</option>
        <option value="fixed" ${item.mode==='fixed'?'selected':''}>Monto fijo</option>
      </select></td>
      <td><input class="ind-pct-input" type="number" step="0.1" value="${item.pct}" ${item.mode==='fixed'?'disabled style="opacity:0.3;width:65px"':'style="width:65px"'} onchange="indItems[${i}].pct=parseFloat(this.value)||0;renderInd();calcTotals()"></td>
      <td><input class="ind-fixed-input" type="number" step="any" value="${item.fixed}" ${item.mode==='pct'?'disabled style="opacity:0.3;width:100px"':'style="width:100px"'} onchange="indItems[${i}].fixed=parseFloat(this.value)||0;renderInd();calcTotals()"></td>
      <td><input class="ind-pct-input" type="number" min="0" value="${item.qty}" style="width:45px" onchange="indItems[${i}].qty=parseInt(this.value)||0;renderInd();calcTotals()"></td>
      <td><button class="btn btn-d btn-sm" onclick="delIndItem(${i})">✕</button></td>`;
    tb.appendChild(tr);
  });
  document.getElementById('indCfgCount').textContent=indItems.length;
}
function addIndItem(){
  const num=document.getElementById('iNum').value.trim(),concept=document.getElementById('iConcept').value.trim(),mode=document.getElementById('iMode').value,pct=parseFloat(document.getElementById('iPct').value)||0,fixed=parseFloat(document.getElementById('iFixed').value)||0,qty=parseInt(document.getElementById('iQty').value)||1;
  if(!num||!concept){alert('Ingresa número y concepto.');return;}
  indItems.push({num,concept,mode,pct,qty,fixed});
  document.getElementById('iNum').value='';document.getElementById('iConcept').value='';document.getElementById('iPct').value='0';document.getElementById('iFixed').value='0';document.getElementById('iQty').value='1';
  renderIndCfg();renderInd();calcTotals();
}
function delIndItem(i){indItems.splice(i,1);renderIndCfg();renderInd();calcTotals();}

// ═══════════════════════ TARIFAS ═══════════════════════
function renderTarifas(){
  const tb=document.getElementById('tarifaBody');tb.innerHTML='';
  tarifas.forEach((t,i)=>{const tr=document.createElement('tr');tr.innerHTML=`<td><strong>${t.rol}</strong></td><td><span class="chip ${TTC[t.tipo]||'chip-gray'}">${t.tipo}</span></td><td class="mono">${fmtM(t.tarifa)}</td><td><button class="btn btn-d btn-sm" onclick="delTarifa(${i})">✕</button></td>`;tb.appendChild(tr);});
  document.getElementById('tarifaCount').textContent=tarifas.length;
}
function addTarifa(){
  const rol=document.getElementById('tRol').value.trim(),tipo=document.getElementById('tTipo').value,tarifa=parseFloat(document.getElementById('tTarifa').value);
  if(!rol||isNaN(tarifa)){alert('Completa campos.');return;}
  tarifas.push({rol,tipo,tarifa});document.getElementById('tRol').value='';document.getElementById('tTarifa').value='';renderTarifas();refreshMOSel();
}
function delTarifa(i){tarifas.splice(i,1);renderTarifas();refreshMOSel();}
function refreshMOSel(){const sel=document.getElementById('moSel');sel.innerHTML='<option value="">— Seleccionar —</option>';tarifas.forEach((t,i)=>{const o=document.createElement('option');o.value=i;o.textContent=`${t.rol} — $${t.tarifa.toLocaleString()}/día`;sel.appendChild(o);});}

// ═══════════════════════ COTIZADOR PROYECTOS ═══════════════════════
function refreshQSelect(){const sel=document.getElementById('qEquip');sel.innerHTML='<option value="">— Seleccionar —</option>';catalog.forEach((c,i)=>{const o=document.createElement('option');o.value=i;o.textContent=`${c.tag} — ${c.desc} (${c.flow} ${c.unit})`;sel.appendChild(o);});}
function onQEquipChange(){const idx=document.getElementById('qEquip').value;if(idx===''){['qS1','qC1','qN'].forEach(id=>document.getElementById(id).value='');document.getElementById('qPreviewBar').classList.remove('show');return;}const c=catalog[idx];document.getElementById('qS1').value=c.flow+' '+c.unit;document.getElementById('qC1').value=fmt(c.cost);document.getElementById('qN').value=c.exp+' ('+c.type+')';qPreview();}
function qPreview(){const idx=document.getElementById('qEquip').value;if(idx==='')return;const c=catalog[idx],s2=parseFloat(document.getElementById('qS2').value),qty=parseInt(document.getElementById('qQty').value)||1;if(isNaN(s2)||s2<=0){document.getElementById('qPreviewBar').classList.remove('show');return;}const u=c.cost*Math.pow(s2/c.flow,c.exp);document.getElementById('qpUnit').textContent=fmt(u);document.getElementById('qpTotal').textContent=fmt(u*qty);document.getElementById('qPreviewBar').classList.add('show');}
function addLine(){const idx=document.getElementById('qEquip').value;if(idx==='')return;const c=catalog[idx],s2=parseFloat(document.getElementById('qS2').value),qty=parseInt(document.getElementById('qQty').value)||1,notes=document.getElementById('qNotes').value.trim();if(isNaN(s2)||s2<=0)return;const uc=c.cost*Math.pow(s2/c.flow,c.exp);lines.push({tag:c.tag,desc:c.desc,type:c.type,s1:c.flow,s2,unit:c.unit,n:c.exp,qty,unitCost:uc,notes,label:''});document.getElementById('qS2').value='';document.getElementById('qQty').value='1';document.getElementById('qNotes').value='';document.getElementById('qPreviewBar').classList.remove('show');renderLines();calcTotals();}
function renderLines(){const tb=document.getElementById('linesBody'),em=document.getElementById('linesEmpty');if(!lines.length){tb.innerHTML='';em.style.display='';return;}em.style.display='none';tb.innerHTML='';lines.forEach((l,i)=>{const tr=document.createElement('tr');tr.innerHTML=`<td style="white-space:nowrap;"><span class="mono" style="margin-right:4px;">${i+1}</span><span style="display:inline-flex;flex-direction:column;gap:1px;vertical-align:middle;"><button class="btn-arrow" onclick="moveLineUp(${i})" title="Subir" ${i===0?'disabled':''}>▲</button><button class="btn-arrow" onclick="moveLineDown(${i})" title="Bajar" ${i===lines.length-1?'disabled':''}>▼</button></span></td><td class="mono">${l.tag}</td><td>${l.desc}</td><td class="mono">${l.s1}→${l.s2} ${l.unit}</td><td><span class="exp-chip">n=${l.n}</span></td><td class="mono">${l.qty}</td><td class="mono">${fmt(l.unitCost)}</td><td class="mono" style="font-weight:600">${fmt(l.unitCost*l.qty)}</td><td style="white-space:nowrap;"><button class="btn btn-o btn-sm" onclick="editLine(${i})" title="Editar" style="padding:2px 6px;font-size:0.7rem;">✏️</button> <button class="btn btn-d btn-sm" onclick="delLine(${i})" style="padding:2px 6px;font-size:0.7rem;">✕</button></td>`;tb.appendChild(tr);});document.getElementById('lineCount').textContent=lines.length;}
function moveLineUp(i){if(i<=0)return;[lines[i-1],lines[i]]=[lines[i],lines[i-1]];renderLines();calcTotals();}
function moveLineDown(i){if(i>=lines.length-1)return;[lines[i],lines[i+1]]=[lines[i+1],lines[i]];renderLines();calcTotals();}
function editLine(i){const l=lines[i];const nTag=prompt('Tag:',l.tag);if(nTag===null)return;const nDesc=prompt('Descripción:',l.desc);if(nDesc===null)return;const nS2=prompt('Flujo Requerido (S₂):',l.s2);if(nS2===null)return;const nQty=prompt('Cantidad:',l.qty);if(nQty===null)return;const nNotes=prompt('Notas:',l.notes||'');if(nNotes===null)return;l.tag=nTag;l.desc=nDesc;l.s2=parseFloat(nS2)||l.s2;l.qty=parseInt(nQty)||l.qty;l.notes=nNotes;const c=catalog.find(c=>c.tag===l.tag);if(c)l.unitCost=c.cost*Math.pow(l.s2/c.flow,c.exp);renderLines();calcTotals();}
function delLine(i){lines.splice(i,1);renderLines();calcTotals();}
function clearLines(){lines=[];renderLines();calcTotals();}
function renderInd(){const tb=document.getElementById('indBody');tb.innerHTML='';indItems.forEach((item,i)=>{const tr=document.createElement('tr');let tc,ic,qc;if(item.mode==='pct'){tc='<span class="ind-type-label">% Eq.</span>';ic=`<input class="ind-pct-input" type="number" step="0.1" value="${item.pct}" onchange="indItems[${i}].pct=parseFloat(this.value)||0;calcTotals()">%`;qc=`<input class="ind-pct-input" type="number" min="0" value="${item.qty}" style="width:45px" onchange="indItems[${i}].qty=parseInt(this.value)||0;calcTotals()">`;}else{tc='<span class="ind-type-label">Fijo</span>';ic=`<input class="ind-fixed-input" type="number" step="any" value="${item.fixed}" onchange="indItems[${i}].fixed=parseFloat(this.value)||0;calcTotals()">`;qc=`<input class="ind-pct-input" type="number" min="0" value="${item.qty}" style="width:45px" onchange="indItems[${i}].qty=parseInt(this.value)||0;calcTotals()">`;}tr.innerHTML=`<td class="ind-num">${item.num}</td><td><strong>${item.concept}</strong></td><td style="text-align:center">${qc}</td><td>${tc}</td><td>${ic}</td><td class="ind-val" id="iu${i}">$0</td><td class="ind-val" id="is${i}" style="font-weight:700">$0</td>`;tb.appendChild(tr);});}
function calcTotals(){const totEq=lines.reduce((s,l)=>s+l.unitCost*l.qty,0);let totInd=0;indItems.forEach((item,i)=>{let u=0,sub=0;if(item.mode==='pct'){u=totEq*item.pct/100;sub=u*item.qty;}else{u=item.fixed;sub=u*item.qty;}document.getElementById('iu'+i).textContent=fmt(u);document.getElementById('is'+i).textContent=fmt(sub);totInd+=sub;});document.getElementById('indTotal').textContent=fmt(totInd);document.getElementById('tEquip').textContent=fmt(totEq);document.getElementById('tInd').textContent=fmt(totInd);const creditDays=parseInt(document.getElementById('pCreditDays').value)||0;const subBeforeCredit=totEq+totInd;const creditAmt=subBeforeCredit*creditDays*0.0005;document.getElementById('pCreditAmt').textContent=fmt(creditAmt);document.getElementById('tCredit').textContent=fmt(creditAmt);const totalProj=subBeforeCredit+creditAmt;document.getElementById('tProj').textContent=fmt(totalProj);const lang=totEq>0?(totalProj/totEq):0;document.getElementById('tLang').textContent=lang>0?lang.toFixed(2)+'x':'—';document.getElementById('tLang').style.color=lang>=3.1&&lang<=4.74?'#34d399':lang>0&&lang<3.1?'#f59e0b':'#f59e0b';}

const IMG_VECSA='assets/img/img_vecsa.png';
// ═══════════════════════ GENERAR PROPUESTA (Vista PDF) ═══════════════════════
function generateProposal(){
  if(!lines.length){alert('Agrega equipos al proyecto primero.');return;}
  const fmtP=n=>'$'+n.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});
  const fecha=new Date().toLocaleDateString('es-MX',{year:'numeric',month:'long',day:'numeric'});

  const totEq=lines.reduce((s,l)=>s+l.unitCost*l.qty,0);
  let totInd=0;
  const indRows=indItems.map((item,i)=>{
    let u=0,sub=0;
    if(item.mode==='pct'){u=totEq*item.pct/100;sub=u*item.qty;}
    else{u=item.fixed;sub=u*item.qty;}
    totInd+=sub;
    return `<tr><td style="color:#6b7280;font-size:8pt;">${item.num}</td><td>${item.concept}</td><td class="r">${item.qty}</td><td>${item.mode==='pct'?item.pct+'%':'Fijo'}</td><td class="r">${fmtP(u)}</td><td class="r b">${fmtP(sub)}</td></tr>`;
  }).join('');

  const creditDays=parseInt(document.getElementById('pCreditDays').value)||0;
  const subBeforeCredit=totEq+totInd;
  const creditAmt=subBeforeCredit*creditDays*0.0005;
  const totalProj=subBeforeCredit+creditAmt;
  const lang=totEq>0?(totalProj/totEq).toFixed(2):0;

  // Equipment rows
  const eqRows=lines.map((l,i)=>{
    return `<tr>
      <td style="color:#6b7280;">${i+1}</td>
      <td><span style="font-family:monospace;font-weight:600;color:#1a56db;">${l.tag}</span></td>
      <td>${l.desc}</td>
      <td class="r" style="font-family:monospace;font-size:8pt;">${l.s1} → ${l.s2} ${l.unit}</td>
      <td class="r">${l.n}</td>
      <td class="r">${l.qty}</td>
      <td class="r">${fmtP(l.unitCost)}</td>
      <td class="r b">${fmtP(l.unitCost*l.qty)}</td>
    </tr>`;
  }).join('');

  // Diagram HTML for PDF (with labels)
  const COL={tanque:'#3b82f6',intercambiador:'#ec4899',bomba:'#10b981',compresor:'#f59e0b',torre:'#6366f1',reactor:'#f97316',filtro:'#6b7280',caldera:'#ef4444',otro:'#6b7280'};
  let diaSvg=`<div style="display:flex;align-items:flex-end;gap:0;font-family:'Segoe UI',sans-serif;">`;
  diaSvg+=`<div style="display:flex;flex-direction:column;justify-content:flex-end;align-items:center;padding-bottom:28px;min-width:36px;"><span style="font-size:7pt;font-weight:600;color:#94a3b8;">IN</span><div style="width:30px;height:1.5px;background:#94a3b8;position:relative;margin-top:3px;"><div style="position:absolute;right:-4px;top:-3px;width:0;height:0;border-left:6px solid #94a3b8;border-top:4px solid transparent;border-bottom:4px solid transparent;"></div></div></div>`;
  lines.forEach((l,i)=>{
    const cl=COL[l.type]||'#6b7280';
    const sh=l.desc.length>20?l.desc.substring(0,19)+'…':l.desc;
    const lb=l.label||'';
    diaSvg+=`<div style="display:flex;flex-direction:column;align-items:center;width:140px;flex-shrink:0;">`;
    if(lb) diaSvg+=`<div style="background:#fffbeb;border:1px solid #fde68a;border-radius:4px;padding:4px 6px;font-size:7pt;line-height:1.3;color:#78350f;text-align:center;margin-bottom:4px;width:130px;">${lb}</div>`;
    diaSvg+=`<div style="width:130px;border:1.5px solid ${cl};border-radius:6px;background:white;overflow:hidden;">
      <div style="height:3px;background:${cl};"></div>
      <div style="padding:6px;text-align:center;">
        <div style="font-family:monospace;font-size:8pt;font-weight:700;color:${cl};">${l.tag}</div>
        <div style="font-size:7.5pt;color:#374151;margin:2px 0;">${sh}</div>
        <div style="font-family:monospace;font-size:7pt;color:#6b7280;">${l.s2} ${l.unit}</div>
      </div></div></div>`;
    if(i<lines.length-1) diaSvg+=`<div style="display:flex;align-items:flex-end;padding-bottom:28px;min-width:24px;"><div style="width:24px;height:1.5px;background:#94a3b8;position:relative;"><div style="position:absolute;right:-4px;top:-3px;width:0;height:0;border-left:6px solid #94a3b8;border-top:4px solid transparent;border-bottom:4px solid transparent;"></div></div></div>`;
  });
  diaSvg+=`<div style="display:flex;flex-direction:column;justify-content:flex-end;align-items:center;padding-bottom:28px;min-width:36px;"><div style="width:30px;height:1.5px;background:#94a3b8;position:relative;margin-bottom:3px;"><div style="position:absolute;right:-4px;top:-3px;width:0;height:0;border-left:6px solid #94a3b8;border-top:4px solid transparent;border-bottom:4px solid transparent;"></div></div><span style="font-size:7pt;font-weight:600;color:#94a3b8;">OUT</span></div></div>`;

  const propHTML=`
<style>
@page{size:letter;margin:0;}
#propContent{font-family:'Segoe UI',system-ui,sans-serif;color:#1a1a2e;line-height:1.4;font-size:9pt;background:white;}
#propContent *{margin:0;padding:0;box-sizing:border-box;}
#propContent table{width:100%;border-collapse:collapse;font-size:8.5pt;}
#propContent th,#propContent td{padding:6px 8px;text-align:left;border-bottom:1px solid #e5e7eb;}
#propContent th{background:#f1f5f9;font-weight:600;font-size:7.5pt;text-transform:uppercase;letter-spacing:0.03em;color:#475569;}
#propContent .r{text-align:right;}
#propContent .b{font-weight:700;}
#propContent .sec{padding:24px 36px;}
#propContent .sec-hd{font-size:11pt;font-weight:700;color:#0f172a;margin-bottom:12px;padding-bottom:6px;border-bottom:2px solid #1a56db;display:flex;align-items:center;gap:8px;}
#propContent .sec-hd .num{background:#1a56db;color:white;width:22px;height:22px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;font-size:8pt;font-weight:800;}
#propContent .tot-row td{background:#f8fafc;border-top:2px solid #cbd5e1;font-weight:700;font-size:9pt;}
</style>
<div class="pp" style="max-width:820px;margin:0 auto;">
  <!-- HEADER -->
  <div style="background:linear-gradient(135deg,#0a1628,#162544,#1a3a5c);padding:28px 36px 22px;color:white;position:relative;">
    <div style="display:flex;justify-content:space-between;align-items:center;">
      <div style="display:flex;align-items:center;gap:12px;">
        <img src="${IMG_VECSA}" style="height:38px;object-fit:contain;" alt="VECSA Water">
      </div>
      <div style="text-align:right;">
        <div style="font-size:16pt;font-weight:800;letter-spacing:1px;">COTIZACIÓN</div>
        <div style="font-size:8pt;opacity:0.6;margin-top:2px;">DE PROYECTO</div>
      </div>
    </div>
    <div style="display:flex;gap:24px;margin-top:16px;padding-top:12px;border-top:1px solid rgba(255,255,255,0.15);font-size:8pt;">
      <div><span style="opacity:0.5;">Fecha:</span> <strong>${fecha}</strong></div>
      <div><span style="opacity:0.5;">Partidas:</span> <strong>${lines.length}</strong></div>
      <div><span style="opacity:0.5;">Factor Lang:</span> <strong>${lang>0?lang+'x':'—'}</strong></div>
      <div style="margin-left:auto;"><span style="opacity:0.5;">Total Proyecto:</span> <strong style="font-size:11pt;color:#34d399;">${fmtP(totalProj)}</strong></div>
    </div>
  </div>

  <!-- EQUIPOS -->
  <div class="sec">
    <div class="sec-hd"><span class="num">1</span> Partidas de Equipos</div>
    <table>
      <thead><tr><th>#</th><th>Tag</th><th>Equipo</th><th class="r">Flujo Ref → Req</th><th class="r">n</th><th class="r">Cant</th><th class="r">Costo Unit.</th><th class="r">Subtotal</th></tr></thead>
      <tbody>
        ${eqRows}
        <tr class="tot-row"><td colspan="6"></td><td class="r" style="color:#475569;">TOTAL EQUIPOS</td><td class="r" style="color:#1a56db;">${fmtP(totEq)}</td></tr>
      </tbody>
    </table>
  </div>

  <!-- INDIRECTOS -->
  <div class="sec" style="padding-top:0;">
    <div class="sec-hd"><span class="num">2</span> Costos Indirectos</div>
    <table>
      <thead><tr><th>#</th><th>Concepto</th><th class="r">Cant</th><th>Tipo</th><th class="r">Costo Unit.</th><th class="r">Subtotal</th></tr></thead>
      <tbody>
        ${indRows}
        <tr class="tot-row"><td colspan="4"></td><td class="r" style="color:#475569;">TOTAL INDIRECTOS</td><td class="r" style="color:#1a56db;">${fmtP(totInd)}</td></tr>
      </tbody>
    </table>
  </div>

  <!-- FINANCIERO -->
  ${creditDays>0?`
  <div class="sec" style="padding-top:0;">
    <div class="sec-hd"><span class="num">3</span> Costo Financiero</div>
    <div style="display:flex;gap:24px;padding:12px 16px;background:#fffbeb;border:1px solid #fde68a;border-radius:8px;font-size:8.5pt;">
      <div><span style="color:#92400e;">Días de crédito:</span> <strong>${creditDays}</strong></div>
      <div><span style="color:#92400e;">Tasa:</span> <strong>0.05%/día (18% anual)</strong></div>
      <div style="margin-left:auto;"><span style="color:#92400e;">Costo financiero:</span> <strong style="font-size:10pt;">${fmtP(creditAmt)}</strong></div>
    </div>
  </div>`:''}

  <!-- RESUMEN -->
  <div class="sec" style="padding-top:8px;">
    <div style="background:linear-gradient(135deg,#f8fafc,#f1f5f9);border:1px solid #e2e8f0;border-radius:10px;padding:20px 24px;">
      <div style="font-size:10pt;font-weight:700;margin-bottom:12px;color:#0f172a;">Resumen del Proyecto</div>
      <div style="display:flex;flex-direction:column;gap:6px;font-size:9pt;">
        <div style="display:flex;justify-content:space-between;"><span style="color:#475569;">Total Equipos</span><span style="font-family:monospace;">${fmtP(totEq)}</span></div>
        <div style="display:flex;justify-content:space-between;"><span style="color:#475569;">Total Indirectos</span><span style="font-family:monospace;">${fmtP(totInd)}</span></div>
        ${creditDays>0?`<div style="display:flex;justify-content:space-between;"><span style="color:#475569;">Costo Financiero (${creditDays} días)</span><span style="font-family:monospace;">${fmtP(creditAmt)}</span></div>`:''}
        <div style="border-top:2px solid #1a56db;padding-top:8px;margin-top:4px;display:flex;justify-content:space-between;font-size:12pt;font-weight:800;">
          <span style="color:#0f172a;">TOTAL PROYECTO</span>
          <span style="color:#1a56db;">${fmtP(totalProj)}</span>
        </div>
        <div style="display:flex;justify-content:space-between;font-size:8pt;color:#6b7280;">
          <span>Factor Lang (Proyecto ÷ Equipos)</span>
          <span style="font-weight:600;color:${lang>=3.1&&lang<=4.74?'#059669':'#d97706'};">${lang>0?lang+'x':'—'}</span>
        </div>
      </div>
    </div>
  </div>

  <!-- DIAGRAMA -->
  <div class="sec" style="padding-top:0;">
    <div class="sec-hd"><span class="num" style="background:#6366f1;">D</span> Diagrama de Bloques</div>
    <div style="overflow-x:auto;padding:10px 0;">${diaSvg}</div>
  </div>

  <!-- FOOTER -->
  <div style="padding:12px 36px;background:#f8fafc;border-top:1px solid #e2e8f0;display:flex;justify-content:space-between;font-size:7pt;color:#94a3b8;">
    <span>Generado por TechPro Suite — ${fecha}</span>
    <span>Este documento es informativo. Sujeto a confirmación.</span>
  </div>
</div>`;

  // Show overlay
  let ov=document.getElementById('propOverlay');
  if(!ov){ov=document.createElement('div');ov.id='propOverlay';document.body.appendChild(ov);}
  ov.innerHTML=`
    <div id="propBar" style="position:fixed;top:0;left:0;right:0;background:#0f172a;padding:10px 20px;display:flex;gap:10px;align-items:center;z-index:10001;box-shadow:0 2px 10px rgba(0,0,0,0.3);">
      <button onclick="window.print()" style="padding:8px 20px;background:#3b82f6;color:white;border:none;border-radius:6px;font-size:14px;font-weight:bold;cursor:pointer;">⬇ Guardar como PDF</button>
      <button onclick="document.getElementById('propOverlay').style.display='none';document.body.style.overflow='';" style="padding:8px 20px;background:transparent;color:white;border:1px solid rgba(255,255,255,0.3);border-radius:6px;font-size:14px;cursor:pointer;">✕ Cerrar Vista Previa</button>
      <span style="color:rgba(255,255,255,0.5);font-size:12px;margin-left:auto;">En el diálogo de impresión selecciona "Guardar como PDF"</span>
    </div>
    <div id="propContent" style="padding:50px 0 0;background:#e2e8f0;min-height:100vh;">
      <div style="background:white;max-width:820px;margin:20px auto;box-shadow:0 4px 20px rgba(0,0,0,0.12);border-radius:4px;overflow:hidden;">${propHTML}</div>
    </div>`;
  ov.style.cssText='position:fixed;top:0;left:0;right:0;bottom:0;z-index:10000;overflow-y:auto;background:#e2e8f0;';
  document.body.style.overflow='hidden';

  // Print styles for this overlay
  let ps=document.getElementById('propPrintCSS');
  if(!ps){ps=document.createElement('style');ps.id='propPrintCSS';document.head.appendChild(ps);}
  ps.textContent='@media print{.topbar,.container,#propBar{display:none !important;}#propOverlay{position:static !important;overflow:visible !important;}#propContent{padding:0 !important;background:white !important;}body>*:not(#propOverlay):not(#propPrintCSS){display:none !important;}#propOverlay{display:block !important;background:white !important;}}';
}

// Diagram
function toggleDiagram(){const w=document.getElementById('diagramWrap');if(w.classList.contains('show')){w.classList.remove('show');return;}if(!lines.length){alert('Agrega equipos primero.');return;}genDia();w.classList.add('show');}
function genDia(){
  const c=document.getElementById('diagramHtml');
  const COL={tanque:'#3b82f6',intercambiador:'#ec4899',bomba:'#10b981',compresor:'#f59e0b',torre:'#6366f1',reactor:'#f97316',filtro:'#6b7280',caldera:'#ef4444',otro:'#6b7280'};
  let html=`<div style="display:flex;align-items:flex-end;gap:0;min-width:fit-content;padding:10px 0;">`;
  // ENTRADA arrow
  html+=`<div style="display:flex;flex-direction:column;justify-content:flex-end;align-items:center;padding-bottom:36px;min-width:50px;">
    <span style="font-size:0.7rem;font-weight:600;color:#94a3b8;">ENTRADA</span>
    <div style="width:40px;height:2px;background:#94a3b8;position:relative;margin-top:4px;"><div style="position:absolute;right:-5px;top:-4px;width:0;height:0;border-left:8px solid #94a3b8;border-top:5px solid transparent;border-bottom:5px solid transparent;"></div></div>
  </div>`;
  lines.forEach((l,i)=>{
    const cl=COL[l.type]||'#6b7280';
    const sh=l.desc.length>22?l.desc.substring(0,21)+'…':l.desc;
    html+=`<div style="display:flex;flex-direction:column;align-items:center;width:170px;flex-shrink:0;">
      <div class="dia-label-box" style="width:160px;" onclick="this.querySelector('textarea')?.focus()">
        <button class="dia-ai-btn" onclick="event.stopPropagation();aiBlockLabel(${i})" title="IA genera descripción">✨ IA</button>
        <textarea class="dia-label-input" rows="2" placeholder="Descripción del proceso..." oninput="lines[${i}].label=this.value" onfocus="this.parentElement.style.borderColor='#f59e0b'"  onblur="this.parentElement.style.borderColor='#fde68a'">${l.label||''}</textarea>
      </div>
      <div style="width:155px;border:2px solid ${cl};border-radius:8px;background:white;overflow:hidden;box-shadow:0 1px 4px rgba(0,0,0,0.08);">
        <div style="height:4px;background:${cl};"></div>
        <div style="padding:10px 8px;text-align:center;">
          <div style="font-family:var(--mono);font-size:0.8rem;font-weight:700;color:${cl};">${l.tag}</div>
          <div style="font-size:0.78rem;color:#1f2937;margin:3px 0;">${sh}</div>
          <div style="font-family:var(--mono);font-size:0.72rem;color:#6b7280;">${l.s2} ${l.unit}</div>
        </div>
      </div>
    </div>`;
    // Arrow between blocks
    if(i<lines.length-1){
      html+=`<div style="display:flex;align-items:flex-end;padding-bottom:36px;min-width:35px;">
        <div style="width:35px;height:2px;background:#94a3b8;position:relative;"><div style="position:absolute;right:-5px;top:-4px;width:0;height:0;border-left:8px solid #94a3b8;border-top:5px solid transparent;border-bottom:5px solid transparent;"></div></div>
      </div>`;
    }
  });
  // SALIDA arrow
  html+=`<div style="display:flex;flex-direction:column;justify-content:flex-end;align-items:center;padding-bottom:36px;min-width:50px;">
    <div style="width:40px;height:2px;background:#94a3b8;position:relative;margin-bottom:4px;"><div style="position:absolute;right:-5px;top:-4px;width:0;height:0;border-left:8px solid #94a3b8;border-top:5px solid transparent;border-bottom:5px solid transparent;"></div></div>
    <span style="font-size:0.7rem;font-weight:600;color:#94a3b8;">SALIDA</span>
  </div>`;
  html+=`</div>`;
  c.innerHTML=html;
}
async function aiBlockLabel(i){
  const l=lines[i];
  const btn=event.target;
  const origText=btn.textContent;
  btn.textContent='⏳';btn.disabled=true;
  try{
    const r=await fetch('https://api.anthropic.com/v1/messages',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({model:'claude-sonnet-4-20250514',max_tokens:150,messages:[{role:'user',content:`Eres un ingeniero de proyectos de tratamiento de agua. Genera una descripción breve (máximo 2 líneas, 15 palabras) de la función de este equipo en el proceso:\n\nEquipo: ${l.tag} — ${l.desc}\nTipo: ${l.type}\nFlujo: ${l.s2} ${l.unit}\n${l.notes?'Notas: '+l.notes:''}\n\nContexto del tren de proceso: ${lines.map(x=>x.tag+' ('+x.desc+')').join(' → ')}\n\nPosición: equipo #${i+1} de ${lines.length}\n\nReglas:\n- Solo el texto descriptivo, sin comillas ni formato\n- Describe QUÉ HACE este equipo en el proceso (no qué ES)\n- Máximo 15 palabras\n- En español técnico`}]})});
    const d=await r.json();
    const txt=(d.content||[]).map(b=>b.text||'').join('').trim();
    if(txt){l.label=txt;genDia();}
  }catch(e){alert('Error al conectar con IA.');}
  finally{btn.textContent=origText;btn.disabled=false;}
}

// ═══════════════════════ SERVICIOS ═══════════════════════
function renderMO(){const tb=document.getElementById('moBody'),em=document.getElementById('moEmpty');if(!moLines.length){tb.innerHTML='';em.style.display='';return;}em.style.display='none';tb.innerHTML='';moLines.forEach((m,i)=>{const sub=m.tarifa*m.dias*m.personas;const tr=document.createElement('tr');tr.innerHTML=`<td class="mono">${i+1}</td><td><strong>${m.rol}</strong> <span class="chip ${TTC[m.tipo]||'chip-gray'}">${m.tipo}</span></td><td class="mono">${fmtM(m.tarifa)}</td><td class="mono">${m.dias}</td><td class="mono">${m.personas}</td><td class="mono" style="text-align:right;font-weight:600">${fmtM(sub)}</td><td><button class="btn btn-d btn-sm" onclick="delMO(${i})">✕</button></td>`;tb.appendChild(tr);});document.getElementById('moCount').textContent=moLines.length;}
function addMO(){const idx=document.getElementById('moSel').value;if(idx==='')return;const t=tarifas[idx],dias=parseInt(document.getElementById('moDias').value)||1,personas=parseInt(document.getElementById('moPers').value)||1;moLines.push({rol:t.rol,tipo:t.tipo,tarifa:t.tarifa,dias,personas});document.getElementById('moDias').value='1';document.getElementById('moPers').value='1';renderMO();calcSvcTotals();}
function delMO(i){moLines.splice(i,1);renderMO();calcSvcTotals();}
function renderMatSvc(){const tb=document.getElementById('matSvcBody'),em=document.getElementById('matSvcEmpty');if(!matSvcLines.length){tb.innerHTML='';em.style.display='';return;}em.style.display='none';tb.innerHTML='';matSvcLines.forEach((m,i)=>{const sub=m.cant*m.precio;const tr=document.createElement('tr');tr.innerHTML=`<td class="mono">${i+1}</td><td>${m.desc}</td><td class="mono">${m.cant}</td><td>${m.unidad}</td><td class="mono">${fmtM(m.precio)}</td><td class="mono" style="text-align:right;font-weight:600">${fmtM(sub)}</td><td><button class="btn btn-d btn-sm" onclick="delMatSvc(${i})">✕</button></td>`;tb.appendChild(tr);});document.getElementById('matSvcCount').textContent=matSvcLines.length;}
function addMatSvc(){const desc=document.getElementById('mDesc').value.trim(),cant=parseFloat(document.getElementById('mCant').value)||1,unidad=document.getElementById('mUnidad').value.trim(),precio=parseFloat(document.getElementById('mPrecio').value);if(!desc||isNaN(precio)){alert('Completa campos.');return;}matSvcLines.push({desc,cant,unidad,precio});document.getElementById('mDesc').value='';document.getElementById('mCant').value='1';document.getElementById('mPrecio').value='';renderMatSvc();calcSvcTotals();}
function delMatSvc(i){matSvcLines.splice(i,1);renderMatSvc();calcSvcTotals();}
function calcSvcTotals(){const totMO=moLines.reduce((s,m)=>s+m.tarifa*m.dias*m.personas,0);const totMat=matSvcLines.reduce((s,m)=>s+m.cant*m.precio,0);const sub=totMO+totMat;const mg=parseFloat(document.getElementById('svcMargin').value)||0;const ut=sub*mg/100;const subWithUtil=sub+ut;const sCreditDays=parseInt(document.getElementById('sCreditDays').value)||0;const sCreditAmt=subWithUtil*sCreditDays*0.0005;document.getElementById('sMO').textContent=fmtM(totMO);document.getElementById('sMat').textContent=fmtM(totMat);document.getElementById('sSub').textContent=fmtM(sub);document.getElementById('sUtil').textContent=fmtM(ut);document.getElementById('sCreditAmt').textContent=fmtM(sCreditAmt);document.getElementById('sCredit').textContent=fmtM(sCreditAmt);document.getElementById('sTotal').textContent=fmtM(subWithUtil+sCreditAmt);}

// AI
async function enhanceText(){const raw=document.getElementById('svcRaw').value.trim(),name=document.getElementById('svcName').value.trim();if(!raw){alert('Escribe la descripción del trabajo primero.');return;}document.getElementById('aiBtn').disabled=true;document.getElementById('aiLoading').style.display='inline-flex';document.getElementById('aiOutput').classList.remove('show');try{const r=await fetch('https://api.anthropic.com/v1/messages',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({model:'claude-sonnet-4-20250514',max_tokens:1000,messages:[{role:'user',content:`Eres un ingeniero de proyectos que redacta alcances de trabajo para cotizaciones técnicas de servicios industriales.\n\nTransforma esta descripción informal en un alcance de trabajo profesional y detallado para cotización formal. Usa lenguaje técnico, organiza por actividades numeradas, tono profesional. En español.\n\nServicio: ${name||'Servicio de mantenimiento'}\n\nDescripción:\n"${raw}"\n\nReglas:\n- Solo el texto del alcance, sin encabezados markdown\n- Numera actividades principales\n- Incluye seguridad si aplica\n- Sé específico y profesional\n- No inventes pasos no implícitos`}]})});const d=await r.json();const txt=d.content.map(b=>b.text||'').join('\n').trim();document.getElementById('aiText').textContent=txt;document.getElementById('aiOutput').classList.add('show');}catch(e){alert('Error al conectar con IA.');console.error(e);}finally{document.getElementById('aiBtn').disabled=false;document.getElementById('aiLoading').style.display='none';}}

// ═══════════════════════ PÓLIZAS DE MANTENIMIENTO ═══════════════════════
let polActivos=[],polItems=[];
let comodCat=[
  {equipo:'Controlador conductividad',cap:'',unit:'—',renta:2500,notes:'1 por torre'},
  {equipo:'Controlador conductividad + pH',cap:'',unit:'—',renta:4850,notes:'1 por RO'},
  {equipo:'Bomba dosificadora',cap:'',unit:'—',renta:500,notes:'2 por torre'},
  {equipo:'Filtro lateral',cap:'15',unit:'GPM',renta:1500,notes:'1 por torre'},
  {equipo:'Filtro lateral',cap:'30',unit:'GPM',renta:2750,notes:'1 por torre'},
  {equipo:'Monitoreo en línea conductividad',cap:'',unit:'—',renta:3000,notes:'Si aplica'},
  {equipo:'Suavizador',cap:'5',unit:'GPM',renta:1800,notes:''},
  {equipo:'Filtro multimedia',cap:'10',unit:'GPM',renta:2200,notes:''},
];
let comodLines=[];

// Editable tabulador tables
let tabHHRows=[{from:1,to:2,hh:1},{from:3,to:5,hh:2},{from:6,to:10,hh:2.5},{from:11,to:99,hh:3}];
let tabAnTCRows=[{from:1,to:2,price:500},{from:3,to:4,price:450},{from:5,to:7,price:400},{from:8,to:99,price:350}];

function renderTabHH(){
  const tb=document.getElementById('tabHHBody');tb.innerHTML='';
  tabHHRows.forEach((r,i)=>{
    const tr=document.createElement('tr');
    tr.innerHTML=`<td><input class="ind-pct-input" type="number" value="${r.from}" style="width:55px" onchange="tabHHRows[${i}].from=parseInt(this.value);polCalc()"></td><td><input class="ind-pct-input" type="number" value="${r.to}" style="width:55px" onchange="tabHHRows[${i}].to=parseInt(this.value);polCalc()"></td><td><input class="ind-pct-input" type="number" step="0.5" value="${r.hh}" style="width:55px" onchange="tabHHRows[${i}].hh=parseFloat(this.value);polCalc()"></td><td><button class="btn btn-d btn-sm" onclick="tabHHRows.splice(${i},1);renderTabHH();polCalc();">✕</button></td>`;
    tb.appendChild(tr);
  });
}
function addHHRow(){
  const from=parseInt(document.getElementById('hhFrom').value),to=parseInt(document.getElementById('hhTo').value),hh=parseFloat(document.getElementById('hhVal').value);
  if(isNaN(from)||isNaN(to)||isNaN(hh))return;
  tabHHRows.push({from,to,hh});tabHHRows.sort((a,b)=>a.from-b.from);
  document.getElementById('hhFrom').value='';document.getElementById('hhTo').value='';document.getElementById('hhVal').value='';
  renderTabHH();polCalc();
}

function renderTabAnTC(){
  const tb=document.getElementById('tabAnTCBody');tb.innerHTML='';
  tabAnTCRows.forEach((r,i)=>{
    const tr=document.createElement('tr');
    tr.innerHTML=`<td><input class="ind-pct-input" type="number" value="${r.from}" style="width:55px" onchange="tabAnTCRows[${i}].from=parseInt(this.value);polCalc()"></td><td><input class="ind-pct-input" type="number" value="${r.to}" style="width:55px" onchange="tabAnTCRows[${i}].to=parseInt(this.value);polCalc()"></td><td><input class="ind-pct-input" type="number" value="${r.price}" style="width:70px" onchange="tabAnTCRows[${i}].price=parseFloat(this.value);polCalc()"></td><td><button class="btn btn-d btn-sm" onclick="tabAnTCRows.splice(${i},1);renderTabAnTC();polCalc();">✕</button></td>`;
    tb.appendChild(tr);
  });
}
function addAnTCRow(){
  const from=parseInt(document.getElementById('anFrom').value),to=parseInt(document.getElementById('anTo').value),price=parseFloat(document.getElementById('anVal').value);
  if(isNaN(from)||isNaN(to)||isNaN(price))return;
  tabAnTCRows.push({from,to,price});tabAnTCRows.sort((a,b)=>a.from-b.from);
  document.getElementById('anFrom').value='';document.getElementById('anTo').value='';document.getElementById('anVal').value='';
  renderTabAnTC();polCalc();
}

function getHHForActivos(totalAct){
  for(const r of tabHHRows){if(totalAct>=r.from&&totalAct<=r.to)return r.hh;}
  return tabHHRows.length?tabHHRows[tabHHRows.length-1].hh:2;
}
function getAnPriceForTC(totalTC){
  for(const r of tabAnTCRows){if(totalTC>=r.from&&totalTC<=r.to)return r.price;}
  return tabAnTCRows.length?tabAnTCRows[tabAnTCRows.length-1].price:500;
}

function polTipoChange(){
  const t=document.getElementById('polTipo').value;
  document.getElementById('polFreqWrap').style.display=t==='visitas'?'':'none';
  document.getElementById('polDedicadoOpts').style.display=t==='dedicado'?'block':'none';
  polCalc();
}

function paAutoClass(){
  const cat=document.getElementById('paCat').value;
  const cap=parseFloat(document.getElementById('paCap').value)||0;
  let cls='',unit='GPM';
  if(cat==='torre'){
    unit='GPM';
    if(cap<=3)cls='Pequeña';else if(cap<=7.5)cls='Mediana';else if(cap<=12)cls='Grande';else cls='XL';
  }else if(cat==='ro'){
    unit='GPM';
    if(cap<9)cls='Pequeña';else if(cap<=15)cls='Mediana';else if(cap<=25)cls='Grande';else cls='XL';
  }else if(cat==='chiller'){
    unit='m³/mes';
    if(cap<=1)cls='Pequeña';else if(cap<=5)cls='Mediana';else if(cap<=10)cls='Grande';else cls='XL';
  }else if(cat==='boiler'){
    unit='BHP';
    cls='Estándar';
  }
  document.getElementById('paUnit').value=unit;
  document.getElementById('paClass').value=cls;
}

function addPolActivo(){
  const cat=document.getElementById('paCat').value,cant=parseInt(document.getElementById('paCant').value)||1,cap=parseFloat(document.getElementById('paCap').value)||0,unit=document.getElementById('paUnit').value,cls=document.getElementById('paClass').value,notes=document.getElementById('paNotes').value.trim();
  if(cap<=0){alert('Ingresa la capacidad.');return;}
  polActivos.push({cat,cant,cap,unit,cls,notes});
  document.getElementById('paCant').value='1';document.getElementById('paCap').value='';document.getElementById('paNotes').value='';paAutoClass();
  renderPolActivos();polCalc();
}

function renderPolActivos(){
  const tb=document.getElementById('polActBody'),em=document.getElementById('polActEmpty');
  const catNames={torre:'Torre Enfriamiento',ro:'Ósmosis Inversa',chiller:'Chiller',boiler:'Boiler sin Vapor'};
  if(!polActivos.length){tb.innerHTML='';em.style.display='';return;}
  em.style.display='none';tb.innerHTML='';
  polActivos.forEach((a,i)=>{
    const tr=document.createElement('tr');
    tr.innerHTML=`<td class="mono">${i+1}</td><td><span class="chip chip-blue">${catNames[a.cat]}</span></td><td class="mono">${a.cant}</td><td class="mono">${a.cap} ${a.unit}</td><td><span class="exp-chip">${a.cls}</span></td><td style="font-size:0.8rem;color:var(--txt3)">${a.notes||'—'}</td><td><button class="btn btn-d btn-sm" onclick="delPolAct(${i})">✕</button></td>`;
    tb.appendChild(tr);
  });
  document.getElementById('polActCount').textContent=polActivos.length;
}
function delPolAct(i){polActivos.splice(i,1);renderPolActivos();polCalc();}

// ── Comodato Catalog CRUD ──
function renderComodCat(){
  const tb=document.getElementById('comodCatBody');tb.innerHTML='';
  comodCat.forEach((c,i)=>{
    const tr=document.createElement('tr');
    tr.innerHTML=`<td><strong>${c.equipo}</strong></td><td class="mono">${c.cap||'—'}</td><td>${c.unit}</td><td class="mono">${fmtM(c.renta)}</td><td style="font-size:0.8rem;color:var(--txt3)">${c.notes||'—'}</td><td><button class="btn btn-d btn-sm" onclick="delComodCat(${i})">✕</button></td>`;
    tb.appendChild(tr);
  });
  document.getElementById('comodCatCount').textContent=comodCat.length;
  refreshComodSel();
}
function addComodCat(){
  const equipo=document.getElementById('ccEquipo').value.trim(),cap=document.getElementById('ccCap').value.trim(),unit=document.getElementById('ccUnit').value.trim(),renta=parseFloat(document.getElementById('ccRenta').value),notes=document.getElementById('ccNotes').value.trim();
  if(!equipo||isNaN(renta)){alert('Completa equipo y renta.');return;}
  comodCat.push({equipo,cap,unit,renta,notes});
  document.getElementById('ccEquipo').value='';document.getElementById('ccCap').value='';document.getElementById('ccRenta').value='';document.getElementById('ccNotes').value='';
  renderComodCat();
}
function delComodCat(i){comodCat.splice(i,1);renderComodCat();}

function refreshComodSel(){
  const sel=document.getElementById('comodSel');
  sel.innerHTML='<option value="">— Seleccionar —</option>';
  comodCat.forEach((c,i)=>{
    const o=document.createElement('option');o.value=i;
    o.textContent=`${c.equipo}${c.cap?' '+c.cap+' '+c.unit:''} — $${c.renta.toLocaleString()}/mes`;
    sel.appendChild(o);
  });
}

// ── Comodato Lines CRUD ──
function renderComodLines(){
  const tb=document.getElementById('comodBody'),em=document.getElementById('comodEmpty');
  if(!comodLines.length){tb.innerHTML='';em.style.display='';return;}
  em.style.display='none';tb.innerHTML='';
  comodLines.forEach((c,i)=>{
    const sub=c.renta*c.qty;
    const tr=document.createElement('tr');
    tr.innerHTML=`<td class="mono">${i+1}</td><td><strong>${c.equipo}</strong></td><td class="mono">${c.cap||'—'} ${c.unit||''}</td><td class="mono">${c.qty}</td><td class="mono">${fmtM(c.renta)}</td><td class="mono" style="text-align:right;font-weight:600">${fmtM(sub)}</td><td><button class="btn btn-d btn-sm" onclick="delComod(${i})">✕</button></td>`;
    tb.appendChild(tr);
  });
  document.getElementById('comodCount').textContent=comodLines.length;
}
function addComod(){
  const idx=document.getElementById('comodSel').value;
  if(idx==='')return;
  const c=comodCat[idx],qty=parseInt(document.getElementById('comodQty').value)||1,notes=document.getElementById('comodNotes').value.trim();
  comodLines.push({equipo:c.equipo,cap:c.cap,unit:c.unit,renta:c.renta,qty,notes});
  document.getElementById('comodQty').value='1';document.getElementById('comodNotes').value='';
  renderComodLines();polCalc();
}
function delComod(i){comodLines.splice(i,1);renderComodLines();polCalc();}

function polCalc(){
  const tipo=document.getElementById('polTipo').value;
  const freq=document.getElementById('polFreq').value;
  let items=[];// {c, n, pu, sub, grp}
  let gMO=0,gAN=0,gCO=0,gCON=0;

  // Count total assets
  const totalAct=polActivos.reduce((s,a)=>s+a.cant,0);
  const totalTorres=polActivos.filter(a=>a.cat==='torre').reduce((s,a)=>s+a.cant,0);
  const totalRO=polActivos.filter(a=>a.cat==='ro').reduce((s,a)=>s+a.cant,0);

  if(tipo==='visitas'){
    // Visits per month
    let vpm=4;
    if(freq==='2sem')vpm=8;else if(freq==='3mes')vpm=3;else if(freq==='2mes')vpm=2;else if(freq==='1mes')vpm=1;

    // Visit cost from tabulador
    const visitCost=parseFloat(document.getElementById('tabVisita').value)||1000;
    const hhCost=parseFloat(document.getElementById('tabHH').value)||1000;
    items.push({c:'Visitas mensuales',n:vpm,pu:visitCost,sub:vpm*visitCost,grp:'MO'});
    gMO+=vpm*visitCost;

    // HH per visit from editable table
    let hhPerVisit=getHHForActivos(totalAct);

    if(freq==='2sem'){
      const fullVisits=4,reducedVisits=4;
      const hhFull=fullVisits*hhPerVisit;
      const hhReduced=reducedVisits*1;
      items.push({c:`HH (1a visita/sem × ${hhPerVisit} HH)`,n:hhFull,pu:hhCost,sub:hhFull*hhCost,grp:'MO'});
      items.push({c:'HH (2a visita/sem × 1 HH fija)',n:hhReduced,pu:hhCost,sub:hhReduced*hhCost,grp:'MO'});
      gMO+=hhFull*hhCost+hhReduced*hhCost;
    }else{
      const totalHH=vpm*hhPerVisit;
      items.push({c:`Horas Hombre (${hhPerVisit} HH/visita)`,n:totalHH,pu:hhCost,sub:totalHH*hhCost,grp:'MO'});
      gMO+=totalHH*hhCost;
    }

    // Analysis from tabulador
    const anROPrice=parseFloat(document.getElementById('tabAnRO').value)||200;
    const anBoilerPrice=parseFloat(document.getElementById('tabAnBoiler').value)||450;
    polActivos.forEach(a=>{
      if(a.cat==='ro'){
        let anVis=vpm;
        if(freq==='2sem')anVis=4;
        const anSub=a.cant*anVis*anROPrice;
        items.push({c:`Análisis RO (${a.cant}×${a.cap} GPM)`,n:a.cant*anVis,pu:anROPrice,sub:anSub,grp:'AN'});
        gAN+=anSub;
      }
      if(a.cat==='torre'||a.cat==='chiller'){
        let anVis=vpm;
        if(freq==='2sem')anVis=4;
        const totalTC=polActivos.filter(x=>x.cat==='torre'||x.cat==='chiller').reduce((s,x)=>s+x.cant,0);
        const ppA=getAnPriceForTC(totalTC);
        const anSub=a.cant*anVis*ppA;
        const label=a.cat==='torre'?'Torre':'Chiller';
        items.push({c:`Análisis ${label} (${a.cant}×${a.cap} ${a.unit})`,n:a.cant*anVis,pu:ppA,sub:anSub,grp:'AN'});
        gAN+=anSub;
      }
      if(a.cat==='boiler'){
        let anVis=vpm;
        if(freq==='2sem')anVis=4;
        const anSub=a.cant*anVis*anBoilerPrice;
        items.push({c:`Análisis Boiler (${a.cant}×${a.cap} BHP)`,n:a.cant*anVis,pu:anBoilerPrice,sub:anSub,grp:'AN'});
        gAN+=anSub;
      }
    });

  }else{
    // Personal dedicado from tabulador
    const tecConCost=parseFloat(document.getElementById('tabTecCon').value)||50000;
    const tecSinCost=parseFloat(document.getElementById('tabTecSin').value)||55000;
    const supCost=parseFloat(document.getElementById('tabSup').value)||65000;
    const quimCost=parseFloat(document.getElementById('tabQuim').value)||55000;
    const tecCost=document.getElementById('polTecTipo').value==='con_sup'?tecConCost:tecSinCost;
    const tecQty=parseInt(document.getElementById('polTecQty').value)||1;
    const tecTotal=tecCost*tecQty;
    items.push({c:`Técnico dedicado 48h/sem (×${tecQty})`,n:tecQty,pu:tecCost,sub:tecTotal,grp:'MO'});
    gMO+=tecTotal;
    const supVal=document.getElementById('polSup').value;
    if(supVal!=='no'){const sq=parseInt(supVal)||1;const st=supCost*sq;items.push({c:`Supervisor en planta (×${sq})`,n:sq,pu:supCost,sub:st,grp:'MO'});gMO+=st;}
    const quimVal=document.getElementById('polQuim').value;
    if(quimVal!=='no'){const qq=parseInt(quimVal)||1;const qt=quimCost*qq;items.push({c:`Químico / Laboratorista (×${qq})`,n:qq,pu:quimCost,sub:qt,grp:'MO'});gMO+=qt;}
  }

  // Comodato (from Paso 3 comodLines)
  comodLines.forEach(c=>{
    const sub=c.renta*c.qty;
    const label=c.cap?`${c.equipo} ${c.cap} ${c.unit}`:`${c.equipo}`;
    items.push({c:label,n:c.qty,pu:c.renta,sub:sub,grp:'CO'});
    gCO+=sub;
  });

  // Consumibles from tabulador inputs
  const cTP=parseFloat(document.getElementById('tabConTP').value)||2500;
  const cTM=parseFloat(document.getElementById('tabConTM').value)||3500;
  const cTG=parseFloat(document.getElementById('tabConTG').value)||6500;
  const cRP=parseFloat(document.getElementById('tabConRP').value)||4000;
  const cRM=parseFloat(document.getElementById('tabConRM').value)||6500;
  const cRG=parseFloat(document.getElementById('tabConRG').value)||15000;
  const cRXL=parseFloat(document.getElementById('tabConRXL').value)||450;
  const cCP=parseFloat(document.getElementById('tabConCP').value)||2000;
  const cCM=parseFloat(document.getElementById('tabConCM').value)||3000;
  const cCG=parseFloat(document.getElementById('tabConCG').value)||6000;
  const cCXL=parseFloat(document.getElementById('tabConCXL').value)||450;
  polActivos.forEach(a=>{
    if(a.cat==='torre'){
      let pm=0;
      if(a.cls==='Pequeña')pm=cTP;else if(a.cls==='Mediana')pm=cTM;else if(a.cls==='Grande')pm=cTG;else pm=0;
      if(pm>0){items.push({c:`Químicos Torre ${a.cap} GPM (${a.cls})`,n:a.cant,pu:pm,sub:a.cant*pm,grp:'CON'});gCON+=a.cant*pm;}
      else{items.push({c:`Químicos Torre ${a.cap} GPM (XL — cotizar)`,n:a.cant,pu:0,sub:0,grp:'CON'});}
    }
    if(a.cat==='ro'){
      let pm=0;
      if(a.cls==='Pequeña')pm=cRP;else if(a.cls==='Mediana')pm=cRM;else if(a.cls==='Grande')pm=cRG;else pm=Math.round(a.cap*cRXL);
      items.push({c:`Químicos RO ${a.cap} GPM (${a.cls})`,n:a.cant,pu:pm,sub:a.cant*pm,grp:'CON'});gCON+=a.cant*pm;
    }
    if(a.cat==='chiller'){
      let pm=0;
      if(a.cls==='Pequeña')pm=cCP;else if(a.cls==='Mediana')pm=cCM;else if(a.cls==='Grande')pm=cCG;else pm=Math.round(a.cap*cCXL);
      items.push({c:`Químicos Chiller ${a.cap} m³ (${a.cls})`,n:a.cant,pu:pm,sub:a.cant*pm,grp:'CON'});gCON+=a.cant*pm;
    }
    if(a.cat==='boiler'){
      const bpm=parseFloat(document.getElementById('tabConBoiler').value)||500;
      items.push({c:`Consumibles Boiler ${a.cap} BHP`,n:a.cant,pu:bpm,sub:a.cant*bpm,grp:'CON'});gCON+=a.cant*bpm;
    }
  });

  polItems=items;
  polRenderDesglose();
}
function polRenderDesglose(){
  const tb=document.getElementById('polDesBody');tb.innerHTML='';
  polItems.forEach((it,i)=>{
    const tr=document.createElement('tr');
    tr.innerHTML=`<td class="mono">${i+1}</td><td>${it.c}</td><td style="text-align:right"><input type="number" min="0" value="${it.n}" style="width:70px;padding:4px 6px;font-size:0.83rem;border:1px solid var(--border);border-radius:4px;text-align:right;font-family:var(--mono);background:var(--bg);outline:none;" onchange="polItems[${i}].n=parseFloat(this.value)||0;polItems[${i}].sub=polItems[${i}].n*polItems[${i}].pu;polUpdateSummary()"></td><td style="text-align:right"><input type="number" min="0" step="any" value="${it.pu}" style="width:100px;padding:4px 6px;font-size:0.83rem;border:1px solid var(--border);border-radius:4px;text-align:right;font-family:var(--mono);background:var(--bg);outline:none;" onchange="polItems[${i}].pu=parseFloat(this.value)||0;polItems[${i}].sub=polItems[${i}].n*polItems[${i}].pu;polUpdateSummary()"></td><td class="mono" style="text-align:right;font-weight:600" id="polSub${i}">${fmtM(it.sub)}</td>`;
    tb.appendChild(tr);
  });
  polUpdateSummary();
}
function polUpdateSummary(){
  // Recalc subtotals from each row
  let gMO=0,gAN=0,gCO=0,gCON=0;
  polItems.forEach((it,i)=>{
    it.sub=it.n*it.pu;
    const el=document.getElementById('polSub'+i);
    if(el)el.textContent=fmtM(it.sub);
    if(it.grp==='MO')gMO+=it.sub;
    else if(it.grp==='AN')gAN+=it.sub;
    else if(it.grp==='CO')gCO+=it.sub;
    else gCON+=it.sub;
  });
  const subTec=gMO+gAN+gCO+gCON;
  const admin=Math.round(subTec*0.15);
  const subBeforeCredit=subTec+admin;
  const polCreditDays=parseInt(document.getElementById('polCreditDays').value)||0;
  const polCreditAmt=Math.round(subBeforeCredit*polCreditDays*0.0005);
  const totalSin=subBeforeCredit+polCreditAmt;
  const iva=Math.round(totalSin*0.16);
  const totalIVA=totalSin+iva;

  document.getElementById('polGMO').textContent=fmtM(gMO);
  document.getElementById('polGAN').textContent=fmtM(gAN);
  document.getElementById('polGCO').textContent=fmtM(gCO);
  document.getElementById('polGCON').textContent=fmtM(gCON);
  document.getElementById('polSubTec').textContent=fmtM(subTec);
  document.getElementById('polAdmin').textContent=fmtM(admin);
  document.getElementById('polCredit').textContent=fmtM(polCreditAmt);
  document.getElementById('polTotalSin').textContent=fmtM(totalSin);
  document.getElementById('polIVA').textContent=fmtM(iva);
  document.getElementById('polTotalIVA').textContent=fmtM(totalIVA);

  // Detail labels
  if(tipo==='visitas'){
    const freq2=document.getElementById('polFreq');
    document.getElementById('polMOdet').textContent=freq2.options[freq2.selectedIndex].text;
  }else{document.getElementById('polMOdet').textContent='Personal técnico dedicado';}
  document.getElementById('polANdet').textContent=gAN>0?'Conductividad, pH, Fosfato, Nitritos, etc.':'Sin análisis';
  document.getElementById('polCOdet').textContent=gCO>0?comodLines.map(c=>c.equipo).join(', '):'Sin comodato';
  document.getElementById('polCONdet').textContent=gCON>0?'VEC-313, VEC-151, VEC-SG11, Cartuchos':'Sin consumibles';
}

// ═══════════════════════ PDF GENERATION ═══════════════════════
const IMG_LOGO='assets/img/img_logo.png';
const IMG_PLAT='assets/img/img_plat.jpg';
const IMG_GANTT='assets/img/img_gantt.jpg';
function generatePolizaProposal(){
  if(!polItems.length){alert('Primero configura los activos y haz clic en Recalcular.');return;}
  const fmtP=n=>'$'+n.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});
  const fecha=new Date().toLocaleDateString('es-MX',{year:'numeric',month:'long',day:'numeric'});
  const cliente=document.getElementById('polCliente').value||'CLIENTE';
  const folio=document.getElementById('polFolio').value||'—';
  const tipo=document.getElementById('polTipo').value;
  const catNames={torre:'Torre de Enfriamiento',ro:'Ósmosis Inversa',chiller:'Chiller',boiler:'Boiler'};

  // Equipment rows
  const eqRows=polActivos.map((a,i)=>`<tr>
    <td style="color:#6b7280;">${i+1}</td>
    <td>${catNames[a.cat]||a.cat}</td>
    <td class="r">${a.cap} ${a.unit}</td>
    <td>${a.cls||'—'}</td>
    <td class="r">${a.cant}</td>
  </tr>`).join('');

  // Desglose rows
  const desRows=polItems.map((it,i)=>`<tr>
    <td style="color:#6b7280;">${i+1}</td>
    <td>${it.c}</td>
    <td class="r">${it.n}</td>
    <td class="r">${fmtP(it.pu)}</td>
    <td class="r b">${fmtP(it.sub)}</td>
  </tr>`).join('');

  // Summary values
  const polGMO=document.getElementById('polGMO').textContent;
  const polGAN=document.getElementById('polGAN').textContent;
  const polGCO=document.getElementById('polGCO').textContent;
  const polGCON=document.getElementById('polGCON').textContent;
  const polSubTec=document.getElementById('polSubTec').textContent;
  const polAdmin=document.getElementById('polAdmin').textContent;
  const polCredit=document.getElementById('polCredit').textContent;
  const polTotalSin=document.getElementById('polTotalSin').textContent;
  const polIVA=document.getElementById('polIVA').textContent;
  const polTotalIVA=document.getElementById('polTotalIVA').textContent;
  const creditDays=document.getElementById('polCreditDays').value||'0';

  const propHTML=`
<style>
@page{size:letter;margin:0;}
#polPropContent{font-family:'Segoe UI',system-ui,sans-serif;color:#1a1a2e;line-height:1.4;font-size:9pt;background:white;}
#polPropContent *{margin:0;padding:0;box-sizing:border-box;}
#polPropContent table{width:100%;border-collapse:collapse;font-size:8.5pt;}
#polPropContent th,#polPropContent td{padding:6px 8px;text-align:left;border-bottom:1px solid #e5e7eb;}
#polPropContent th{background:#f1f5f9;font-weight:600;font-size:7.5pt;text-transform:uppercase;letter-spacing:0.03em;color:#475569;}
#polPropContent .r{text-align:right;}
#polPropContent .b{font-weight:700;}
#polPropContent .sec{padding:24px 36px;}
#polPropContent .sec-hd{font-size:11pt;font-weight:700;color:#0f172a;margin-bottom:12px;padding-bottom:6px;border-bottom:2px solid #0d7a3e;display:flex;align-items:center;gap:8px;}
#polPropContent .sec-hd .num{background:#0d7a3e;color:white;width:22px;height:22px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;font-size:8pt;font-weight:800;}
#polPropContent .tot-row td{background:#f8fafc;border-top:2px solid #cbd5e1;font-weight:700;font-size:9pt;}
</style>
<div style="max-width:820px;margin:0 auto;">
  <!-- HEADER -->
  <div style="background:linear-gradient(135deg,#064e3b,#065f46,#047857);padding:28px 36px 22px;color:white;">
    <div style="display:flex;justify-content:space-between;align-items:center;">
      <div style="display:flex;align-items:center;gap:12px;">
        <img src="${IMG_VECSA}" style="height:38px;object-fit:contain;" alt="VECSA Water">
      </div>
      <div style="background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);padding:4px 16px;border-radius:20px;font-size:7pt;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;">Póliza de Mantenimiento</div>
    </div>
    <div style="display:flex;gap:28px;margin-top:16px;">
      <div><div style="font-size:6pt;text-transform:uppercase;letter-spacing:1px;opacity:0.5;">Folio</div><div style="font-size:14pt;font-weight:900;color:#6ee7b7;">${folio}</div></div>
      <div><div style="font-size:6pt;text-transform:uppercase;letter-spacing:1px;opacity:0.5;">Fecha</div><div style="font-size:9pt;font-weight:700;">${fecha}</div></div>
      <div><div style="font-size:6pt;text-transform:uppercase;letter-spacing:1px;opacity:0.5;">Modalidad</div><div style="font-size:9pt;font-weight:700;">${tipo==='visitas'?'Visitas Programadas':'Personal Dedicado'}</div></div>
    </div>
  </div>
  <!-- CLIENT STRIP -->
  <div style="background:linear-gradient(90deg,#059669,#10b981);padding:10px 36px;display:flex;justify-content:space-between;align-items:center;color:white;">
    <div><div style="font-size:6pt;text-transform:uppercase;letter-spacing:1px;opacity:0.6;">Cliente</div><div style="font-size:12pt;font-weight:800;">${cliente}</div></div>
  </div>

  <!-- ACTIVOS -->
  <div class="sec">
    <div class="sec-hd"><span class="num">1</span> Activos en Póliza</div>
    <table>
      <thead><tr><th>#</th><th>Equipo</th><th class="r">Capacidad</th><th>Clasificación</th><th class="r">Cantidad</th></tr></thead>
      <tbody>${eqRows||'<tr><td colspan="5" style="text-align:center;color:#94a3b8;padding:16px;">Sin activos configurados</td></tr>'}</tbody>
    </table>
  </div>

  <!-- DESGLOSE -->
  <div class="sec" style="padding-top:0;">
    <div class="sec-hd"><span class="num">2</span> Desglose de Cotización</div>
    <table>
      <thead><tr><th>#</th><th>Concepto</th><th class="r">Cant.</th><th class="r">Precio Unit.</th><th class="r">Subtotal</th></tr></thead>
      <tbody>${desRows}</tbody>
    </table>
  </div>

  <!-- RESUMEN COMERCIAL -->
  <div class="sec" style="padding-top:0;">
    <div class="sec-hd"><span class="num">3</span> Resumen Comercial</div>
    <table style="font-size:9pt;">
      <tbody>
        <tr><td style="font-weight:600;color:#475569;">1. Mano de Obra / Servicio</td><td class="r b" style="width:140px;font-family:monospace;">${polGMO}</td></tr>
        <tr><td style="font-weight:600;color:#475569;">2. Análisis Físico-Químicos</td><td class="r b" style="font-family:monospace;">${polGAN}</td></tr>
        <tr><td style="font-weight:600;color:#475569;">3. Comodato</td><td class="r b" style="font-family:monospace;">${polGCO}</td></tr>
        <tr><td style="font-weight:600;color:#475569;">4. Consumibles</td><td class="r b" style="font-family:monospace;">${polGCON}</td></tr>
        <tr style="background:#f0f4f8;"><td style="font-weight:700;">Subtotal Técnico</td><td class="r b" style="font-family:monospace;">${polSubTec}</td></tr>
        <tr><td style="font-weight:600;color:#475569;">Admón. + Reportes + Riesgo (15%)</td><td class="r b" style="font-family:monospace;">${polAdmin}</td></tr>
        <tr><td style="font-weight:600;color:#475569;">Costo Financiero (${creditDays} días)</td><td class="r b" style="font-family:monospace;color:#b45309;">${polCredit}</td></tr>
        <tr style="background:#f0f4f8;"><td style="font-weight:700;font-size:10pt;">Total sin IVA (Mensual)</td><td class="r b" style="font-family:monospace;font-size:10pt;color:#059669;">${polTotalSin}</td></tr>
        <tr><td style="color:#475569;">IVA 16%</td><td class="r" style="font-family:monospace;">${polIVA}</td></tr>
      </tbody>
    </table>
    <!-- GRAND TOTAL -->
    <div style="background:linear-gradient(135deg,#064e3b,#065f46);border-radius:8px;padding:14px 20px;margin-top:12px;display:flex;justify-content:space-between;align-items:center;color:white;">
      <div style="font-weight:700;font-size:9pt;">TOTAL CON IVA (Mensual)</div>
      <div style="font-size:18pt;font-weight:900;letter-spacing:-1px;">${polTotalIVA}</div>
    </div>
  </div>

  <!-- FOOTER -->
  <div style="padding:12px 36px;background:#f8fafc;border-top:1px solid #e2e8f0;display:flex;justify-content:space-between;font-size:7pt;color:#94a3b8;">
    <img src="${IMG_VECSA}" style="height:16px;object-fit:contain;opacity:0.5;" alt="VECSA">
    <span>Generado por VECSA Water — ${fecha}</span>
    <span>Este documento es informativo. Sujeto a confirmación.</span>
  </div>
</div>`;

  // Show overlay (same pattern as generateProposal)
  let ov=document.getElementById('polPropOverlay');
  if(!ov){ov=document.createElement('div');ov.id='polPropOverlay';document.body.appendChild(ov);}
  ov.innerHTML=`
    <div id="polPropBar" style="position:fixed;top:0;left:0;right:0;background:#064e3b;padding:10px 20px;display:flex;gap:10px;align-items:center;z-index:10001;box-shadow:0 2px 10px rgba(0,0,0,0.3);">
      <button onclick="window.print()" style="padding:8px 20px;background:#10b981;color:white;border:none;border-radius:6px;font-size:14px;font-weight:bold;cursor:pointer;">⬇ Guardar como PDF</button>
      <button onclick="document.getElementById('polPropOverlay').style.display='none';document.body.style.overflow='';" style="padding:8px 20px;background:transparent;color:white;border:1px solid rgba(255,255,255,0.3);border-radius:6px;font-size:14px;cursor:pointer;">✕ Cerrar Vista Previa</button>
      <span style="color:rgba(255,255,255,0.5);font-size:12px;margin-left:auto;">En el diálogo de impresión selecciona "Guardar como PDF"</span>
    </div>
    <div id="polPropContent" style="padding:50px 0 0;background:#e2e8f0;min-height:100vh;">
      <div style="background:white;max-width:820px;margin:20px auto;box-shadow:0 4px 20px rgba(0,0,0,0.12);border-radius:4px;overflow:hidden;">${propHTML}</div>
    </div>`;
  ov.style.cssText='position:fixed;top:0;left:0;right:0;bottom:0;z-index:10000;overflow-y:auto;background:#e2e8f0;';
  document.body.style.overflow='hidden';

  let ps=document.getElementById('polPropPrintCSS');
  if(!ps){ps=document.createElement('style');ps.id='polPropPrintCSS';document.head.appendChild(ps);}
  ps.textContent='@media print{.topbar,.container,#polPropBar{display:none !important;}#polPropOverlay{position:static !important;overflow:visible !important;}#polPropContent{padding:0 !important;background:white !important;}body>*:not(#polPropOverlay):not(#polPropPrintCSS){display:none !important;}#polPropOverlay{display:block !important;background:white !important;}}';
}
function generatePolizaPDF(){
  const fmtP=n=>'$'+n.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});

  const folio=document.getElementById('polFolio').value||'—';
  const fechaRaw=document.getElementById('polFecha').value;
  const fecha=fechaRaw?new Date(fechaRaw+'T12:00:00').toLocaleDateString('es-MX'):new Date().toLocaleDateString('es-MX');
  const validez=document.getElementById('polValidez').value||'30 DIAS';
  const condPago=document.getElementById('polCondPago').value||'CREDITO AUTORIZADO';
  const cliente=document.getElementById('polCliente').value||'CLIENTE';
  const meses=parseInt(document.getElementById('polMeses').value)||12;
  const vendedor=document.getElementById('polVendedor').value||'';
  const email=document.getElementById('polEmail').value||'';

  const totalSinIVA=parseFloat(document.getElementById('polTotalSin').textContent.replace(/[^0-9.-]/g,''))||0;
  const importeAnual=totalSinIVA*meses;
  const ivaAnual=importeAnual*0.16;
  const totalAnual=importeAnual+ivaAnual;

  const catNames={torre:'Torre de Enfriamiento',ro:'Ósmosis Inversa',chiller:'Chiller',boiler:'Boiler sin Vapor'};
  const equipList=polActivos.map(a=>`${catNames[a.cat]||a.cat} ${a.cap} ${a.unit} (×${a.cant})`).join(', ')||'—';
  
  const freqSel=document.getElementById('polFreq');
  const vpmMatch=freqSel.options[freqSel.selectedIndex].text.match(/\d+/);
  const vpmText=document.getElementById('polTipo').value==='visitas'?(vpmMatch?vpmMatch[0]:'4'):'Personal Dedicado';

  const consList=[];
  polActivos.forEach(a=>{
    if(a.cat==='torre')consList.push('VEC-313 Inhibidor corrosión/incrustación torres');
    if(a.cat==='ro'){consList.push('VEC-SG11 Inhibidor incrustación Ósmosis Inversa');consList.push('Cartuchos pulidores sedimentos');}
    if(a.cat==='boiler')consList.push('VEC-2512 Inhibidor corrosión/incrustación calderas');
    if(a.cat==='chiller')consList.push('VEC-288 Inhibidor circuito cerrado');
  });
  const uniqueCons=[...new Set(consList)];
  const consRows=uniqueCons.map((c,i)=>`<tr><td>${i+6}</td><td></td><td></td><td>${c}</td><td></td><td></td><td></td><td></td></tr>`).join('');

  const comodText=comodLines.length?comodLines.map(c=>`${c.equipo}${c.cap?' '+c.cap+' '+c.unit:''} (×${c.qty})`).join(', '):'N/A';

  // Desglose rows
  let desHTML='';
  document.querySelectorAll('#polDesBody tr').forEach(tr=>{
    const tds=tr.querySelectorAll('td');
    if(tds.length>=5){
      desHTML+=`<tr><td>${tds[0].textContent}</td><td>${tds[1].textContent}</td><td class="r">${tds[2].textContent}</td><td class="r">${tds[3].textContent}</td><td class="r b">${tds[4].textContent}</td></tr>`;
    }
  });

  const html=`
<style>
@page{size:letter;margin:0;}
@media print{#pdfBar{display:none !important;}#pdfContent{padding:0 !important;}.topbar,.container{display:none !important;}#pdfOverlay{position:static !important;overflow:visible !important;}body>*:not(#pdfOverlay){display:none !important;}}
#pdfContent{font-family:'Segoe UI',system-ui,-apple-system,sans-serif;color:#1a1a2e;line-height:1.4;font-size:9pt;background:white;}
#pdfContent *{margin:0;padding:0;box-sizing:border-box;}
.pp{page-break-after:always;position:relative;max-width:800px;margin:0 auto;overflow:hidden;}
.pp:last-child{page-break-after:auto;}
.hero-top{background:linear-gradient(135deg,#0a1628,#162544,#1a3a5c);padding:28px 36px 20px;color:white;position:relative;overflow:hidden;}
.hero-top::after{content:'';position:absolute;top:-40px;right:-40px;width:200px;height:200px;background:rgba(0,163,191,0.08);border-radius:50%;}
.hero-top::before{content:'';position:absolute;bottom:-60px;left:-30px;width:250px;height:250px;background:rgba(0,82,204,0.06);border-radius:50%;}
.ht-row{display:flex;justify-content:space-between;align-items:center;position:relative;z-index:1;}
.ht-brand{display:flex;align-items:center;gap:12px;}
.ht-logo{width:44px;height:44px;background:linear-gradient(135deg,#00A3BF,#0052CC);border-radius:10px;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:13pt;color:white;}
.ht-name h1{font-size:15pt;font-weight:800;letter-spacing:0.5px;}
.ht-name p{font-size:7pt;opacity:0.5;margin-top:1px;}
.ht-tag{background:rgba(0,163,191,0.2);border:1px solid rgba(0,163,191,0.3);color:#5CE0D6;font-size:7pt;font-weight:700;padding:3px 14px;border-radius:20px;letter-spacing:1.5px;text-transform:uppercase;}
.ht-meta{display:flex;gap:24px;margin-top:14px;position:relative;z-index:1;}
.ht-meta-item .hm-l{font-size:5.5pt;text-transform:uppercase;letter-spacing:1px;opacity:0.4;margin-bottom:1px;}
.ht-meta-item .hm-v{font-size:9pt;font-weight:700;}
.ht-folio .hm-v{font-size:16pt;font-weight:900;color:#5CE0D6;}
.client-strip{background:linear-gradient(90deg,#0052CC,#00A3BF);padding:10px 36px;display:flex;justify-content:space-between;align-items:center;color:white;}
.cs-left .cs-label{font-size:5.5pt;text-transform:uppercase;letter-spacing:1px;opacity:0.6;}
.cs-left .cs-name{font-size:12pt;font-weight:800;}
.cs-right{text-align:right;font-size:7.5pt;font-weight:600;opacity:0.9;}
.content{padding:18px 36px 14px;}
.price-hero{display:flex;justify-content:space-between;align-items:center;background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:14px 20px;margin-bottom:14px;}
.ph-left h2{font-size:10pt;font-weight:800;color:#1a1a2e;margin-bottom:2px;}
.ph-left p{font-size:7pt;color:#718096;}
.ph-right{text-align:right;}
.ph-right .pr-label{font-size:6pt;color:#a0aec0;text-transform:uppercase;letter-spacing:0.8px;}
.ph-right .pr-val{font-size:20pt;font-weight:900;color:#0052CC;letter-spacing:-1px;}
.ph-right .pr-sub{font-size:7pt;color:#718096;}
.sec{margin-bottom:12px;}
.sec-h{display:flex;align-items:center;gap:8px;margin-bottom:5px;}
.sec-h .dot{width:6px;height:6px;background:#00A3BF;border-radius:50%;}
.sec-h span{font-size:7.5pt;font-weight:800;color:#1a1a2e;text-transform:uppercase;letter-spacing:0.5px;}
.info-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px;}
.info-card{background:#f8fafc;border:1px solid #edf2f7;border-radius:6px;padding:7px 10px;}
.info-card .ic-l{font-size:5.5pt;color:#a0aec0;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:1px;}
.info-card .ic-v{font-size:7.5pt;font-weight:700;color:#2d3748;}
.blist{list-style:none;display:grid;grid-template-columns:1fr 1fr;gap:2px 12px;font-size:7pt;color:#4a5568;}
.blist li{display:flex;align-items:center;gap:5px;padding:2px 0;}
.blist li::before{content:'';width:4px;height:4px;background:linear-gradient(135deg,#0052CC,#00A3BF);border-radius:50%;flex-shrink:0;}
.img-showcase{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:6px;}
.img-card{border:1px solid #e2e8f0;border-radius:6px;overflow:hidden;}
.img-card .ic-head{background:#1a1a2e;color:white;padding:5px 8px;font-size:6pt;font-weight:700;text-transform:uppercase;letter-spacing:0.8px;display:flex;align-items:center;gap:4px;}
.img-card .ic-head .ic-dot{width:4px;height:4px;background:#00A3BF;border-radius:50%;}
.img-card img{width:100%;display:block;}
.pers-strip{display:grid;grid-template-columns:repeat(4,1fr);gap:5px;margin-top:5px;}
.ps-item{background:#f7fafc;border-radius:5px;padding:5px 7px;border-left:2px solid #0052CC;}
.ps-item strong{display:block;font-size:6pt;color:#0052CC;margin-bottom:1px;}
.ps-item span{font-size:5.5pt;color:#718096;line-height:1.3;}
.totals-strip{background:#1a1a2e;border-radius:8px;overflow:hidden;margin-top:12px;}
.ts-rows{padding:0 18px;}
.ts-row{display:flex;justify-content:space-between;padding:5px 0;border-bottom:1px solid rgba(255,255,255,0.06);font-size:7pt;color:rgba(255,255,255,0.5);}
.ts-row:last-child{border:none;}
.ts-row .tv{font-weight:700;color:rgba(255,255,255,0.8);font-family:'Courier New',monospace;}
.ts-grand{background:linear-gradient(90deg,#0052CC,#00A3BF);padding:8px 18px;display:flex;justify-content:space-between;align-items:center;color:white;}
.ts-grand .tg-l{font-weight:700;font-size:7.5pt;}.ts-grand .tg-v{font-size:14pt;font-weight:900;}
.pg-footer{display:flex;justify-content:space-between;align-items:flex-end;padding:10px 36px 14px;font-size:6.5pt;color:#a0aec0;}
.pgf-left .pgf-name{font-size:8.5pt;font-weight:700;color:#1a1a2e;}
.pgf-left a{color:#0052CC;text-decoration:none;font-weight:700;font-size:7.5pt;}
.pgf-right{text-align:right;font-size:5.5pt;max-width:200px;line-height:1.4;}
.p2-head{background:linear-gradient(135deg,#0a1628,#162544);padding:18px 36px;color:white;}
.p2-head h2{font-size:13pt;font-weight:800;}.p2-head p{font-size:7.5pt;opacity:0.5;margin-top:2px;}
.p2-body{padding:18px 36px;}
.dtbl{border-collapse:collapse;width:100%;font-size:7pt;margin-bottom:14px;}
.dtbl th{background:#1a1a2e;color:white;padding:5px 8px;font-size:6pt;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;}
.dtbl th:nth-child(n+3){text-align:right;}
.dtbl td{padding:4px 8px;border-bottom:1px solid #edf2f7;}.dtbl td.r{text-align:right;font-family:'Courier New',monospace;}.dtbl td.b{font-weight:700;}
.dtbl tr:nth-child(even){background:#f7fafc;}
.stbl{border-collapse:collapse;width:100%;font-size:7.5pt;}
.stbl td{padding:6px 10px;border-bottom:1px solid #edf2f7;}
.stbl .sl{font-weight:600;color:#4a5568;}.stbl .sv{text-align:right;font-weight:700;color:#1a1a2e;font-family:'Courier New',monospace;width:120px;}
.stbl .sub td{background:#f0f4f8;font-weight:700;}.stbl .sub .sl{color:#1a1a2e;}
.stbl .grand td{background:linear-gradient(90deg,#0052CC,#00A3BF);color:white;font-weight:800;font-size:9pt;padding:8px 10px;}.stbl .grand .sv{color:white;}
.cbar{margin-top:12px;background:#f7fafc;border:1px solid #e2e8f0;border-radius:6px;padding:8px 12px;display:flex;justify-content:space-between;font-size:7pt;}.cbar strong{color:#1a1a2e;}.cbar span{color:#718096;}

/* ======= CRM NovaCRM — Professional Redesign ======= */
#wrap-crm {
  --crm-accent: #10b981;
  --crm-accent-hover: #059669;
  --crm-accent-light: #d1fae5;
  --crm-accent-dark: #064e3b;
  --crm-danger: #ef4444;
  --crm-danger-light: #fee2e2;
  --crm-warn: #f59e0b;
  --crm-warn-light: #fef3c7;
  --crm-info: #3b82f6;
  --crm-info-light: #dbeafe;
  --crm-sidebar: #111827;
  --crm-sidebar-hover: rgba(255,255,255,0.06);
  --crm-sidebar-active-bg: rgba(16,185,129,0.12);
  --crm-sidebar-active: #10b981;
  --crm-sidebar-text: rgba(255,255,255,0.5);
  --crm-sidebar-text-hover: rgba(255,255,255,0.85);
  --crm-sidebar-border: rgba(255,255,255,0.07);
  --crm-nav-w: 232px;
  --crm-bg: #f1f5f9;
  --crm-surface: #ffffff;
  --crm-surface2: #f8fafc;
  --crm-border: rgba(0,0,0,0.07);
  --crm-border2: rgba(0,0,0,0.14);
  --crm-text: #0f172a;
  --crm-text2: #475569;
  --crm-text3: #94a3b8;
  --crm-rad: 10px;
  --crm-rad-lg: 14px;
  --crm-shadow: 0 1px 3px rgba(0,0,0,0.06),0 1px 2px rgba(0,0,0,0.04);
  --crm-shadow-md: 0 4px 6px -1px rgba(0,0,0,0.08),0 2px 4px -1px rgba(0,0,0,0.05);
  height: calc(100vh - 48px);
  overflow: hidden;
  position: relative;
}
#crm-app {
  display: flex;
  flex: 1;
  height: 100%;
  width: 100%;
  font-family: 'Inter','Segoe UI',system-ui,sans-serif;
  background: var(--crm-bg);
  color: var(--crm-text);
  font-size: 14px;
  min-height: 0;
}
.crm-nav{width:var(--crm-nav-w);background:var(--crm-sidebar);display:flex;flex-direction:column;flex-shrink:0;overflow-y:auto;min-height:0;border-right:none;}
.crm-nav-brand{padding:20px 16px 16px;display:flex;align-items:center;gap:10px;border-bottom:1px solid var(--crm-sidebar-border);}
.crm-brand-dot{width:34px;height:34px;border-radius:10px;background:linear-gradient(135deg,#10b981,#059669);display:flex;align-items:center;justify-content:center;color:white;font-size:15px;font-weight:800;box-shadow:0 2px 8px rgba(16,185,129,0.4);flex-shrink:0;}
.crm-nav-brand > span{font-size:15px;font-weight:700;color:rgba(255,255,255,0.9);letter-spacing:-0.3px;}
.crm-nav-section{padding:16px 16px 5px;font-size:10px;font-weight:700;color:rgba(255,255,255,0.22);text-transform:uppercase;letter-spacing:1px;}
.crm-nav-item{display:flex;align-items:center;gap:10px;padding:9px 12px;margin:1px 8px;font-size:13px;font-weight:500;color:var(--crm-sidebar-text);border-radius:8px;cursor:pointer;transition:all .15s ease;}
.crm-nav-item:hover{background:var(--crm-sidebar-hover);color:var(--crm-sidebar-text-hover);}
.crm-nav-item.active{background:var(--crm-sidebar-active-bg);color:var(--crm-sidebar-active);font-weight:600;}
.crm-nav-spacer{flex:1;}
.crm-nav-footer{padding:12px;border-top:1px solid var(--crm-sidebar-border);}
.crm-nav-user{display:flex;align-items:center;gap:10px;padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.05);cursor:pointer;transition:background .15s;}
.crm-nav-user:hover{background:rgba(255,255,255,0.09);}
.crm-nav-av{width:32px;height:32px;border-radius:8px;background:linear-gradient(135deg,#10b981,#059669);display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:white;flex-shrink:0;}
.crm-main{flex:1;padding:28px 32px;overflow-y:auto;background:var(--crm-bg);min-height:0;}
.crm-page-header{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:24px;gap:16px;}
.crm-page-title{font-size:22px;font-weight:700;color:var(--crm-text);letter-spacing:-0.5px;}
.crm-page-subtitle{font-size:13px;color:var(--crm-text3);margin-top:3px;}
.crm-metrics{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-bottom:22px;}
.crm-metric{background:var(--crm-surface);border:1px solid var(--crm-border);border-radius:var(--crm-rad-lg);padding:18px 20px;box-shadow:var(--crm-shadow);position:relative;overflow:hidden;transition:box-shadow .2s,transform .2s;}
.crm-metric:hover{box-shadow:var(--crm-shadow-md);transform:translateY(-1px);}
.crm-metric::before{content:'';position:absolute;top:0;left:0;width:4px;height:100%;background:var(--crm-border);}
.crm-metric.crm-accent::before{background:linear-gradient(to bottom,#10b981,#059669);}
.crm-metric.crm-blue::before{background:linear-gradient(to bottom,#3b82f6,#1d4ed8);}
.crm-metric.crm-amber::before{background:linear-gradient(to bottom,#f59e0b,#d97706);}
.crm-metric-label{font-size:11px;color:var(--crm-text3);font-weight:600;text-transform:uppercase;letter-spacing:.6px;margin-bottom:8px;}
.crm-metric-value{font-size:26px;font-weight:700;color:var(--crm-text);letter-spacing:-0.8px;line-height:1;}
.crm-metric.crm-accent .crm-metric-value{color:var(--crm-accent-dark);}
.crm-metric.crm-blue .crm-metric-value{color:#1d4ed8;}
.crm-metric.crm-amber .crm-metric-value{color:#d97706;}
.crm-metric-sub{font-size:12px;color:var(--crm-text3);margin-top:7px;}
.crm-card{background:var(--crm-surface);border:1px solid var(--crm-border);border-radius:var(--crm-rad-lg);box-shadow:var(--crm-shadow);margin-bottom:18px;overflow:hidden;}
.crm-card-pad{padding:18px 20px;}
.crm-card-title{font-size:11px;font-weight:700;color:var(--crm-text3);text-transform:uppercase;letter-spacing:.6px;margin-bottom:14px;display:flex;align-items:center;gap:7px;}
.crm-card-title::before{content:'';display:inline-block;width:3px;height:13px;background:var(--crm-accent);border-radius:2px;}
.crm-grid-2{display:grid;grid-template-columns:1fr 1fr;gap:18px;}
.crm-forecast-section{background:var(--crm-surface);border:1px solid var(--crm-border);border-radius:var(--crm-rad-lg);padding:18px 20px;margin-bottom:18px;box-shadow:var(--crm-shadow);}
.crm-forecast-title{font-size:11px;font-weight:700;color:var(--crm-text3);text-transform:uppercase;letter-spacing:.6px;margin-bottom:16px;}
.crm-forecast-row{display:flex;align-items:center;gap:12px;margin-bottom:10px;}
.crm-forecast-label{font-size:12px;color:var(--crm-text2);width:160px;flex-shrink:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
.crm-forecast-bar-wrap{flex:1;background:var(--crm-surface2);border-radius:6px;height:8px;overflow:hidden;}
.crm-forecast-bar-fill{height:100%;border-radius:6px;background:linear-gradient(to right,#10b981,#059669);transition:width .4s ease;}
.crm-forecast-val{font-size:12px;font-weight:700;color:var(--crm-accent-dark);min-width:90px;text-align:right;}
.crm-tbl-wrap{overflow-x:auto;}
#crm-app table{width:100%;border-collapse:collapse;font-size:13px;}
#crm-app th{text-align:left;padding:11px 14px;font-size:11px;font-weight:700;color:var(--crm-text3);text-transform:uppercase;letter-spacing:.5px;background:var(--crm-surface2);border-bottom:1px solid var(--crm-border);}
#crm-app td{padding:13px 14px;border-bottom:1px solid rgba(0,0,0,0.04);color:var(--crm-text);vertical-align:middle;}
#crm-app tr:last-child td{border-bottom:none;}
#crm-app tbody tr:hover{background:#f8fafc;}
.crm-av{width:32px;height:32px;border-radius:8px;display:inline-flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0;}
.crm-av-row{display:flex;align-items:center;gap:10px;}
.crm-av-0{background:#d1fae5;color:#064e3b}.crm-av-1{background:#dbeafe;color:#1e3a8a}
.crm-av-2{background:#fef3c7;color:#78350f}.crm-av-3{background:#fee2e2;color:#7f1d1d}
.crm-av-4{background:#ede9fe;color:#3730a3}.crm-av-5{background:#dcfce7;color:#14532d}
.crm-badge{display:inline-flex;align-items:center;padding:3px 10px;border-radius:999px;font-size:11px;font-weight:600;white-space:nowrap;}
.crm-bg-green{background:#d1fae5;color:#064e3b}.crm-bg-amber{background:#fef3c7;color:#78350f}
.crm-bg-blue{background:#dbeafe;color:#1e3a8a}.crm-bg-gray{background:#f1f5f9;color:#475569}
.crm-bg-teal{background:#d1fae5;color:#064e3b}.crm-bg-purple{background:#ede9fe;color:#3730a3}
.crm-bg-red{background:#fee2e2;color:#7f1d1d}
.crm-btn{padding:8px 15px;font-size:13px;border-radius:8px;border:1px solid var(--crm-border2);background:var(--crm-surface);cursor:pointer;color:var(--crm-text2);font-weight:500;transition:all .15s;display:inline-flex;align-items:center;gap:5px;white-space:nowrap;font-family:inherit;}
.crm-btn:hover{background:var(--crm-surface2);color:var(--crm-text);}
.crm-btn:active{transform:scale(.98);}
.crm-btn-accent{background:var(--crm-accent);color:white;border-color:var(--crm-accent);}
.crm-btn-accent:hover{background:var(--crm-accent-hover);border-color:var(--crm-accent-hover);}
.crm-btn-danger{background:var(--crm-danger-light);color:var(--crm-danger);border-color:#fca5a5;}
.crm-btn-danger:hover{background:#fee2e2;}
.crm-btn-sm{padding:5px 10px;font-size:12px;border-radius:6px;}
.crm-toolbar{display:flex;align-items:center;gap:10px;margin-bottom:18px;flex-wrap:wrap;}
.crm-search-wrap{position:relative;flex:1;min-width:200px;}
.crm-search-wrap input{width:100%;padding:9px 12px 9px 36px;font-size:13px;border:1px solid var(--crm-border);border-radius:8px;background:var(--crm-surface);color:var(--crm-text);outline:none;font-family:inherit;transition:border-color .15s,box-shadow .15s;}
.crm-search-wrap input:focus{border-color:var(--crm-accent);box-shadow:0 0 0 3px rgba(16,185,129,0.1);}
.crm-search-icon{position:absolute;left:11px;top:50%;transform:translateY(-50%);color:var(--crm-text3);font-size:13px;pointer-events:none;}
select.crm-filter{padding:9px 12px;font-size:13px;border:1px solid var(--crm-border);border-radius:8px;background:var(--crm-surface);color:var(--crm-text);cursor:pointer;outline:none;font-family:inherit;transition:border-color .15s;}
select.crm-filter:focus{border-color:var(--crm-accent);}
.crm-pipeline-wrap{overflow-x:auto;padding-bottom:12px;}
.crm-pipeline{display:grid;gap:12px;min-width:600px;}
.crm-stage{background:var(--crm-surface2);border-radius:var(--crm-rad-lg);padding:12px;min-height:200px;border:1px solid var(--crm-border);}
.crm-stage-head{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--crm-text2);margin-bottom:8px;display:flex;justify-content:space-between;align-items:center;}
.crm-stage:hover .stage-del-btn{opacity:1!important;}
.crm-stage-forecast{font-size:11px;color:var(--crm-text3);margin-bottom:10px;padding-bottom:8px;border-bottom:1px solid var(--crm-border);}
.crm-deal-card{background:var(--crm-surface);border:1px solid var(--crm-border);border-radius:var(--crm-rad);padding:11px 12px;margin-bottom:8px;transition:all .15s;box-shadow:0 1px 2px rgba(0,0,0,0.04);}
.crm-deal-card:hover{box-shadow:0 4px 12px rgba(0,0,0,0.1);border-color:var(--crm-accent);transform:translateY(-1px);}
.crm-deal-card.won{border-left:3px solid #10b981;background:#f0fdf4;}
.crm-deal-card.lost{border-left:3px solid var(--crm-text3);opacity:.65;}
.crm-deal-card.overdue{border-color:#fca5a5;background:#fff5f5;}
.crm-deal-card.due-today{border-color:#fbbf24;background:#fffbeb;}
.crm-deal-name{font-size:13px;font-weight:600;margin-bottom:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
.crm-deal-co{font-size:11px;color:var(--crm-text3);margin-bottom:6px;}
.crm-deal-val{font-size:14px;color:var(--crm-accent-dark);font-weight:700;}
.crm-prob-bar{height:3px;background:var(--crm-border);border-radius:2px;margin-top:8px;overflow:hidden;}
.crm-prob-fill{height:100%;border-radius:2px;background:linear-gradient(to right,#10b981,#059669);}
.crm-followup{display:flex;align-items:center;gap:5px;margin-top:7px;padding:4px 8px;border-radius:6px;font-size:11px;font-weight:500;}
.crm-followup.overdue{background:#fee2e2;color:#991b1b;}
.crm-followup.today{background:#fef3c7;color:#92400e;}
.crm-followup.upcoming{background:#dbeafe;color:#1e40af;}
.crm-followup.none{background:var(--crm-surface2);color:var(--crm-text3);cursor:pointer;}
.crm-followup.none:hover{background:var(--crm-accent-light);color:var(--crm-accent-dark);}
.crm-act-item{display:flex;gap:12px;padding:14px 0;border-bottom:1px solid var(--crm-border);}
.crm-act-item:last-child{border-bottom:none;}
.crm-act-icon{width:38px;height:38px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0;}
.crm-act-icon.call{background:#dbeafe;}.crm-act-icon.email{background:#d1fae5;}
.crm-act-icon.meet{background:#fef3c7;}.crm-act-icon.note{background:#ede9fe;}
.crm-vendor-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px;margin-bottom:22px;}
.crm-vendor-card{background:var(--crm-surface);border:1px solid var(--crm-border);border-radius:var(--crm-rad-lg);padding:18px 20px;box-shadow:var(--crm-shadow);transition:box-shadow .2s,transform .2s;}
.crm-vendor-card:hover{box-shadow:var(--crm-shadow-md);transform:translateY(-1px);}
.crm-vendor-stats{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:14px;padding-top:14px;border-top:1px solid var(--crm-border);}
.crm-vendor-stat{background:var(--crm-surface2);border-radius:var(--crm-rad);padding:12px 14px;}
.crm-vendor-stat-label{font-size:10px;color:var(--crm-text3);text-transform:uppercase;letter-spacing:.4px;margin-bottom:5px;font-weight:600;}
.crm-vendor-stat-val{font-size:18px;font-weight:700;color:var(--crm-text);}
.crm-vendor-stat.accent{background:var(--crm-accent-light);}
.crm-vendor-stat.accent .crm-vendor-stat-val{color:var(--crm-accent-dark);}
.crm-vendor-stat.accent .crm-vendor-stat-label{color:var(--crm-accent);}
.crm-tab-bar{display:flex;gap:3px;background:var(--crm-surface2);border-radius:10px;padding:3px;margin-bottom:20px;width:fit-content;}
.crm-tab{padding:7px 16px;border-radius:8px;font-size:13px;cursor:pointer;color:var(--crm-text2);transition:all .15s;font-weight:500;}
.crm-tab.active{background:var(--crm-surface);color:var(--crm-text);box-shadow:0 1px 4px rgba(0,0,0,0.1);font-weight:600;}
.crm-tab:hover:not(.active){color:var(--crm-text);background:rgba(255,255,255,0.6);}
.crm-config-section{background:var(--crm-surface);border:1px solid var(--crm-border);border-radius:var(--crm-rad-lg);padding:20px 22px;box-shadow:var(--crm-shadow);}
.crm-config-item{display:flex;align-items:center;gap:10px;padding:11px 0;border-bottom:1px solid var(--crm-border);}
.crm-config-item:last-child{border-bottom:none;}
.crm-config-add{display:flex;gap:10px;margin-top:16px;padding-top:16px;border-top:1px solid var(--crm-border);}
.crm-config-add input,.crm-config-add select{flex:1;padding:9px 12px;font-size:13px;border:1px solid var(--crm-border);border-radius:8px;background:var(--crm-bg);color:var(--crm-text);outline:none;font-family:inherit;transition:border-color .15s;}
.crm-config-add input:focus,.crm-config-add select:focus{border-color:var(--crm-accent);}
.crm-overlay{display:none;position:fixed;inset:0;background:rgba(15,23,42,0.45);z-index:1000;align-items:center;justify-content:center;backdrop-filter:blur(2px);}
.crm-overlay.open{display:flex;}
.crm-modal{background:var(--crm-surface);border-radius:16px;border:1px solid var(--crm-border);padding:24px;width:460px;max-width:95vw;box-shadow:0 20px 60px rgba(0,0,0,0.15);animation:crmSlideUp .2s ease;max-height:90vh;overflow-y:auto;}
@keyframes crmSlideUp{from{opacity:0;transform:translateY(16px) scale(0.98)}to{opacity:1;transform:translateY(0) scale(1)}}
.crm-modal-title{font-size:16px;font-weight:700;margin-bottom:20px;color:var(--crm-text);letter-spacing:-0.3px;}
.crm-form-row{display:grid;grid-template-columns:1fr 1fr;gap:12px;}
.crm-form-field{margin-bottom:14px;}
.crm-form-field label{display:block;font-size:12px;font-weight:600;color:var(--crm-text2);margin-bottom:5px;}
.crm-form-field input,.crm-form-field select,.crm-form-field textarea{width:100%;padding:9px 11px;font-size:13px;border:1px solid var(--crm-border);border-radius:8px;background:#f8fafc;color:var(--crm-text);outline:none;transition:border .15s,box-shadow .15s;font-family:inherit;}
.crm-form-field input:focus,.crm-form-field select:focus,.crm-form-field textarea:focus{border-color:var(--crm-accent);box-shadow:0 0 0 3px rgba(16,185,129,0.1);background:white;}
.crm-form-field textarea{resize:vertical;min-height:70px;}
.crm-form-section-title{font-size:11px;font-weight:700;color:var(--crm-text3);text-transform:uppercase;letter-spacing:.6px;margin:16px 0 12px;padding-top:16px;border-top:1px solid var(--crm-border);}
.crm-modal-footer{display:flex;gap:8px;justify-content:flex-end;margin-top:20px;padding-top:16px;border-top:1px solid var(--crm-border);}
.crm-empty{text-align:center;padding:48px 20px;color:var(--crm-text3);}
.crm-empty-icon{font-size:36px;margin-bottom:12px;opacity:.6;}
.crm-toast{position:fixed;bottom:24px;right:24px;background:#0f172a;color:white;padding:10px 18px;border-radius:10px;font-size:13px;z-index:9999;animation:crmSlideUp .2s ease;box-shadow:0 4px 16px rgba(0,0,0,0.2);}
#crm-app ::-webkit-scrollbar{width:5px;height:5px;}
#crm-app ::-webkit-scrollbar-thumb{background:var(--crm-border2);border-radius:3px;}
</style>

<div class="pp">
  <div class="hero-top">
    <div class="ht-row">
      <div class="ht-brand"><div class="ht-logo">VW</div><div class="ht-name"><h1>VECSA Water</h1><p>Soluciones en Tratamiento de Agua Industrial</p></div></div>
      <div class="ht-tag">Cotización</div>
    </div>
    <div class="ht-meta">
      <div class="ht-meta-item ht-folio"><div class="hm-l">Folio</div><div class="hm-v">#${folio}</div></div>
      <div class="ht-meta-item"><div class="hm-l">Fecha</div><div class="hm-v">${fecha}</div></div>
      <div class="ht-meta-item"><div class="hm-l">Validez</div><div class="hm-v">${validez}</div></div>
      <div class="ht-meta-item"><div class="hm-l">Contrato</div><div class="hm-v">${meses} meses</div></div>
      <div class="ht-meta-item"><div class="hm-l">Condiciones</div><div class="hm-v">${condPago}</div></div>
    </div>
  </div>
  <div class="client-strip">
    <div class="cs-left"><div class="cs-label">Cliente</div><div class="cs-name">${cliente}</div></div>
    <div class="cs-right">Servicio Tratamiento Químico<br>Póliza de Mantenimiento</div>
  </div>
  <div class="content">
    <div class="price-hero">
      <div class="ph-left"><h2>Póliza de Mantenimiento — Tratamiento de Agua</h2><p>${equipList}</p></div>
      <div class="ph-right"><div class="pr-label">Inversión Mensual</div><div class="pr-val">${fmtP(totalSinIVA)}</div><div class="pr-sub">+ IVA | ${vpmText} visitas/mes</div></div>
    </div>
    <div class="info-grid">
      <div class="info-card"><div class="ic-l">Visitas por mes</div><div class="ic-v">${vpmText}</div></div>
      <div class="info-card"><div class="ic-l">Emergencias</div><div class="ic-v">Asesoría por teléfono</div></div>
      <div class="info-card"><div class="ic-l">Equipo en Comodato</div><div class="ic-v">${comodText}</div></div>
    </div>
    <div class="sec" style="margin-top:12px;"><div class="sec-h"><span class="dot"></span><span>Consumibles Incluidos</span></div><ul class="blist">${uniqueCons.map(c=>'<li>'+c+'</li>').join('')}</ul></div>
    <div class="sec"><div class="sec-h"><span class="dot"></span><span>Plataforma de Monitoreo y Mantenimiento</span></div>
      <div class="img-showcase">
        <div class="img-card"><div class="ic-head"><span class="ic-dot"></span> Mantenimiento Predictivo — Base Nube</div><img src="IMGPRED_PLACEHOLDER" alt="Dashboard"></div>
        <div class="img-card"><div class="ic-head"><span class="ic-dot"></span> Mantenimiento Preventivo — Sistematizado</div><img src="IMGPREV_PLACEHOLDER" alt="Plan"></div>
      </div>
    </div>
    <div class="sec"><div class="sec-h"><span class="dot"></span><span>Personal Involucrado</span></div>
      <div class="pers-strip">
        <div class="ps-item"><strong>Técnico Especialista</strong><span>Ejecución del programa</span></div>
        <div class="ps-item"><strong>Supervisor Técnico</strong><span>Administración y apoyo</span></div>
        <div class="ps-item"><strong>Comercial</strong><span>Cotizaciones y mejoras</span></div>
        <div class="ps-item"><strong>Ingeniería</strong><span>Soporte técnico</span></div>
      </div>
    </div>
    <div class="totals-strip"><div class="ts-rows">
      <div class="ts-row"><span>Subtotal (${meses} meses)</span><span class="tv">${fmtP(importeAnual)}</span></div>
      <div class="ts-row"><span>IVA 16%</span><span class="tv">${fmtP(ivaAnual)}</span></div>
    </div><div class="ts-grand"><span class="tg-l">Total del Contrato</span><span class="tg-v">${fmtP(totalAnual)}</span></div></div>
  </div>
  <div class="pg-footer">
    <div class="pgf-left">Presupuestado por<br><div class="pgf-name">${vendedor||"—"}</div>${email}<br><a href="#">WWW.VECSAWATER.COM</a></div>
    <div class="pgf-right">Monterrey, N.L. — Tel. 811 733 1516<br>Moneda: MXN. T.E. sujeto a disponibilidad.<br>*OC por ${meses} meses requerida.</div>
  </div>
</div>

<div class="pp">
  <div class="p2-head"><h2>Desglose de Inversión</h2><p>${cliente} — Folio #${folio}</p></div>
  <div class="p2-body">
    <table class="dtbl"><thead><tr><th>#</th><th>Concepto</th><th>Cant.</th><th>Precio Unit.</th><th>Subtotal</th></tr></thead><tbody>${desHTML}</tbody></table>
    <table class="stbl">
      <tr><td class="sl">1. Mano de Obra / Servicio</td><td class="sv">${document.getElementById('polGMO').textContent}</td></tr>
      <tr><td class="sl">2. Análisis Físico-Químicos</td><td class="sv">${document.getElementById('polGAN').textContent}</td></tr>
      <tr><td class="sl">3. Comodato</td><td class="sv">${document.getElementById('polGCO').textContent}</td></tr>
      <tr><td class="sl">4. Consumibles</td><td class="sv">${document.getElementById('polGCON').textContent}</td></tr>
      <tr class="sub"><td class="sl">Subtotal Técnico</td><td class="sv">${document.getElementById('polSubTec').textContent}</td></tr>
      <tr><td class="sl">Admón. + Reportes + Riesgo (15%)</td><td class="sv">${document.getElementById('polAdmin').textContent}</td></tr>
      <tr class="sub"><td class="sl">Total sin IVA (Mensual)</td><td class="sv">${document.getElementById('polTotalSin').textContent}</td></tr>
      <tr><td class="sl">IVA 16%</td><td class="sv">${document.getElementById('polIVA').textContent}</td></tr>
      <tr class="grand"><td class="sl">TOTAL CON IVA (Mensual)</td><td class="sv">${document.getElementById('polTotalIVA').textContent}</td></tr>
    </table>
    <div class="cbar"><div><strong>Contrato:</strong> <span>${meses} meses</span></div><div><strong>Anual sin IVA:</strong> <span>${fmtP(importeAnual)}</span></div><div><strong>Anual con IVA:</strong> <span>${fmtP(totalAnual)}</span></div></div>
  </div>
</div>`;

  const finalHTML = html.replace(/IMGPRED_PLACEHOLDER/g, IMG_PRED).replace(/IMGPREV_PLACEHOLDER/g, IMG_PREV);




  // Show as overlay in same page
  let overlay=document.getElementById('pdfOverlay');
  if(!overlay){
    overlay=document.createElement('div');
    overlay.id='pdfOverlay';
    document.body.appendChild(overlay);
  }

  overlay.innerHTML=`
    <div id="pdfBar" style="position:fixed;top:0;left:0;right:0;background:#003366;padding:10px 20px;display:flex;gap:10px;align-items:center;z-index:10001;box-shadow:0 2px 10px rgba(0,0,0,0.3);">
      <button onclick="window.print()" style="padding:8px 20px;background:#34d399;color:#003366;border:none;border-radius:6px;font-size:14px;font-weight:bold;cursor:pointer;">⬇ Guardar como PDF / Imprimir</button>
      <button onclick="document.getElementById('pdfOverlay').style.display='none';document.body.style.overflow='';" style="padding:8px 20px;background:transparent;color:white;border:1px solid rgba(255,255,255,0.3);border-radius:6px;font-size:14px;cursor:pointer;">✕ Cerrar Vista Previa</button>
      <span style="color:rgba(255,255,255,0.6);font-size:12px;margin-left:auto;">En el diálogo de impresión selecciona "Guardar como PDF"</span>
    </div>
    <div id="pdfContent" style="padding:50px 0 0;background:white;min-height:100vh;">${finalHTML}</div>
  `;

  overlay.style.cssText='position:fixed;top:0;left:0;right:0;bottom:0;z-index:10000;overflow-y:auto;background:white;';
  document.body.style.overflow='hidden';

  // Add print styles
  let ps=document.getElementById('printOnlyCSS');
  if(!ps){ps=document.createElement('style');ps.id='printOnlyCSS';document.head.appendChild(ps);}
  ps.textContent='@media print{.topbar,.container,#pdfBar{display:none !important;}#pdfOverlay{position:static !important;overflow:visible !important;}#pdfContent{padding:0 !important;}body>*:not(#pdfOverlay):not(#printOnlyCSS){display:none !important;}#pdfOverlay{display:block !important;}}';
}

// ═══════════════════════ DIAGNÓSTICO TÉCNICO ═══════════════════════
let diagCounter=0;

function addDiagBlock(){
  document.getElementById('diagEmpty').style.display='none';
  const container=document.getElementById('diagContainer');
  const id=++diagCounter;
  const block=document.createElement('div');
  block.className='diag-block';
  block.id='diag-'+id;
  block.innerHTML=`
    <div class="diag-block-head">
      <select onchange="diagTypeChange(${id},this.value)">
        <option value="texto">📝 Observación / Texto Libre</option>
        <option value="calidad">💧 Calidad de Agua (Tabla)</option>
        <option value="imagen">📸 Imágenes / Evidencia</option>
        <option value="problema">⚠️ Problema Detectado</option>
        <option value="recomendacion">✅ Recomendación</option>
      </select>
      <div style="display:flex;gap:4px;">
        <button class="btn btn-purple btn-sm" onclick="diagAI(${id})" title="Reescribir con IA">✨ IA</button>
        <button class="btn btn-d btn-sm" onclick="removeDiagBlock(${id})">✕</button>
      </div>
    </div>
    <div class="diag-block-body" id="diag-body-${id}">
      <textarea class="diag-textarea" id="diag-text-${id}" placeholder="Escribe con tus palabras... Ej: El agua de alimentación tiene 800 ppm de TDS, pH 7.2, conductividad alta. Se observa incrustación en las membranas..."></textarea>
      <div class="diag-ai-bar">
        <span style="font-size:0.75rem;color:var(--txt3);">Escribe tu observación y presiona ✨ IA para obtener un texto profesional</span>
        <span id="diag-loading-${id}" style="display:none;"><span class="loading-dots"><span></span><span></span><span></span></span></span>
      </div>
      <div class="diag-ai-output" id="diag-ai-${id}">
        <div class="diag-ai-badge">✨ Versión Profesional (editable)</div>
        <div contenteditable="true" id="diag-ai-text-${id}" style="outline:none;"></div>
      </div>
    </div>
  `;
  container.appendChild(block);
}

function removeDiagBlock(id){
  const block=document.getElementById('diag-'+id);
  if(block)block.remove();
  const container=document.getElementById('diagContainer');
  if(!container.querySelector('.diag-block'))document.getElementById('diagEmpty').style.display='';
}

function diagTypeChange(id,type){
  const body=document.getElementById('diag-body-'+id);
  const existingText=document.getElementById('diag-text-'+id)?.value||'';
  
  if(type==='calidad'){
    body.innerHTML=`
      <textarea class="diag-textarea" id="diag-text-${id}" placeholder="Describe las condiciones: Ej: Agua pozo con 1200 TDS, dureza 450, pH 7.5, cloro 0.5 ppm, hierro 0.3 ppm...">${existingText}</textarea>
      <div class="diag-table-wrap">
        <table id="diag-table-${id}">
          <thead><tr><th>Parámetro</th><th>Valor</th><th>Unidad</th><th>Límite Recomendado</th><th>Estado</th></tr></thead>
          <tbody id="diag-tbody-${id}">
            <tr><td><input value="TDS"></td><td><input placeholder="—"></td><td><input value="ppm"></td><td><input placeholder="—"></td><td><input placeholder="—"></td></tr>
            <tr><td><input value="pH"></td><td><input placeholder="—"></td><td><input value="—"></td><td><input placeholder="6.5-8.5"></td><td><input placeholder="—"></td></tr>
            <tr><td><input value="Conductividad"></td><td><input placeholder="—"></td><td><input value="µS/cm"></td><td><input placeholder="—"></td><td><input placeholder="—"></td></tr>
            <tr><td><input value="Dureza Total"></td><td><input placeholder="—"></td><td><input value="ppm CaCO₃"></td><td><input placeholder="—"></td><td><input placeholder="—"></td></tr>
            <tr><td><input value="Cloro Residual"></td><td><input placeholder="—"></td><td><input value="ppm"></td><td><input placeholder="—"></td><td><input placeholder="—"></td></tr>
            <tr><td><input value="Hierro"></td><td><input placeholder="—"></td><td><input value="ppm"></td><td><input placeholder="—"></td><td><input placeholder="—"></td></tr>
            <tr><td><input value="Sílice"></td><td><input placeholder="—"></td><td><input value="ppm"></td><td><input placeholder="—"></td><td><input placeholder="—"></td></tr>
          </tbody>
        </table>
        <button class="btn btn-o btn-sm" style="margin-top:6px;" onclick="addDiagTableRow(${id})">+ Agregar Parámetro</button>
      </div>
      <div class="diag-ai-bar" style="margin-top:8px;">
        <span style="font-size:0.75rem;color:var(--txt3);">Llena la tabla y/o escribe observaciones, luego presiona ✨ IA para análisis técnico</span>
        <span id="diag-loading-${id}" style="display:none;"><span class="loading-dots"><span></span><span></span><span></span></span></span>
      </div>
      <div class="diag-ai-output" id="diag-ai-${id}">
        <div class="diag-ai-badge">✨ Análisis Técnico Profesional (editable)</div>
        <div contenteditable="true" id="diag-ai-text-${id}" style="outline:none;"></div>
      </div>
    `;
  }else if(type==='imagen'){
    body.innerHTML=`
      <textarea class="diag-textarea" id="diag-text-${id}" placeholder="Describe lo que muestran las imágenes: Ej: Se observa incrustación severa en membranas RO, acumulación de sarro en torre...">${existingText}</textarea>
      <div class="diag-img-zone" onclick="document.getElementById('diag-file-${id}').click()">
        <input type="file" id="diag-file-${id}" accept="image/*" multiple onchange="diagPreviewImages(${id},this)">
        <div class="diz-text">📸 <strong>Click para subir imágenes</strong> o arrastra aquí<br>JPG, PNG — Evidencia fotográfica del diagnóstico</div>
      </div>
      <div class="diag-img-preview" id="diag-preview-${id}"></div>
      <div class="diag-ai-bar" style="margin-top:8px;">
        <span style="font-size:0.75rem;color:var(--txt3);">Describe las imágenes y presiona ✨ IA para redacción profesional</span>
        <span id="diag-loading-${id}" style="display:none;"><span class="loading-dots"><span></span><span></span><span></span></span></span>
      </div>
      <div class="diag-ai-output" id="diag-ai-${id}">
        <div class="diag-ai-badge">✨ Descripción Profesional (editable)</div>
        <div contenteditable="true" id="diag-ai-text-${id}" style="outline:none;"></div>
      </div>
    `;
  }else if(type==='problema'){
    body.innerHTML=`
      <textarea class="diag-textarea" id="diag-text-${id}" placeholder="Describe el problema: Ej: La torre de enfriamiento tiene mucha incrustación, el agua se ve turbia, hay algas en la charola...">${existingText}</textarea>
      <div class="diag-ai-bar">
        <span style="font-size:0.75rem;color:var(--txt3);">✨ IA generará: Problema, Causa Probable, Impacto y Acción Recomendada</span>
        <span id="diag-loading-${id}" style="display:none;"><span class="loading-dots"><span></span><span></span><span></span></span></span>
      </div>
      <div class="diag-ai-output" id="diag-ai-${id}">
        <div class="diag-ai-badge">✨ Análisis del Problema (editable)</div>
        <div contenteditable="true" id="diag-ai-text-${id}" style="outline:none;"></div>
      </div>
    `;
  }else if(type==='recomendacion'){
    body.innerHTML=`
      <textarea class="diag-textarea" id="diag-text-${id}" placeholder="Escribe tu recomendación: Ej: Se recomienda cambio de membranas, ajustar dosificación de antiincrustante, instalar filtro lateral...">${existingText}</textarea>
      <div class="diag-ai-bar">
        <span style="font-size:0.75rem;color:var(--txt3);">✨ IA redactará la recomendación técnica de forma profesional</span>
        <span id="diag-loading-${id}" style="display:none;"><span class="loading-dots"><span></span><span></span><span></span></span></span>
      </div>
      <div class="diag-ai-output" id="diag-ai-${id}">
        <div class="diag-ai-badge">✨ Recomendación Técnica (editable)</div>
        <div contenteditable="true" id="diag-ai-text-${id}" style="outline:none;"></div>
      </div>
    `;
  }else{
    // texto libre - default
    body.innerHTML=`
      <textarea class="diag-textarea" id="diag-text-${id}" placeholder="Escribe con tus palabras...">${existingText}</textarea>
      <div class="diag-ai-bar">
        <span style="font-size:0.75rem;color:var(--txt3);">Escribe tu observación y presiona ✨ IA para texto profesional</span>
        <span id="diag-loading-${id}" style="display:none;"><span class="loading-dots"><span></span><span></span><span></span></span></span>
      </div>
      <div class="diag-ai-output" id="diag-ai-${id}">
        <div class="diag-ai-badge">✨ Versión Profesional (editable)</div>
        <div contenteditable="true" id="diag-ai-text-${id}" style="outline:none;"></div>
      </div>
    `;
  }
}

function addDiagTableRow(id){
  const tbody=document.getElementById('diag-tbody-'+id);
  if(!tbody)return;
  const tr=document.createElement('tr');
  tr.innerHTML='<td><input placeholder="Parámetro"></td><td><input placeholder="—"></td><td><input placeholder="ppm"></td><td><input placeholder="—"></td><td><input placeholder="—"></td>';
  tbody.appendChild(tr);
}

function diagPreviewImages(id,input){
  const preview=document.getElementById('diag-preview-'+id);
  if(!preview)return;
  preview.innerHTML='';
  Array.from(input.files).forEach(file=>{
    const reader=new FileReader();
    reader.onload=e=>{
      const img=document.createElement('img');
      img.src=e.target.result;
      preview.appendChild(img);
    };
    reader.readAsDataURL(file);
  });
}

function getDiagTableData(id){
  const tbody=document.getElementById('diag-tbody-'+id);
  if(!tbody)return '';
  const rows=[];
  tbody.querySelectorAll('tr').forEach(tr=>{
    const cells=[];
    tr.querySelectorAll('input').forEach(inp=>cells.push(inp.value));
    if(cells.some(c=>c.trim()))rows.push(cells);
  });
  if(!rows.length)return '';
  return 'Tabla de calidad de agua:\\n'+rows.map(r=>`${r[0]}: ${r[1]} ${r[2]} (Límite: ${r[3]}, Estado: ${r[4]})`).join('\\n');
}

async function diagAI(id){
  const textarea=document.getElementById('diag-text-'+id);
  const raw=textarea?textarea.value.trim():'';
  const tableData=getDiagTableData(id);
  const combined=(raw+'\\n'+tableData).trim();
  
  if(!combined){alert('Escribe algo primero.');return;}

  const select=document.querySelector('#diag-'+id+' select');
  const type=select?select.value:'texto';
  const loading=document.getElementById('diag-loading-'+id);
  const aiOutput=document.getElementById('diag-ai-'+id);
  const aiText=document.getElementById('diag-ai-text-'+id);
  
  if(loading)loading.style.display='inline-flex';
  if(aiOutput)aiOutput.classList.remove('show');

  const prompts={
    texto:`Eres un ingeniero de tratamiento de agua. Reescribe esta observación de forma profesional y técnica para un informe de diagnóstico. En español, conciso pero detallado:\\n\\n"${combined}"\\n\\nSolo devuelve el texto profesional, sin encabezados.`,
    calidad:`Eres un ingeniero de tratamiento de agua. Con base en los siguientes datos de calidad de agua, genera un análisis técnico profesional. Incluye:\\n1. Resumen de condiciones actuales\\n2. Parámetros fuera de rango (si los hay)\\n3. Riesgos potenciales\\n4. Observaciones técnicas\\n\\nDatos:\\n${combined}\\n\\nEn español, formato profesional para informe técnico. Solo el análisis, sin encabezados de "Análisis Técnico:".`,
    problema:`Eres un ingeniero de tratamiento de agua. Analiza este problema y genera un reporte profesional con:\\n1. Descripción del problema\\n2. Causa probable\\n3. Impacto en la operación\\n4. Acción recomendada\\n\\nProblema descrito:\\n"${combined}"\\n\\nEn español, formato profesional. Numera las secciones.`,
    recomendacion:`Eres un ingeniero de tratamiento de agua. Redacta esta recomendación de forma profesional y técnica, fundamentando cada punto. En español, conciso.\\n\\nRecomendación informal:\\n"${combined}"\\n\\nSolo devuelve la recomendación profesional, sin encabezados.`,
    imagen:`Eres un ingeniero de tratamiento de agua. Redacta profesionalmente esta descripción de evidencia fotográfica de un diagnóstico de planta. En español, técnico y conciso.\\n\\nDescripción informal:\\n"${combined}"\\n\\nSolo devuelve la descripción profesional.`
  };

  try{
    const response=await fetch('https://api.anthropic.com/v1/messages',{
      method:'POST',headers:{'Content-Type':'application/json'},
      body:JSON.stringify({model:'claude-sonnet-4-20250514',max_tokens:1000,
        messages:[{role:'user',content:prompts[type]||prompts.texto}]})
    });
    const data=await response.json();
    const text=data.content.map(b=>b.text||'').join('\\n').trim();
    if(aiText)aiText.textContent=text;
    if(aiOutput)aiOutput.classList.add('show');
  }catch(err){
    alert('Error al conectar con IA.');console.error(err);
  }finally{
    if(loading)loading.style.display='none';
  }
}

// ═══════════════════════ INIT ═══════════════════════
renderCat();renderInd();renderIndCfg();refreshQSelect();refreshMOSel();calcTotals();renderTarifas();renderMO();renderMatSvc();calcSvcTotals();renderPolActivos();renderComodCat();renderComodLines();renderTabHH();renderTabAnTC();polCalc();paAutoClass();
document.getElementById('polFecha').value=new Date().toISOString().split('T')[0];
go('proyectos');



