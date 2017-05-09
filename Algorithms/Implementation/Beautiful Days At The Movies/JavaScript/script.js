function processData(input) {
  const inputArr = input.split(' ');
  const i = Number(inputArr[0]);
  const j = Number(inputArr[1]);
  const k = Number(inputArr[2]);
  let beautifulCount = 0;
  
  for (let l = i; l <= j; ++l) {
    let reversed = Number(String(l).split('').reverse().join(''));
    let diff = Math.abs(reversed - l);
    
    if (diff % k === 0) {
      ++beautifulCount;
    }
  }
  console.log(beautifulCount);
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

