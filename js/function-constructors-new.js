
//function constructor
//object creator
function Person(firstname, lastname) {
    //when this function ran
    //this point to the new empty object that created the object
    //.firstname and .lastname add them to the new object
    this.firstname = firstname;
    this.lastname = lastname;
    //this.getFullName = function() {
        //return this.firstname + ' ' + this.lastname;
    //}
}

Person.prototype.getFullName = function() {
    return this.firstname + ' ' + this.lastname;
}

//new creates a new empty object
//Person() - invoke the function
var john = new Person('Marvin', 'Carag');

console.log(john.lastname);
console.log(john.getFullName());


//more example

/*
var Car = function(name, year){
    ...
    ...

};*/

// OR (the same)
function Car(name, year) {
    this.name = name;
    this.year = year;
};

Car.prototype.getAge = function() {
    return 2019 - this.year;
}

var honda = new Car('Honda', 2001);
var toyota = new Car('toyota', 2005);
var hyundai = new Car('hyundai', 1995);


console.log(honda.getAge());
console.log(toyota.getAge());
console.log(hyundai.getAge());