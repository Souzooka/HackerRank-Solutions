const UINT_MAX = 4294967295;

function processData(input) {
  const inputArr = input.split('\n');
  const cases = parseInt(inputArr.shift());

  for (let i = 0; i < cases; ++i) {
    console.log(Math.abs(parseInt(inputArr.shift()) - UINT_MAX));
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
