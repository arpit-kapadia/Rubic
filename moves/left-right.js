var turnAround = require('../helpers/turn-here-to-there.js');
var rotate = require('../helpers/rotation.js');

var left = function(cube) {
  var front = cube.right;
  var left = cube.front;
  var top = rotate(cube.top,'CLOCKWISE');
  var bottom = rotate(cube.bottom, 'ANTI_CLOCKWISE');
  var back = turnAround(cube.left);
  var right = turnAround(cube.back);

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

var right = function(cube) {
  var front = cube.left;
  var left = turnAround(cube.back);
  var top = rotate(cube.top,'ANTI_CLOCKWISE');
  var bottom = rotate(cube.bottom, 'CLOCKWISE');
  var back = turnAround(cube.right);
  var right = cube.front;

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
  left: left,
  right: right
}; 
