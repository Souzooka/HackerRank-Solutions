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
    var n = parseInt(readLine());
    var a = [];
    for(a_i = 0; a_i < n; a_i++){
       a[a_i] = readLine().split(' ');
       a[a_i] = a[a_i].map(Number);
    }

    let diagonalsArr1 = [];
    let diagonalsArr2 = [];
    let iterator = 0;
    
    for (let i = n-1; i >= 0; --i) {
        diagonalsArr1.push(a[i][i]);
        diagonalsArr2.push(a[i][iterator]);
        ++iterator;
    }
    
    let diagonalsSum1 = diagonalsArr1.reduce( (acc, curr) => {
        return acc + curr;
    });
    
    let diagonalsSum2 = diagonalsArr2.reduce( (acc, curr) => {
        return acc + curr;
    });
    
    console.log(Math.abs(diagonalsSum1 - diagonalsSum2));
}

