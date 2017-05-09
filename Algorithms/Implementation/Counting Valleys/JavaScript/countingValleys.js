function processData(input) {
  let height = 0;
  let valleys = 0;
  let inputArr = input.split('\n');
  let length = Number(inputArr.shift());
  let hike = inputArr.shift();
  
  for (let i = 0; i < length; ++i) {
    if (hike[i] === 'U') {
      ++height;
    } else {
      if (height === 0) {
        ++valleys;
      }
      --height;
    }
  }
  console.log(valleys);
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

