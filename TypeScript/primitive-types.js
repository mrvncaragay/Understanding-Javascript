// Boolean
var isDone = false;
// Number
var age = 30;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
console.log(binary);
console.log(octal);
// String
var myName = "Borlog!";
console.log(myName);
console.log("" + myName);
// Array
var ageList = [1, 3, 2];
console.log(ageList);
var strList = ["john", "borlog"];
console.log(strList);
// Tupple
var ageName;
ageName = [21, 'solve'];
console.log(ageName);
console.log(ageName[1].substr(1)); //->ovlve
//error
//let nameAge: [string, number] = [21 ,'solve'];
// Enu,
var Color;
(function (Color) {
    Color[Color["Red"] = 12] = "Red";
    Color[Color["Green"] = 13] = "Green";
    Color[Color["Blue"] = 14] = "Blue";
})(Color || (Color = {}));
var c = Color.Red;
var colorName = Color[13];
console.log(c);
console.log(colorName);
// Any
