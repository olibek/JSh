"use strict";
let num = 266219;

num = String(num);
num = num.split('');
let numb = num.map(Number);

// for (let i = 0; i < numb.length; ++i) {
//   summ *= numb[i];
// }

// console.log(summ);
// summ **= 3;
// console.log(String(summ).slice(0, 2));

let sum = numb.reduce((prev, item, index) => {
  return prev * item;
});
console.log(sum);

sum **= 3;
console.log(String(sum).slice(0, 2));