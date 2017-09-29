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


function leftTurnedBackHelper(backFace, leftFace, line) {
  var newFace = [];

  backFace.map(function(value, index) {
    newFace[index] = backFace[index];
  });

  switch (line) {
    case 'TOP':
      newFace[6] = leftFace[2];
      newFace[7] = leftFace[1];
      newFace[8] = leftFace[0];
      break;

    case 'MIDDLE':
      newFace[3] = leftFace[5];
      newFace[4] = leftFace[4];
      newFace[5] = leftFace[3];
      break;

    case 'BOTTOM':
      newFace[0] = leftFace[8];
      newFace[1] = leftFace[7];
      newFace[2] = leftFace[6];
      break;

  }

  return newFace;
}

function backTurnedLeftHelper(leftFace, backFace, line) {
  var newFace = [];

  leftFace.map(function(value, index) {
    newFace[index] = leftFace[index];
  });

  switch (line) {
    case 'BOTTOM':
      newFace[6] = backFace[2];
      newFace[7] = backFace[1];
      newFace[8] = backFace[0];
      break;

    case 'MIDDLE':
      newFace[3] = backFace[5];
      newFace[4] = backFace[4];
      newFace[5] = backFace[3];
      break;

    case 'TOP':
      newFace[0] = backFace[8];
      newFace[1] = backFace[7];
      newFace[2] = backFace[6];
      break;

  }

  return newFace;
}


function backTurnedRightHelper(rightFace, backFace, line) {
  var newFace = [];

  rightFace.map(function(value, index) {
    newFace[index] = rightFace[index];
  });

  switch (line) {
    case 'BOTTOM':
      newFace[6] = backFace[2];
      newFace[7] = backFace[1];
      newFace[8] = backFace[0];
      break;

    case 'MIDDLE':
      newFace[3] = backFace[5];
      newFace[4] = backFace[4];
      newFace[5] = backFace[3];
      break;

    case 'TOP':
      newFace[0] = backFace[8];
      newFace[1] = backFace[7];
      newFace[2] = backFace[6];
      break;

  }

  return newFace;
}

function rightTurnedBackHelper(backFace, rightFace, line) {
  var newFace = [];

  backFace.map(function(value, index) {
    newFace[index] = backFace[index];
  });

  switch (line) {
    case 'TOP':
      newFace[6] = rightFace[2];
      newFace[7] = rightFace[1];
      newFace[8] = rightFace[0];
      break;

    case 'MIDDLE':
      newFace[3] = rightFace[5];
      newFace[4] = rightFace[4];
      newFace[5] = rightFace[3];
      break;

    case 'BOTTOM':
      newFace[0] = rightFace[8];
      newFace[1] = rightFace[7];
      newFace[2] = rightFace[6];
      break;

  }

  return newFace;
}

module.exports = {
  simpleCaseHelper: simpleCaseHelper,
  leftTurnedBackHelper: leftTurnedBackHelper,
  backTurnedRightHelper: backTurnedRightHelper,
  rightTurnedBackHelper: rightTurnedBackHelper,
  backTurnedLeftHelper: backTurnedLeftHelper
};

