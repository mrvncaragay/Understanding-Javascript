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

        removeItem: function(type, id) {
            let realid;
            //subtract the value this item to the total
            realid = data.allItems[type].findIndex(function(itemID){
                    return itemID.id === id;
            });

            data.totals[type] -= data.allItems[type][realid].value;

            //remove the budget in the array
            data.allItems[type].splice(realid, 1);
        },

        calculatebudget: function() {
            return data.totals;
        },
    }
})();



///
//UI CONTROLLER
///
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
        classDeleteBtn: '.container',
        classExpPer: '.budget__expenses--percentage',
        classItemPer: '.item__percentage'


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
                itemEle = `<div class="item clearfix" id="inc-${obj.id}"><div class="item__description">${obj.description}</div><div class="right clearfix"><div class="item__value">+ ${obj.value}</div><div class="item__delete">
                           <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>`;

            } else if (type === 'exp') {

                element = DOMstrings.expenseList;
                itemEle = `<div class="item clearfix" id="exp-${obj.id}"><div class="item__description">${obj.description}</div><div class="right clearfix"><div class="item__value">- ${obj.value}</div><div class="item__percentage"></div>
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

            document.querySelector(DOMstrings.classDateMonth).textContent = `${arrMonths[current.getMonth()]} ${current.getFullYear()}`;
        },

        displayBudget: function(obj, input, newitem) {

            let total = obj.inc - obj.exp;
            let overAllPercentage = obj.exp / obj.inc * 100;

            document.querySelector(DOMstrings.classBudgetInc).textContent = `+ ${obj.inc}`;
            document.querySelector(DOMstrings.classBudgetExp).textContent = `- ${obj.exp}`;

            //Display the overall Percentage
            document.querySelector(DOMstrings.classExpPer).textContent = `${overAllPercentage.toPrecision(2)}%`;

            //display each item percentage
            if(input.type === 'exp') {
                //let val, ele;

                //val = Number(input.value);
                //val = val / obj.inc * 100;

                //ele = document.getElementById(`exp-${newitem.id}`);

                //console.log(ele);
                 //val.toPrecision(2) + '%';
            }

            if(total > 0) {
                document.querySelector(DOMstrings.classTotalBudget).textContent = `+${total}`;
            } else {
                document.querySelector(DOMstrings.classTotalBudget).textContent = `${total}`;
            }
        },

        removeItembudget: function(itemid) {

            let item = document.getElementById(itemid);
            item.parentNode.removeChild(item);
        },

        clearFields: function() {
            document.querySelector(DOMstrings.classValue).value = "";
            document.querySelector(DOMstrings.classDesc).value = "";
        }
    };
})();



///
//GLOBAL APP CONTROLLER
///
let controller = (function (budgetCtrl, UICtrl) {

    let setUpEventListener = function() {

        //get UIController DOM strings
        let DOM = UICtrl.getDomStrings();

        //listen to add item button (when user click or enter)
        document.querySelector(DOM.btnAddItem).addEventListener('click', ctrlAddItem);
        document.addEventListener('keypress', function(e){

            if(e.key === 13 || e.which === 13) { ctrlAddItem() }
        });

        document.querySelector(DOM.classDeleteBtn).addEventListener('click', ctrlDeleteItem);
    };

    let updateBudget = function() {
        //get the calclated budget
        let budget = budgetCtrl.calculatebudget();

        //update user UI
        UICtrl.displayBudget(budget);
    };

    //get user input data
    let ctrlAddItem = function() {
        let inputdata, newitem, budget;

        //get user input
        inputdata = UICtrl.getUserInput();

        if( inputdata.description !== "" && !isNaN(inputdata.value) && inputdata.value > 0 ) {

            //add item to the budget controller
            newitem = budgetCtrl.addItem(inputdata.value, inputdata.description, inputdata.type);

            //add the item to the UI
            UICtrl.addListItems(newitem, inputdata.type);

            //calculate the budget
            budget = budgetCtrl.calculatebudget();

            //Display the budget on the UI
            UICtrl.displayBudget(budget, inputdata, newitem);

            //Clear fields
            UICtrl.clearFields();
        }
    };

    let ctrlDeleteItem = function(e) {
        let id, item;

        id = e.target.parentNode.parentNode.parentNode.parentNode.id;

        if(id) {

            item = id.split('-');

            //remove budget item in the model
            budgetCtrl.removeItem(item[0], Number(item[1]));

            //remove budget item in the DOM
            UICtrl.removeItembudget(id);

            //update user UI
            updateBudget();
        }
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