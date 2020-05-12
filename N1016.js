/*var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim();*/
var input = ('9 16');

var min, max;

function setting() {
	var data = input.split(' ');
	min = parseInt(data[0]);
	max = parseInt(data[1]);
}

function solution() {
	var end = parseInt(Math.sqrt(max));
	var check = new Array();
	
	for(var i=2; i<=end; i++) {
		var sq = i * i;
		var start = parseInt((min-1)/sq+1)*sq;
		for(var s=start; s<=max; s+=sq) {
			check[s-min] = true;
		}
	}
	
	var cnt=0;
	for(var i=0; i<=(max-min); i++) if(check[i]==true) cnt++;
	console.log(max-min-cnt+1);
}

setting();
solution();
