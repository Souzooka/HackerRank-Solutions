function processData(input) {
    let sum = 0;
    
    for (let i = input.length; i > 0; --i) {
        for (let j = i-1; j >= 0; --j) {
            sum += parseInt(input.slice(j, i));
        }
    }
    
    console.log(sum % (1e9+7));
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

