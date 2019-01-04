
function tipCalculator ( bills ) {

    var alltips = [];
    var finalPaidAmounts = [];

    for(var i = 0; i < bills.length; i++) {

        var bill = bills[i];
        var tip;

        if(bill < 50 && bill > 0) {
            tip = bill * 0.2;
            alltips.push(tip);
            finalPaidAmounts.push(tip + bill);
        } else if (bill > 50 && bill < 200) {
            tip = bill * 0.15;
            alltips.push(tip);
            finalPaidAmounts.push(tip + bill);
        } else {
            tip = bill * 0.10;
            alltips.push(tip);
            finalPaidAmounts.push(tip + bill);
        }

    }
    console.log(bills);
    console.log(`Tips: ${alltips}`);
    console.log(`Final bill with Tips: ${finalPaidAmounts}`);
}

tipCalculator([124, 48, 268]);