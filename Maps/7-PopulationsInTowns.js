function populationTown(input) {
    let map = new Map();
    for (let put of input) {
        let [town, population] = put.split(/\s*<->\s*/);
        population = Number(population);
        if (map.has(town))
            map.set(town, map.get(town) + population);
         else map.set(town, population);

    }
    for (let [town, population] of map){
        console.log( town + " : " + population);
    }
}

populationTown(["Istanbul <-> 100000",
"Honk Kong <-> 2100004",
"Jerusalem <-> 2352344",
"Mexico City <-> 23401925",
"Istanbul <-> 1000"
])
