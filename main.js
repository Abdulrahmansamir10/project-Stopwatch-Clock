let startTime;
let elapsedTime = 0;
let timerInterval;
let running = false;

const stopwatchElement = document.getElementById('stopwatch');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');

function start() {
  if (!running) {
    running = true;
    startTime = new Date().getTime() - elapsedTime;
    timerInterval = setInterval(updateStopwatch, 10);
  }
}

function stop() {
  if (running) {
    running = false;
    clearInterval(timerInterval);
  }
}

function reset() {
  stop();
  elapsedTime = 0;
  updateStopwatch();
}

function updateStopwatch() {
  const currentTime = new Date().getTime();
  elapsedTime = currentTime - startTime;
  const formattedTime = formatTime(elapsedTime);
  stopwatchElement.textContent = formattedTime;
}

function formatTime(time) {
  const hours = Math.floor(time / 3600000);
  const minutes = Math.floor((time % 3600000) / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const milliseconds = Math.floor((time % 1000) / 10);

  const formattedHours = padNumber(hours);
  const formattedMinutes = padNumber(minutes);
  const formattedSeconds = padNumber(seconds);
  const formattedMilliseconds = padNumber(milliseconds);

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}.${formattedMilliseconds}`;
}

function padNumber(number) {
  return number.toString().padStart(2, '0');
}

startButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);
resetButton.addEventListener('click', reset);








const clockElement = document.getElementById('clock');
function updateClock() {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  const formattedHours = padNumber(hours);
  const formattedMinutes = padNumber(minutes);
  const formattedSeconds = padNumber(seconds);

  clockElement.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

function padNumber(number) {
  return number.toString().padStart(2, '0');
}

setInterval(updateClock, 1000);