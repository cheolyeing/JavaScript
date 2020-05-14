var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim();

var data = input.split(' ');
var n = parseInt(data[0]);
var m = parseInt(data[1]);

function gcd(a, b) {
	if(b==0) return a;
	else return gcd(b, a%b);
}

console.log(m-gcd(n,m));
