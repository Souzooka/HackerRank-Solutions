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
  let queries = [];

  for (let i = 0; i < queriesCount; ++i) {
    queries.push(inputArr.shift());
  }

  console.log(strings)
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
