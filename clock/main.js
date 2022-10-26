const ONE_SECOND = 1000;

function addZero(value) {
  if (value < 10) {
    return `0${value}`;
  } else {
    return value;
  }
}

function getCurrentTime() {
  const currentTime = new Date();
  const hours = addZero(currentTime.getHours());
  const minutes = addZero(currentTime.getMinutes());
  const seconds = addZero(currentTime.getSeconds());
  return `${hours}:${minutes}:${seconds}`;
}

function main() {
  const $clock = document.querySelector("#clock");

  setInterval(function () {
    const time = getCurrentTime();
    $clock.textContent = time;
    // console.log(hours, minutes, seconds);
  }, ONE_SECOND);
}

window.addEventListener("load", main);
