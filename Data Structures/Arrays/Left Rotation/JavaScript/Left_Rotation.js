function processData(input) {
    let inputArr = input.match(/\S+/g);
    let length = parseInt(inputArr.shift());
    let rotations = parseInt(inputArr.shift());
    let newArr = []
    
    for (let i = 0; i < length; ++i) {
        newArr[i] = inputArr[(i + rotations) % length]
    }
    console.log(newArr.join(' '));
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

