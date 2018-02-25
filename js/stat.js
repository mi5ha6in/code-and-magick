'use strict';

var CLOUD_COORDINATE_X = 100;
var CLOUD_COORDINATE_Y = 10;
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_COLOR = '#ffffff';
var SHADOW_OFFSET = 10;
var SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';

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

window.renderStatistics = function (ctx, names, times) {
  drawCloud(ctx,
      CLOUD_COORDINATE_X + SHADOW_OFFSET,
      CLOUD_COORDINATE_Y + SHADOW_OFFSET,
      CLOUD_WIDTH, CLOUD_HEIGHT, SHADOW_COLOR);

  drawCloud(ctx,
      CLOUD_COORDINATE_X, CLOUD_COORDINATE_Y,
      CLOUD_WIDTH, CLOUD_HEIGHT, CLOUD_COLOR);
};
