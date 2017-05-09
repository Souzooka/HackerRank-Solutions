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
  c.sort();
  
  let itr = 0;
  let groups = [];
  
  while (itr < c.length) {
    let tmp = count(c, c[itr]);
    itr += tmp;
    groups.push(tmp);
  }
  
  console.log(groups.reduce( (prev, curr) => {
    return prev + (Math.floor(curr / 2));
  }, 0));
}

function count(arr, item) {
  let result = 0;
  arr.forEach( (v) => {
    if (v === item) {
      ++result;
    }
  });
  return result;
}

