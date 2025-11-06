// Play/pause anthem
const playBtn = document.getElementById('playBtn');
const anthem = document.getElementById('anthemAudio');
let playing = false;

playBtn.addEventListener('click', () => {
  if (!playing) {
    anthem.play();
    playBtn.textContent = 'Pause Anthem ⏸️';
  } else {
    anthem.pause();
    playBtn.textContent = 'Play Anthem 🎵';
  }
  playing = !playing;
});
