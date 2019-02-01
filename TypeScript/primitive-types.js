// // Boolean
//
// let isDone: boolean = false;
//
// // Number
//
// let age: number = 30;
// let hex: number = 0xf00d;
// let binary: number = 0b1010;
// let octal: number = 0o744;
//
// console.log(binary);
// console.log(octal);
//
//
// // String
//
// let myName: string = "Borlog!";
//
// console.log(myName);
// console.log(`${myName}`);
//
// // Array
// let ageList: number[] = [1, 3, 2];
//
// console.log(ageList);
//
// let strList: string[] = ["john", "borlog"];
//
// console.log(strList);
//
//
// // Tupple
//
// let ageName: [number, string];
//
// ageName = [21 ,'solve'];
//
// console.log(ageName);
// console.log(ageName[1].substr(1)); //->ovlve
//
// //error
// //let nameAge: [string, number] = [21 ,'solve'];
//
// // Enum
//
// enum Color {Red = 1, Green, Blue}
//
// let c: Color = Color.Red;
// let colorName: string = Color[1];
//
// console.log(c);
// console.log(colorName);
// Any - can be assign any primitive types
// let notSure: any = 4;
//
// notSure = "Hoa";
//
// console.log(notSure);
//
// // Void - does not return a value
//
// function warUser(): void {
//     console.log("Danger!");
// }
// Never
// Type assertions <string> or as
var someValue = "this is a string";
var strLength = someValue.length;
console.log(strLength);
//let someValue: any = "this is a string";
//let strLength: number = (someValue as string).length;
