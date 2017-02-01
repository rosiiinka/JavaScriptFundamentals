function systemComponents(inputComponents) {
    let systems = new Map();

    for (let input of inputComponents) {
        let [systemName, componentName, subcomponentName] = input.split(" | ");

        if (!systems.has(systemName)) {
            systems.set(systemName, new Map());
        }
        if(!systems.get(systemName).has(componentName)) {
            systems.get(systemName).set(componentName, []); // - s tozi if dobawqm ako se powtarq componentName i dolu na set a has
        }
        systems.get(systemName).get(componentName).push(subcomponentName);

    }
    let sortedSystems = new Map(
        Array.from(systems.entries()).sort(function (firstEntry, secondEntry) {
            // {
            let result = secondEntry[1].size - firstEntry[1].size;

            if(result == 0){
                result = firstEntry[0].toLowerCase().localeCompare(secondEntry[0].toLowerCase());
            }
            return result;
// } - po broi na componentite i posle po ime
        }));

   sortedSystems.forEach(function (value, key) {
        console.log(key);

        let sortedComponents = new Map(
            Array.from(value.entries()).sort(function (firstEntry, secondEntry) {
                let result = secondEntry[1].length - firstEntry[1].length;
                return result;
            })
        );

        sortedComponents.forEach(function (value, key) {
            console.log("|||" + key);
            value.forEach(function(sub){ // - za da izlizat vsqko value na otdelen red
                console.log("||||||" + sub);
            });
        });
    });
}
systemComponents(["SULS | Main Site | Home Page",
"SULS | Main Site | Login Page",
"SULS | Main Site | Register Page",
"SULS | Judge Site | Login Page",
"SULS | Judge Site | Submittion Page",
"Lambda | CoreA | A23",
"SULS | Digital Site | Login Page",
"Lambda | CoreB | B24",
"Lambda | CoreA | A24",
"Lambda | CoreA | A25",
"Lambda | CoreC | C4",
"Indice | Session | Default Storage",
"Indice | Session | Default Security"])
