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
  let inputArr = input.split('\n');
  let locationArr = inputArr.shift().split(' ');
  let robot = {r: parseInt(locationArr[0]), c: parseInt(locationArr[1])};
  let grid = inputArr;
  console.log(isTrashVisible(grid))
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

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
