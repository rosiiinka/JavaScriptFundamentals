function lowestPrice(input) {
    let products = new Map();

    for (let i = 0; i < input.length; i++) {
        let currentInputArguments = input[i].split(" | ");

        let townName = currentInputArguments[0];
        let productName = currentInputArguments[1];
        let price = Number(currentInputArguments[2]);

        if (!products.has(productName)) {
            products.set(productName, new Map());
        }
        products.get(productName).set(townName, price);
    }
    products.forEach(function (towns, product) {
        let sortedTowns = Array.from(towns.entries()).sort(function (firstEntry, secondEntry) {
            let result = firstEntry[1] - secondEntry[1];
            return result;
        })
        let minTowns = sortedTowns[0];
        console.log(`${product} -> ${minTowns[1]} (${minTowns[0]})`);
    })

}
lowestPrice(["Sample Town | Sample Product | 1000",
    "Sample Town | Orange | 2",
    "Sample Town | Peach | 1",
    "Sofia | Orange | 3",
    "Sofia | Peach | 2",
    "New York | Sample Product | 1000.1",
    "New York | Burger | 10"]);


