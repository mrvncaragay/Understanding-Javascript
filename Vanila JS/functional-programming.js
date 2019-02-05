//Functional Programing
function mapForEach(arr, fn) {

    var newArr = [];
    for (var i = 0; i < arr.length; i++) {

        newArr.push(
            fn(arr[i])
        )
    }

    return newArr;
}

var arr = [1, 2, 3];

//mutiple by two
var mutiplybytwo = mapForEach(arr, function(item) {

    console.log(item * 3);
    return (item * 2);
});

console.log(mutiplybytwo);

//even number
var evenNum = mapForEach(arr, function(item) {

    if((item % 2) === 0) {
        return item;
    }
});

console.log(evenNum);

//using bind as a parameter
//set a delimiter
var  numDilim = function(delimiter, item) {
    return item > delimiter;
}

var arr4 = mapForEach(arr, numDilim.bind(this, 2));

console.log(arr4);


var checkPastLimitSimplified = function(limiter) {

    return function(limiter, item) {

        return item > limiter;

    }.bind(this, limiter);
};

var arr5 = mapForEach(arr, checkPastLimitSimplified(2 ));

console.log(arr5);