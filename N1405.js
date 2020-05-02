var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
//var input = ('2 25 25 25 25').split(' ');

var n, E, W, S, N, visited;
var ans = 0;

function solution() {
	n = parseInt(input[0]);
	E = parseInt(input[1]) / 100;
	W = parseInt(input[2]) / 100;
	S = parseInt(input[3]) / 100;
	N = parseInt(input[4]) / 100;
	visited = new Array(2*n+1);
	for(var i=0; i<2*n+1; i++) visited[i] = new Array();
	visited[n][n] = true;
	dfs(0, n, n, 1);
	console.log(ans)
}

function dfs(time, x, y, percent) {
	if(time==n) {
		ans += percent; return;
	}
	
	if(!visited[x][y+1]) {
		visited[x][y+1] = true;
		dfs(time+1, x, y+1, percent*E);
		visited[x][y+1] = false;
	}
	
	if(!visited[x][y-1]) {
		visited[x][y-1] = true;
		dfs(time+1, x, y-1, percent*W);
		visited[x][y-1] = false;
	}
	
	if(!visited[x+1][y]) {
		visited[x+1][y] = true;
		dfs(time+1, x+1, y, percent*S);
		visited[x+1][y] = false;
	}
	
	if(!visited[x-1][y]) {
		visited[x-1][y] = true;
		dfs(time+1, x-1, y, percent*N);
		visited[x-1][y] = false;
	}
}

solution();
