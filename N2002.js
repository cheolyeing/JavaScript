var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim();
//var input = ('4\nZG431SN\nZG5080K\nST123D\nZG206A\nZG206A\nZG431SN\nZG5080K\nST123D');
/*
 * JavaScript 에서 해쉬맵 구현하는 방법 알아두기! 
 */
Map = function(){
 this.map = new Object();
};   
Map.prototype = {   
    put : function(key, value){   
        this.map[key] = value;
    },   
    get : function(key){   
        return this.map[key];
    },
    containsKey : function(key){    
     return key in this.map;
    },
    containsValue : function(value){    
     for(var prop in this.map){
      if(this.map[prop] == value) return true;
     }
     return false;
    },
    isEmpty : function(key){    
     return (this.size() == 0);
    },
    clear : function(){   
     for(var prop in this.map){
      delete this.map[prop];
     }
    },
    remove : function(key){    
     delete this.map[key];
    },
    keys : function(){   
        var keys = new Array();   
        for(var prop in this.map){   
            keys.push(prop);
        }   
        return keys;
    },
    values : function(){   
     var values = new Array();   
        for(var prop in this.map){   
         values.push(this.map[prop]);
        }   
        return values;
    },
    size : function(){
      var count = 0;
      for (var prop in this.map) {
        count++;
      }
      return count;
    }
};

var hm = new Map();
var n, inT = new Array();

function setting() {
	line = input.split('\n');
	n = parseInt(line[0]);
	for(var i=1; i<=n; i++) {
		inT[i-1] = line[i];
	}
	for(var i=n+1; i<=2*n; i++) {
		hm.put(line[i], i-n);
	}
}

function solution() {
	var nowIDX = 0;
	var good = 0;
	for(var i=0; i<n; i++) {
		if(hm.get(inT[i])>=nowIDX) {
			nowIDX = hm.get(inT[i]);
			good++;
		}
	}
	console.log(n-good);
}

setting();
solution();
