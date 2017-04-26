function processData(input) {
    let inputArr = input.match(/\S+/g);
    let length = parseInt(inputArr.shift());
    let pivot = parseInt(inputArr[0]);
    let left = [];
    let right = [];
    let equal = [];
    
    for (let i = 0; i < length; ++i) {
        if (inputArr[i] < pivot) {
            left.push(parseInt(inputArr[i]));
        } 
        else if (inputArr[i] > pivot) {
            right.push(parseInt(inputArr[i]));
        } else {
            equal.push(parseInt(inputArr[i]));
        }
    }
    console.log(left.join(' '), equal.join(' '), right.join(' '));
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

