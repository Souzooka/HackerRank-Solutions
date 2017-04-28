/*jshint esversion:6*/
function processData(input) {
  let inputArr = input.split('\n');
  let cases = Number(inputArr.shift());
  for (let i = 0; i < cases; ++i) {


    let dimension = Number(inputArr.shift());

    function findCombinations(dimension) {
      if (dimension < 4) {
        return 1;
      }
      else if (dimension == 4) {
        return 2;
      } else {
        return findCombinations(dimension-1) + findCombinations(dimension-4);
      }
    }

    let combinations = findCombinations(dimension);
    let primes = 0;

    // only numbers above 1 are considered to be possibly prime, so start at 2
    for (let i = 2; i <= combinations; ++i) {

      if (i === 2) {
        ++primes;
        continue;
      }
      // if i is even (and not 2, which is prime), go to next iteration
      else if (!(i & 1)) {
        continue;
      }

      // Testing if i is divisible by numbers greater than Math.sqrt(i) is redundant, as the divisors
      // just switch around
      // To grab an example from Wikipedia:
      // 100 =
      //       2 × 50 = 4 × 25 = 5 × 20 =
      //                         10 × 10 =
      //       20 × 5 = 25 × 4 = 50 × 2
      const iSqrt = Math.sqrt(i);
      let isPrime = true;

      for (let j = 3; j <= iSqrt; ++j) {
        // if i divides evenly into j, then it cannot be prime
        if (Number.isInteger(i / j) && (i / j) !== 1) {
          isPrime = false;
          break;
        }
      }

      if (isPrime) {
        ++primes;
      }
    }
    console.log(primes);
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
