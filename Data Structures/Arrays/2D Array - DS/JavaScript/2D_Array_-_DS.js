process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var arr = [];
    for(arr_i = 0; arr_i < 6; arr_i++){
       arr[arr_i] = readLine().split(' ');
       arr[arr_i] = arr[arr_i].map(Number);
    }
    
    let sum = 0;
    let maximum = -Infinity;
    
    for (let i = 0; i < 4; ++i) {
        for (let j = 0; j < 4; ++j) {
            
            //top of hourglass
            sum += arr[i][j];
            sum += arr[i][j+1];
            sum += arr[i][j+2];
            
            //middle
            sum += arr[i+1][j+1];
            
            //bottom of hourglass
            sum += arr[i+2][j];
            sum += arr[i+2][j+1];
            sum += arr[i+2][j+2];
            
            if (sum > maximum) {
                maximum = sum;
            }
            sum = 0;
        }
    }
    console.log(maximum);
}

