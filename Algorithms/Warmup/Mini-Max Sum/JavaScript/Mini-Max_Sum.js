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
    var a_temp = readLine().split(' ');
    var a = parseInt(a_temp[0]);
    var b = parseInt(a_temp[1]);
    var c = parseInt(a_temp[2]);
    var d = parseInt(a_temp[3]);
    var e = parseInt(a_temp[4]);
    const arr = [a, b, c, d, e];
    
    //4n (n)
    
    let minIndex = 0;
    arr.reduce( (acc, curr, index) => {
        if (curr < acc) {
            minIndex = index;
            return curr;
        }
        return acc;
    }, arr[0]);
    
    let maxIndex = 0;
    arr.reduce( (acc, curr, index) => {
        if (curr > acc) {
            maxIndex = index;
            return curr;
        }
        return acc;
    }, arr[0]);
    
    let min = arr.reduce( (acc, curr, index) => {
        if (index !== maxIndex) {
            return acc + curr;
        }
        return acc;
    }, 0);
    
    let max = arr.reduce( (acc, curr, index) => {
        if (index !== minIndex) {
            return acc + curr;
        }
        return acc;
    }, 0);
    
    console.log(min, max)
    
}
