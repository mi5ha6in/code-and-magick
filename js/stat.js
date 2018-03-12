'use strict';

var CLOUD_COORDINATE_X = 100;
var CLOUD_COORDINATE_Y = 10;
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_COLOR = '#fff';
var SHADOW_OFFSET = 10;
var SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';

var FONT_FAMILY = 'PT Mono';
var FONT_SIZE = '16px';
var FONT_COLOR = '#000';
var TEXT_OFFSET_X = 20;
var TEXT_OFFSET_Y = 40;
var VICTORY_TEXT = 'Ура вы победили!\nСписок результатов:';

// Возвращает наибльшее число из массива
// !Предпологается, что массив состоит из чисел!
var getMaxElementOfArray = function (array) {

  if (array.length === 0) {
    return -1;
  }

  var maxElement = array[0];

  for (var i = 1; i < array.length; i++) {
    if (maxElement < array[i]) {
      maxElement = array[i];
    }
  }

  return maxElement;
};


// Рисует облако для вывода статистики
var drawCloud = function (ctx, cloudCoordinateX, cloudCoordinateY, cloudWidth, cloudHeight, cloudColor) {
  var offset = 10;
  ctx.fillStyle = cloudColor;
  ctx.beginPath();
  ctx.moveTo(cloudCoordinateX, cloudCoordinateY);
  ctx.lineTo(cloudCoordinateX + offset, cloudCoordinateY + cloudHeight / 2);
  ctx.lineTo(cloudCoordinateX, cloudCoordinateY + cloudHeight);
  ctx.lineTo(cloudCoordinateX + cloudWidth / 2, cloudCoordinateY + cloudHeight - offset);
  ctx.lineTo(cloudCoordinateX + cloudWidth, cloudCoordinateY + cloudHeight);
  ctx.lineTo(cloudCoordinateX + cloudWidth - offset, cloudCoordinateY + cloudHeight / 2);
  ctx.lineTo(cloudCoordinateX + cloudWidth, cloudCoordinateY);
  ctx.lineTo(cloudCoordinateX + cloudWidth / 2, cloudCoordinateY + offset);
  ctx.lineTo(cloudCoordinateX, cloudCoordinateY);
  ctx.closePath();
  ctx.fill();
};

// Выводит текст на канвас
var renderText = function (ctx, fontFamily, size, color, text) {
  ctx.fillStyle = color;
  ctx.font = size + fontFamily;
  text.split('\n').forEach(function (line, i) {
    ctx.fillText(line,
        CLOUD_COORDINATE_X + TEXT_OFFSET_X,
        CLOUD_COORDINATE_Y + TEXT_OFFSET_Y + 20 * i);
  });

};

window.renderStatistics = function (ctx, names, times) {

  drawCloud(ctx,
      CLOUD_COORDINATE_X + SHADOW_OFFSET,
      CLOUD_COORDINATE_Y + SHADOW_OFFSET,
      CLOUD_WIDTH, CLOUD_HEIGHT, SHADOW_COLOR);

  drawCloud(ctx,
      CLOUD_COORDINATE_X, CLOUD_COORDINATE_Y,
      CLOUD_WIDTH, CLOUD_HEIGHT, CLOUD_COLOR);

  renderText(ctx, FONT_FAMILY, FONT_SIZE, FONT_COLOR, VICTORY_TEXT);
};
