process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var timeCharged = parseFloat(readLine());

  const trainingData =
`2.81,5.62
7.14,8.00
2.72,5.44
3.87,7.74
1.90,3.80
7.82,8.00
7.02,8.00
5.50,8.00
9.15,8.00
4.87,8.00
8.08,8.00
5.58,8.00
9.13,8.00
0.14,0.28
2.00,4.00
5.47,8.00
0.80,1.60
4.37,8.00
5.31,8.00
0.00,0.00
1.78,3.56
3.45,6.90
6.13,8.00
3.53,7.06
4.61,8.00
1.76,3.52
6.39,8.00
0.02,0.04
9.69,8.00
5.33,8.00
6.37,8.00
5.55,8.00
7.80,8.00
2.06,4.12
7.79,8.00
2.24,4.48
9.71,8.00
1.11,2.22
8.38,8.00
2.33,4.66
1.83,3.66
5.94,8.00
9.20,8.00
1.14,2.28
4.15,8.00
8.43,8.00
5.68,8.00
8.21,8.00
1.75,3.50
2.16,4.32
4.93,8.00
5.75,8.00
1.26,2.52
3.97,7.94
4.39,8.00
7.53,8.00
1.98,3.96
1.66,3.32
2.04,4.08
11.72,8.00
4.64,8.00
4.71,8.00
3.77,7.54
9.33,8.00
1.83,3.66
2.15,4.30
1.58,3.16
9.29,8.00
1.27,2.54
8.49,8.00
5.39,8.00
3.47,6.94
6.48,8.00
4.11,8.00
1.85,3.70
8.79,8.00
0.13,0.26
1.44,2.88
5.96,8.00
3.42,6.84
1.89,3.78
1.98,3.96
5.26,8.00
0.39,0.78
6.05,8.00
1.99,3.98
1.58,3.16
3.99,7.98
4.35,8.00
6.71,8.00
2.58,5.16
7.37,8.00
5.77,8.00
3.97,7.94
3.65,7.30
4.38,8.00
8.06,8.00
8.05,8.00
1.10,2.20
6.65,8.00`;

  let trainingDataArr = trainingData.split('\n');
  trainingDataArr = trainingDataArr.map( (v, i) => {
    let temp = trainingDataArr[i].split(',');

    return [parseFloat(temp[0]), parseFloat(temp[1])];
  });

  let arrX = [];
  let arrY = [];

  let maximumBattery = 0;

  trainingDataArr.forEach( (v) => {
    if (v[1] > maximumBattery) {
      maximumBattery = v[1];
    }
  });

  // Ignore datapoints where maximum battery is achieved
  trainingDataArr = trainingDataArr.filter( (v) => {
    return v[1] !== maximumBattery;
  });

  trainingDataArr.forEach( (v) => {
    arrX.push(v[0]);
    arrY.push(v[1]);
  })

  // Helper functions from other problems
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

  let result = regressionLine(arrX, arrY) * timeCharged;

  if (result > maximumBattery) {
    result = maximumBattery;
  }

  console.log(result)
}
