function processData(input) {
    let inputArr = input.match(/\S+/g);
    let searchVal = inputArr.shift();
    inputArr.shift() // not needed in js
    console.log(inputArr.indexOf(searchVal));
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
