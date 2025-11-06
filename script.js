// --- Tombol Play/Pause Anthem UI ---
const anthem = document.getElementById("uiAnthem");
const playBtn = document.getElementById("playAnthem");

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
  }
});

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
