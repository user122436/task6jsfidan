const hourElement = document.querySelector(".hr");
const minuteElement = document.querySelector(".mn");
const secondElement = document.querySelector(".sc");
const msecondElement = document.querySelector(".msc");

const bakuButton = document.querySelector(".baku");
const londonButton = document.querySelector(".london");
const moscowButton = document.querySelector(".moscow");
const istanbulButton = document.querySelector(".istanbul");
const nycButton = document.querySelector(".nyc");
const beijingButton = document.querySelector(".beijing");
const tokyoButton = document.querySelector(".tokyo");

const buttons = document.querySelectorAll("button");

function formatTime(timeEntity) {
  if (timeEntity < 10) {
    return `0${timeEntity}`;
  }

  return timeEntity;
}



const timeZoneObject = {
  londonTimeZone: -3,
  moscowTimeZone: -1,
  istanbulTimeZone: -1,
  nycTimeZone: -8,
  beijingTimeZone: 4,
  tokyoTimeZone: 5,
  bakuTimeZone: 0,
};

let activeTimeZone = timeZoneObject.bakuTimeZone;

setInterval(() => {
  const date = new Date();
  const hours = date.getHours() + activeTimeZone;
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const mseconds = date.getMilliseconds();

  if (mseconds < 9) {
    msecondElement.textContent = `00${mseconds}`;
  } else if (mseconds < 99) {
    msecondElement.textContent = `0${mseconds}`;
  } else {
    msecondElement.textContent = mseconds;
  }

  hourElement.textContent = formatTime(hours);
  minuteElement.textContent = formatTime(minutes);
  secondElement.textContent = formatTime(seconds);
});

// bakuButton.addEventListener("click", (event) => {
//   activeTimeZone = bakuTimeZone;

//   //   event.target.style.backgroundColor = "rgba(255, 255, 255, 0.484)";

//   event.target.classList.toggle("active");
//   londonButton.classList.remove("active");
//   moscowButton.classList.remove("active");
//   istanbulButton.classList.remove("active");
//   nycButton.classList.remove("active");
//   beijingButton.classList.remove("active");
//   tokyoButton.classList.remove("active");
// });

// londonButton.addEventListener("click", (event) => {
//   activeTimeZone = londonTimeZone;
//   event.target.classList.toggle("active");
//   bakuButton.classList.remove("active");
//   moscowButton.classList.remove("active");
//   istanbulButton.classList.remove("active");
//   nycButton.classList.remove("active");
//   beijingButton.classList.remove("active");
//   tokyoButton.classList.remove("active");
// });

// moscowButton.addEventListener("click", (event) => {
//   activeTimeZone = moscowTimeZone;
//   event.target.classList.toggle("active");
//   londonButton.classList.remove("active");
//   bakuButton.classList.remove("active");
//   istanbulButton.classList.remove("active");
//   nycButton.classList.remove("active");
//   beijingButton.classList.remove("active");
//   tokyoButton.classList.remove("active");
// });

// istanbulButton.addEventListener("click", (event) => {
//   activeTimeZone = istanbulTimeZone;
//   event.target.classList.toggle("active");
//   londonButton.classList.remove("active");
//   moscowButton.classList.remove("active");
//   bakuButton.classList.remove("active");
//   nycButton.classList.remove("active");
//   beijingButton.classList.remove("active");
//   tokyoButton.classList.remove("active");
// });

// nycButton.addEventListener("click", (event) => {
//   activeTimeZone = newYorkTimeZone;
//   event.target.classList.toggle("active");
//   londonButton.classList.remove("active");
//   moscowButton.classList.remove("active");
//   istanbulButton.classList.remove("active");
//   bakuButton.classList.remove("active");
//   beijingButton.classList.remove("active");
//   tokyoButton.classList.remove("active");
// });

// beijingButton.addEventListener("click", (event) => {
//   activeTimeZone = beijingTimeZone;
//   event.target.classList.toggle("active");
//   londonButton.classList.remove("active");
//   moscowButton.classList.remove("active");
//   istanbulButton.classList.remove("active");
//   nycButton.classList.remove("active");
//   bakuButton.classList.remove("active");
//   tokyoButton.classList.remove("active");
// });

// tokyoButton.addEventListener("click", (event) => {
//   activeTimeZone = tokyoTimeZone;
//   event.target.classList.toggle("active");
//   londonButton.classList.remove("active");
//   moscowButton.classList.remove("active");
//   istanbulButton.classList.remove("active");
//   nycButton.classList.remove("active");
//   beijingButton.classList.remove("active");
//   bakuButton.classList.remove("active");
//});

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    buttons.forEach((buttonElement) => {
      buttonElement.classList.remove("active");
    });
    event.target.classList.add("active");
    const timezone = button.dataset.country + "TimeZone";

    activeTimeZone = timeZoneObject[timezone];
  });
});

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}