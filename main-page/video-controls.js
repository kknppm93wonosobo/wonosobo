document.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('progja-diman');
  const overlay = document.getElementById('video-overlay');
  const sambutan = document.querySelector('.sambutan');
  const lokasi = document.querySelector('.lokasi');
  const progressBar = document.getElementById('progress-bar');
  const progressBarContainer = document.getElementById('progress-bar-container');
  const currentTimeDisplay = document.getElementById('current-time');
  const durationDisplay = document.getElementById('duration');

  // Format time in MM:SS
  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return mins + ':' + (secs < 10 ? '0' : '') + secs;
  }

  // Update duration when metadata is loaded
  video.addEventListener('loadedmetadata', () => {
    durationDisplay.textContent = formatTime(video.duration);
  });

  // Update progress bar and current time as video plays
  video.addEventListener('timeupdate', () => {
    const progress = (video.currentTime / video.duration) * 100;
    progressBar.style.width = progress + '%';
    currentTimeDisplay.textContent = formatTime(video.currentTime);
  });

  // Click on progress bar to seek
  progressBarContainer.addEventListener('click', (e) => {
    const rect = progressBarContainer.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const percentage = clickX / width;
    video.currentTime = percentage * video.duration;
  });

  overlay.addEventListener('click', () => {
    if (video.paused) {
      video.play();
      video.classList.remove('paused');
      sambutan.classList.add('hidden');
      lokasi.classList.add('hidden');
    } else {
      video.pause();
      video.classList.add('paused');
      sambutan.classList.remove('hidden');
      lokasi.classList.remove('hidden');
    }
  });
});
