
const budgetController = (() => {

    class Item {

        id: number;
        description: string;
        value: number;

        constructor(id: number, description: string, value: number) {

            this.id = id;
            this.description = description;
            this.value = value;
        }
    }

    class Income extends Item {

        constructor(id: number, description: string, value: number) {
            super(id, description, value);
        }
    }


    class Expense extends Item {
        percentage: number;

        constructor(id: number, description: string, value: number) {
            super(id, description, value);
            this.percentage = -1;
        }

        calcPercentage(totalIncome): void {

            if(totalIncome > 0) {
                this.percentage = Math.round((this. value / totalIncome) * 100);
            }
        }

        getPercentage(): number {
            return this.percentage;
        }
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

        addItem: (value: number, description: string, type: string): Item => {

            let newitem: Item;
            let id: number = 1;

            if(data.allItems[type].length > 0) {

                id = data.allItems[type][data.allItems[type].length - 1].id + 1;

            }else {
                id = 0;
            }


            if (type === 'inc') {
                newitem = new Income(id, description, value);

            } else if (type === 'exp') {
                newitem = new Expense(id, description, value);
            }

            //add data to our data structure
            data.allItems[type].push(newitem);

            //add value to totals
            data.totals[type] += newitem.value;

            return newitem;
        },

        removeItem: function(type: string, id: number): void {
            let realid: number;

            realid = data.allItems[type].findIndex((itemID) => {
                return itemID.id === id;
            });

            data.totals[type] -= data.allItems[type][realid].value;

            data.allItems[type].splice(realid, 1);
        },

        calculatePercentages(): void {
            data.allItems.exp.forEach(current => {

                current.calcPercentage(data.totals.inc);
            });
        },

        getPercentages(): number[] {
            let allPerc = data.allItems.exp.map(current => {
                return current.getPercentage();
            });

            return allPerc;
        },

        calculatebudget(): object {
            return data.totals;
        }
    }

})();

const uiController = (() => {

    let DOMstrings = {

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

        getUserInput(): object {
            return {
                value: (<HTMLInputElement>document.querySelector(DOMstrings.classValue)).value,
                description: (<HTMLInputElement>document.querySelector(DOMstrings.classDesc)).value,
                type: (<HTMLInputElement>document.querySelector(DOMstrings.classType)).value
            };
        },

        addListItems(obj, type): void {
            let itemEle: string;
            let element: string;

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

        getDomStrings(): object {
            return DOMstrings;
        },

        displayMonth(): void {
            let current: Date = new Date();
            let arrMonths: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

            document.querySelector(DOMstrings.classDateMonth).textContent = `${arrMonths[current.getMonth()]} ${current.getFullYear()}`;
        },

        displayBudget(obj): void {

            let total: number = obj.inc - obj.exp;
            let overAllPercentage: number = Math.round(obj.exp / obj.inc * 100);


            document.querySelector(DOMstrings.classBudgetInc).textContent = `+ ${obj.inc}`;
            document.querySelector(DOMstrings.classBudgetExp).textContent = `- ${obj.exp}`;

            //Display the overall Percentage
            if(total > 0) {
                document.querySelector(DOMstrings.classExpPer).textContent = `${overAllPercentage}%`;
            }

            if(total > 0) {
                document.querySelector(DOMstrings.classTotalBudget).textContent = `+${total}`;
            } else {
                document.querySelector(DOMstrings.classTotalBudget).textContent = `${total}`;
            }
        },

        removeItemBudget(itemid): void {
            let item = <HTMLScriptElement>document.getElementById(itemid);
            item.parentNode.removeChild(item);
        },

        displayPercentages(percentages): void {

            let fields = document.querySelectorAll(DOMstrings.classItemPer);

            let nodeListForEach = (list, callback): void => {
                for (let i = 0; i < list.length; i++) {
                    callback(list[i], i);
                }
            };

            nodeListForEach(fields, (current, index) => {
                if(percentages[index] > 0){
                    current.textContent = `${percentages[index]}%`;
                } else {
                    current.textContent = `0%`;
                }
            });
        },

        clearFields(): void {
            (<HTMLDataElement>document.querySelector(DOMstrings.classValue)).value = "";
            (<HTMLDataElement>document.querySelector(DOMstrings.classDesc)).value = "";
        }
    }

})();


const appController = ((budget, ui) => {

    let setUpEventListener = (): void => {

        //get UIController DOM strings
        let DOM = ui.getDomStrings();

        //listen to add item button (when user click or enter)
        document.querySelector(DOM[ "btnAddItem" ]).addEventListener('click', ctrlAddItem);
        document.addEventListener('keypress', function(e){

            if(e.key === '13' || e.which === 13) { ctrlAddItem() }
        });

        document.querySelector(DOM["classDeleteBtn"]).addEventListener('click', ctrlDeleteItem);
    };

    let ctrlAddItem = function() {
        let inputdata, newitem, budget1;

        //get user input
        inputdata = ui.getUserInput();

        if( inputdata.description !== "" && !isNaN(inputdata.value) && inputdata.value > 0 ) {

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

    let updateBudget = () => {
        //get the calculated budget
        let budget1 = budget.calculatebudget();

        //update user UI
        ui.displayBudget(budget1);
    };

    //update Percentage
    let updatePercentages = () => {

        //calc percentages
        budget.calculatePercentages();

        //read percentages from the budget controller
        let percentages = budget.getPercentages();

        //update the UI with the new percentages
        ui.displayPercentages(percentages);
    };

    let ctrlDeleteItem = (e) => {
        let id, item;

        id = e.target.parentNode.parentNode.parentNode.parentNode.id;

        if(id) {

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
        init: () => {
            console.log('Application is running!');
            ui.displayMonth();
            setUpEventListener();
        }
    };

})(budgetController, uiController);

//Run the application
appController.init();