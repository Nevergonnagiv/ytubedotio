const videoUrlInput = document.getElementById('url');
const submitButton = document.getElementById('sub-btn');
const mp4PlayerIframe = document.getElementById('mp4-player');

submitButton.addEventListener('click', () => {
  const videoUrl = videoUrlInput.value;
  const apiEndpoint = `https://convert2mp3s.com/api/widgetv2?url=${encodeURIComponent(videoUrl)}`;
  mp4PlayerIframe.src = apiEndpoint;
});
