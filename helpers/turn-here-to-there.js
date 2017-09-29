var turnAround = function(face) {
  var turnedFace = [];

  turnedFace[0] = face[8];
  turnedFace[1] = face[7];
  turnedFace[2] = face[6];
  turnedFace[3] = face[5];
  turnedFace[4] = face[4];
  turnedFace[5] = face[3];
  turnedFace[6] = face[2];
  turnedFace[7] = face[1];
  turnedFace[8] = face[0];

  return turnedFace;
}

module.exports = turnAround;
