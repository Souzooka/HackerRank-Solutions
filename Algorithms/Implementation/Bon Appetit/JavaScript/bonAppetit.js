function processData(input) {
  let inputArr = input.split('\n');
  inputArr = inputArr.map( (v, i) => {
    return inputArr[i].split(' ').map( (v) => {
      return Number(v);
    })
  });
  
  const n = inputArr[0][0];
  const k = inputArr[0][1];
  const items = inputArr[1];
  const charged = inputArr[2][0];
  
  const price = items.reduce( (prev, curr, i) => {
    if (i !== k) {
      return prev + (curr / 2);
    } else {
      return prev;
    }
  }, 0);
  
  if (price === charged) {
    console.log('Bon Appetit');
  } else {
    console.log(charged - price);
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

