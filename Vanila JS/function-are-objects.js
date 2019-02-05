//Functions are objects
//****First Class Function*****

function greet() {
    console.log('Hi!');
}

//-->greet object text
//console.log(greet);

//invoking/running the function using ()
//console.log(greet());

//assigning a new properties to a function since function is an object
//greet.language = 'english';

//-->greet object text
//console.log(greet);

//--> 'English'
//console.log(greet.language);


//Function Statements, doesnt return a value
function greet(){
    console.log("Hi!");
}

//Function Expression, returns a value
//anonymousGreet will containt a function() object because it is pointing to that function memory address.
//The function does not need a name because anonymouseGreet variable has a reference to the function

//running/invoking the anonymouse function using ()
//error since in global execution phase anonymousGreet is initialized to undefined and put into memory
//when the code execute anonymousGreet value is undefined therefore it is not a function and cant be run.
//anonymousGreet();

var anonymousGreet = function() {
    console.log('Hi! inside the anonymouse function and function expression!');
}

//running/invoking the anonymouse function using ()
//anonymousGreet();

//passing an function as a parameter
//function log(a) {
    //console.log(a);
//}

//invoking function parameter
function log(a) {
    a();
}

//passing a nunmeric
//--> 1
//log(1);

//passing a string
//--> 'Iam a string!
//log('I am a string!');

//passing an object
//--> object
//log({
    //firstname: 'Marvin'
//});


//passing a function
log(function(){
    console.log("Passing an function as a parameter!");
});












