'use strict';

const colorName = document.querySelector('#color-name');
const colorButton = document.querySelector('#color-button');
const body = document.querySelector('body');

console.log(colorName);
console.log(body);

colorButton.style.padding = '5px 10px 5px 10px';
colorButton.style.borderRadius = '8px';

colorButton.addEventListener('click', function(){
  colorName.textContent = '#' + Math.floor(Math.random() * 10000012).toString(16);
  body.style.backgroundColor = '#' + Math.floor(Math.random() * 10000012).toString(16);
});