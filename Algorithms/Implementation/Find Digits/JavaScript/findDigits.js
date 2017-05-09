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
  var t = parseInt(readLine());
  for(var a0 = 0; a0 < t; a0++){
    var n = parseInt(readLine());
    const digits = String(n).split('').map( (v) => { return Number(v) });
    let hits = 0;
    
    for (let i = 0; i < digits.length; ++i) {
      if (n % digits[i] === 0) {
        ++hits;
      }
    }
    console.log(hits);
  }

}

