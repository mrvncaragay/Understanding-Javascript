//slice - copy elements
// .length - length of an string
// .indexOf - find the first instance of the segment
// .lastIndexOf - find the last instance of the segment
// .charAt(<index>) - find a character
// .replace(<str to find>, <replace it with str>) - replace str using replace
//   replace all occurence use /..../g

console.log("coconuts".slice(2, 4));
// → nut
console.log("coconut".indexOf("u"));
// → 5
console.log("one two three".indexOf("ee"));
// → 11
console.log(" okay \n ".trim());
// → okay
console.log(String(6).padStart(3, "0"));
// → 006

//let sentence = "Secretarybirds specialize in stomping";
//let words = sentence.split(" ");
//console.log(words);
// → ["Secretarybirds", "specialize", "in", "stomping"]
//console.log(words.join(". "));
// → Secretarybirds. specialize. in. stomping

console.log("LA".repeat(3));
// → LALALA

//highest number
function max(...numbers) {
    let result = -Infinity;
    for (let number of numbers) {
        if (number > result) result = number;
    }
    return result;
}
console.log(max(4, 1, 9, -2));
// → 9

let numbers = [5, 1, 7];
console.log(max(...numbers));
// → 7

let words = ["never", "fully"];
console.log(["will", ...words, "understand"]);
// → ["will", "never", "fully", "understand"]
