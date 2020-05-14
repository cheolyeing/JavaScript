var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim();

var data = input.split('\n');
var a = parseInt(data[0]);

for(var i=1; i<10; i++) {
	a -= parseInt(data[i]);
}

console.log(a);
