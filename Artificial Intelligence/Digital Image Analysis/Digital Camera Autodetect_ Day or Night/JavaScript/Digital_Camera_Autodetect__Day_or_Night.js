function processData(input) {
    // very simple algorithm
    
    const BRIGHTNESS_TOLERANCE = 100;
    let sum = 0;
    inputArr = input.split(' ');
    
    for (let i = 0; i < inputArr.length; ++i) {
        inputArr[i] = inputArr[i].split(',');
        sum += Math.max(parseInt(inputArr[i][0]), parseInt(inputArr[i][1]), parseInt(inputArr[i][2]));
    }

    if ((sum / inputArr.length) > BRIGHTNESS_TOLERANCE) {
        console.log('day');
    } else {
        console.log('night');
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

