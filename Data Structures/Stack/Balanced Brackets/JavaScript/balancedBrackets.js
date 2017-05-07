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
  
  for ( var a0 = 0; a0 < t; a0++ ) {
    let line = readLine();
    let brackets = {'{': '}', '[': ']', '(': ')'}
    let stack = [];
    let cont;
    
    if (line.length & 1) {
      console.log('NO');
      continue;
    }
    
    for (let i = 0; i < line.length; ++i) {
      if (Object.keys(brackets).indexOf(line[i]) !== -1) {
        stack.push(line[i]);
      }
      else if (line[i] !== brackets[stack[stack.length-1]]) {
        console.log('NO');
        cont = true;
        break;
      } else {
        stack.pop();
      }
    }
    
    if (cont) {
      continue;
    }
    
    if (!(stack.length === 0)) {
      console.log('NO');
      continue;
    }

    console.log('YES');
  }
}

