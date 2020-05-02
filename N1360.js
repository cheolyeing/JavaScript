var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim();
//var input = ('4\ntype a 1\ntype b 2\ntype c 3\nundo 3 5');

var n;
var command = new Array(2);

function setting() {
	var line = input.split('\n');
	n = parseInt(line[0]);
	for(var i=0; i<n; i++) {
		command[i] = new Array();
		var data = line[i+1].split(' ');
		command[i][0] = 0;
		if(data[0]=='type') {
			command[i][1] = 0;
			command[i][2] = data[1];
		} else {
			command[i][1] = 1;
			command[i][2] = parseInt(data[1]);
		}
		command[i][3] = parseInt(data[2]);
	}
}

function solution() {
	for(var i=n-1; i>=0; i--) {
		if(command[i][0]==1) continue;
		if(command[i][1]==0) continue;
		var time = command[i][2];
		var sec = command[i][3];
		for(var j=i-1; j>=i-time; j--) {
			if(j<0) break;
			if(command[j][3]<sec-time) break;
			else command[j][0] = 1;
		}
		command[i][0]=1;
	}
	
	for(var i=0; i<n; i++) {
		if(command[i][0]==1) continue;
		process.stdout.write(command[i][2]);
	}
}

setting();
solution();
