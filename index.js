// Import stylesheets
import './style.css';

const appDiv = document.getElementById('app');
appDiv.innerHTML = 
`<div>
<button id="startBtn" type="button">Start Timer</button>
<div id="percentage">&nbsp;</div>
<div id="outer" class="outer">
  <div id="inner" class="inner"></div>
  <div id="completion" class="completion"></div>
</div>
</div>`;

const buttonRef = document.getElementById('startBtn');
let intervalId = -1;
let progress = 0;

function getProgress() {
  progress += 10;
  return progress;
}

function startProgress() {
  const percent = getProgress();
  document.getElementById('completion').innerHTML = percent + '%';
  document.getElementById('inner').style.width = percent + '%';
  if (percent === 100) {
    progress = 0;
    clearInterval(intervalId);
    document.getElementById('completion').innerHTML = 'completed';
  }
}

buttonRef.addEventListener("mousedown", (arg) => {
  console.log();
  intervalId = setInterval(startProgress, 500);
});


