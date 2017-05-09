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

const asciiStart = 97;

function main() {
  h = readLine().split(' ');
  h = h.map(Number);
  var word = readLine();
  
  console.log(word.split('').reduce( (prev, curr) => {
    return (h[curr.charCodeAt(0) - asciiStart] > prev) ? 
            h[curr.charCodeAt(0) - asciiStart] : prev;
  }, 0) * word.length);

}

