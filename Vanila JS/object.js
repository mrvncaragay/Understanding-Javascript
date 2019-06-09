/*
    Object.assign(object, {properties}) //copies all properties from one object into another
    Object.keys(object) //returns an array of strings - property names
    delete object.properties //delete the property
    'property' in object //check if object property exist
*/


/*
    methods:
        Object.assign copy the object

**/

/*
//not ideal to create an object
var person  =  new Object();

//create a properties called 'firstname' using bracket []
person['firstname'] = 'Marvin'; //primitive properties 'String'
person['lastname'] = 'Caragay'; //primitive properties 'String'

//--> person Object
console.log(person);

//--> 'Marvin Caragay'
console.log(person['firstname'] + ' ' + person['lastname']);

//using variable as a placeholder to access properties
//--> 'Marvin Caragay'
var marvlastName = 'lastname'
console.log(person['firstname'] + ' ' + person[marvlastName]);

//using dot or member access operator(.) to access the properties
//--> 'Marvin'
console.log(person.firstname);
console.log(person.lastname);

//create another object property inside the person object
person.address = new Object();

//create a city value inside the address object
person.address['city'] = 'Menlo Park';

//you can also just create an properties using . on the fly
person.address.street = '2825 Sandhill Rd';

//the . associativity runs from left to right
//--> 'Menlo Park 2825 Sandill Rd'
console.log(person.address.city + ' ' + person.address.street)

//using computed operator [] to access properties
//--> 'Menlo Park'
console.log(person['address']['city']);

//using both . and []
//--> '2825 Sandhill Rd Menlo Park'
console.log(person['address'].street + ' ' + person.address['city']);
*/

//using object literals {} for creating object
//var person  =  {};

//--> Peron Object
//console.log(person);

var person = {
    'firstname': 'Marvin',
    'lastname': 'Caragay',
    'address': {
        'street': '2825 Sand Hill Rd',
        'city': 'Menlo park',
        'state': 'California'
    }
}

//--> Peron Object
console.log(person);

//--> 'Marvin Caragay'
console.log(person.firstname + ' ' + person.lastname);

//--> 'California'
console.log(person.address.state);


//create an function that accept person object
function greet(person) {
    console.log(person.firstname + ' ' + person.lastname)
}

//--> 'Marvin Caragay'
greet(person);

//passing an object into the function on the fly while invoking a function
//--> 'Emily Tyson'
greet({
    firstname: 'Emily',
    lastname: 'Tyson'

});



















