function processData(input) {
  let inputArr = input.split('\n');
  inputArr.shift();
  let arr = inputArr.shift().split(' ').map(Number);
  for (let i = 0; i <= 99; ++i) {
    process.stdout.write(count(arr, i) + ' ');
  }
} 

function count(arr, item) {
  let result = 0;
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] === item) {
      ++result;
    }
  }
  return result;
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

