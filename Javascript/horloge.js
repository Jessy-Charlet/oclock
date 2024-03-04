$(document).ready(function () {


clock();

function clock() {
  const date = new Date();
  let hours = ((date.getHours() + 11) % 12 + 1);
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let hour = hours * 30;
  let minute = minutes * 6;
  let second = seconds * 6;

  
  document.querySelector('.heure').style.transform = `rotate(${hour}deg)`;

  document.querySelector('.minute').style.transform = `rotate(${minute}deg)`;

  document.querySelector('.seconde').style.transform = `rotate(${second}deg)`;

  if (hours < 10){
    hours = "0" + hours;
  }
  if (minutes < 10){
    minutes = "0" + minutes;
  }
  if (seconds < 10){
    seconds = "0" + seconds;
  }

  $("#horlogeNum").text(hours + " : " + minutes + " : " + seconds);
}

setInterval(clock, 1000);

})