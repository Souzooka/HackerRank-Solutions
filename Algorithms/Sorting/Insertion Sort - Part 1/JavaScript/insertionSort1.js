function processData(input) {
  let inputArr = input.split('\n');
  let length = parseInt(inputArr.shift());
  let arr = inputArr.shift().split(' ').map(Number);
  let toBeSorted = arr[arr.length-1];
  
  for (let i = arr.length-2; i >= -1; --i) {
    if (arr[i] > toBeSorted) {
      arr[i+1] = arr[i];
      console.log(arr.join(' '));
    } else {
      arr[i+1] = toBeSorted;
      console.log(arr.join(' '));
      break;
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

