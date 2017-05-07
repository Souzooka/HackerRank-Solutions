function correlationCoefficient(dataArr1, dataArr2) {

  if (dataArr1.length !== dataArr2.length) {
    throw new Error('correlationCoefficient: The sets aren\'t the same size.');
  }

  let size = dataArr1.length;
  let dataArr1Total = 0;
  let dataArr2Total = 0;
  let dataArr1SquaredTotal = 0;
  let dataArr2SquaredTotal = 0;
  let dataArr1dataArr2Total = 0;

  for (let i = 0; i < size; ++i) {
    dataArr1Total += dataArr1[i];
    dataArr2Total += dataArr2[i];
    dataArr1SquaredTotal += Math.pow(dataArr1[i], 2);
    dataArr2SquaredTotal += Math.pow(dataArr2[i], 2);
    dataArr1dataArr2Total += dataArr1[i] * dataArr2[i];
  }

  // Math is hard
  let temp2 = size * dataArr1dataArr2Total;
  let temp3 = dataArr1Total * dataArr2Total;
  let temp4 = temp2 - temp3;
  let temp5 = size * dataArr1SquaredTotal;
  let temp6 = dataArr1Total * dataArr1Total;
  let temp7 = temp5 - temp6;
  let temp8 = size * dataArr2SquaredTotal;
  let temp9 = dataArr2Total * dataArr2Total;
  let temp10 = temp8 - temp9;
  let temp11 = temp7 * temp10;
  let temp11a = Math.sqrt(temp11);
  let temp12 = temp4 / temp11a;

  return temp12;
}

function mean(arr) {
  return arr.reduce( (prev, curr) => {
    return prev + curr;
  }, 0) / arr.length;
}

function standardDeviation(arr) {
  let arrMean = mean(arr);
  let subtractMeanSquareArr = [];

  arr.forEach( (v) => {
    subtractMeanSquareArr.push(Math.pow(v - arrMean, 2));
  });

  return Math.sqrt(mean(subtractMeanSquareArr));
}

function regressionLine(arr1, arr2) {
  let standardDeviationX = standardDeviation(arr1);
  let standardDeviationY = standardDeviation(arr2);
  let correlation = correlationCoefficient(arr1, arr2);

  return correlation * (standardDeviationY / standardDeviationX);
}

// Note: Independent variable refers to the x line
console.log(regressionLine([4, 4, 5, 5], [8, 8, 10, 10]));