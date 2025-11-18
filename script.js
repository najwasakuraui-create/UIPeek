// --- Tombol Play/Pause Anthem UI ---
const anthem = document.getElementById("uiAnthem");
const playBtn = document.getElementById("playAnthem");

<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
let isPlaying = false;

playBtn.addEventListener("click", () => {
  if (!isPlaying) {
    anthem.play();
    playBtn.textContent = "⏸️ Jeda Anthem UI";
    isPlaying = true;
  } else {
    anthem.pause();
    playBtn.textContent = "▶️ Putar Anthem UI";
    isPlaying = false;
=======
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
/* --- Anthem play --- */
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

/* ========= FACULTIES HORIZONTAL ========== */
(function () {

  const scroller = document.querySelector('.h-scroll');
  const buildings = Array.from(document.querySelectorAll('.h-scroll .building'));
  const bus = document.getElementById('bus');

  if (!scroller || buildings.length === 0) return;

  const modalMap = {
    'FK':'#modalFK','FF':'#modalFF','FPsi':'#modalFPsi','FT':'#modalFT','FH':'#modalFH',
    'FEB':'#modalFEB','FIB':'#modalFIB','FISIP':'#modalFISIP','FIA':'#modalFIA','FMIPA':'#modalFMIPA',
    'FASILKOM':'#modalFASILKOM','FIK':'#modalFIK','FKG':'#modalFKG','FKM':'#modalFKM','VOKASI':'#modalVOKASI'
  };

  /* center an item */
  function centerItem(el){
    const rect = scroller.getBoundingClientRect();
    const it = el.getBoundingClientRect();
    const scrollLeft = scroller.scrollLeft;
    const target = (it.left + it.right)/2 - (rect.left + rect.right)/2;
<<<<<<< Updated upstream
<<<<<<< Updated upstream

    scroller.scrollTo({
      left: scrollLeft + target,
      behavior: 'smooth'
    });
>>>>>>> Stashed changes
  }
});

<<<<<<< Updated upstream
// kalau lagu berakhir, tombol otomatis balik ke "Putar"
anthem.addEventListener("ended", () => {
  playBtn.textContent = "▶️ Putar Anthem UI";
  isPlaying = false;
});


// Tombol "Back to Top"
const toTopBtn = document.createElement("button");
toTopBtn.textContent = "↑ Kembali ke Atas";
toTopBtn.className = "btn btn-warning position-fixed bottom-0 end-0 m-3 shadow";
document.body.appendChild(toTopBtn);

toTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
=======
=======
=======
>>>>>>> Stashed changes

    scroller.scrollTo({
      left: scrollLeft + target,
      behavior: 'smooth'
    });
  }

<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
  /* CLICK → langsung buka modal */
  buildings.forEach((b) => {
    b.addEventListener('click', () => {

      centerItem(b);

      const id = b.dataset.id;
      const sel = modalMap[id];
      if (!sel) return;

      const modalEl = document.querySelector(sel);
      if (!modalEl) return;

      if (typeof bootstrap === "undefined") {
        console.warn("Bootstrap JS belum dimuat.");
        return;
      }

      new bootstrap.Modal(modalEl).show();
    });
  });

  /* Keyboard arrow scroll */
  scroller.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight')
      scroller.scrollBy({ left: 320, behavior: 'smooth' });

    if (e.key === 'ArrowLeft')
      scroller.scrollBy({ left: -320, behavior: 'smooth' });
  });

  /* Auto move button */
  const autoBtn = document.getElementById('autoBtn');
  const resetBtn = document.getElementById('resetBtn');
  let autoTimer = null;

  if (autoBtn) {
    autoBtn.addEventListener('click', () => {
      if (autoTimer) {
        clearInterval(autoTimer);
        autoTimer = null;
        autoBtn.textContent = 'Auto';
        return;
      }

      autoBtn.textContent = 'Stop';

      let i = 0;
      autoTimer = setInterval(() => {
        const b = buildings[i % buildings.length];
        centerItem(b);
        i++;

        if (i >= buildings.length) {
          clearInterval(autoTimer);
          autoTimer = null;
          autoBtn.textContent = 'Auto';
        }
      }, 1200);
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (autoTimer) {
        clearInterval(autoTimer);
        autoTimer = null;
        if (autoBtn) autoBtn.textContent = 'Auto';
      }
      scroller.scrollTo({ left: 0, behavior: 'smooth' });
    });
  }

  /* Start button scroll */
  window.addEventListener('load', () => {
    if (buildings[0]) centerItem(buildings[0]);
  });

  const startBtn = document.getElementById('startBtn');
  if (startBtn) {
    startBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.getElementById('faculties');
      if (target) target.scrollIntoView({ behavior:'smooth', block:'start' });
    });
  }

})(); // IIFE END
<<<<<<< Updated upstream
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
