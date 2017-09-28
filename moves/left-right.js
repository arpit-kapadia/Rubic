var left = function(cube) {
  var front = cube.right;
  var left = cube.front;
  var top = rotate(cube.top,'CLOCKWISE');
  var bottom = rotate(cube.bottom, 'ANTI_CLOCKWISE');
  var back = ;
  var right = ;

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
