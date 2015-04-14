var UI = require('ui');
var Vector2 = require('vector2');

var wind = new UI.Window({ fullscreen: true });

var text = new UI.Text({
  position: new Vector2(42, 90),
  size: new Vector2(65, 68),
 font: 'roboto-bold-subset-49',
 text: '05'
});
var image = new UI.Image({
  position: new Vector2(47, 32),
  size: new Vector2(50, 48),
  image: 'images/notok.png'
});
wind.add(image);
wind.add(text);
wind.show();
