function Stars(n) {
    function printStars(count = n) {
        console.log("*" +
            " *".repeat(count-1));
    }
    for (let i=1; i<=n; i++)
        printStars();
}

Stars(2)