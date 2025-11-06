// Dark mode toggle
const darkToggle = document.getElementById('darkToggle');
darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('bg-dark');
  document.body.classList.toggle('text-light');
  darkToggle.textContent = document.body.classList.contains('bg-dark')
    ? 'Light Mode' : 'Dark Mode';
});

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
