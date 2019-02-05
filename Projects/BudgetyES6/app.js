var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var budgetController = (function () {
    var Item = /** @class */ (function () {
        function Item(id, description, value) {
            this.id = id;
            this.description = description;
            this.value = value;
        }
        return Item;
    }());
    var Income = /** @class */ (function (_super) {
        __extends(Income, _super);
        function Income(id, description, value) {
            return _super.call(this, id, description, value) || this;
        }
        return Income;
    }(Item));
    var Expense = /** @class */ (function (_super) {
        __extends(Expense, _super);
        function Expense(id, description, value) {
            var _this = _super.call(this, id, description, value) || this;
            _this.percentage = -1;
            return _this;
        }
        Expense.prototype.calcPercentage = function (totalIncome) {
            if (totalIncome > 0) {
                this.percentage = Math.round((this.value / totalIncome) * 100);
            }
        };
        Expense.prototype.getPercentage = function () {
            return this.percentage;
        };
        return Expense;
    }(Item));
    var data = {
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
        addItem: function (value, description, type) {
            var newitem;
            var id = 1;
            if (data.allItems[type].length > 0) {
                id = data.allItems[type][data.allItems[type].length - 1].id + 1;
            }
            else {
                id = 0;
            }
            if (type === 'inc') {
                newitem = new Income(id, description, value);
            }
            else if (type === 'exp') {
                newitem = new Expense(id, description, value);
            }
            //add data to our data structure
            data.allItems[type].push(newitem);
            //add value to totals
            data.totals[type] += newitem.value;
            return newitem;
        },
        removeItem: function (type, id) {
            var realid;
            realid = data.allItems[type].findIndex(function (itemID) {
                return itemID.id === id;
            });
            data.totals[type] -= data.allItems[type][realid].value;
            data.allItems[type].splice(realid, 1);
        },
        calculatePercentages: function () {
            data.allItems.exp.forEach(function (current) {
                current.calcPercentage(data.totals.inc);
            });
        },
        getPercentages: function () {
            var allPerc = data.allItems.exp.map(function (current) {
                return current.getPercentage();
            });
            return allPerc;
        },
        calculatebudget: function () {
            return data.totals;
        }
    };
})();
var uiController = (function () {
    var DOMstrings = {
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
    };
    return {
        getUserInput: function () {
            return {
                value: document.querySelector(DOMstrings.classValue).value,
                description: document.querySelector(DOMstrings.classDesc).value,
                type: document.querySelector(DOMstrings.classType).value
            };
        },
        addListItems: function (obj, type) {
            var itemEle;
            var element;
            //income
            if (type === 'inc') {
                element = DOMstrings.incomeList;
                itemEle = "<div class=\"item clearfix\" id=\"inc-" + obj.id + "\"><div class=\"item__description\">" + obj.description + "</div><div class=\"right clearfix\"><div class=\"item__value\">+ " + obj.value + "</div><div class=\"item__delete\">\n                           <button class=\"item__delete--btn\"><i class=\"ion-ios-close-outline\"></i></button></div></div></div>";
            }
            else if (type === 'exp') {
                element = DOMstrings.expenseList;
                itemEle = "<div class=\"item clearfix\" id=\"exp-" + obj.id + "\"><div class=\"item__description\">" + obj.description + "</div><div class=\"right clearfix\"><div class=\"item__value\">- " + obj.value + "</div><div class=\"item__percentage\"></div>\n                           <div class=\"item__delete\"><button class=\"item__delete--btn\"><i class=\"ion-ios-close-outline\"></i></button></div></div></div>";
            }
            //insert obj to the window
            document.querySelector(element).insertAdjacentHTML('beforeend', itemEle);
        },
        getDomStrings: function () {
            return DOMstrings;
        },
        displayMonth: function () {
            var current = new Date();
            var arrMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            document.querySelector(DOMstrings.classDateMonth).textContent = arrMonths[current.getMonth()] + " " + current.getFullYear();
        },
        displayBudget: function (obj) {
            var total = obj.inc - obj.exp;
            var overAllPercentage = Math.round(obj.exp / obj.inc * 100);
            document.querySelector(DOMstrings.classBudgetInc).textContent = "+ " + obj.inc;
            document.querySelector(DOMstrings.classBudgetExp).textContent = "- " + obj.exp;
            //Display the overall Percentage
            if (total > 0) {
                document.querySelector(DOMstrings.classExpPer).textContent = overAllPercentage + "%";
            }
            if (total > 0) {
                document.querySelector(DOMstrings.classTotalBudget).textContent = "+" + total;
            }
            else {
                document.querySelector(DOMstrings.classTotalBudget).textContent = "" + total;
            }
        },
        removeItemBudget: function (itemid) {
            var item = document.getElementById(itemid);
            item.parentNode.removeChild(item);
        },
        displayPercentages: function (percentages) {
            var fields = document.querySelectorAll(DOMstrings.classItemPer);
            var nodeListForEach = function (list, callback) {
                for (var i = 0; i < list.length; i++) {
                    callback(list[i], i);
                }
            };
            nodeListForEach(fields, function (current, index) {
                if (percentages[index] > 0) {
                    current.textContent = percentages[index] + "%";
                }
                else {
                    current.textContent = "0%";
                }
            });
        },
        clearFields: function () {
            document.querySelector(DOMstrings.classValue).value = "";
            document.querySelector(DOMstrings.classDesc).value = "";
        }
    };
})();
var appController = (function (budget, ui) {
    var setUpEventListener = function () {
        //get UIController DOM strings
        var DOM = ui.getDomStrings();
        //listen to add item button (when user click or enter)
        document.querySelector(DOM["btnAddItem"]).addEventListener('click', ctrlAddItem);
        document.addEventListener('keypress', function (e) {
            if (e.key === '13' || e.which === 13) {
                ctrlAddItem();
            }
        });
        document.querySelector(DOM["classDeleteBtn"]).addEventListener('click', ctrlDeleteItem);
    };
    var ctrlAddItem = function () {
        var inputdata, newitem, budget1;
        //get user input
        inputdata = ui.getUserInput();
        if (inputdata.description !== "" && !isNaN(inputdata.value) && inputdata.value > 0) {
            //add item to the budget controller
            newitem = budget.addItem(Number(inputdata.value), inputdata.description, inputdata.type);
            //add the item to the UI
            ui.addListItems(newitem, inputdata.type);
            //calculate the budget
            budget1 = budget.calculatebudget();
            //Display the budget on the UI
            updateBudget();
            //updatePercentages
            updatePercentages();
            //Clear fields
            ui.clearFields();
        }
    };
    var updateBudget = function () {
        //get the calculated budget
        var budget1 = budget.calculatebudget();
        //update user UI
        ui.displayBudget(budget1);
    };
    //update Percentage
    var updatePercentages = function () {
        //calc percentages
        budget.calculatePercentages();
        //read percentages from the budget controller
        var percentages = budget.getPercentages();
        //update the UI with the new percentages
        ui.displayPercentages(percentages);
    };
    var ctrlDeleteItem = function (e) {
        var id, item;
        id = e.target.parentNode.parentNode.parentNode.parentNode.id;
        if (id) {
            item = id.split('-');
            //remove budget item in the model
            budget.removeItem(item[0], Number(item[1]));
            //remove budget item in the DOM
            ui.removeItemBudget(id);
            //update user UI
            updateBudget();
            //updatePercentages
            updatePercentages();
        }
    };
    return {
        init: function () {
            console.log('Application is running!');
            ui.displayMonth();
            setUpEventListener();
        }
    };
})(budgetController, uiController);
//Run the application
appController.init();
