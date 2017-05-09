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

function getWays(squares, d, m){
  let results = 0;
  for (let i = 0; i <= squares.length-m; ++i) {
    let sum = 0;
    for (let j = i; j < i+m; ++j) {
      sum += squares[j];
    }
    if (sum === d) {
      ++results;
    }
  }
  return results;
}

function main() {
  var n = parseInt(readLine());
  s = readLine().split(' ');
  s = s.map(Number);
  var d_temp = readLine().split(' ');
  var d = parseInt(d_temp[0]);
  var m = parseInt(d_temp[1]);
  var result = getWays(s, d, m);
  console.log(result);
}

