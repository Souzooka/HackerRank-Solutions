function processData(input) {
  let inputArr = input.split('\n');
  let length = inputArr.shift().split(' ').map(Number);
  let arr = inputArr.shift().split(' ').map(Number);
  
  for (let i = 1; i < arr.length; ++i) {
    let tmp = arr[i];
    for (let j = i; j >= 0; --j) {
      if (tmp > arr[j-1] || arr[j-1] === undefined) {
        arr[j] = tmp;
        break;
      } 
      else {
        arr[j] = arr[j-1];
      }
    }
    console.log(arr.join(' '));
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

