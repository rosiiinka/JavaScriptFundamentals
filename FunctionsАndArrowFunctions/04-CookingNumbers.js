function cooking([num, op1, op2, op3, op4, op5]) {
    let number = Number(num);
    let chop = number % 2;
    let dice = Math.sqrt(number);
    let spice = number + 1;
    let bake = number * 3;
    let filter = number % 0.2;

    switch (op1) {
        case "chop" :
            return number % 2;
            break;
        case "dice" :
            return Math.sqrt(number);
            break;
        case "spice" :
            return number + 1;
            break;
        case "bake" :
            return number * 3;
            break;
        case "filter" :
           return number % 0.2;
            break;
    }
    console.log(number)
}
cooking([9, dice, spice, chop, bake, fillet]);
