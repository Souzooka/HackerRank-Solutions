/*jshint esversion:6*/

var readline = require('readline');

// Finds the correlation coefficient of two sets of data
// which have the same number of elements
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

function main() {
  process.stdout.write('Please enter in two arrays with the same length. (e.g. "1 2 3", "[1, 2, 3]")\n');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
  });
  let dataArr1;
  let dataArr2;

  rl.on('line', function(line){
    if (!dataArr1) {
      line = line.replace(/\[|\]|,/g, '');
      dataArr1 = line;
    } else {
      line = line.replace(/\[|\]|,/g, '');
      dataArr2 = line;
      dataArr1 = dataArr1.split(' ');
      dataArr2 = dataArr2.split(' ');
      dataArr1 = dataArr1.map( (v) => {
        return parseInt(v);
      });
      dataArr2 = dataArr2.map( (v) => {
        return parseInt(v);
      });
      console.log(`The correlation coefficient of these two datasets:
        ${correlationCoefficient(dataArr1, dataArr2)}`);
    }
  });
}

main();