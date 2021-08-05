'use strict';
let arr = ['232', '27', '4755', '104', '47', '78', '377']; // в виде строк

arr.forEach((item) => {
  if (item.startsWith('2') || item.startsWith('4')) {
    console.log(item);
  }
});

let n;
n = prompt('Введите число');
number:
for (let i = 2; i <= n; i++) {

  for (let j = 2; j < i; j++) {
    if (i % j === 0) continue number;
  }
  console.log(i + ' Делители этого числа: 1 и ' + i);
}
