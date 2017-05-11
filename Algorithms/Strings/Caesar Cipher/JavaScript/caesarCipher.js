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
  var n = parseInt(readLine());
  var s = readLine();
  var k = parseInt(readLine());
  let newPhrase = '';
  
  for (let i = 0; i < n; ++i) {
    const lowerCase = { min: 97, max: 122 };
    const upperCase = { min: 65, max: 90};
    let isTitle = null;
    let isPunctuation = null;
    let currCharCode = s.charCodeAt(i);
    
    if (currCharCode >= lowerCase.min && currCharCode <= lowerCase.max) {
      isTitle = false;
    } 
    else if (currCharCode >= upperCase.min && currCharCode <= upperCase.max) {
      isTitle = true;
    } else {
      isPunctuation = true;
    }
    
    if (!isTitle && !isPunctuation) {
      currCharCode -= lowerCase.min;
      currCharCode = ((currCharCode + k) % 26) + lowerCase.min;
    } 
    else if (isTitle && !isPunctuation) {
      currCharCode -= upperCase.min;
      currCharCode = ((currCharCode + k) % 26) + upperCase.min;
    }
    
    newPhrase += String.fromCharCode(currCharCode);
  }
  
  console.log(newPhrase);
}

