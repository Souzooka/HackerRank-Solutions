/*jshint esversion:6*/
function processData(input) {
  let inputArr = input.split('\n');
  let robot = {x: inputArr[0][1], y:inputArr[0][0]};
  inputArr.shift();
  let grid = input;
  console.log(robot, grid);
}

function nextMove(robot, grid) {

}

function findTrash(grid) {

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
