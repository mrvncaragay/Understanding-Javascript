
//Reflection

var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname;
    }
}

var john = {
    firstname: 'John',
    lastname: 'Doe'
}


//reflection

//loop over every member in the object
for (var prop in john) {
    console.log(prop + ': ' + john[prop]);
}

//review underscore .extend function