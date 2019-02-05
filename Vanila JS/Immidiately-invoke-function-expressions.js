//function statement
function greet(name) {
    console.log('Hello ' + name);
};

//invoking function statement
greet('Marv');


//function expression
var greetFunc = function (name) {
    console.log('Hello ' + name);
};

//invoking function expression
greetFunc('Marv');


//Immediately Invoked Function Expression (IIFE)
//invoking function expression on the fly
var greeting = function(name) {
    return 'Hello ' + name;

//invoke function using () immediately after creating the function
//--> greeting is now holding a value string 'Hello Marv'
}('Marv');

console.log(greeting);


//IIFE
(function(name) {
    console.log('Hello ' + name);
}('Marv'));


//IIFE with spread
(function(...other){
    var i = 0;
    console.log(other.length)

    for(i; i < 3; i++) {
        console.log(other[i]);
    }
}('1', 'Marv', 'Caragay', 132));


//IIFE with global objects
(function(global, name){
    console.log(global);
}(window, 'marv'));