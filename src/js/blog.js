// Select all play/pause buttons and audio elements
const playPauseButtons = document.querySelectorAll('.play-pause');
const audioElements = document.querySelectorAll('audio');

// Add event listeners to each play/pause button
playPauseButtons.forEach((button, index) => {
  const audio = audioElements[index];
  
  // Add event listener to play/pause the audio
  button.addEventListener('click', () => {
    if (audio.paused) {
      audio.play(); // Play the audio
      button.textContent = '❚❚'; // Change button to pause icon
    } else {
      audio.pause(); // Pause the audio
      button.textContent = '▶'; // Change button to play icon
    }
  });

  // Optional: Update button text when audio is played or paused
  audio.addEventListener('play', () => {
    button.textContent = '❚❚'; // Pause icon
  });

  audio.addEventListener('pause', () => {
    button.textContent = '▶'; // Play icon
  });
});

// Volume control functionality
const volumeSliders = document.querySelectorAll('.volume-slider');
volumeSliders.forEach((slider, index) => {
  const audio = audioElements[index];
  
  slider.addEventListener('input', (event) => {
    audio.volume = event.target.value; // Adjust the volume of the audio
  });
});



function playVideo(videoId) {
    const video = document.getElementById(videoId);
    const playIcon = video.previousElementSibling;

    if (video.paused) {
      video.play();
      playIcon.style.display = "none";  // Hide the play icon when video is playing
    } else {
      video.pause();
      playIcon.style.display = "block";  // Show the play icon when video is paused
    }
  }
  