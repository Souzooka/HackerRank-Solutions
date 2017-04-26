function processData(input) {
    var lines = input.split('\n');
    var dimension = parseInt(lines[0]);
    var grid = [];
    for(var i = 1; i <= dimension; ++i)
    {
        grid.push(lines[i]);
    }
    displayPathtoPrincess(dimension, grid);
}
function displayPathtoPrincess(dimension, grid)
{
    // in this scenario, position is recorded from the bottom-left corner of the grid.
    let princessPos = null;
    let robotPos = null;
    
    for (let i = 0; i < dimension; ++i) {
        for (let j = 0; j < dimension; ++j) {
            if (grid[i][j] === 'p') {
                princessPos = {x: j, y: Math.abs((i - (dimension - 1)) % dimension)};
            }
            if (grid[i][j] === 'm') {
                robotPos = {x: j, y: Math.abs((i - (dimension - 1)) % dimension)};
            }
        }
        if (princessPos && robotPos) {
            break;
        }
    }
    
    //Movements
    while (princessPos.y > robotPos.y) {
        console.log('UP');
        ++robotPos.y;
    }
    
    while (princessPos.y < robotPos.y) {
        console.log('DOWN');
        --robotPos.y;
    }
    
    while (princessPos.x > robotPos.x) {
        console.log('RIGHT');
        ++robotPos.x;
    }
    
    while (princessPos.x < robotPos.x) {
        console.log('LEFT');
        --robotPos.x;
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

