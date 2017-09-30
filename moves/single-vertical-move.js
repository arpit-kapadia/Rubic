var rotate = require('../helpers/rotation.js');
var verticalTurnHelper = require('../helpers/vertical-turn-helper.js');

var turnUp = function(cube, line) {
  var front = verticalTurnHelper(cube.front, cube.bottom, line);
  var top = verticalTurnHelper(cube.top, cube.front, line);
  var bottom = verticalTurnHelper(cube.bottom, cube.back, line);
  var back = verticalTurnHelper(cube.back, cube.top, line);
  var right = line == 'RIGHT' ? rotate(cube.right, 'ANTI_CLOCKWISE') : cube.right;
  var left = line == 'LEFT' ? rotate(cube.left, 'CLOCKWISE') : cube.left;

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

var turnDown = function(cube, line) {
  var front = verticalTurnHelper(cube.front, cube.top, line);
  var top = verticalTurnHelper(cube.top, cube.back, line);
  var bottom = verticalTurnHelper(cube.bottom, cube.front, line);
  var back = verticalTurnHelper(cube.back, cube.bottom, line);
  var right = line == 'RIGHT' ? rotate(cube.right, 'ANTI_CLOCKWISE') : cube.right;
  var left = line == 'LEFT' ? rotate(cube.left, 'CLOCKWISE') : cube.left;

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
  turnUp: turnUp,
  turnDown: turnDown
};
