
class Person {

    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    greet() {
        return 'Hi ' + this.firstname + ' ' + this.lastname;
    }
}

var john = new Person('John', 'Sadam');

console.log(john.greet());

class TallPerson extends Person {

    constructor(firstname, lastname, height) {
        super(firstname, lastname);
        this.height = height;
    }

    getHeight() {
        return this.height;
    }
}

var eric = new TallPerson('Eric', 'Sabik', "5'9");

console.log(eric.getHeight());