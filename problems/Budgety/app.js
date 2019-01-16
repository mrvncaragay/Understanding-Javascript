//BUDGET CONTROLLER //MODEL
let budgetController = (function () {



    return {

    }

})();


//UI CONTROLLER
let UIController = (function () {

    let DOMstrings  = {
        classValue: '.add__value',
        classDesc: '.add__description',
        classType: '.add__type',
        btnClick: '.add__btn'
    }

    return {
        getUserInput: function(){
            return {
                value: document.querySelector(DOMstrings.classValue).value,
                description: document.querySelector(DOMstrings.classDesc).value,
                type: document.querySelector(DOMstrings.classType).value
            };
        },

        getDomStrings: function() {
            return DOMstrings;
        }
    };
})();


//GLOBAL APP CONTROLLER
let controller = (function (budgetCtrl, UICtrl) {

    let setUpEventListner = function() {

        //get UIController DOM strings
        let DOM = UICtrl.getDomStrings();

        document.querySelector(DOM.btnClick).addEventListener('click', ctrlAddItem);
        document.addEventListener('keypress', function(e){

            if(e.key === 13 || e.which === 13) {
                ctrlAddItem();
            }
        });
    }

    //get user input data
    let ctrlAddItem = function() {
        console.log('da');
        let input = UICtrl.getUserInput();
    }

    //add item to the budget controller
    //add the item to the UI
    //calculate the budget
    //Display the budget on the UI

    return {
        init: function() {
            console.log('Application is running!');
            setUpEventListner();
        }
    };
})(budgetController, UIController);


controller.init();