/*jshint esversion:6*/
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
  const queries = parseInt(readLine());
  for(let a0 = 0; a0 < queries; a0++){
    const n_temp = readLine().split(' ');
    const citiesCount = parseInt(n_temp[0]);
    const roadsCount = parseInt(n_temp[1]);
    const libraryCost = parseInt(n_temp[2]);
    const roadCost = parseInt(n_temp[3]);

    // it appears there's two clear scenarios for this problem:
    // 1. (the easy solution) roadCost is greater than libraryCost*2
    //    so just build a library in every node, problem solved
    //
    // 2. the other scenario being that roads are not that expensive,
    //    and therefore the total cost should come out to something like
    //    (libraryCost * (number of groups)) + (roadCost * (citiesCount - (number of groups)))

    if (roadCost > (libraryCost << 1)) {
      // 1
      console.log(libraryCost * citiesCount);
    } else {
      // 2
      // Seperate each group into an array in an array
      let groups = [[]];
      let groupsIdx = 0;
      for (let i = 0; i < roadsCount; ++i) {
        const city_1_temp = readLine().split(' ');
        const city1 = parseInt(city_1_temp[0]);
        const city2 = parseInt(city_1_temp[1]);

        if (i !== 0 &&
            groups[groupsIdx].indexOf(city1) === -1 &&
            groups[groupsIdx].indexOf(city2) === -1) {
          ++groupsIdx;
          groups[groupsIdx] = [];
        }
        groups[groupsIdx].push(city1, city2);
      }

      // Filter each group
      for (let i = 0; i < groups.length; ++i) {
        groups[i] = groups[i].filter( (item, pos) => {
          return groups[i].indexOf(item) == pos;
        });
      }
      console.log(groups);
    }
  }
}
