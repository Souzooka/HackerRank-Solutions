function processData(input) {
  let robot;
  let nearestTrash;
  let grid;

  // Note: Dimensions are from the top-left corner.
  // Ex. in a 5x5 grid, the bottom-left corner would be (x: 0, y: 5);

  // Parse inputs
  input = input.split('\n');
  input[0] = input[0].split(' ');
  robot = {x: Number(input[0][0]), y: Number(input[0][1])};
  input.shift();
  grid = input;

  nearestTrash = findNearestTrash(robot, grid);
  while (nearestTrash) {

    if (nearestTrash.y < robot.y) {
      console.log('UP');
      --robot.y;
    }
    else if (nearestTrash.y > robot.y) {
      console.log('DOWN');
      ++robot.y;
    }
    else if (nearestTrash.x < robot.x) {
      console.log('LEFT');
      --robot.x;
    }
    else if (nearestTrash.x > robot.x) {
      console.log('RIGHT');
      ++robot.x;
    } else {
      console.log('CLEAN');
      grid[robot.y] = grid[robot.y].substr(0, robot.x) + '-' + grid[robot.y].slice(robot.x);
      nearestTrash = findNearestTrash(robot, grid);
    }
  }

}

/** function findNearestTrash(robot, grid)
  * Parameters:
  *   robot object containing position coordinates (x, y)
  *   grid matrix
  * Return values:
  *   position object (x, y) of trash which requires the fewest steps
  *
  *   If no trash is found, this function will return null.
  * Behavior:
  *   Iterates over entire (read: not very efficient) matrix
  *   When trash is found, the function compares against the current closest pos
  *   (initialized at null) and finds if the trash is closer to the robot than previous trash.
  */
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
      if (grid[i][j] === 'd') {

        if (!closestPos) {
          closestPos = {x: j, y: i};
          closestSteps = Math.abs(robot.x - j) + Math.abs(robot.y - i);
        } else {
          //Compare to existing position
          let steps = Math.abs(robot.x - j) + Math.abs(robot.y - i);

          if (steps < closestSteps) {
            closestPos = {x: j, y: i};
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
