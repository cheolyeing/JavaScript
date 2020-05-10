function solution(arr) {
    arr = toString(arr);

    var answer = 1;

    for(var i=1; i<arr.length; i++) {
        if(arr[i]!=arr[i-1]) answer++;
    }    

    return answer;
}

function toString(arr) {
    var narr = new Array();
    for(var i=0; i<arr.length; i++) {
        narr[i] = arr[i]+'';
        narr[i] = narr[i].split('').sort().join('');
    }
    narr.sort();
    return narr
}
