//Polyfill
//if older browser does not support new browsert
//we can create that Object.create for the older browser.
if (!Object.create) {
    Object.create = function(o) {
        if(arguments.length > 1) {
            throw new Error('Object.create implementation' +
                ' only accepts the first parameter.');
        }

        function F() {}
        F.prototype = o;
        return new F();
    };
}

var person = {
    firstname: 'Default',
    lastname: 'Default',
    greet: function() {
        return 'Hi ' + this.firstname + ' ' + this.lastname;
    }
}

var john = Object.create(person);
john.firstname = 'John';
john.lastname = 'Perez';

var eric = Object.create(person, {
    firstname: 'eric',
    lastname: 'Sabug'
});

console.log(john);
console.log(john.greet());

console.log(eric);
console.log(eric.greet());

