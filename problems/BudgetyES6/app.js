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
        function Income() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Income;
    }(Item));
    var Expense = /** @class */ (function (_super) {
        __extends(Expense, _super);
        function Expense() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Expense;
    }(Item));
    return {
        addItem: function (value, description, type) {
            var newItem, id = 1;
            if (type === 'inc') {
                newItem = new Income(id, description, value);
            }
            else if (type === 'exp') {
                newItem = new Expense(id, description, value);
            }
            return 12;
        }
    };
})();
var uiController = (function () {
})();
var appController = (function (budget, ui) {
    var incomeItem = budget.addItem(1233, "Check", 'exp');
    console.log(incomeItem);
})(budgetController, uiController);
