var leftToBack = function(leftFace) {
  var backFace = [];

  backFace[0] = leftFace[8];
  backFace[1] = leftFace[7];
  backFace[2] = leftFace[6];
  backFace[3] = leftFace[5];
  backFace[4] = leftFace[4];
  backFace[5] = leftFace[3];
  backFace[6] = leftFace[2];
  backFace[7] = leftFace[1];
  backFace[8] = leftFace[0];

  return backFace;
}
