function extractWords(input) {
    let wordPattern = /\b[a-zA-Z0-9_]+\b/g;
    let words = new Set();

    let match = wordPattern.exec(input);

    while (match) {
        words.add(match[0].toLowerCase());
        match = wordPattern.exec(input);
    }
        console.log(Array.from(words).join(", "));

    // for (let sentence of input) {
    //     let matches = sentence.match(wordPattern);
    //     matches.forEach(x=>words.add(x.toLowerCase()));
    // }
    // console.log(Array.from(words).join(", "));

}
extractWords(["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis hendrerit dui.",
   " Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla.",
   " Vestibulum dolor diam, dignissim quis varius non, fermentum non felis.",
   " Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut.",
   " Morbi in ipsum varius, pharetra diam vel, mattis arcu.",
   " Integer ac turpis commodo, varius nulla sed, elementum lectus.",
   " Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus."
])