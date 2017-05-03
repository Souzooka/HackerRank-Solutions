/*jshint esversion:6*/
const BLACK_LETTER_TOLERANCE = 40;
const LETTER_WIDTH = 9;
const LETTER_PADDING = 1;
const LETTER_START_IDX = 5;
const LETTER_COUNT = 5;

function processData(input) {
  // split the input into individual pixels
  let inputArr = input.replace(/\n/g, ' ').split(' ');

  // get height and width from top of file
  const height = inputArr.shift();
  const width = inputArr.shift();

  // get rid of blank area at end of array
  inputArr.pop();

  // Splits the input into each pixel
  // We only evaluate the first color channel of a pixel since the image appears to be in grayscale,
  // but if the first color channel is darker than BLACK_LETTER_TOLERANCE we consider it to be part of the captcha
  for (let i = 0; i < inputArr.length; ++i) {
    inputArr[i] = inputArr[i].split(',');
    if (parseInt(inputArr[i][0]) <= BLACK_LETTER_TOLERANCE) {
      inputArr[i] = 1;
    } else {
      inputArr[i] = 0;
    }
  }

  //formatting
  let pixels = [];
  for (let i = 0; i < inputArr.length; i) {
    let temp = [];
    for (let j = 0; j < width; ++j) {
      temp.push(inputArr.shift());
    }
    pixels.push(temp);
  }

  //Remove empty rows
  for (let i = 0; i < pixels.length; ++i) {
    if (pixels[i].indexOf(1) === -1) {
      pixels.splice(i, 1);
      --i;
    }
  }

  //Separate into letters
  let letters = [];
  for (let i = 0; i < LETTER_COUNT; ++i) {
    let letter = [];
    let start = LETTER_START_IDX + (i * LETTER_WIDTH);
    let end = start + (LETTER_WIDTH - LETTER_PADDING);

    for (let j = 0; j < pixels.length; ++j) {
      letter.push(pixels[j].slice(start, end));
    }
    letters.push(letter);
  }

  console.log(letters[4]);

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