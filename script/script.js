'use strict';

let lang = prompt('Введите язык');
let ruDay = ['Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье'];
let enDay = ['Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday'];
if (lang === 'ru') {
  console.log(ruDay);
}
else if (lang === 'en') {
  console.log(enDay);
}

switch (lang) {
  case 'en':
    console.log(enDay);
    break;
  case 'ru':
    console.log(ruDay);
    break;
}

let day = {
  ru: ['Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье'],
  en: ['Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday']
};

console.log(day[lang]);

let namePerson = prompt('Ввидите имя');
let result = namePerson === 'Артем' ? 'Директор' :
  namePerson === 'Максим' ? 'Преподаватель' :
    'Студент';
console.log('Привет ' + result);