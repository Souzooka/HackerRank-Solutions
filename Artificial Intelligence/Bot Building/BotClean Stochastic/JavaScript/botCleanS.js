/*jshint esversion:6*/
function processData(input) {
  let inputArr = input.split('\n');
  let robot = {r: inputArr[0][0], c:inputArr[0][1]};
  inputArr.shift();
  let grid = input;

  nextMove(robot, grid);
}

function nextMove(robot, grid) {

}

function findTrash(grid) {

  let trash = null;
  for (let i = 0; i < grid.length; ++i) {
    for (let j = 0; j < grid.length; ++j) {
      if (grid[i][j] === 'd') {
        trash = {r: i, c: j};
      }
    }
    if (trash) {
      break;
    }
  }
  return trash;
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
