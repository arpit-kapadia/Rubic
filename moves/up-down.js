// Our top and bottom index-vallue-replacements are by order but left-right replacements are not
var rotate = require('../helpers/rotation.js');


var up = function(cube) {
  var front = cube.bottom;
  var bottom = cube.back;
  var back = cube.top;
  var top = cube.front;
  var left = rotate(cube.left, 'ANTI_CLOCKWISE');
  var right = rotate(cube.right, 'CLOCKWISE');

  var rotatedCube = {
    front: front,
    top: top,
    back: back,
    bottom: bottom,
    left: left,
    right: right
  };

  return rotatedCube;
}

var down = function(cube) {
  var front = cube.top;
  var bottom = cube.front;
  var back = cube.bottom;
  var top = cube.back;
  var left = rotate(cube.left, 'CLOCKWISE');
  var right = rotate(cube.right, 'ANTI_CLOCKWISE');

  var rotatedCube = {
    front: front,
    top: top,
    back: back,
    bottom: bottom,
    left: left,
    right: right
  };

  return rotatedCube;
}

module.exports = {
  up: up,
  down: down
};
