function processData(input) {
  
  let temp = readLine().split(' ');
  let N = temp[0];
  let Q = temp[1];
    
  let currQuery;
  let query;
  let x;
  let y;
  let seq;
  let lastAns = 0;
    
  let list = [];
  for (let i = 0; i < N; ++i) {
    // Fill up list with empty arrays
    list[i] = [];
  }
  
  for (let i = 0; i < Q; ++i) {
    // get next query
    currQuery = readLine().split(' ');
    query = currQuery[0];
    x = currQuery[1];
    y = currQuery[2];
      
    // 1. Find the sequence, *seq*, at index ((*x* ^ *lastAns*) % *N*) in *segList*
    seq = list[(x ^ lastAns) % N];
    
    // If query #1
    if (Number(query) === 1) {
        
      // 2. Append integer *y* to sequence *seq*
      seq.push(y);
    }
    
    // If query #2
    else if (Number(query) === 2) {
        
      // 2. Find the value of element *y % size* in *seq* (where *size* is the size of *seq*) and assign it to *lastAns*
      lastAns = seq[y % seq.length];
        
      // 3. Print the new value of *lastAns* on a new line
      console.log(lastAns);
    }
  }
} 

function readLine() {
    return input_stdin_array[input_currentline++];
}

process.stdin.resume();
process.stdin.setEncoding("ascii");

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on("data", function (input) {
    input_stdin += input;
});

process.stdin.on("end", function () {
   input_stdin_array = input_stdin.split("\n");
   processData(input_stdin);
});

