
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

    }

    class Expense extends Item {

    }

    return {

        addItem: (value: number, description: string, type: string): Item => {

            let newItem, id = 1;

            if(type === 'inc') {
                newItem = new Income(id, description, value);

            } else if (type === 'exp') {
                newItem = new Expense(id, description, value);
            }

            return newItem;
        }
    }

})();

const uiController = (() => {


})();


const appController = ((budget, ui) => {

let incomeItem = budget.addItem(1233, "Check", 'exp');

console.log(incomeItem);



})(budgetController, uiController);

