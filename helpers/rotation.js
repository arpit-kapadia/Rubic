var rotate = function(face, direction) {
  var newFace = [];
  switch (direction) {
    case 'CLOCKWISE':
      newFace[0] = face[6];
      newFace[1] = face[3];
      newFace[2] = face[0];
      newFace[3] = face[7];
      newFace[4] = face[4];
      newFace[5] = face[1];
      newFace[6] = face[8];
      newFace[7] = face[5];
      newFace[8] = face[2];

    case 'ANTI_CLOCKWISE':      
      newFace[0] = face[2];
      newFace[1] = face[5];
      newFace[2] = face[8];
      newFace[3] = face[1];
      newFace[4] = face[4];
      newFace[5] = face[7];
      newFace[6] = face[0];
      newFace[7] = face[3];
      newFace[8] = face[6];
  }

  return newFace;
}

module.exports = rotate;
