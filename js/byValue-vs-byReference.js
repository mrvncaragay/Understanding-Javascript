

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


//Pass by reference (Object)
//all object/functions interact by reference when set them equal to each other or passing to a function
//Object c
var c = {
    sayHi: 'Hi! from c'
};

var d;

//points to c memory.
d = c;

//--> 'Hi! from c'
console.log(c.sayHi);

//--> 'Hi! from c'
console.log(d.sayHi);

//now we mutate d property sayHi = 'Hi! from d'
d.sayHi = 'Hi! from d';

//Since we did not alter c property sayHi, it changed when d changed it.
//this shows that d and c is referencing to the same location in memory.
//--> 'Hi! from d'
console.log(c.sayHi);

//--> 'Hi! from d'
console.log(d.sayHi);

//Mutating object property using parameter by reference
function changeHi(obj){
    obj.sayHi = 'Hi! from parameter';
}

//mutate sayHi property using parameter.
changeHi(c);

//--> 'Hi! from parameter'
console.log(c.sayHi);

//--> 'Hi! from parameter'
console.log(d.sayHi);

//Using = to a new object sets up new memory space (new address)
c = {
    sayHowdy: 'Howdy! from c'
};

//--> 'Howdy! from c'
//c is now pointing to a new memory location
console.log(c);

//--> 'Hi! from parameter'
console.log(d);



