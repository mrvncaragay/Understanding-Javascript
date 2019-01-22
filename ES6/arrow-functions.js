/*
    Arrow Function
        -use parenthesis for 2 or parameters
        -user curly braces for more lines of code
            -use return
        -careful with setting up this inside arrow method. it needs regular function call and arrow function to point
            -to the object.
 */

const years = [1990, 1992, 1995];

let consoleYear = (years) => {
    for(let i = 0; i < years.length; i++) {
        console.log(years[i]);
    }
};

let lesthan95 = years.map(el => 2018 - el);

//console.log(lesthan95);

const name = {
    fname: 'Marv',
    lname: 'Borlog',
    color: 'red',

    getColor: function() {
        return () => {
            console.log(this.color);
        }
    }
};

name.getColor()();

const name2 = {
    fname: 'Marv',
    lname: 'Borlog',
    color: 'red',

    getColor: function() {
       console.log(this.color);
    }
};

name2.getColor();