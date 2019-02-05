//Function Factories
//using closures

//base function
function makeGreeting(language) {  //base function variables 'language'

    return function(firstname, lastname) {
        if(language === 'en') {
            console.log('Hi ' + firstname + ' ' + lastname)
        }

        if(language === 'es') {
            console.log('Hola ' + firstname + ' ' + lastname)
        }
    }
}

//invoke makeGreeting with parameter 'en'
var sayEn = makeGreeting('en');

//invoke the child function
//--> Hi Marvin Caragay
sayEn('Marvin', 'Caragay');

//invoke makeGreeting with parameter 'es'
var sayEs = makeGreeting('es');

//invoke the child function
//--> Hola Marvin Caragay
sayEs('Marvin', 'Caragay');