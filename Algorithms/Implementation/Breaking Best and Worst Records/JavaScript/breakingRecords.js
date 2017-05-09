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

function getRecord(s){
  let inc = 0;
  let dec = 0;
  let maxCurr = s[0] || 0;
  let minCurr = s[0] || 0;

  s.forEach( (v) => {
    if (v > maxCurr) {
      ++inc;
      maxCurr = v;
    }
    else if (v < minCurr) {
      ++dec;
      minCurr = v;
    }
  });
  console.log(`${inc} ${dec}`)
}

function main() {
    var n = parseInt(readLine());
    s = readLine().split(' ');
    s = s.map(Number);
    var result = getRecord(s);
    console.log(result.join(" "));

}

