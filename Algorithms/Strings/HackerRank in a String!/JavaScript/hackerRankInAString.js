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
  var q = parseInt(readLine());
  for(var a0 = 0; a0 < q; a0++){
    var s = readLine();
    
    console.log((s.match(/h.{0,}a.{0,}c.{0,}k.{0,}e.{0,}r.{0,}r.{0,}a.{0,}n.{0,}k/g)) ? 'YES' : 'NO');
  }
}

