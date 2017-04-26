function processData(input) {
  let robot;
  let nearestTrash;
  let grid;

  // Note: Dimensions are from the top-left corner.
  // Ex. in a 5x5 grid, the bottom-left corner would be (x: 0, y: 5);

  // Parse inputs
  input = input.split('\n');
  input[0] = input[0].split(' ');
  robot = {x: input[0][0], y: input[0][1]};
  input.shift();
  grid = input;

  nearestTrash = findNearestTrash(robot, grid);
  console.log(nearestTrash);

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
    for (let j = 0; j < grid.length; ++j) {

      // If trash is found at this position
      if (grid[i][j] === 'd') {

        if (!closestPos) {
          closestPos = {x: i, y: j};
          closestSteps = Math.abs(robot.x - i) + Math.abs(robot.y - j);
        } else {
          //Compare to existing position
          let steps = Math.abs(robot.x - i) + Math.abs(robot.y - j);

          if (steps < closestSteps) {
            closestPos = {x: i, y: j};
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
