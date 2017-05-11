function processData(input) {
  let inputArr = input.split('\n');
  let cases = parseInt(inputArr.shift());
  
  for (let i = 0; i < cases; ++i) {
    let str = inputArr.shift();
    let hits = 0;
    for (let j = 0; j < str.length - 1; ++j) {
      if (str[j] === str[j+1]) {
        ++hits;
      }
    }
    console.log(hits);
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

