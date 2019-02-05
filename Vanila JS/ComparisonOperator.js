
//console.log(1 < 2 < 3);//true
            //2 greater than 1  and 3 is greater than 2

//console.log(3 < 2 < 1);//true
            //3 < 2 = false or 0
            //0 < 1 = true

//console.log(3 > 2 > 1);//false
            //3 > 2 = true or 1
            //1 > 1 = false

//using === to solve coerce problem

/*var a = false;
var b = 0;

//not equal since the javascript engine does not coerce a to 0 whe using ===
if ( a === b ) {
    //console.log( "a and b are equal" );

} else {

    //console.log( "they are not equal!") ;
}

//Using coercion  to our advantage
/Note if the variable is set to 0 the below code will be true eventhough the coerce of 0 is false
var myNum; //since javascript engine coerce this value to a false when it has not been set to any value

//we can check the variable below whether nyNum has a value.
if( myNum ) {
    console.log("myNum has been set to a value!")
} else {
   console.log("DANGER!! nyNnum has not been set!")
}*/


//Default values using coercion
//since javascript engine still runs the function even though parameter value is not set
//we can check whether this parameter value has value or not
function greet(name) {
    //since || has a higher precedence than =
    //if name is empty or undefined "Name is undefined!" is set to he variable name
    //if name has a value, name is set to that value
    name = name || "Name is undefined!";

    console.log("Hello " + name);
}

//greet("Marvin");
//greet();

console.log(myLibrary);