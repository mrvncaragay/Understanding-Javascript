
var John = {
    fullName: 'John',
    mass: 26,
    height: 6,
    calcBMI: function() {
        return this.mass / (this.height**2);
    }
}

var Mark = {
    fullName: 'Mark',
    mass: 50,
    height: 4
}

var whoHasHighestBMI = function (mark, john) {
    return john.calcBMI.call(mark) > john.calcBMI() ? mark.fullName : john.fullName;
}

console.log('The Winner is: ' + whoHasHighestBMI(Mark, John));
//console.log(John.calcBMI());
