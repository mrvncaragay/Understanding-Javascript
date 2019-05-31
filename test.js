

function make(spread) {
    
    const ham = 'Ham ';
    return function(flavor) {
        return ham + flavor + spread;
    }
}


const peanut = make('butter');

console.log(peanut('bread '))