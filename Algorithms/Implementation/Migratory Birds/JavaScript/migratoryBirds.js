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
  types = readLine().split(' ');
  types = types.map(Number);

  let maxBird = null;
  let max = 0;
  
  for (let i = 1; i <= 5; ++i) {
    tmp = count(types, i)
    if (tmp > max) {
      maxBird = i;
      max = tmp;
    }
  }
  console.log(maxBird);
}

function count(arr, item) {
  let result = 0;
  for (let i = 0; i < arr.length; ++i) {
    if (item === arr[i]) {
      ++result;
    }
  }
  return result;
}

