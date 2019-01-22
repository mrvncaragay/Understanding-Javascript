//Class and Sub-Class


class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    printNameAge() {
        console.log(this.name, this.age);
    }
}

class Male extends Person {

    constructor(name, age, str) {
        super(name, age);

        this.str = str;
    }

    getStr() {
        console.log(this.str);
    }
}

let john = new Male('John', 23, 200);

console.log(john);
john.getStr();
john.printNameAge();