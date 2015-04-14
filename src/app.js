/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var Vector2 = require('vector2');

var wind = new UI.Window({ fullscreen: true });

var text = new UI.Text({
  position: new Vector2(47, 100),
  size: new Vector2(97, 68),
 font: 'roboto-bold-subset-49',
 text: '05'
});
wind.add(text);
wind.show();

