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
  var s = readLine();
  s = s.replace(/\s/, '');
  let rows = Math.ceil(Math.sqrt(s.length));
  let columns = Math.floor(Math.sqrt(s.length));
  let encryptMatrix = [];
  for (let i = 0; i <= columns; ++i) {
    encryptMatrix[i] = s.slice(i*rows, (i+1)*rows).split('');
  }
  for (let i = 0; i < encryptMatrix[0].length; ++i) {
    let result = '';
    for (let j = 0; j < encryptMatrix.length; ++j) {
      (encryptMatrix[j][i] !== undefined) ?
        result += encryptMatrix[j][i] : result += '';
    }
    process.stdout.write(`${result} `);
  }

}
