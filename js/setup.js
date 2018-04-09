'use strict';

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');

var WIZARDS_NAME =
[
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

var WIZARDS_LAST_NAME =
[
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг',
];

var COAT_COLORS =
[
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)',
];

var EYES_COLORS =
[
  'black',
  'red',
  'blue',
  'yellow',
  'green',
];

//  Возвращает случайное целое число из диапазона
var randomInteger = function (min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
};

//  Возвращает случайное значение из массива
var getRandomArrayData = function (array) {
  return array[randomInteger(0, array.length - 1)]
}

//  Возвращает случайное имя
var getRandomName = function (arrayName) {
  return getRandomArrayData(arrayName);
}

//  Возвращает случайную фамилию
var getRandomLastName = function (arrayLastName) {
  return getRandomArrayData(arrayLastName);
}

//  Возвращает случайное полное имя
var getRandomFullName = function (arrayName, arrayLastName) {
  return getRandomName(arrayName) + ' ' + getRandomLastName(arrayLastName);
};
