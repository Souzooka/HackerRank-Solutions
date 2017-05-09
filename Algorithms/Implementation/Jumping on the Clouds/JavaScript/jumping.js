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
  c = readLine().split(' ');
  c = c.map(Number);
  let jumps = 0;
  let pos = 0;
  
  // Assuming no unwinnable games (e.g. 2 thunderclouds in a row)
  while (pos !== n-1) {
    ++jumps
    if (c[pos+2] === 1 || c[pos+2] === undefined) {
      ++pos;
    } else {
      pos += 2;
    }
  }
  console.log(jumps);

}

