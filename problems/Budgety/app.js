//BUDGET CONTROLLER //MODEL
let budgetController = (function () {

    function Income(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }

    function Expense(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }

    let data = {
        allItems: {
            inc: [],
            exp: []
        },

        totals: {
            inc: 0,
            exp: 0
        }
    };


    return {
        addItem: function(value, desc, type) {
            let newitem, id;

            //create new id base on type and add 1
            if (data.allItems[type].length > 0) {
                id = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                id = 0;
            }

            if (type === 'inc') {
                newitem = new Income(id, desc, value);
            } else if (type === 'exp') {
                newitem = new Expense(id, desc, value);
            }

            //add data to our data structure
            data.allItems[type].push(newitem);

            //return the new items
            return newitem;
        }
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
        let input, newItem;

        //get user input
        input = UICtrl.getUserInput();

        //add item to the budget controller
        newItem = budgetCtrl.addItem(input.value, input.description, input.type);

        console.log(newItem);
    };


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

//Run the application
controller.init();