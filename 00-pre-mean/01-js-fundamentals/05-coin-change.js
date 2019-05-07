function coinChange(tpennies){
    var change = {};
    if (tpennies > 100){
        amtDollars = tpennies / 100;
        var dollars = Math.floor(amtDollars);
        change.dollars = dollars;
        tpennies = tpennies % 100;
    }
    if (tpennies > 25){
        amtQuarters = tpennies / 25;
        var quarters = Math.floor(amtQuarters);
        change.quarters = quarters;
        tpennies = tpennies % 25;
    }
    if (tpennies > 10){
        amtDimes = tpennies / 10;
        var dimes = Math.floor(amtDimes);
        change.dimes = dimes;
        tpennies = tpennies % 10;
    }
    if (tpennies > 5){
        amtNickels = tpennies / 5;
        var nickels = Math.floor(amtNickels);
        change.nickels = nickels;
        tpennies = tpennies % 5;
    }
    else{
        var pennies = tpennies;
        if (pennies > 0){
            change.pennies = pennies;
        }
    }
    return change;
}

y = coinChange(312)
console.log(y)
