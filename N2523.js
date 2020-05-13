var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim();
//var input = ('5');
function solution() {
	var n = parseInt(input);
	for(var i=1; i<=n; i++) {
		for(var j=0; j<i; j++) {
			process.stdout.write('*');
		}
		console.log();
	}
	for(var i=n-1; i>0; i--) {
		for(var j=0; j<i; j++) {
			process.stdout.write('*');
		}
		console.log();
	}
}
solution();
