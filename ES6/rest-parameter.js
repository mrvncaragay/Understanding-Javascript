// Rest Parameter
// -Similar to spread
//      -arguments is already an array
//  -used in function declaration

function isFullAge6(...years) {
    years.forEach(cur => console.log(2019 - cur));
}

isFullAge6(1990, 1999, 1965);