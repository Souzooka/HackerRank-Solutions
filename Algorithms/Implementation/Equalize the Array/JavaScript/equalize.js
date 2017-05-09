function processData(input) {
  let inputArr = input.split('\n');
  let length = Number(inputArr.shift());
  let arr = inputArr[0].split(' ').map(Number);
  let counts = {};
  let maxItem = null;
  let maxInstances = 0;
  
  arr.forEach( (v) => {
    if (counts[v] === undefined) {
      let tmp = count(arr, v);
      counts[v] = tmp;
      if (tmp > maxInstances) {
        maxItem = v;
        maxInstances = tmp;
      }
    }
  });
  
  console.log (arr.length - arr.filter((v) => {return v === maxItem}).length);
  
} 

function count(arr, item) {
  let results = 0;
  arr.forEach( (v) => {
    if (item === v) {
      ++results;
    }
  });
  return results;
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

