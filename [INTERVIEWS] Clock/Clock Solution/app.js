const secondHandle = document.querySelector(".handle__second");
const minuteHandle = document.querySelector(".handle__minute");
const hourHandle = document.querySelector(".handle__hour");
const millisecondHandle = document.querySelector('.handle__millisecond')

setInterval(() => {
  setHandles()
}, 1000)

function setHandles() {
  const d = new Date();

  const hours = d.getHours();
  const minutes = d.getMinutes();
  const seconds = d.getSeconds();

  console.log(hours * 30);
  console.log(360 / 60);
  console.log(seconds * 6);

  // 60 seconds in a minute
  const extraMinutesAngle = seconds * 0.1
  // minute increments by 6 deg
  const minutesAngle = minutes * 6 + extraMinutesAngle
  // 6 / 60

  // 1 hour = 60 mins increments the hours by 30 deg
  // 1 min increments the hours by 30 / 60 = 0.5 
  const extraHoursAngle = minutes * 0.5
  const hoursHandle = hours * 30 + extraHoursAngle

  hourHandle.style.transform = `translateX(-50%) rotate(${hoursHandle}deg)`;
  minuteHandle.style.transform = `translateX(-50%) rotate(${minutesAngle}deg)`;
  secondHandle.style.transform = `translateX(-50%) rotate(${seconds * 6}deg)`;
}

requestAnimationFrame(setHandle)

function setHandle() {
  const d = new Date();

  const milliseconds = d.getMilliseconds()

  console.log(milliseconds * 360 / 1000)

  const millisecondsAngle = milliseconds * 360 / 1000

  millisecondHandle.style.transform = `translateX(-50%) rotate(${millisecondsAngle}deg)`

  requestAnimationFrame(setHandle)
}

// setInterval(setHandles, 1000);

// function setHandles() {
//   const d = new Date();

//   const hours = d.getHours();
//   const minutes = d.getMinutes();
//   const seconds = d.getSeconds();

//   // Increment second hand `6` degrees every second
//   // 6 degrees = 360 degrees / 60 seconds
//   const secondsAngle = seconds * 6;

//   // Gradually increment minute hand `0.1` degrees every second
//   // 0.1 degree per second = 6 degrees / 60 seconds
//   const extraMinutesAngle = seconds * 0.1;
//   const minutesAngle = minutes * 6 + extraMinutesAngle;

//   // Gradually increment hour hand `0.5` degrees every minute
//   // 0.5 degree per minute = 30 degrees / 60 minutes
//   const extraHoursAngle = minutes * 0.5;
//   const hoursAngle = hours * 30 + extraHoursAngle;

//   secondHandle.style.transform = `translateX(-50%) rotate(${secondsAngle}deg)`;
//   hourHandle.style.transform = `translateX(-50%) rotate(${hoursAngle}deg)`;
//   minuteHandle.style.transform = `translateX(-50%) rotate(${minutesAngle}deg)`;
// }
