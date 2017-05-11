function processData(input) {
  let inputArr = input.split('\n');
  let strings = Number(inputArr.shift());
  let gems = [];
  let first = inputArr.shift();
  
  for (let i = 0; i < first.length; ++i) {
    if (gems.indexOf(first[i]) === -1) {
      gems.push(first[i]);
    }
  }
  
  for (let i = 1; i < strings; ++i) {
    let str = inputArr.shift();
    for (let j = 0; j < gems.length; ++j) {
      
      if (str.indexOf(gems[j]) === -1) {
        gems.splice(j, 1);
        --j;
      }
    }
  }
  console.log(gems.length);
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

