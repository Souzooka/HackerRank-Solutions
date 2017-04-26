/*jshint esversion:6*/
function processData(input) {
  let inputArr = input.split('\n');
  inputArr[0] = inputArr[0].split(' ');
  let robot = {r: Number(inputArr[0][0]), c: Number(inputArr[0][1])};
  inputArr.shift();
  let grid = inputArr;

  nextMove(robot, grid);
}

function nextMove(robot, grid) {
  let trash = findTrash(grid);

  if (!trash) {
    return null;
  }

  if (trash.r > robot.r) {
    console.log('DOWN');
  }
  else if (trash.r < robot.r) {
    console.log('UP');
  }
  else if (trash.c > robot.c) {
    console.log('RIGHT');
  }
  else if (trash.c < robot.c) {
    console.log('LEFT');
  } else {
    console.log('CLEAN');
  }

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
