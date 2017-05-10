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
  a = readLine().split(' ');
  a = a.map(Number);

  a.sort( (a, b) => { return a - b; } );
  let counts = [];
  let pairs = [];
  let max = Math.max.apply(null, a);
  let min = Math.min.apply(null, a);
  
  for (let i = min; i <= max; ++i) {
    counts.push(count(a, i));
  }
  
  if (counts.length === 1) {
    pairs.push(counts[0])
  } else {
    for (let i = 0; i < counts.length; ++i) {
      pairs.push(counts[i] + counts[i+1] || 0);
    }
  }
  
  console.log(Math.max.apply(null, pairs));
}

function count(arr, item) {
  let results = 0;
  arr.forEach((v) => {
    if (v === item) {
      ++results;
    }
  });
  return results;
}

