var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim();
//var input = ('-3 -3 2 0');

var r1, r2, c1, c2, max, len;

function toInt(i) { return parseInt(i); }

function value(x, y) {
	var m = Math.max(Math.abs(x), Math.abs(y));
	var v = 4*m*m+1;
	if(x==m) return v+(x+y)+m*2;
	else if(x==-m) return v-(y-x);
	else if(y==m) return v-(x+y)-m*2;
	else return v+(x-y);
}

function setting() {
	var line = input.split(' ');
	r1 = toInt(line[0]);
	c1 = toInt(line[1]);
	r2 = toInt(line[2]);
	c2 = toInt(line[3]);
	max = Math.max(Math.max(value(r1,c1), value(r1,c2)), Math.max(value(r2,c1), value(r2,c2)));
	len = (max+"").length;
}

function solution() {
	for(var i=r1; i<=r2; i++) {
		for(var j=c1; j<=c2; j++) {
			print(i, j);
		}
		console.log("");
	}
}

function print(i, j) {
	var val = value(i, j);
	var plus = len - (val+"").length;
	for(var i=0; i<plus; i++) {
		process.stdout.write(' ');
	}
	process.stdout.write(val+' ');
}

setting();
solution();
