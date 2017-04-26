function processData(input) {
    let inputArr = input.split('\n');
    let dimension = parseInt(inputArr[0][0]);
    let robotPosTemp = inputArr[1].split(' ');
    let robotPos = {x: parseInt(robotPosTemp[0]), y: parseInt(robotPosTemp[1])};
    let grid = [];
    
    for (let i = 2; i < dimension + 2; ++i) {
        grid.push(inputArr[i]);
    }
        console.log(nextMove(dimension, robotPos.y, robotPos.x, grid));
} 

function nextMove(dimension, row, column, grid) {
    let princessPos;
    if (!princessPos) {
        for (let i = 0; i < dimension; ++i) {
            for (let j = 0; j < dimension; ++j) {
                if (grid[i][j] === 'p') {
                    princessPos = {x: j, y: i};
                    break;
                }
            }
            if (princessPos) {
                break;
            }
        }
    }
    
    if (princessPos.y < column) {
        return 'UP';
    }
    else if (princessPos.y > column) {
        return 'DOWN';
    }
    else if (princessPos.x < row) {
        return 'LEFT';
    }
    else if (princessPos.x > row) {
        return 'RIGHT';
    }
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

