var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim();

//var input = ('55-50+40');

function solution() {
	var nums = input.split('-');
	var ans = calculator(nums[0]);
	for(var i=1; i<nums.length; i++) {
		ans -= calculator(nums[i]);
	}
	console.log(ans);
}

function calculator(num) {
	var res = 0;
	var nums = num.split('+');
	for(var i=0; i<nums.length; i++) {
		res += parseInt(nums[i]);
	}
	return res;
}

solution();
