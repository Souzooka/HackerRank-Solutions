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
    } else {
      move(robot, trash);
    }
  }
  else if (!isOnPatrolRoute(robot)) {
    move(robot, findNearestPatrol(robot));
  } else {
    move(robot, ROUTE_PATROL[(findPatrolRouteIdx(robot) + 1) % ROUTE_PATROL.length]) ;
  }
}

function move(robot, destination) {
  if (robot.c < destination.c) {
    console.log('RIGHT');
  }
  else if (robot.c > destination.c) {
    console.log('LEFT');
  }
  else if (robot.r < destination.r) {
    console.log('DOWN');
  }
  else if (robot.r > destination.r) {
    console.log('UP');
  }
}

/** isOnPatrolRoute(robot)
  * Parameters:
  *   A robot obj with these keys:
  *     r: Row which the robot is located at
  *     c: Column which the robot is located at
  * Return values:
  *   bool
  * Behavior:
  *   Checks if the robot's current position matches with any of the patrol spots
  */
function isOnPatrolRoute(robot) {
  for (let i = 0; i < ROUTE_PATROL.length; ++i) {
    if (robot.r === ROUTE_PATROL[i].r && robot.c === ROUTE_PATROL[i].c) {
      return true;
    }
  }
  return false;
}

/** findPatrolRouteIdx(robot)
  * Parameters:
  *   A robot obj with these keys:
  *     r: Row which the robot is located at
  *     c: Column which the robot is located at
  * Return values:
  *   current routeIdx or false (this shouldn't have been called in this scenario)
  * Behavior:
  *   Finds the route index the robot is currently occupying
  */
function findPatrolRouteIdx(robot) {
  for (let i = 0; i < ROUTE_PATROL.length; ++i) {
    if (robot.r === ROUTE_PATROL[i].r && robot.c === ROUTE_PATROL[i].c) {
      return i;
    }
  }
  return false;
}

function isTrashVisible(grid) {
  for (let i = 0; i < grid.length; ++i) {
    if (grid[i].indexOf(SYMBOL_TRASH) !== -1) {
      return true;
    }
  }
  return false;
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

          // If steps are the same as closest step, prefer corners
          if (steps < closestSteps ||
            (steps === closestSteps && (i === 0 || i === grid.length-1) && (j === 0 || j === grid.length-1))) {
            closestPos = {r: i, c: j};
            closestSteps = steps;
          }
        }
      }
    }
  }
  return closestPos;
}

function findNearestPatrol(robot) {
  let closestSteps = null;
  let closestPos = null;

  for (let i = 0; i < ROUTE_PATROL.length; ++i) {
    let steps = Math.abs(robot.r - ROUTE_PATROL[i].r) + Math.abs(robot.c + ROUTE_PATROL[i].c);

    if (steps < closestSteps || closestSteps === null) {
      closestSteps = steps;
      closestPos = ROUTE_PATROL[i];
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
