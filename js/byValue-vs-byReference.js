

//Pass by value

//a is set to 10 (primitive)
var a = 10;

//b is set to 10 (primitive
//b copied a value
var b = a;


//--> 10
console.log(a);

//--> 10
console.log(b);

a = 20;
//--> 20
console.log(a);

//We knot that this is pass by value since b's value did not change when a changed to 20.
//--> 10
console.log(b);


//Pass by reference