var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim();
//var input = ('5\n11100\n2###1\n3###1\n2###1\n12210');

var n, map = new Array();

function setting() {
	line = input.split('\n');
	n = parseInt(line[0]);
	
	for(var i=0; i<n+2; i++) map[i] = new Array();
	for(var i=1; i<=n; i++) {
		for(var j=1; j<=n; j++) {
			map[i][j] = line[i].charAt(j-1);
		}
	}
}

function solution() {
	map[2][2] = map[1][1]=='1' ? '*' : 's';
	map[2][n-1] = map[1][n]=='1' ? '*' : 's';
	map[n-1][2] = map[n][1]=='1' ? '*' : 's';
	map[n-1][n-1] = map[n][n]=='1' ? '*' : 's';
	
	for(var i=2; i<n-1; i++) {
		findMine(2, i, 1);
		findMine(n-1, i, n);
	}
	console.log(countMine());
}

function findMine(x, y, ox) {
	var mine=0;
	if(map[x][y-1]=='*') mine++;
	if(map[x][y]=='*') mine++;
	map[x][y+1] = map[ox][y]-'0'==mine ? 's' : '*';
	
	mine=0;
	if(map[y-1][x]=='*') mine++;
	if(map[y][x]=='*') mine++;
	map[y+1][x] = map[y][ox]-'0'==mine ? 's' : '*';
}

function countMine() {
	var cnt=0;
	for(var i=1; i<=n; i++) {
		for(var j=1; j<=n; j++) {
			if(map[i][j]=='*' || map[i][j]=='#') cnt++;
		}
	}
	return cnt;
}

setting();
solution();
