function processData(input) {
  let inputArr = input.split('\n');

  // shift length off input, it's cleaner not to pass it into these functions
  inputArr.shift();

  let arr = inputArr[0].split(' ');
  arr = arr.map( (v) => {
    return parseInt(v);
  });

  console.log(mean(arr));
  console.log(median(arr));
  console.log(mode(arr));
  console.log(standardDeviation(arr));
  console.log((mean(arr) - confidenceInterval(arr)), (mean(arr) + confidenceInterval(arr)));
}

function mean(arr) {
  return arr.reduce( (prev, curr) => {
    return prev + curr;
  }, 0) / arr.length;
}

function median(arr) {
  if (arr.length & 1) {
    return arr.sort( (a, b) => {
      return a - b;
    })[Math.floor(arr.length / 2)];
  } else {
    arr = arr.sort( (a, b) => {
      return a - b;
    });
    return (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2;
  }
}

function mode(arr) {
  let count = {};
  let mode = null;
  let max = 0;

  arr.forEach( (v) => {
    if (!count[v]) {
      count[v] = 0;
    }
    ++count[v];

    if (count[v] > max) {
      mode = v;
      max = count[v];
    }
  });
  return mode;
}

function standardDeviation(arr) {
  let arrMean = mean(arr);
  let subtractMeanSquareArr = [];

  arr.forEach( (v) => {
    subtractMeanSquareArr.push(Math.pow(v - arrMean, 2));
  });

  return Math.sqrt(mean(subtractMeanSquareArr));
}

function confidenceInterval(arr) {
  // Represents 95% confidence
  const confidenceLevel = 1.96;

  return confidenceLevel * (standardDeviation(arr) / Math.sqrt(arr.length));
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
