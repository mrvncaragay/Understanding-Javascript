// Classes
// -not hoisted
// -cant create properties only methos

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     getAge() { return this.age; } //similar to prototype

//     //static method cant be inherited
//     static gretting() {
//         return 'Hi!';
//     }
// }

// let john = new Person('John', 23);


// //john cant call static method
// console.log(john.getAge());

// //calling static method
// console.log(Person.gretting());

// With object as param
class User {
    constructor( username, email, password ) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    getUsername() {
        return this.username;
    }
}

const u = { username: "Marv 3", email: 'dsada@yahoo.com', password: "123456" } 
const user = new User(u);

console.log(user.getUsername());