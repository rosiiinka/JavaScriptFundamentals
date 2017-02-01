function main(input) {
    let catalog = [];

    for (let i = 0; i < input.length; i++) {
        let current = input[i].split(" : ");
        let product = {name: current[0], price: Number(current[1])};

        catalog.push(product);
    }

    catalog = catalog.sort(function(e1, e2) {
        let result = e1.name.toLowerCase().localeCompare(e2.name.toLocaleString());

        return result;
    });

    let previousInitial = "";

    for(let i = 0; i < catalog.length; i++) {
        let currentProduct = catalog[i];

        if(previousInitial.length < 1) {
            previousInitial = currentProduct.name.charAt(0);
            console.log(previousInitial);
        } else {
            if(currentProduct.name.charAt(0) != previousInitial) {
                previousInitial = currentProduct.name.charAt(0);
                console.log(previousInitial);
            }
        }

        console.log("  " + currentProduct.name + ": " + currentProduct.price);
    }
}

// var arr = [
//     "Appricot : 20.4",
//     "Fridge : 1500",
//     "TV : 1499",
//     "Deodorant : 10",
//     "Boiler : 300",
//     "Apple : 1.25",
//     "Anti-Bug Spray : 15",
//     "T-Shirt : 10"
// ];

// var arr = [
//     "Banana : 2",
//     "Rubic’s Cube : 5",
//     "Raspberry P : 4999",
//     "Rolex : 100000",
//     "Rollon : 10",
//     "Rali Car : 2000000",
//     "Pesho : 0.000001",
//     "Barrel : 10"
// ];

// let arr = [
//     "Apple : 1",
//     "Broccoli: 2",
//     "Corn: 3",
//     "Deagle: 4",
//     "Eclipse: 5",
//     "Flirt : 6",
//     "Gargoyle : 7",
//     "Heart : 8",
//     "Iris : 9",
//     "Juice : 10",
//     "King : 11",
//     "Lemon : 12",
//     "Melolemonmelon : 13",
//     "Nestea : 14",
//     "Opium : 15",
//     "Pineapple Pen : 16",
//     "Quartz : 17",
//     "Rocket : 18",
//     "Sphere : 19",
//     "Tantrum : 20",
//     "Uranium : 21",
//     "Vi***tor : 22",
//     "Wolfy : 23",
//     "Xeno : 24",
//     "Yoyo : 25",
//     "Zord : 26"
// ];

// let arr = [
//     "HueHueHue : 1000",
//     "Harley Davidson : 10",
//     "Halberd : 101",
//     "Broccoli : 10",
//     "Beans : 2302",
//     "KFC : 1000",
//     "McDonalds : 10",
//     "Kitchen : 10",
// ];

let arr = [
    "Test : 300",
    "Out : 200",
    "Txt : 100",
    "Milionaaa : 300"
];

main(arr);
