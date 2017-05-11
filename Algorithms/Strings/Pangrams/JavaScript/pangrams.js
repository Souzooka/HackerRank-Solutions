function processData(input) {
  const alphabet = 'abcdefghijklmnopqrstuvxyz';
  input = input.toLowerCase();
  
  for (let i = 0; i < alphabet.length; ++i) {
    if (input.indexOf(alphabet[i]) === -1) {
      console.log('not pangram');
      return;
    }
  }
  console.log('pangram');
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

