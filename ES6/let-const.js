//let and const

/*

ES5

 */

var name5 = 'Marv';

var name5 = 'Eric';

//console.log(name5);

/*

ES6

- let and const are block scope.
- block are wrapped inside curly braces
- not hoisted (meaning calling a variable before declaring it gives an error: not defined.


 */

let name6 = 'Marv';
//name6 = 'Eric'; //okay

//let name1 = 'Eric'; // error: name1 has already been declared
//console.log(name6);

const name66 = 'Marv';

//name66 = 'Eric'; //error: constant immutable(cannot change)
//console.log(name66);

function sayHi() {
    if (true) {
        let firstname = 'Marv';
        const lastname = 'cc';
    }

    //console.log(firstname, lastname); //firstname and lastname is not defined
}

sayHi();


function sayHiAgain() {

    //console.log(firstname, lastname); //error: firstname is not defined

    let firstname = 'Potter';
    const lastname = 'Ams';


    //console.log(firstname, lastname); //okay

    if (true) {
        let firstname = 'Marv2';
        const lastname = 'cc2';

        console.log(firstname, lastname); //okay
    }

    //let firstname = 'Potter';
    //const lastname = 'Ams';

    console.log(firstname, lastname); //okay
}

sayHiAgain();