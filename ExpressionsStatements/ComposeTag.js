function compose([fileLocation, alternateText]) {
    console.log(`<img src="${fileLocation}" alt="${alternateText}">`);
}
compose(['smiley.gif', 'Smiley Face'])