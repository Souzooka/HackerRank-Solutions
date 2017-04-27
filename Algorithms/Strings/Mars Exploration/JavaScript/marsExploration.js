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
  var S = readLine();
  let mutations = 0;

  // Make a string to compare against
  const word = 'SOS'.repeat(S.length / 3);

  for (let i = 0; i < word.length; ++i) {
    if (S[i] !== word[i]) {
      ++mutations;
    }
  }
  console.log(mutations);
}