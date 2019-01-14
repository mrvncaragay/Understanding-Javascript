//IIFE
//Closure

//Module Pattern
let moduleName = (function () {
    //below is private variables/function...
    let name = "Marv";

    let showName = function() {
        return name;
    }

    //returned an object (Name/Value pairs)
    //available for public
    return {
        getName: showName()
    }
})();
