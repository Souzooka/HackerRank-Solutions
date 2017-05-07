class TextEditor {
  constructor() {
    this.text = '';
    this.textStack = [];
  }
  
  get() {
    return this.text;
  }

  append(text) {
    this.textStack.push(this.text);
    this.text += text;
  }

  delete(number) {
    this.textStack.push(this.text);
    this.text = this.text.slice(0, this.text.length - number);
  }

  print(index) {
    console.log(this.text.charAt(index - 1));
  }

  undo() {
    this.text = this.textStack.pop();
  }
}

function processData(input) {
  const textEditor = new TextEditor();
  
  let inputArr = input.split('\n');
  let loops = parseInt(inputArr.shift());
  
  for (let i = 0; i < loops; ++i) {
    let operationArr = inputArr[i].split(' ');
    
    switch (parseInt(operationArr[0])) {
      case 1: {
        textEditor.append(operationArr[1]);
        break;
      }
      case 2: {
        textEditor.delete(operationArr[1]);
        break;
      }
      case 3: {
        textEditor.print(operationArr[1]);
        break;
      }
      case 4: {
        textEditor.undo();
        break;
      }
      default:
        break;
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

