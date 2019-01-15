//BUDGET CONTROLLER
var budgetController = (function () {

    return {

    }

})();


//UI CONTROLLER
var UIController = (function () {

    return {

    }

})();


//GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {

    document.querySelector('.add__btn').addEventListener('click', function () {
        //get input data
        //add item to the budget controller
        //add the item to the UI
        //calculate the budget
        //Display the budget on the UI
    });

    document.addEventListener('keypress', function(e){

        if(e.key === 13 || e.which === 13) {
            console.log("Enter Pressed!");
            //get input data
            //add item to the budget controller
            //add the item to the UI
            //calculate the budget
            //Display the budget on the UI
        }
    });

})(budgetController, UIController);