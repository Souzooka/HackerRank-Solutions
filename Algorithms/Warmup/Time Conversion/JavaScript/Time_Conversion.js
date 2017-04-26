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
    var time = readLine();
    const splitTime = time.match(/\d+/g);
    let hours = parseInt(splitTime[0]);
    let minutes = parseInt(splitTime[1]);
    let seconds = parseInt(splitTime[2]);
    const period = time.match(/([A-Z])\w/)[0];
    
    if (hours === 12 && period === 'AM') {
        hours = 0;
    }
    
    if (hours !== 12 && period === 'PM') {
        hours += 12;
    }
    
    function pad(n) {
        return (n < 10) ? ("0" + n) : n;
    }
    
    hours = pad(hours);
    minutes = pad(minutes);
    seconds = pad(seconds);
    
    console.log(`${hours}:${minutes}:${seconds}`);
}

