'use strict';

let date = new Date();
let dayW = date.getDay();
let year = date.getFullYear();
let day = date.getDate();
let month = date.getMonth();


const week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

const monthArr = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

let date1 = document.getElementById("date1");
let date2 = document.getElementById("date2");

function declOfNum(number, titles) {
  let cases = [2, 0, 1, 1, 1, 2];
  return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}

for (let i = 0; i < month.length; i++) {
  if (i === month) {
    month = month[i];
  }
}

for (let i = 0; i < dayW.length; i++) {
  if (i === dayW) {
    dayW = dayW[i];
  }
}
const getTime = function () {
  let date = new Date();
  let dayW = date.getDay();
  let year = date.getFullYear();
  let day = date.getDate();
  let month = date.getMonth();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  if (hours < 10) { hours = '0' + hours; }
  if (minutes < 10) { minutes = '0' + minutes; }
  if (seconds < 10) { seconds = '0' + seconds; }

  date1.innerHTML = 'Сегодня: ' + week[dayW] + ' ' + day + ' ' + monthArr[month] + ' ' + year + ' , ' + hours + declOfNum(hours, [' час ', ' часа ', ' часов ']) + minutes + ' минут ' + seconds + ' секунд ';
};
setInterval(getTime, 1000);

const getTime2 = function () {
  let date = new Date();
  let dayW = date.getDay();
  let year = date.getFullYear();
  let day = date.getDate();
  let month = date.getMonth();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  if (hours < 10) { hours = '0' + hours; }
  if (minutes < 10) { minutes = '0' + minutes; }
  if (seconds < 10) { seconds = '0' + seconds; }
  if (month < 10) { month = '0' + month; }


  date2.innerHTML = day + '.' + month + '.' + year + ' - ' + hours + ' : ' + minutes + ' : ' + seconds + "'";
};
setInterval(getTime2, 1000);




