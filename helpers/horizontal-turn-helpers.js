function simpleCaseHelper(initialFace, referenceFace, line) {
  var newFace = [];

  initialFace.map(function(value, index) {
    newFace[index] = initialFace[index];
  });

  switch (line) {
    case 'TOP':
      newFace[0] = referenceFace[0];
      newFace[1] = referenceFace[1];
      newFace[2] = referenceFace[2];
      break;

    case 'MIDDLE':
      newFace[3] = referenceFace[3];
      newFace[4] = referenceFace[4];
      newFace[5] = referenceFace[5];
      break;

    case 'BOTTOM':
      newFace[6] = referenceFace[6];
      newFace[7] = referenceFace[7];
      newFace[8] = referenceFace[8];
      break;

  }

  return newFace;
}


function changeInBackHelper(initialFace, referenceFace, line) {
  var newFace = [];

  initialFace.map(function(value, index) {
    newFace[index] = initialFace[index];
  });

  switch (line) {
    case 'TOP':
      newFace[6] = referenceFace[2];
      newFace[7] = referenceFace[1];
      newFace[8] = referenceFace[0];
      break;

    case 'MIDDLE':
      newFace[3] = referenceFace[5];
      newFace[4] = referenceFace[4];
      newFace[5] = referenceFace[3];
      break;

    case 'BOTTOM':
      newFace[0] = referenceFace[8];
      newFace[1] = referenceFace[7];
      newFace[2] = referenceFace[6];
      break;

  }

  return newFace;
}


function changeFromBackHelper(initialFace, referenceFace, line) {
  var newFace = [];

  initialFace.map(function(value, index) {
    newFace[index] = initialFace[index];
  });

  switch (line) {
    case 'BOTTOM':
      newFace[6] = referenceFace[2];
      newFace[7] = referenceFace[1];
      newFace[8] = referenceFace[0];
      break;

    case 'MIDDLE':
      newFace[3] = referenceFace[5];
      newFace[4] = referenceFace[4];
      newFace[5] = referenceFace[3];
      break;

    case 'TOP':
      newFace[0] = referenceFace[8];
      newFace[1] = referenceFace[7];
      newFace[2] = referenceFace[6];
      break;

  }

  return newFace;
}

module.exports = {
  simpleCaseHelper: simpleCaseHelper,
  changeInBackHelper: changeInBackHelper,
  changeFromBackHelper: changeFromBackHelper,
};

