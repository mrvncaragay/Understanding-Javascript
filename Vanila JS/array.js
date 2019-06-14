
//Array
//push - add element in the end of the array
//pop - remove element in the end of the array
//shift - remove element in the begining of an array
//unshift - add element in the begining of an array
//splice - add elements anywhere in the array 
//slice - copy
//can hold different types of data
/*
    //array loops
    for (let entry of JOURNAL) {
        console.log(`${entry.events.length} events.`);
    }
*/

var myArray = [
    1,
    "This is a string" ,
    {
        name: "Marvin",
        address: "2825"
    },
    function(name) {
        console.log("Hi! " + name);
    }
];

//--> myArray...
console.log(myArray);

//invoking function inside an array
//since the function is located in the last element we can use brackets [] to access that function
//and by putting a parenthesis include a parameter we can call the function.
//--> 'Hi! Marv'
myArray[3]("Marv");



const a = {
    name: 'Marv'
}

for( let key in a) {
    console.log(a[key])
}

// for( let key of a) { error
//     console.log(key)
// }

//in for the object gives the key, of on the otherhand will not work because it will not iterate its value
//in for array is index, while of is its value

const arr = [1, 2, 3]

for ( let index in arr) { //index
    console.log(index)
}

for ( let value of arr) { //value
    console.log(value)
}