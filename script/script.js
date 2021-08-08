'use strict';
let date = new Date();
let day = date.getDay();
const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let test = document.getElementById("test");
console.log(week.join(", "));


for (let i = 0; i < week.length; i++) {
  if (i === day) {
    test.innerHTML = `Сегодня: ${week[i].bold()}`;
    console.log('Сегодня: ' + week[i].bold());
  }
  if (i === 0) {
    console.log(week[i].italics());
  } else if (i === 6) {
    console.log(week[i].italics());
  } else {
    console.log(week[i]);
  }
}

