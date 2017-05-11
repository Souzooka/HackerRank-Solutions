function processData(input) {
  let inputArr = input.split('\n');
  let tests = Number(inputArr.shift());
  
  for (let i = 0; i < tests; ++i) {
    let str = inputArr.shift();
    let rev = str.split('').reverse().join('');
    let funny = true;
    
    for (let j = 1; j < str.length; ++j) {
      if (Math.abs(str.charCodeAt(j) - str.charCodeAt(j-1)) ===
          Math.abs(rev.charCodeAt(j) - rev.charCodeAt(j-1))) {
        continue;
      } else {
        funny = false;
        break;
      }
    }
    
    if (funny) {
      console.log('Funny');
    } else {
      console.log('Not Funny');
    }
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

