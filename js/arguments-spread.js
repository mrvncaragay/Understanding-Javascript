function greet(firstname, lastname, language, ...other) {

    //using arguments to require parameters
    if(arguments.length === 0) {
        console.log("missing parameters, please try again!");
        console.log("-------------");
        return;
    }

    console.log(firstname);
    console.log(lastname);
    console.log(language);
    console.log("args 0: " + arguments[0]);
    console.log("spread 0: " + other[0]);
    console.log("-------------");
}

//arguments
//greet();
//greet("Marv", "Carag");
//greet("Marv", "Carag", "es");

//using Spread parameter
greet("Marv", "Carag", "es", 12, "CA");