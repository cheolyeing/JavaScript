var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim();
//var input = ('10');

function solution() {
	var n = parseInt(input);
	for(var i=0; i<2*n; i++) {
		for(var j=0; j<n; j++) {
			process.stdout.write((i+j)%2==0 ? '*':' ');
		}
		console.log();
	}
}

solution();
