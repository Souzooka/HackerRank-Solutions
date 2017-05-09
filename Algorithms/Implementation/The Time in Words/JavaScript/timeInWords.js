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
  var h = parseInt(readLine());
  var m = parseInt(readLine());
  
  const timeWords = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'quarter',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    21: 'twenty one',
    22: 'twenty two',
    23: 'twenty three',
    24: 'twenty four',
    25: 'twenty five',
    26: 'twenty six',
    27: 'twenty seven',
    28: 'twenty eight',
    29: 'twenty nine',
    30: 'half'
  }
  
  let minutesStr;
  
  if (m % 15 !== 0) {
    minutesStr = 'minutes ';
  } else {
    minutesStr = '';
  }
  
  let closest; 
  if (m > 30) {
    closest = 'to';
    m = 60 - m;
    ++h;
  } else {
    closest = 'past';
  }
  if (m === 0) {
    console.log(`${timeWords[h]} o' clock`);
  } else {
    console.log(`${timeWords[m]} ${minutesStr}${closest} ${timeWords[h]}`)
  }
}

