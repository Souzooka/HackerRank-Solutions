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
    var x_temp = readLine().split(' ');
    var a = parseInt(x_temp[0]);
    var b = parseInt(x_temp[1]);
    var c = parseInt(x_temp[2]);
    
    const bDiff = Math.abs(b - c);
    const aDiff = Math.abs(a - c);
    
    if (bDiff === aDiff) {
      console.log('Mouse C');
    } else {
      console.log( (aDiff < bDiff) ? 'Cat A' : 'Cat B');
    }
  }
}

