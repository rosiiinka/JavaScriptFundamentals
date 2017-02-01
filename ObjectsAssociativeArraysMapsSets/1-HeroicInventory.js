function solve(input) {
    let heroInfo = [];

    for (let i = 0; i < input.length; i++) {
        let currentHeroArg = input[i].split(" / ");
        let currentHeroName = currentHeroArg[0];
        let currentHeroLevel = Number(currentHeroArg[1]);
        let currentHeroItem = [];
        if (currentHeroArg.length > 2) {
            currentHeroItem = currentHeroArg[2].split(", ");
        }
        let hero = {
            name: currentHeroName,
            level: currentHeroLevel,
            items: currentHeroItem
        };

        heroInfo.push(hero);
    }
    console.log(JSON.stringify(heroInfo))
}