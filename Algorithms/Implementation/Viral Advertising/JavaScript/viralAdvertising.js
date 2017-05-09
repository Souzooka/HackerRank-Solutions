function processData(input) {
  let days = Number(input);
  let sum = 0;
  let people = 5;
  
  for (let i = 0; i < days; ++i) {
    sum += Math.floor(people / 2);
    people = Math.floor(people / 2) * 3;
  }
  console.log(sum);
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

