function cityMarket(sales) {
    let townWithProduct = new Map();

    for(let i = 0; i < sales.length; i++) {
        let currentInputArguments = sales[i].split(" | ");

        let town = currentInputArguments[0];
        let product = currentInputArguments[1];
        let quantityPrice = Number(currentInputArguments[2]);

        if (!townWithProduct.has(town)) {
            townWithProduct.set(town, new Map());
        }

        let oldIncome = townWithProduct.get(town).get(product);
        if (oldIncome) {
            quantityPrice += oldIncome;
        }

        townWithProduct.get(town).set(product, quantityPrice);
    }
    townWithProduct.forEach(function (value, key) {
        console.log(key);
        let sortedSubject = new Map(
            Array.from(value.entries())
        );

        sortedSubject.forEach(function (value, key) {
            console.log("###" + key + " -> " + value);
        });
    });
}
cityMarket(["Audi | Q7 | 1000",
    "Audi | Q6 | 100",
    "BMW | X5 | 1000",
    "BMW | X6 | 100",
    "Citroen | C4 | 123",
    "Volga | GAZ-24 | 1000000",
    "Lada | Niva | 1000000",
    "Lada | Jigula | 1000000",
    "Citroen | C4 | 22",
    "Citroen | C5 | 10"])
