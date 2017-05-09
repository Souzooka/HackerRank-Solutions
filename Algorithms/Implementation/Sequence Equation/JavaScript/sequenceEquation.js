process.stdin.resume();
process.stdin.setEncoding("ascii");
var input = "";
process.stdin.on("data", function (chunk) {
    input += chunk;
});
process.stdin.on("end", function () {
    main(input);
});

function main(input) {
  let inputArr = input.split('\n');
  let loops = Number(inputArr.shift());
  let numbers = [null].concat(inputArr[0].split(' ').map( (v) => {return Number(v)}));
  
  for (let i = 1; i <= loops; ++i) {
    let param = numbers.indexOf(i);
    console.log(numbers.indexOf(param));
  }
}
