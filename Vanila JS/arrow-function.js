

let min = (num1, num2) => {
    return num1 > num2 ? num2 : num1;
}

//console.log(min(5, 16));

//Recursion
function isEven(num) {
    if ( num === 0 ) {
        return 'Even';
    } else if ( num === 1 || num < 0) {
        return 'Odd';
    } else {
        return isEven (num - 2 );
    }

}

//console.log(isEven(-1));