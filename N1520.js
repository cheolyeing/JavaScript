var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim();

var m, n;
var d = [[1,0],[-1,0],[0,1],[0,-1]];
var map = new Array();
var dp = new Array();

function setting() {
	var line = input.split('\n');
	var dat = line[0].split(' ');
	m = parseInt(dat[0]);
	n = parseInt(dat[1]);
	
	for(var i=0; i<m; i++) {
		map[i] = new Array();
		dp[i] = new Array();
		var data = line[i+1].split(' ');
		
		for(var j=0; j<n; j++) {
			map[i][j] = parseInt(data[j]);
			dp[i][j] = -1;
		}
	}
}

function solution() {
	dp[0][0] = 1;
	console.log(DP(m-1, n-1));
}

function DP(x, y) {
	if(dp[x][y]!=-1) return dp[x][y];
	
	dp[x][y] = 0;
	for(var i=0; i<4; i++) {
		var nx = x + d[i][0];
		var ny = y + d[i][1];
		if(!inRange(nx, ny)) continue;
		if(map[nx][ny]>map[x][y]) {
			dp[x][y] += DP(nx, ny);
		}
	}
	return dp[x][y];
}

function showArr(arr) {
	for(var i=0; i<m; i++) {
		for(var j=0; j<n; j++) {
			process.stdout.write(map[i][j]+' ');
		} console.log();
	} console.log();
}

function inRange(x, y) {
	return 0<=x && x<m && 0<=y && y<n;
}

setting();
solution();
