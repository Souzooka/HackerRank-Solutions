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

function sumOfAllNums(n) {
  if (n <= 0) {
    return 0;
  }
  
  return sumOfAllNums(n-1) + n;
}


function main() {
  const T = parseInt(readLine());
  for (let a0 = 0; a0 < T; a0++) {
    const N = parseInt(readLine());
    console.log(sumOfAllNums(N-1));
  }
}

