function greet(firstname, lastname, language) {
    language =  language || 'en';

    if(language === 'en') {
        console.log('Hello ' + firstname + ' ' + lastname);
    }

    if(language === 'es') {
        console.log('hola ' + firstname + ' ' + lastname);
    }

}

//creating a function for english default
function greetEnglish(firstname, lastname) {
    greet(firstname, lastname, 'en');
}

function greetSpanish(firstname, lastname) {
    greet(firstname, lastname, 'es');
}

//greet('Marv', 'Carag', 'es');
greetEnglish('Marv', 'Caraga');
greetSpanish('Marv', 'Caraga');