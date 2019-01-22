// Destructuring


//Variables
const [name, year] = ['John', 26];

console.log(name, year);

//Object
const obj = {
    fname: 'John',
    lname: 'Solva'
};

//const { fname, lname } = obj;

//console.log(fname, lname);

//Naming the variable

const { fname: f, lname: l } = obj;

console.log(f, l);

//function

function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;

    return [age, 65 - age];
}

const [age, retirement] = calcAgeRetirement(1990);

console.log(age, retirement);