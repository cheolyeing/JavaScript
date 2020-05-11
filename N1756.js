var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim();
//var input = ('1 1\n1\n1');

var d, n, oven=[], pizza=[];

function setting() {
	var line = input.split('\n');
	var data = line[0].split(' ');
	d = parseInt(data[0]);
	n = parseInt(data[1]);
	
	data = line[1].split(' ');
	for(var i=0; i<d; i++) {
		oven[i] = parseInt(data[i]);
	}
	
	data = line[2].split(' ');
	for(var i=0; i<n; i++) {
		pizza[i] = parseInt(data[i]);
	}
}

function solution() {
	for(var i=0; i<d-1; i++) {
		if(oven[i+1]>oven[i]) {
			oven[i+1] = oven[i];
		}
	}
	
	var idx = d;
	var p = 0;
	
	while(true) {
		idx--;
		if(idx<0) {
			console.log(0);
			break;
		}
		if(pizza[p]<=oven[idx]) {
			p++;
		}
		if(p==n) {
			console.log(idx+1);
			break;
		}
	}
}

setting();
solution();
