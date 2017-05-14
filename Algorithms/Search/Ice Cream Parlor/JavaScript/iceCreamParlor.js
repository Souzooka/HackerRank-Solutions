function processData(input) {
  const inputArr = input.split('\n');
  const trips = parseInt(inputArr.shift());

  for (let i = 0; i < trips; ++i) {
    const dollarsCount = parseInt(inputArr.shift());
    const flavorsCount = parseInt(inputArr.shift());
    const flavorCosts = inputArr.shift().split(' ').map(Number);
    let flavorsBought = [];

    for (let j = 0; j < flavorsCount; ++j) {
      for (let k = j; k < flavorsCount; ++k) {
        if (flavorCosts[j] + flavorCosts[k] === dollarsCount) {
          flavorsBought = (j < k) ? [j+1, k+1] : [k+1, j+1];
        }
      }
      if (flavorsBought.length > 0) break;
    }
    console.log(`${flavorsBought[0]} ${flavorsBought[1]}`);
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
