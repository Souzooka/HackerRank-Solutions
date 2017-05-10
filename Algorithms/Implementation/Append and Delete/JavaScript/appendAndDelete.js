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
  var t = readLine();
  var k = parseInt(readLine());

  // Sample 01 and similar cases
  if (s.length === t.length && (k > s.length * 2) || s === t && (!(k & 1))) {
    console.log('Yes');
  } else {
    
    let diff = [];
    let totalOps = 0;
    let longest = (s.length > t.length) ? s.length : t.length;
    for (let i = 0; i < longest; ++i) {
      if (s[i] === t[i]) {
        diff.push(0);
      } else {
        diff.push(1);
      }
    }
    
    if (diff.indexOf(1) !== -1) {
      totalOps += (diff.length - diff.indexOf(1));
      if (s.length < t.length) { 
        totalOps -= (t.length - s.length);
      }
    }
    
    s = s.slice(0, diff.indexOf(1));
    totalOps += Math.abs(s.length - t.length);

    if (totalOps <= k && (!((totalOps - k) & 1) || k > (totalOps + s.length + t.length))) {
      console.log('Yes');
    } else {
      console.log('No');
    }
  }
}

