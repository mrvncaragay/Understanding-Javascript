// Classes
// -not hoisted
// -cant create properties only methos

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getAge() { return this.age; } //similar to prototype

    //static method cant be inherited
    static gretting() {
        return 'Hi!';
    }
}

let john = new Person('John', 23);


//john cant call static method
console.log(john.getAge());

//calling static method
console.log(Person.gretting());