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
    var s_temp = readLine().split(' ');
    var s = parseInt(s_temp[0]);
    var t = parseInt(s_temp[1]);
    var a_temp = readLine().split(' ');
    var a = parseInt(a_temp[0]);
    var b = parseInt(a_temp[1]);
    var m_temp = readLine().split(' ');
    var m = parseInt(m_temp[0]);
    var n = parseInt(m_temp[1]);
    apple = readLine().split(' ');
    apple = apple.map(Number);
    orange = readLine().split(' ');
    orange = orange.map(Number);
    
    let applesCount = 0;
    let orangesCount = 0;
    
    for (let i = 0; i < apple.length; ++i) {
        if (s <= a + apple[i] && a + apple[i] <= t) {
            ++applesCount;
        }
    }
    
    for (let i = 0; i < orange.length; ++i) {
        
        if (s <= b + orange[i] && b + orange[i] <= t) {
            ++orangesCount;
        }
    }
    
    console.log(applesCount+'\n'+orangesCount);

}

