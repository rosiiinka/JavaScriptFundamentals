function implementalUnits([inch]) {
    inch = Number(inch);
    let feet = Math.floor(inch / 12);
    let inches = (inch % 12);

    console.log(feet + "'" + "-" + inches + "\"");

}
implementalUnits([55]);