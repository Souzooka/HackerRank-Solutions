/*jshint esversion:6*/
const SYMBOL_TRASH = 'd';
const ROUTE_PATROL = [
  {r: 1, c: 1},
  {r: 1, c: 2},
  {r: 1, c: 3},
  {r: 2, c: 3},
  {r: 3, c: 3},
  {r: 3, c: 2},
  {r: 3, c: 1},
  {r: 2, c: 1}
];

function processData(input) {
  const inputArr = input.split('\n');
  const locationArr = inputArr.shift().split(' ');
  const robot = {r: parseInt(locationArr[0]), c: parseInt(locationArr[1])};
  const grid = inputArr;

  nextMove(robot, grid);
}

function nextMove(robot, grid) {
  if (isTrashVisible(grid)) {
    const trash = findNearestTrash(robot, grid);

    if (robot.r === trash.r && robot.c === trash.c) {
      console.log('CLEAN');
    }
    else if (robot.c < trash.c) {
      console.log('RIGHT');
    }
    else if (robot.c > trash.c) {
      console.log('LEFT');
    }
    else if (robot.r < trash.r) {
      console.log('UP');
    }
    else if (robot.r > trash.r) {
      console.log('DOWN');
    }
  }
  else if (!isOnPatrolRoute(robot)) {
    // Move to closest patrol spot
  } else {
    // Move to next patrol spot
  }
}

function isTrashVisible(grid) {
  let visible = false;
  for (let i = 0; i < grid.length; ++i) {
    if (grid[i].indexOf(SYMBOL_TRASH) !== -1) {
      visible = true;
      break;
    }
  }
  return visible;
}

function findNearestTrash(robot, grid) {
  let closestSteps = null;
  let closestPos = null;

  for (let i = 0; i < grid.length; ++i) {
    if (closestSteps !== null && closestSteps < Math.abs(robot.y - i)) {
      // trash is not closest
      continue;
    }
    for (let j = 0; j < grid.length; ++j) {
      if (closestSteps !== null && closestSteps < Math.abs(robot.x - j)) {
        // trash is not closest
        continue;
      }
      // If trash is found at this position
      if (grid[i][j] === SYMBOL_TRASH) {
        if (!closestPos) {
          closestPos = trash = {r: i, c: j};
          closestSteps = Math.abs(robot.r - i) + Math.abs(robot.c - j);
        } else {
          //Compare to existing position
          let steps = Math.abs(robot.r - i) + Math.abs(robot.c - j);

          if (steps < closestSteps) {
            closestPos = {r: i, c: j};
            closestSteps = steps;
          }
        }
      }
    }
  }
  return closestPos;
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
