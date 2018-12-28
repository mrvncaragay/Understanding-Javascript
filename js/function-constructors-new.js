
//function constructor
//object creator
function Person(firstname, lastname) {
    //when this function ran
    //this point to the new empty object that created the object
    //.firstname and .lastname add them to the new object
    this.firstname = firstname;
    this.lastname = lastname;
    this.getFullName = function() {
        return this.firstname + ' ' + this.lastname;
    }
}

//new creates a new empty object
//Person() - invoke the function
var john = new Person('Marvin', 'Carag');

console.log(john.lastname);
console.log(john.getFullName());