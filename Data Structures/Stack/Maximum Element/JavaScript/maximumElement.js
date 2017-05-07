function processData(input) {
  let inputArr = input.split('\n');
  let loops = parseInt(inputArr.shift());
  let stack = [];
  
  for (let i = 0; i < loops; ++i) {
    let operationArr = inputArr[i].split(' ');
    
    switch (parseInt(operationArr[0])) {
      case 1: {
        stack.push(parseInt(operationArr[1]));
        break;
      }
      case 2: {
        stack.pop();
        break;
      }
      case 3: {
        console.log(Math.max.apply(null, stack));
        break;
      }
      default: {
        break;
      }
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

