
if ('speechSynthesis' in window) {
  let isPaused = false;
  let utterance;

  function speakBlogContent() {
    const blogContent = document.querySelector('p').textContent;
    utterance = new SpeechSynthesisUtterance(blogContent);
    utterance.rate = 1.0;
    utterance.pitch = 1.0;
    window.speechSynthesis.speak(utterance);
  }

  function pauseResumeSpeech() {
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
      isPaused = false;
      pauseButton.textContent = 'Pause';
    } else {
      window.speechSynthesis.pause();
      isPaused = true;
      pauseButton.textContent = 'Resume';
    }
  }

  const speakButton = document.getElementById('speakButton');
  const pauseButton = document.getElementById('pauseButton');

  speakButton.addEventListener('click', speakBlogContent);
  pauseButton.addEventListener('click', pauseResumeSpeech);
} else {
  console.log('Text-to-speech is not supported in this browser.');
}
