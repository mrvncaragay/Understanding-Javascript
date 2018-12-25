




var objectLiteral = {
    firstname: 'Marvin',
    lastname: 'Caragay'
}

console.log((objectLiteral));

//valid json literal
/*
{
    "firstname": 'Emily',
    "lastname": "Tyson",
    "isAProgrammer": false
}
*/

//converting object  to JSON syntax
//--> JSON object
console.log(JSON.stringify(objectLiteral));

//convert json to javascript object

var jsObject = JSON.parse('{"firstname": "Emily", "lastname": "Tyson", "isAProgrammer": false}')

//--> Javascript object
console.log(jsObject);