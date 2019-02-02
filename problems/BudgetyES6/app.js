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
        }
    };
})();
var uiController = (function () {
})();
var appController = (function (budget, ui) {
    var incomeItem = budget.addItem(1233, "Check", "exp");
    console.log(incomeItem);
})(budgetController, uiController);
