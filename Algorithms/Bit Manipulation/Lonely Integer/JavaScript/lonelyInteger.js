function processData(input) {
  let inputArr = input.split('\n');
  const intCount = inputArr.shift();
  inputArr = inputArr.join().split(' ');
  let sum = 0;

  for (let i = 0; i < inputArr.length; ++i) {
    sum ^= parseInt(inputArr[i]);
  }
  console.log(sum);
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
