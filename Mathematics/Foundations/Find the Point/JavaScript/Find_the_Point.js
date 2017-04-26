function processData(input) {
  input = input.split('\n');
  const sets = parseInt(input.shift());
  for (let i = 0; i < sets; ++i) {
    const pointData = input[i].split(' ');
    const p = {x: Number(pointData[0]), y: Number(pointData[1])};
    const q = {x: Number(pointData[2]), y: Number(pointData[3])};
    let difference = {};
    
    //find the difference of the two points
    //we then multiply each difference by 2 to find its reflected offset
    difference.x = (q.x - p.x) * 2;
    difference.y = (q.y - p.y) * 2;
    
    //log those differences + p's original position on the graph
    console.log(`${String(p.x + difference.x)} ${String(p.y + difference.y)}`);
    
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

