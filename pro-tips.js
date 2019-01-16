console.log('Inside Pro-Tipe');


console.log('\t' + 'Console');
//const foo = { name: 'tom', age: 32 };
//const bar = { name: 'Eric', age: 22 };

//good
//console.log('%c My Friend', 'color: blue');

//using object and console
//console.log({ foo, bar });

//dispaly them as a table
//use this if object has the same properties
//console.table
//console.table([foo, bar]);


//testing inside console
//console.time
/*console.time('looper');

let i = 0;
while( i < 1000000 ) { i++ }

console.timeEnd('looper');
*/

console.log('\t' + 'Destructing');

//Destructing
const turtle = {
    name: 'bob',
    leg: 4
}

//note the `` is not a ''
function feed(animal) {
    const { name, leg } = turtle;
    return `name ${name} has ${leg}`;
}

function feed2({name, leg}) {
    return `Name: ${name} has ${leg}`;
}

var a = turtle;

//both function are the name
//console.log(feed(a));
//console.log(feed(a));

console.log('\t' + 'Template Literals');

const horse = {
    name: 'Taz',
    age: 1
}

//back ticks
const { name, age } = horse;

var bio = `name ${name} age ${age}`;
//console.log( '\t\t' + bio );

//or

function horseAge(str, age) {

    const ageStr = age > 5 ? 'old' : 'young';
    return `${str[0]}${ageStr} at ${age} years`;
}

var bio2 = horseAge`This horse is ${horse.age}`;
//console.log('\t\t' + bio2);


console.log( '\t' + 'Spread Syntax' );

const pikachu = { name: 'Pikachu' };
const stats = { hp: 40, attack: 60, defense: 20 }

const lvl0 = { ...pikachu, ...stats }
//const lvl0 = { ...pikachu, hp: 30 }

//arrays

let pokemon = ['arbok', 'raichu'];

//push
pokemon = [...pokemon, 'Bulbasaur', 'Metapod'];
//console.log(pokemon);

//unshift
pokemon = ['troy', ...pokemon, 'pupl'];
//console.log(pokemon)



console.log('\t\t' + 'Loops');

const orders = [100, 300, 5123, 312];

const total = orders.reduce((acc, cur) => acc + cur);
console.log(total);

const withTax = orders.map(v => v * 1.2);
console.log(withTax);

const highValue = orders.filter(v => v >= 300);
console.log(highValue);


/*
console.time();
for(let i = 0; i < 2000000; i++) {
}
console.timeEnd();
*/