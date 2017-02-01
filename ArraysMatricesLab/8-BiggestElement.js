function element(input) {
    let matrix = input.map(
        row => row.split(' ').map(Number));
    let biggestNum = Number.NEGATIVE_INFINITY;
    matrix.forEach(
        r => r.forEach(
            c => biggestNum = Math.max(biggestNum, c)));
    console.log(biggestNum);
}
element(['20 50 10',
    '8 33 145']
)