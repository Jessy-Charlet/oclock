$(document).ready(function () {


clock();

function clock() {
  const date = new Date();
  let hoursH = ((date.getHours() + 11) % 12 + 1);
  let minutesH = date.getMinutes();
  let secondsH = date.getSeconds();
  let hourH = hoursH * 30;
  let minuteH = minutesH * 6;
  let secondH = secondsH * 6;

  
  document.querySelector('.heure').style.transform = `rotate(${hourH}deg)`;

  document.querySelector('.minute').style.transform = `rotate(${minuteH}deg)`;

  document.querySelector('.seconde').style.transform = `rotate(${secondH}deg)`;

  if (hoursH < 10){
    hoursH = "0" + hoursH;
  }
  if (minutesH < 10){
    minutesH = "0" + minutesH;
  }
  if (secondsH < 10){
    secondsH = "0" + secondsH;
  }

  $("#horlogeNum").text(hoursH + ":" + minutesH + ":" + secondsH);
}

setInterval(clock, 1000);

})