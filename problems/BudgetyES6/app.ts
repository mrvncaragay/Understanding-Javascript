
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

        getPercentage() {
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


        removeItem: function(type: string, id: number) {
            let realid: number;

            realid = data.allItems[type].findIndex((itemID) => {
                return itemID.id === id;
            });




        }
    }

})();

const uiController = (() => {


})();


const appController = ((budget, ui) => {

let incomeItem = budget.addItem(1233, "Check", "exp");

console.log(incomeItem);



})(budgetController, uiController);

