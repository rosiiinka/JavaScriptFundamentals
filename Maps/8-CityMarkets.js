function cityMarket(sales) {
    let townWithProduct = new Map();
    for (let sale of sales) {
        let [town, product, quantityPrice] = sale.split(/\s*->\s*/);
        let [quantity, price] = quantityPrice.split(/\s*:\s*/);

        if (!townWithProduct.has(town)) {
            townWithProduct.set(town, new Map());
        }
        let income = quantity * price;
        let oldIncome = townWithProduct.get(town).get(product);
        if (oldIncome) {
            income += oldIncome;
        }
        townWithProduct.get(town).set(product, income);
    }
    townWithProduct.forEach(function (value, key) {
        console.log("Town - " + key);
        let sortedSubject = new Map(
            Array.from(value.entries())
        );

        sortedSubject.forEach(function (value, key) {
            console.log("$$$" + key + " : " + value);
        });
    });
}
cityMarket(["Sofia -> Laptops HP -> 200 : 2000",
"Sofia -> Raspberry -> 200000 : 1500",
"Sofia -> Audi Q7 -> 200 : 100000",
"Montana -> Portokals -> 200000 : 1",
"Montana -> Qgodas -> 20000 : 0.2",
"Montana -> Chereshas -> 1000 : 0.3"]);
