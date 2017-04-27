/*jshint esversion:6*/

function processData(input) {
  // Parse input
  const inputArr = input.split('\n');
  const stringsCount = Number(inputArr.shift());
  let strings = {};

  // Store a count of each string in an object for better performance
  // the alternative is iterating through strings for every query, which is slow
  for (let i = 0; i < stringsCount; ++i) {
    let string = inputArr.shift();
    if (!strings[string]) {
      strings[string] = 1;
    } else {
      ++strings[string];
    }
  }

  const queriesCount = Number(inputArr.shift());

  // Respond to our queries
  for (let i = 0; i< queriesCount; ++i) {
    let query = inputArr.shift();

    if (!strings[query]) {
      console.log('0');
    } else {
      console.log(String(strings[query]));
    }
  }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
