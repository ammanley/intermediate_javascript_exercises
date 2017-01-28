function drop(arr, n) {
    if (n === undefined) {n = 1};
    return arr.slice(n);
}

function fromPairs(pairs) { 
    obj = {};
    pairs.forEach(function (val) {
        obj[val[0]] = val[1];
    });
    return obj;
};

function head(arr){
	return arr[0];
}

function take(arr, n) {
    if (n === undefined) {n = 1};
    return arr.slice(0, n);
}

function takeRight(arr, n) {
    if (n === undefined) {n = 1};
    if (n === 0) {return []}
    return arr.slice(-n);
}

function takeWhile (arr, callback) {
    return arr.filter(callback)
};


function union (arrays) {
    var args = Array.from(arguments);
    uniq = [];
    args.forEach(function(x) {
        x.forEach(function(y) {
            if (!uniq.includes(y)) {
                uniq.push(y);
            }
        })
    })
return uniq;
}

function zip (arr) {
    var arr = Array.from(arguments);
    var ans = [];
    var leng = 3;
    arr.forEach(function (x) {
        if (x.length < leng) {
            leng = x.length;
        }
    })
    arr.forEach(function (val1, idx1) {
        val1.forEach(function (val2, idx2) {
            if (ans[idx2] === undefined) {
                ans[idx2] = [];
            } 
            ans[idx2].push(val2);
        })
    });
    for (i = 0; i < ans.length; i++) {
        while (leng >= ans[i].length) {
            ans[i].push(undefined);
        }
    }
    return ans;
};


function unzip (arr) {
    //loop through intial set of arrays
    //at each input, send the 1st,2nd,3rd,nth element to 
    //corr ans arr.
var ansArr = [];

var args = Array.from(arguments);

args.forEach(function (val, idx) {
    val.forEach(function (val2, idx2) {
        if (ansArr[idx2] === undefined || ansArr) {
            ansArr[idx2] = [];
        } else {
            ansArr[idx2].push(val2);
        }
    });
});
return ansArr;
}

function zipObject() {}

function includes(arrOrObj, searchTerm, startIdx){
if (startIdx == undefined) {
    startIdx = 0;
}
var hasSearchTerm = false;
if (Array.isArray(arrOrObj))   { 
var arrCopy = arrOrObj.slice(startIdx);
    arrCopy.forEach(function (x) {
        if (x === searchTerm) {
            hasSearchTerm = true;
        }
    });
} else if (typeof(arrOrObj) === "object") {
    for (var key in arrOrObj) {
        if (arrOrObj[key] === searchTerm) {
            hasSearchTerm = true;
        }
    }
} else if (typeof(arrOrObj) === "string") { //edge case: passing in a string with multiple of same letter
    str = Array.from(arrOrObj);
    for (var i = 0; i <= searchTerm.length; i++) {
        if (i === searchTerm.length) {
            hasSearchTerm = true;
            break;
        }
        var prev = str.indexOf(searchTerm[i]);
        if (!prev === str.indexOf(searchTerm[i]) ) {
            break;
        }
    }   
}
return hasSearchTerm;
}



function sample(){

}

function flip(){

}

function cloneDeep(){

}

function sumBy(){

}

function inRange(){

}

function has(){

}

function omit(){

}

function pick(){

}

function pickBy(){

}

function omitBy(){

}

function pad(){

}

function repeat(){

}

function upperFirst(str){

}

function flatten(){

}

function flattenDeep(){

}