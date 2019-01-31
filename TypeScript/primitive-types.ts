// Boolean

let isDone: boolean = false;

// Number

let age: number = 30;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

console.log(binary);
console.log(octal);


// String

let myName: string = "Borlog!";

console.log(myName);
console.log(`${myName}`);

// Array
let ageList: number[] = [1, 3, 2];

console.log(ageList);

let strList: string[] = ["john", "borlog"];

console.log(strList);


// Tupple

let ageName: [number, string];

ageName = [21 ,'solve'];

console.log(ageName);
console.log(ageName[1].substr(1)); //->ovlve

//error
//let nameAge: [string, number] = [21 ,'solve'];

// Enum

enum Color {Red = 12, Green, Blue}

let c: Color = Color.Red;
let colorName: string = Color[13];

console.log(c);
console.log(colorName);

// Any