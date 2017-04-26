function processData(input) {
  let robotPos;
  let nearestTrash;
  let grid;

  // Dimensions are from the top-left corner.
  // Ex. in a 5x5 grid, the bottom-left corner would be (x: 0, y: 5);

  input = input.split('\n');
  input[0] = input[0].split(' ');
  robotPos = {x: input[0][0], y: input[0][1]};
  input.shift();
  grid = input;

  console.log(robotPos)
}

function findNearestTrash(robot, grid) {

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
