//runs on the browser

//models/Search.js
export default 12;

//views/searchView.js
export const multiplyBy = (num1, num2) => num1 * num2;
export const ID = 23;
export const add = (num1, num2) => num1 + num2;

//index.js
import str from './models/Search';
import { multiplyBy, ID, add } from './views/searchView';

console.log(multiplyBy(2, 4));
console.log(ID);
console.log(add(1, 2));

// or import * as searchView from './views/searchView';
// console.log(searchView.multiplyBy(2, 4));
// console.log(searchView.ID);
// console.log(searchView.add(1, 2));

//import { multiplyBy as mul, ID as id, add as plus } from './views/searchView'; named import

//console.log(mul(2, 4));
//console.log(id);
//console.log(plus(1, 2));


