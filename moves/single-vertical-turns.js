var turnLeftUp = function(cube) {
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

function calculateFace(inititalFace, referenceFace, rowOrCol) {
  var newFace = [];

  switch (rowOrCol) {
    case 'HORIZONTAL':
    case 'VERTICAL':
  }

  return newFace;
}
