'use strict';

/* --- Anthem play (if present) --- */
const anthem = document.getElementById('uiAnthem');
const playBtn = document.getElementById('playAnthem');
let isPlaying = false;
if (playBtn && anthem) {
  playBtn.addEventListener('click', () => {
    if (!isPlaying) {
      anthem.play();
      playBtn.textContent = '⏸️ Jeda Anthem UI';
      isPlaying = true;
    } else {
      anthem.pause();
      playBtn.textContent = '▶️ Putar Anthem UI';
      isPlaying = false;
    }
  });
  anthem.addEventListener('ended', () => {
    playBtn.textContent = '▶️ Putar Anthem UI';
    isPlaying = false;
  });
}

/* ===== faculties horizontal interaction ===== */
;(function(){
  const scroller = document.querySelector('.h-scroll');
  const buildings = Array.from(document.querySelectorAll('.h-scroll .building'));
  const bus = document.getElementById('bus');

  const modalMap = {
    'FK':'#modalFK','FF':'#modalFF','FPsi':'#modalFPsi','FT':'#modalFT','FH':'#modalFH',
    'FEB':'#modalFEB','FIB':'#modalFIB','FISIP':'#modalFISIP','FIA':'#modalFIA','FMIPA':'#modalFMIPA',
    'FASILKOM':'#modalFASILKOM','FIK':'#modalFIK','FKG':'#modalFKG','FKM':'#modalFKM','VOKASI':'#modalVOKASI'
  };

  let active = null;
  let autoTimer = null;

  if (!scroller || !buildings.length) return;

  function centerItem(el){
    const rect = scroller.getBoundingClientRect();
    const it = el.getBoundingClientRect();
    const scrollLeft = scroller.scrollLeft;
    const target = (it.left + it.right)/2 - (rect.left + rect.right)/2;
    scroller.scrollTo({ left: scrollLeft + target, behavior:'smooth' });
  }

  buildings.forEach((b) => {
    b.addEventListener('click', () => {
      if (active !== b){
        buildings.forEach(x => x.classList.remove('active'));
        b.classList.add('active');
        active = b;
        document.querySelectorAll('.wheel').forEach(w => w.classList.add('spin'));
        centerItem(b);
        setTimeout(()=> document.querySelectorAll('.wheel').forEach(w => w.classList.remove('spin')), 800);
        return;
      }
      const id = b.dataset.id;
      const sel = modalMap[id];
      if (sel){
        const modalEl = document.querySelector(sel);
        if (modalEl) new bootstrap.Modal(modalEl).show();
      }
    });
  });

  scroller.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') scroller.scrollBy({ left: 320, behavior:'smooth' });
    if (e.key === 'ArrowLeft') scroller.scrollBy({ left: -320, behavior:'smooth' });
  });

  const autoBtn = document.getElementById('autoBtn');
  const resetBtn = document.getElementById('resetBtn');

  if (autoBtn){
    autoBtn.addEventListener('click', () => {
      if (autoTimer){ clearInterval(autoTimer); autoTimer = null; autoBtn.textContent='Auto'; return; }
      autoBtn.textContent='Stop';
      let i = 0;
      autoTimer = setInterval(()=> {
        const b = buildings[i % buildings.length];
        buildings.forEach(x => x.classList.remove('active'));
        b.classList.add('active');
        centerItem(b);
        i++;
        if (i >= buildings.length) { clearInterval(autoTimer); autoTimer = null; autoBtn.textContent='Auto'; }
      }, 1200);
    });
  }
  if (resetBtn){
    resetBtn.addEventListener('click', () => {
      buildings.forEach(x => x.classList.remove('active'));
      active = null;
      if (autoTimer){ clearInterval(autoTimer); autoTimer = null; if (autoBtn) autoBtn.textContent='Auto'; }
      scroller.scrollTo({ left:0, behavior:'smooth' });
    });
  }

  window.addEventListener('load', ()=> { if (buildings[0]) centerItem(buildings[0]); });

  const startBtn = document.getElementById('startBtn');
  if (startBtn){
    startBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.getElementById('faculties');
      if (target) target.scrollIntoView({ behavior:'smooth', block:'start' });
    });
  }
})();

// ===== faculties horizontal interaction (drag + click + center) =====
(function(){
  const scroller = document.querySelector('.h-scroll');
  if (!scroller) return;

  const items = Array.from(scroller.querySelectorAll('.building'));
  let isDown = false;
  let startX, scrollLeft;
  let active = null;

  // drag to scroll (pointer events)
  scroller.addEventListener('pointerdown', (e) => {
    isDown = true;
    scroller.setPointerCapture(e.pointerId);
    startX = e.clientX;
    scrollLeft = scroller.scrollLeft;
    scroller.classList.add('dragging');
  });
  window.addEventListener('pointerup', (e) => {
    if (!isDown) return;
    isDown = false;
    scroller.classList.remove('dragging');
  });
  scroller.addEventListener('pointermove', (e) => {
    if (!isDown) return;
    const dx = startX - e.clientX;
    scroller.scrollLeft = scrollLeft + dx;
  });

  // keyboard left/right
  scroller.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') scroller.scrollBy({ left: 300, behavior:'smooth' });
    if (e.key === 'ArrowLeft') scroller.scrollBy({ left: -300, behavior:'smooth' });
  });

  function centerItem(el){
    const rect = scroller.getBoundingClientRect();
    const it = el.getBoundingClientRect();
    const target = (it.left + it.right)/2 - (rect.left + rect.right)/2;
    scroller.scrollTo({ left: scroller.scrollLeft + target, behavior: 'smooth' });
    items.forEach(i => i.classList.remove('active'));
    el.classList.add('active');
    active = el;
  }

  // click: first click focuses (center), second click opens modal (if exists)
  const modalMap = {
    'FK':'#modalFK','FF':'#modalFF','FPsi':'#modalFPsi','FT':'#modalFT','FH':'#modalFH',
    'FEB':'#modalFEB','FIB':'#modalFIB','FISIP':'#modalFISIP','FIA':'#modalFIA','FMIPA':'#modalFMIPA',
    'FASILKOM':'#modalFASILKOM','FIK':'#modalFIK','FKG':'#modalFKG','FKM':'#modalFKM','VOKASI':'#modalVOKASI'
  };

  items.forEach((it) => {
    it.addEventListener('click', (e) => {
      // ignore click if user was dragging
      if (scroller.classList.contains('dragging')) return;
      if (active !== it) {
        centerItem(it);
        // wheel spin effect (if wheels exist)
        document.querySelectorAll('.wheel').forEach(w => w.classList.add('spin'));
        setTimeout(()=> document.querySelectorAll('.wheel').forEach(w => w.classList.remove('spin')), 700);
        return;
      }
      // second click: open modal
      const id = it.dataset.id;
      const sel = modalMap[id];
      if (sel) {
        const modalEl = document.querySelector(sel);
        if (modalEl) new bootstrap.Modal(modalEl).show();
      }
    });
  });

  // center first item on load
  window.addEventListener('load', () => { if (items[0]) centerItem(items[0]); });
  window.addEventListener('resize', () => { if (active) centerItem(active); });
})();
