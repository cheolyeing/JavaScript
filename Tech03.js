function solution(reqs) {
    var account = new Array();
    var info = new Array();
    var last = 0;
    var answer = new Array();

    for(var i=0; i<reqs.length; i++) {
        var req = reqs[i].split(' ');
        var idx = account.indexOf(req[1]);

        if(req[0]=='CREATE') {
            if(idx!=-1) {
                answer[i] = 403;
            } else {
                answer[i] = 200;
                account[last] = req[1];
                info[last++] = [0, -1 * req[2]];
            }
        } else if(req[0]=='DEPOSIT') {
            if(idx<0) {
                answer[i] = 404;
            } else {
                answer[i] = 200;
                info[idx][0] += req[2];
            }
        } else {
            if(idx<0) {
                answer[i] = 404;
            } else {
                 var amount = req[2];
                 if(info[idx][0]-amount<info[idx][1]) {
                     answer[i] = 403;
                 } else {
                     info[idx][0] -= amount;
                     answer[i] = 200;
                 }
             }
        }
    }
    return answer;
}
