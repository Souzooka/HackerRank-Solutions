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
  for(let a0 = 0; a0 < q; a0++){
    const n_temp = readLine().split(' ');
    const citiesCount = parseInt(n_temp[0]);
    const roadsCount = parseInt(n_temp[1]);
    const libraryCost = parseInt(n_temp[2]);
    const roadCost = parseInt(n_temp[3]);

    // it appears there's two clear scenarios for this problem:
    // 1. (the easy solution) roads cost greater than libraryCost*2
    //    so just build a library in every node, problem solved
    //
    // 2. the other scenario being that libraries are not that expensive,
    //    and therefore the total cost should come out to something like
    //    (libraryCost * (number of groups)) + (roadCost * (citiesCount - (number of groups)))

    for(let a1 = 0; a1 < roadsCount; a1++){
      const city_1_temp = readLine().split(' ');
      const city_1 = parseInt(city_1_temp[0]);
      const city_2 = parseInt(city_1_temp[1]);
    }
  }

}
