function processData(input) {
  inputArr = input.split('\n');
  inputArr.shift();

  // Very simple and slow algorithm which systematically turns all lights off
  for (let i = 0; i < inputArr.length; ++i) {
    for (let j = 0; j < inputArr[i].length; ++j) {
      if (inputArr[i][j] === '1') {
        console.log(`${i} ${j}`);
        return;
      }
    }
  }
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

