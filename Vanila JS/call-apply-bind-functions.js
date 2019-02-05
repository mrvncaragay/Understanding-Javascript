
var person = {
    firstname: 'Marv',
    lastname: 'Carag',
    getFullName: function() {
        var fullname = this.firstname + ' ' + this.lastname;

        return fullname;
    }
}

var logName = function(lang1, lang2, ...spread) {

    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('Spread: ' + spread);
    console.log('----------------------');

}

//bind
//make a copy of the function logName
//use 'this' as the person object
var logPersonName = logName.bind(person);

//invoking the method .bind
logPersonName('en');

//call
//invoking and passing arguments using .call
logName.call(person, 'en', 'es');

//apply
//wants array of parameters
logName.apply(person, ['en', 'es', '1']);


//invoking the function on the fly and calling .call method
(function(lang1, lang2, ...spread) {

    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('Spread: ' + spread);
    console.log('----------------------');

}.call(person, 'en', 'es', '2', false, false));

///////////////////////////////////////////////////////

//function borrowing
var person2 = {
    firstname: 'Alice',
    lastname: 'Doe'
}

console.log('Function Baorrowing: ' + person.getFullName.call(person2));


//function currying
function multiply(a, b) {
    return a*b;
}

//set a to 2 permanently
var multipleByTwo = multiply.bind(this, 2);

console.log('Function Currying: ' + multipleByTwo(10));


