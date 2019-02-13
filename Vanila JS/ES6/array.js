// Array
/*
//get all elements that has class box
const boxes = document.querySelectorAll('.box');


const boxesArr6 = Array.from(boxes);

//loop to all element and changed their background color to red
boxesArr6.forEach(cur => {
    cur.style.backgroundColor = 'red';

});

//loops
//changing element textContent

for (const cur of boxesArr6 ) {
    if (cur.className === 'box red') continue; //or cur.className.includes('red');
    cur.textContent = 'I changed to red!';
}

*/
//find single element or index in the array
const ages = [12, 17, 8, 21, 14, 11];

console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));