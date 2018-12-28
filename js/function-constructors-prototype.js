//One of the valid way to create a object and its prototype
//how do we set up the prototype or proto

function Person(firstname, lastname) {
    //when this function ran
    //this point to the new empty object that created the object
    //.firstname and .lastname add them to the new object
    this.firstname = firstname;
    this.lastname = lastname;

    //avoid creating method inside function constructors
    //takes memory space. inefficient.
    /*this.getFormalFullName = function() {
        return this.lastname + ', ' + this.firstname;
    }*/

}

//create a new method to the base Object Person
//create prototype method instead. only need to create 1 function for
//all the object needed this function.
Person.prototype.getFullName = function() {
    return this.firstname + ' ' + this.lastname;

}

//new creates a new empty object
//Person() - invoke the function
var john = new Person('Marvin', 'Carag');

console.log(john.lastname);
console.log(john);

var jane = new Person('Jane', 'Borlog');

console.log(jane.lastname);
console.log(jane);


//call the new Person Object method
console.log(john.getFullName());
console.log(jane.getFullName());