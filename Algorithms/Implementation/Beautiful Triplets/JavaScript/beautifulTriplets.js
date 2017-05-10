function processData(input) {
  let inputArr = input.split('\n');
  let temp = inputArr.shift().split(' ');
  let length = Number(temp[0]);
  let beautifulNum = Number(temp[1]);
  let arr = inputArr.shift().split(' ').map(Number);
  
  let hits = 0;
  for (let i = 0; i < arr.length; ++i) {
    if (arr.indexOf(arr[i] + beautifulNum) !== -1 && arr.indexOf(arr[i] + (beautifulNum * 2)) !== -1) {
      ++hits;
    }
  }
  console.log(hits);
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

