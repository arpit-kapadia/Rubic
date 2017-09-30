var rotate = require('../helpers/rotation.js');
var simpleCaseHelper = require('../helpers/horizontal-turn-helpers.js').simpleCaseHelper;
var changeInBackHelper = require('../helpers/horizontal-turn-helpers.js').changeInBackHelper;
var changeFromBackHelper = require('../helpers/horizontal-turn-helpers.js').changeFromBackHelper;

var turnLeft = function(cube, line) {
  var front = simpleCaseHelper(cube.front, cube.right, line)
  var top = rotate(cube.top, 'CLOCKWISE');
  var bottom = rotate(cube.bottom, 'ANTI_CLOCKWISE');
  var back = changeInBackHelper(cube.back, cube.left, line);
  var right = changeFromBackHelper(cube.right, cube.back, line);
  var left = simpleCaseHelper(cube.left, cube.front, line);

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

var turnRight = function(cube, line) {
  var front = simpleCaseHelper(cube.front, cube.left, line)
  var top = rotate(cube.top, 'ANTI_CLOCKWISE');
  var bottom = rotate(cube.bottom, 'CLOCKWISE');
  var back = changeInBackHelper(cube.back, cube.right, line);
  var right = simpleCaseHelper(cube.right, cube.front, line);
  var left = changeFromBackHelper(cube.left, cube.back, line);

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
  turnLeft: turnLeft,
  turnRight: turnRight
};
