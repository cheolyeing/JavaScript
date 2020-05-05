var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim();
//var input = ('5 6 2\n1 2 3 2 5 6\n3 8 7 2 1 3\n8 2 3 1 4 5\n3 4 5 1 1 1\n9 3 2 1 4 3\n3 4 2\n4 2 1');

var n, m, k, ans=1000000;
var arr = new Array(), narr = new Array(), spin = new Array();
var visited = new Array();

function setting() {
	var line = input.split('\n');
	var data1 = line[0].split(' ');
	n = parseInt(data1[0]);
	m = parseInt(data1[1]);
	k = parseInt(data1[2]);
	
	for(var i=0; i<=n; i++) {
		arr[i] = new Array();
		narr[i] = new Array();
	}
	
	for(var i=1; i<=n; i++) {
		var data2 = line[i].split(' ');
		for(var j=1; j<=m; j++) {
			arr[i][j] = parseInt(data2[j-1]);
		}
	}
	
	for(var i=1; i<=k; i++) {
		visited[i] = false;
		spin[i] = new Array();
		var data3 = line[n+i].split(' ');
		for(var j=0; j<3; j++) {
			spin[i][j] = parseInt(data3[j]);
		}
	}
}

function solution(num) {
	narr = makeArr();
	for(var i=0; i<k; i++) {
		spinOper(narr, spin[num[i]][0], spin[num[i]][1], spin[num[i]][2]);
		//showArr(narr);
	}
	ans = Math.min(ans, arrValue(narr));
}

function backTracking(num, idx) {
	if(idx==k) {
		solution(num);
		return;
	}
	for(var i=1; i<=k; i++) {
		if(!visited[i]) {
			visited[i] = true;
			num[idx] = i;
			backTracking(num, idx+1);
			visited[i] = false;
		}
	}
}

function makeArr() {
	for(var i=1; i<=n; i++) {
		for(var j=1; j<=m; j++) {
			narr[i][j] = arr[i][j];
		}
	}
	return narr;
}

function spinOper(narr, r, c, s) {
	if(s==0) return;
	var x = r-s; var y = c-s;
	var tmp = narr[x][y];
	while(true) {
		narr[x++][y] = narr[x][y];
		if(x==r+s) break;
	}
	while(true) {
		narr[x][y++] = narr[x][y];
		if(y==c+s) break;
	}
	while(true) {
		narr[x--][y] = narr[x][y];
		if(x==r-s) break;
	}
	while(true) {
		narr[x][y--] = narr[x][y];
		if(y==c-s) break; 
	}
	narr[x][y+1] = tmp;
	spinOper(narr, r, c, s-1);
}

function arrValue(arr) {
	var minVal = 1000000;
	for(var i=1; i<=n; i++) {
		var val=0;
		for(var j=1; j<=m; j++) {
			val += arr[i][j];
		}
		minVal = minVal>val ? val : minVal;
	}
	return minVal;
}

function showArr(arr) {
	for(var i=1; i<=n; i++) {
		for(var j=1; j<=m; j++) {
			process.stdout.write(arr[i][j]+" ");
		} console.log();
	} console.log("---------------------");
}

setting();
backTracking(new Array(), 0);
console.log(ans);
