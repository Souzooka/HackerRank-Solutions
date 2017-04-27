function processData(input) {
  let string = input;
  // Pass over the string until it's considered "clean"
  // clean being that no more operations were performed on this string

  while (true) {
    let clean = true;

    for (let i = 0; i < string.length; ++i) {
      if (string[i] === string[i+1]) {
        string = string.slice(0, i) + string.slice(i+2);
        clean = false;
        --i;
      }
    }

    if (clean) {
      if (!string) {
        console.log('Empty String');
      } else {
        console.log(string);
      }
      return;
    }
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
