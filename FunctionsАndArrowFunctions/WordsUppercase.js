function words([sentence]) {
    let pattern = /\b[a-zA-Z0-9]+\b/g;
    let words = [];
    let match = pattern.exec(sentence);

    while (match) {
        words.push(match[0].toUpperCase());
        match = pattern.exec(sentence);
    }

    // console.log(words.map(function (elements) {
    //         return elements.toUpperCase()
    //     }
    // ).join(", "));
    console.log(words.join(", "));
}
words(['Hi, how are you?']);

// function wordsUppercase([str]) {
//     var strUpper = str.toUpperCase();
//     var words = extractWords();
//     words = words.filter(w => w != '');
//     return words.join(', ');
//     function extractWords() { return strUpper.split(/\W+/); }
// }
