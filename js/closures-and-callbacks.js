function sayHilater() {

    var greeting = "Hi There!";

    //call back function
    //a function that did something and it executes another function after the function run
    //function () ran after setTimeout function finishes.
    setTimeout(function() {
        console.log(greeting);

    }, 3000);
}

//sayHilater();


//jQuery uses function expression and first class function
//.click is a function
//function() is a parameter and function expression/first class function
//because
//$('button').click(function(){

//})

function tellMeWhenDone(callback) {
    var a = 1000;
    var b = 2000;

    callback(); //the 'callback', it runs the function i give it.
}

//called tellMeWhenDone function
//after finishes running a call back to the parameter function then is ran.
tellMeWhenDone(function(){
    console.log('I am done!');

});

tellMeWhenDone(function(){
    alert('I am done!');

});