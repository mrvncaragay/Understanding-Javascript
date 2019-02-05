
//this key word

//--> window object
//this points to global object window
//console.log(this);

//function statement
function a() {
    console.log(this);
    this.newVariable = 'from function a';
}

//--> window object
//still points to the global window object
//a();

//function expression
var b =  function() {
    console.log(this);
}

//--> window global object
//both variable points to the same window object
//newVariable is global so we do not need to use . operator
a();
console.log(newVariable);
b();

//Object method and this
var c = {
    name: 'The c object',
    log: function() {
        var self = this; //since this points to the c object we can declare a variable and points to 'this' memory
                         //location. then we can have a variable referenced to the c object not to worry about
                         //what this is pointing to.

        self.name = 'Updated c object using this' //replaced this to self
        console.log(self); //replaced this to self

        var setname = function(newname) {
            //--> name become global variable instead of local to c
            //weird because it's still inside the c object.
            self.name = newname; //replaced this to self and this now works because self is still points to c
                //object memory location
        }

        setname('updated again! the c object');
        console.log(this); //replaced this to self
    }
}

c.log();