//Inheritance

//understanding the prototype
var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname;
    }
}

var john = {
    firstname: 'John',
    lastname: 'Doe'
}

//Error john.getFullname is not a function
//console.log(john.getFullName());

//John points to person object
john.__proto__ = person;

//found the .getFullName() from person object
//john can now access person's getFullName method since
//it did not find the method it will go to prototype chain
//starting it self and if it did not it will go to the chain
//and look there.
console.log(john.getFullName());


var jane = {
    firstname: 'Jane'
}

//Jane points to the person object
jane.__proto__ = person;

//Since jane does not have a last name
//it will go to prototype chain and see if person has lastname properties
//and it does, so it prints 'default'
console.log(jane.firstname + ' ' + jane.lastname);