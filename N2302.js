var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim();
//var input = ('9\n2\n4\n7\n');

var n, m, ans=1, dp = new Array();

function setDP() {
	dp[0] = 1;
	dp[1] = 1;
	for(var i=2; i<41; i++) {
		dp[i] = dp[i-1] + dp[i-2];
	}
}

function solution() {
	var line = input.split('\n');
	n = parseInt(line[0]);
	m = parseInt(line[1]);
	var start = 1;
	for(var i=0; i<m; i++) {
		var now = parseInt(line[2+i]);
		ans *= dp[now-start];
		start = now+1;
	}
	ans *= dp[n-start+1];
	console.log(ans);
}

setDP();
solution();
