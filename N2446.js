var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim();
//var input = ('5');
function solution() {
	var n = parseInt(input);
	
	for(var i=n; i>0; i--) {
		for(var j=i; j<n; j++) process.stdout.write(' ');
		for(var j=0; j<2*i-1; j++) process.stdout.write('*');
		console.log();
	} 
	for(var i=2; i<=n; i++) {
		for(var j=i; j<n; j++) process.stdout.write(' ');
		for(var j=0; j<2*i-1; j++) process.stdout.write('*');
		console.log();
	}
}
solution();
