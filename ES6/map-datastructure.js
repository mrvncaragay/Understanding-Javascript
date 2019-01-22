
// Maps destructure
//  -key/value
//  -key can be anything

//create new Map
const question = new Map();

//create new item
question.set('question', 'What is the official name of the latest major JavaScript version?');
question.set(1, 'ES6');
question.set(2, 'ES5');
question.set(3, 'ES4');
question.set(4, 'ES2015');
question.set('correct', 4);
question.set(true, 'Correct answert!');
question.set(false, 'Wrong please try again!');

//retrieve items
//console.log(question.get('question'));

//size of Map
//console.log(question.size);

//removing item
question.delete(1);

//check if key exist
//console.log(question.has(4));

//clear the map using clear
//question.clear();

//loop trough map

question.forEach((value, key) => {
    //console.log(key, value);

});

//printing only int key
for (let [key, value] of question.entries() ) { //destructuring

    if(typeof key === 'number') {
        console.log(value);
    }
}

//console.log(question);