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
  A = readLine().split(' ');
  A = A.map(Number);
  let distances = [];
  
  for (let i = 0; i < A.length; ++i) {
    let j = A.indexOf(A[i], i+1);
    if (j !== -1) {
      distances.push(j - i);
    }
  }
  
  if (distances.length === 0) {
    console.log(-1);
  } else {
    console.log(Math.min.apply(null, distances));
  }

}

