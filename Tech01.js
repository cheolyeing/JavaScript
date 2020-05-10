function solution(arr) {
    var answer = 0;
    while(true) {
        answer++;
        arr = action(arr);   
        if(arr.length==1 && arr[0]==1) break;
    }
    return answer;
}

function action(arr) {
    var narr = new Array();
    var idx = 0;
    narr[idx] = 1;
    for(var i=0; i<arr.length-1; i++) {
        if(arr[i]!=arr[i+1]) {
            narr[++idx]=1;
        } else {
            narr[idx]++;
        }
    }
    return narr;
}
