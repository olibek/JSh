let num = 266219;
let summ = 1;
num = String(num);
num = num.split('');
let numb = num.map(Number);
for (let i = 0; i < numb.length; ++i) {
  summ *= numb[i];
}
console.log(summ);
summ **= 3;
console.log(String(summ).slice(0, 2));