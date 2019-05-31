

const myModule = (() => {

    const privateVariable = 'Im private!';

    function privateMethod() {
        console.log(privateVariable);
    }

    return {
        public: function() {
            privateMethod();
        }
    }
})();


myModule.public() // Im private!

// variables and functions inside IIFE are hidden from outer scope as a result myModule became private
console.log(myModule); // { public: [Function: public] }