//Closure
//Base function
//whattosay is a base function variables
function greet(whattosay) {

    //base functions variables
    var myRealName = 'Marvin Caragay';
    var age = 30;

    //Child function is returned
    return function (name) {

        //child function still have reference to the base function variables even after
        //the execution context is finish and pop of from the execution stack
        console.log(whattosay + ' ' + name + ' ' + myRealName + ' ' + age);
    }
}

//invoke the base function and returned the child function to sayHi
//var sayHi = greet('Hello there');

//the child function then is invoke
//--> Hello there Marv Marvin Caragay 30
//sayHi('Marv');


function buildFunctions() {

    var arr = [];
    var num;
    for(var i = 0; i < 3; i++) {
        num = i;
        arr.push(
            function() {
                console.log(num);
            }
        )
    }

    return arr;
}

var fs = buildFunctions();

//--> 3 for all three functions
//the reason for this is
fs[0]();
fs[1]();
fs[2]();


//ES6 using let
function buildFunctions2() {

    var arr = [];

    for(var i = 0; i < 3; i++) {
        let j = i;
        arr.push(
            function() {
                console.log(j);
            }
        )
    }

    return arr;
}

var fs2 = buildFunctions2();

//--> 3 for all three functions
//the reason for this is
fs2[0]();
fs2[1]();
fs2[2]();

//using closure
function buildFunctions3() {

    var arr = [];

    for(var i = 0; i < 3; i++) {
        arr.push(
            (function(j) {
                return function() {
                    console.log(j);
                }
            }(i))
        )
    }

    return arr;
}

var fs3 = buildFunctions3();

//the reason for this is
fs3[0]();
fs3[1]();
fs3[2]();







