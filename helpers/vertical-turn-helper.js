function verticalTurnHelper(initialFace, referenceFace, line) {
  var newFace = [];

  initialFace.map(function(value, index) {
    newFace[index] = initialFace[index];
  });

  switch (line) {
    case 'LEFT':
      newFace[0] = referenceFace[0];
      newFace[3] = referenceFace[3];
      newFace[6] = referenceFace[6];
      break;

    case 'MIDDLE':
      newFace[1] = referenceFace[1];
      newFace[4] = referenceFace[4];
      newFace[7] = referenceFace[7];
      break;

    case 'RIGHT':
      newFace[2] = referenceFace[2];
      newFace[5] = referenceFace[5];
      newFace[8] = referenceFace[8];
      break;

    default:
      return newFace;
  }

  return newFace;
}

module.exports = verticalTurnHelper;
