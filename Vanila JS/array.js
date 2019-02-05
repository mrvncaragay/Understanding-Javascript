
//Array
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