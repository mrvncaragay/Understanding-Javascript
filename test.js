console.log('Inside Test');

//var b = Hugis('square', 'red', 30);

//console.log(b);

/*
var Car = function(name, year){
    ...
    ...

};*/

//OR
function Car(name, year) {
    this.name = name;
    this.year = year;
};

Car.prototype.getAge = function() {
    return 2019 - this.year;
}

var honda = new Car('Honda', 2001);
var toyota = new Car('toyota', 2005);
var hyundai = new Car('hyundai', 1995);


console.log(honda.getAge());
console.log(toyota.getAge());
console.log(hyundai.getAge());