function solution(weights) {
    var answer = 0;
    var merged = true;

    for(var i=0; i<weights.length; i++) {
        weights[i] = [weights[i], 1];
    }

    while(merged) {
        weights.sort(function (a, b){
            return a[0]-b[0];
        });
        var out = merge(weights);
        weights = out[0];
        merged = out[1];
    }

    for(var i=0; i<weights.length; i++) {
        answer = Math.max(answer, weights[i][1]);
    }
    return answer==0 ? 1 : answer;
}

function merge(arr) {
    var narr = new Array();
    var idx = 0;
    var merged = false;

    for(var i=0; i<arr.length; i++) {
        if(i+1!=arr.length && arr[i][0]==arr[i+1][0]) {
            merged = true;
            narr[idx++] = [arr[i][0] * 2, arr[i++][1]+arr[i][1]];
        }
        else if(arr[i][0]%2==1) continue;
        else {
            narr[idx++] = [arr[i][0], arr[i][1]];
        }
    }
    return [narr, merged];
}
