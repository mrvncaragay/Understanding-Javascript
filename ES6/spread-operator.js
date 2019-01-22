// Spread

function addFourAges(a, b, c, d) {
    return a + b + c + d;
}


//ES5
var ages = [12, 32, 12, 11];

var sum = addFourAges.apply(null, ages);

console.log(sum);

//ES6

const sum2 = addFourAges(...ages);
console.log(sum2);


//joining array
const familySmith = ['John', 'Jane', 'Mark'];

const familyMiller = ['John 2', 'Mark 2'];

const bigFamily = [...familyMiller, ...familySmith];

console.log(bigFamily);

//node list
const h = document.querySelector('h1');

const boxes = document.querySelectorAll('.box');

const all = [h, ...boxes];

//loop each element and changed their color to red.
Array.from(all).forEach(cur => cur.style.color = 'red');
