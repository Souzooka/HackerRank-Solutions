/*jshint esversion:6*/

function processData(input) {
  const inputArr = input.split('\n');
  const stringsCount = Number(inputArr.shift());
  let strings = [];

  for (let i = 0; i < stringsCount; ++i) {
    strings.push(inputArr.shift());
  }

  const queriesCount = Number(inputArr.shift());
  let queries = [];

  for (let i = 0; i < queriesCount; ++i) {
    queries.push(inputArr.shift());
  }

  console.log(queriesCount, queries);
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
