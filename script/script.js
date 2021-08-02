'use strict';

let lang = prompt('Введите язык');
let day = {
  ru: ['Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье'],
  en: ['Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday']
};

if (lang === 'ru') {
  console.log(day['ru']);
}
else if (lang === 'en') {
  console.log(day['en']);
}

switch (lang) {
  case 'en':
    console.log(day['en']);
    break;
  case 'ru':
    console.log(day['ru']);
    break;
}

console.log(day[lang]);

let namePerson = prompt('Ввидите имя');
let result = namePerson === 'Артем' ? 'Директор' :
  namePerson === 'Максим' ? 'Преподаватель' :
    'Студент';
console.log('Привет ' + result);