function processData(input) {
  let inputArr = input.split('\n');
  let cases = Number(inputArr.shift());
  for (let i = 0; i < cases; ++i) {
    // possible combinations simplify to N - 2 (with 1 being the min)
    let combinations = Number(input.shift()) - 2;
    if (combinations < 1) {
      combinations = 1;
    }

    let primes = 0;


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
