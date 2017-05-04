/*jshint esversion:6*/

/** processData(input)
  * Parameters:
  *   String input
  * Return values:
  *   void
  * Behavior:
  *   Parses the input and calls nextMove() with the board state.
  */
function processData(input) {
  let grid = input.split('\n');

  for (let i = 0; i < grid.length; ++i) {
    grid[i] = grid[i].split('');
  }

  // Shift the player ID out of input
  grid.shift();

  // because HackerRank is dumb
  while (grid.length > 8) {
    grid.pop();
  }

  // Call NextMove to determine logic
  nextMove(grid);
}

/** nextMove(grid)
  * Parameters:
  *   Matrix grid
  * Return values:
  *   void
  * Behavior:
  *   Determines the next move to make.
  *     This is done by iterating through all the possible moves and determining
  *     if the board state is favorable after making a move, favorable being defined
  *     as the board having an even minimum number of moves to complete.
  *       If no favorable moves are found, then the function will attempt to
  *       flip an ON cell in which being flipped will not result in a winnable state
  *       for the opponent.
  *         Failing that, the bot will flip the last found ON cell.
  *         (This will weigh the game towards being a draw)
  */
function nextMove(grid) {
  for (let i = 0; i < grid.length; ++i) {
    for (let j = 0; j < grid[i].length; ++j) {
      if (grid[i][j] === '1') {
        if (isEven(countMinimumTurns(determineNewGridState(grid, `${i} ${j}`)))) {
          console.log(`${i} ${j}`);
          return;
        } else {
          flipLastFound(grid);
          return;
        }
      }
    }
  }
}

/** flipFirstFound(grid)
  * Parameters:
  *   Matrix grid
  * Return values:
  *   true (successful operation) OR false (unsuccessful operation -- should be unreachable!)
  * Behavior:
  *   Iterates through the matrix row by row, starting at the top-left,
  *   and logs the first ON cell that is found.
  */
function flipFirstFound(grid) {
  for (let i = 0; i < grid.length; ++i) {
    for (let j = 0; j < grid[i].length; ++j) {
      if (grid[i][j] === '1') {
        console.log(`${i} ${j}`);
        return true;
      }
    }
  }
  return false;
}

function flipLastFound(grid) {

  for (var i = grid.length - 1; i >= 0; i--) {
    for (var j = grid[i].length - 1; j >= 0; j--) {
      if (grid[i][j] === '1') {
        console.log(`${i} ${j}`);
        return true;
      }
    }
  }
  return false;
}

function determineNewGridState(grid, output) {
  // Parse the output string and apply it to an object.
  let outputArr = output.split(' ');
  outputArr = outputArr.map( (v) => {
    return parseInt(v);
  });
  let pos = {r: outputArr[0], c: outputArr[1]};

  // Copy grid without reference
  const newGrid = JSON.parse(JSON.stringify(grid));

  // Flip the hit cell.
  if (newGrid[pos.r][pos.c] === '1') {
    newGrid[pos.r][pos.c] = '0';
  } else {
    newGrid[pos.r][pos.c] = '1';
  }

  // Flip the cell to the right
  if (newGrid[pos.r + 1]) {
    if (newGrid[pos.r + 1][pos.c] === '1') {
      newGrid[pos.r + 1][pos.c] = '0';
    } else {
      newGrid[pos.r + 1][pos.c] = '1';
    }
  }

  // Flip the cell below
  if (newGrid[pos.r][pos.c + 1]) {
    if (newGrid[pos.r][pos.c + 1] === '1') {
      newGrid[pos.r][pos.c + 1] = '0';
    } else {
      newGrid[pos.r][pos.c + 1] = '1';
    }
  }

  return newGrid;
}

function countMinimumTurns(grid) {
  const newGrid = JSON.parse(JSON.stringify(grid));
  let sum = 0;

  for (let i = 0; i < grid.length; ++i) {
    let found = false;
    for (let j = 0; j < grid[i].length; ++j) {
      if (grid[i][j] === '1') {
        found = true;
        ++sum;

        grid[i][j] = '0';
        if (grid[i][j + 1]) {
          if (grid[i][j + 1] === '0') {
            grid[i][j + 1] = '1';
          } else {
            grid[i][j + 1] = '0';
          }
        }

        if (grid[i + 1]) {
          if (grid[i + 1][j] === '0') {
            grid[i + 1][j] = '1';
          } else {
            grid[i + 1][j] = '0';
          }
        }
      }
    }
    if (found) {
      --i;
    }
  }

  return sum;
}

/** isEven(x)
  * Parameters:
  *   Number x
  * Return values:
  *   bool
  * Behavior:
  *   Performs a bitwise check on x to determine if it is odd or even.
  *   Returns true if even, false if odd.
  */
function isEven(x) {
  return !(x & 1);
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

