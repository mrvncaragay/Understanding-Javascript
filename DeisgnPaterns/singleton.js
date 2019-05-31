// A sigelton pattern is an object which can only be instantiated only once.
// this patern creates a new instance of a class if one does not exists.
// if an instance exists it just returns a reference to that object.

// A singleton pattern example of this is object literals

const user1 = {
    name: 'Marv',
    age: 21
}

console.log(user1); //{ name: 'Marv', age: 21 }

const user2 = user1;

console.log(user2); //{ name: 'Marv', age: 21 }

user2.name = 'Satoshi';
console.log(user2); //{ name: 'Satoshi', age: 21 }
console.log(user1); //{ name: 'Satoshi', age: 21 }
console.log(user2 === user1) // true


//Notice that user2 and user1 has the same name eventhough we only change it to user2
//the reason for this is objects are pass by reference
//while datatype are pass by value.

//implementing singleton pattern using Class or function constructor

class SingleTon {

    constructor() {

        this.instance;

        return () => {
            if(!this.instance) {
                this.instance = this.init();
            }

            return this.instance;
        }
    }

    init() {
        return {
            name: 'Marv',
            age: 30
        }
    }
}

const instanceA = new SingleTon();
const instanceB = new SingleTon();

console.log(instanceA === instanceB); //Re implement