function processData(input) {
  let inputArr = input.split('\n');
  let length = inputArr.shift().split(' ').map(Number);
  let arr = inputArr.shift().split(' ').map(Number);
  quickSort(arr);
} 

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  
  let pivot = arr.shift();
  let lower = [];
  let higher = [];
  
  arr.forEach((v) => {
    if (v > pivot) {
      higher.push(v);
    } else {
      lower.push(v);
    }
  })

  let sortedArr = quickSort(lower).concat(pivot).concat(quickSort(higher));
  sortedArr.forEach((v) => {
    process.stdout.write(`${v} `);
  });
  process.stdout.write('\n');
  return sortedArr;
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

