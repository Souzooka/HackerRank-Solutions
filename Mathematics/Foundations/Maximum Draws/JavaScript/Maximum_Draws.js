function processData(input) {
  let inputArr = input.split('\n');
  let testCases = Number(inputArr.shift());
  
  for (let i = 0; i < testCases; ++i) {
    let pairs = Number(inputArr.shift());
    console.log(++pairs);
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

