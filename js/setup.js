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
  return array[randomInteger(0, array.length - 1)];
};

//  Возвращает случайное имя
var getRandomName = function (arrayName) {
  return getRandomArrayData(arrayName);
};

//  Возвращает случайную фамилию
var getRandomLastName = function (arrayLastName) {
  return getRandomArrayData(arrayLastName);
};

//  Возвращает случайный цвет куртки
var getRandomCoatColor = function (arrayCoatColor) {
  return getRandomArrayData(arrayCoatColor);
};

//  Возвращает случайный цвет глаз
var getRandomEyesColor = function (arrayEyesColor) {
  return getRandomArrayData(arrayEyesColor);
};

//  Возвращает случайный объект волшебника
var getRandomWizard = function (arrayName, arrayLastName, arrayCoatColor, arrayEyesColor) {
  var wizard = {};
  wizard.name = getRandomName(arrayName);
  wizard.lastName = getRandomLastName(arrayLastName);
  wizard.coatColor = getRandomCoatColor(arrayCoatColor);
  wizard.eyesColor = getRandomEyesColor(arrayEyesColor);
  return wizard;
};

//  Возвращает массив случайных влошебников
var getArrayWizards = function (arrayName, arrayLastName, arrayCoatColor, arrayEyesColor, wizardsLength) {
  var arrayWizards = [];

  for (var i = 0; i < wizardsLength; i++) {
    arrayWizards.push(getRandomWizard(arrayName, arrayLastName, arrayCoatColor, arrayEyesColor));
  }

  return arrayWizards;
};

var arrayWizards = getArrayWizards(WIZARDS_NAME, WIZARDS_LAST_NAME, COAT_COLORS, EYES_COLORS, 4);
