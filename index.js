const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const startBtnRef = document.querySelector('.startBtn')
const stopBtnRef = document.querySelector('.stopBtn')
const bodyRef = document.querySelector('body')


const timer = {
  isActive: false,
  
  start() {
    if (this.isActive) {
      return;
    }

    startBtnRef.setAttribute('disabled', true);

    this.isActive = true;
    this.switchColors = setInterval(() => {
      const min = 0;
      const max = colors.length - 1;
      let i = randomIntegerFromInterval(min, max);
      bodyRef.style.backgroundColor = colors[i];
    }, 1000);
  },

  stop() {
    clearInterval(this.switchColors);
    this.isActive = false;
    startBtnRef.removeAttribute('disabled');
  },
};

startBtnRef.addEventListener("click", timer.start.bind(timer));
stopBtnRef.addEventListener("click", timer.stop.bind(timer));
