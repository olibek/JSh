'use strict';
const fooString = function () {
  let mess = prompt('Ввидети аргумент!');
  if (typeof mess !== 'string') {
    alert('Введите строку');
  }
  else {
    mess = mess.trim();
    if (mess.length > 30) {
      mess = mess.substr(0, 30) + '...';
    }
  }
};
fooString();