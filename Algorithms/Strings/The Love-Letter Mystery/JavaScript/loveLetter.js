function processData(input) {
  const inputArr = input.split('\n');
  const cases = parseInt(inputArr.shift());
  
  for (let i = 0; i < cases; ++i) {
    const str = inputArr.shift();
    const revStr = str.split('').reverse().join('');
    let operations = 0;
    
    // for every letter for the first half of the string, increment operations
    // based on the diff between the reversed and forwards strings' charcode
    for (let j = 0; j < Math.floor(str.length / 2); ++j) {
      operations += Math.abs(str.charCodeAt(j) - revStr.charCodeAt(j));
    }
    console.log(operations)
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

