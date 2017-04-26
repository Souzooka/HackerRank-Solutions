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
  const n = parseInt(readLine());
  let xArr = [];
  let yArr = [];

  for (let i = 0; i < n; ++i) {
    let coords = readLine().split(' ')
    xArr.push(Number(coords[0]));
    yArr.push(Number(coords[1]));
  }
  
  console.log((xArr.every( (v, i, arr) => { return arr[0] === v; }) ||
               yArr.every( (v, i, arr) => { return arr[0] === v; })) ? 'YES' : 'NO');

}

