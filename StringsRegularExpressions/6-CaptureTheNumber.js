function solve(input) {
    let pattern = /\d+/g;
    let numbers = [];

    for (let i = 0; i < input.length; i++) {
        let currentSentence = input[i];

        let match = pattern.exec(currentSentence);

        while (match) {
            numbers.push(match[0]);
            match = pattern.exec(currentSentence);
        }
    }

    console.log(numbers.join(" "));
}


solve(["I think it’s the 3rd mov4ie."]);
