const millisecondHandle = document.querySelector('.handle__millisecond')
const secondHandle = document.querySelector(".handle__second");
const minuteHandle = document.querySelector(".handle__minute");
const hourHandle = document.querySelector(".handle__hour");

requestAnimationFrame(setHandles)

function setHandles() {
  const d = new Date();

  const millis = d.getMilliseconds();
  const hours = d.getHours();
  const minutes = d.getMinutes();
  const seconds = d.getSeconds();

  // Increment millisecond hand 360 degrees every 1000ms
  const millisAngle = millis * 360 / 1000

  // Increment hand by 6 degrees every 1000 ms
  const secondsScaleFactor = 6 / 1000;
  const extraSecondsAngle = millis * secondsScaleFactor;
  const secondsAngle = seconds * 6 + extraSecondsAngle

  // Increment hand 0.1 degrees every second
  // 0.1 degree per second = 6 degrees / 60 seconds
  const minutesScaleFactor = 6 / 60;
  const extraMinutesAngle = seconds * minutesScaleFactor;
  const minutesAngle = minutes * 6 + extraMinutesAngle
  
  // Increment hand 0.5 degrees every minute
  // 0.5 degree per minute = 30 degrees / 60 minutes
  const hoursScaleFactor = 30 / 60;
  const extraHoursAngle = minutes * hoursScaleFactor
  const hoursAngle = hours * 30 + extraHoursAngle

  millisecondHandle.style.transform = `translateX(-50%) rotate(${millisAngle}deg)`;
  secondHandle.style.transform = `translateX(-50%) rotate(${secondsAngle}deg)`;
  hourHandle.style.transform = `translateX(-50%) rotate(${hoursAngle}deg)`;
  minuteHandle.style.transform = `translateX(-50%) rotate(${minutesAngle}deg)`;
  
  requestAnimationFrame(setHandles)
}
