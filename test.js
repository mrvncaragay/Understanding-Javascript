console.log('Inside Test');

var arrys = [1995, 1999, 2010, 2015, 1952];


function myMap(fn) {
    var arrRe = [];

    for(var i = 0; i < arrys.length; i++){

        if (fn(arrys[i])) {
            arrRe.push(arrys[i]);
        }

    }

    return arrRe;

}

function mulTwo(el) {
    return el * 2;
}

function ltTwo(el) {
    if (el < 2000) {
        return el;
    }
}


var a = myMap(ltTwo);

console.log(a);