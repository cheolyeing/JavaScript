var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim();
//var input = ('4 2\n1 100 2 101');

var n, l, ans = 1, water = new Array();

function setting() {
	var line = input.split('\n');
	var data = line[0].split(' ');
	n = parseInt(data[0]);
	l = parseInt(data[1]);
	
	data = line[1].split(' ');
	for(var i=0; i<n; i++) {
		water[i] = parseInt(data[i]);
	}
}

function solution() {
	water.sort(function(a, b) {
		return a - b;
	});
	var start = water[0];
	for(var i=1; i<n; i++) {
		if(water[i]-start+1>l) {
			start = water[i];
			ans += 1;
		}
	}
	console.log(ans);
}
setting();
solution();
