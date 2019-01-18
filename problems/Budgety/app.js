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
                newitem = new Income(id, desc, Number(value));
            } else if (type === 'exp') {
                newitem = new Expense(id, desc, Number(value));
            }

            //add data to our data structure
            data.allItems[type].push(newitem);

            //add value to totals
            data.totals[type] += newitem.value;

            //return the new items
            return newitem;
        },

        calculatebudget: function() {
            return data.totals;
        },

        isEmptyData: function() {
            console.log(data.allItems.exp.length === 0 && data.allItems.inc.length === 0);
            return data.allItems.exp.length === 0 && data.allItems.inc.length === 0;
        }

    }
})();


//UI CONTROLLER
let UIController = (function () {

    let DOMstrings  = {
        classValue: '.add__value',
        classDesc: '.add__description',
        classType: '.add__type',
        btnAddItem: '.add__btn',
        incomeList: '.income__list',
        expenseList: '.expenses__list',
        classBudgetInc: '.budget__income--value',
        classBudgetExp: '.budget__expenses--value',
        classTotalBudget: '.budget__value',
        classDateMonth: '.budget__title--month',
        classDeleteBtn: '.item__delete--btn'

    }

    return {
        getUserInput: function(){
            return {
                value: document.querySelector(DOMstrings.classValue).value,
                description: document.querySelector(DOMstrings.classDesc).value,
                type: document.querySelector(DOMstrings.classType).value
            };
        },

        addListItems: function(obj, type) {
            let itemEle, element;

            //income
            if (type === 'inc') {
                element = DOMstrings.incomeList;
                itemEle = `<div class="item clearfix" id="income-${obj.id}"><div class="item__description">${obj.description}</div><div class="right clearfix"><div class="item__value">+ ${obj.value}</div><div class="item__delete">
                           <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>`;

            } else if (type === 'exp') {

                element = DOMstrings.expenseList;
                itemEle = `<div class="item clearfix" id="expense-${obj.id}"><div class="item__description">${obj.description}</div><div class="right clearfix"><div class="item__value">- ${obj.value}</div><div class="item__percentage">21%</div>
                           <div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>`;
            }

            //insert obj to the window
            document.querySelector(element).insertAdjacentHTML('beforeend', itemEle);
        },

        getDomStrings: function() {
            return DOMstrings;
        },

        displayMonth: function() {
            let current = new Date();
            let arrMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

            document.querySelector(DOMstrings.classDateMonth).textContent = arrMonths[current.getMonth()];
        },

        displayBudget: function(obj) {
            let total = obj.inc - obj.exp;

            document.querySelector(DOMstrings.classBudgetInc).textContent = `+ ${obj.inc}`;
            document.querySelector(DOMstrings.classBudgetExp).textContent = `- ${obj.exp}`;
            document.querySelector(DOMstrings.classTotalBudget).textContent = `${total}`;
        },

        clearFields: function() {
            document.querySelector(DOMstrings.classValue).value = "";
            document.querySelector(DOMstrings.classDesc).value = "";
        }
    };
})();


//GLOBAL APP CONTROLLER
let controller = (function (budgetCtrl, UICtrl) {

    let setUpEventListener = function() {

        //get UIController DOM strings
        let DOM = UICtrl.getDomStrings();

        //listen to add item button (when user click or enter)
        document.querySelector(DOM.btnAddItem).addEventListener('click', ctrlAddItem);
        document.addEventListener('keypress', function(e){

            if(e.key === 13 || e.which === 13) {
                ctrlAddItem();
            }
        });

        //let id = document.querySelector(DOM.classDeleteBtn).addEventListener('click');
    };

    //get user input data
    let ctrlAddItem = function() {
        let inputdata, newitem, budget;

        //get user input
        inputdata = UICtrl.getUserInput();

        //add item to the budget controller
        newitem = budgetCtrl.addItem(inputdata.value, inputdata.description, inputdata.type);

        //add the item to the UI
        UICtrl.addListItems(newitem, inputdata.type);

        //calculate the budget
        budget = budgetCtrl.calculatebudget();

        //Display the budget on the UI
        UICtrl.displayBudget(budget);

        //Clear fields
        UICtrl.clearFields();

        //activate event listener to delete
    };

    let ctrlDeleteItem = function() {
        console.log('deleted');
    };

    return {
        init: function() {
            console.log('Application is running!');
            UICtrl.displayMonth();
            setUpEventListener();
        }
    };
})(budgetController, UIController);

//Run the application
controller.init();

//input verification
//delete item