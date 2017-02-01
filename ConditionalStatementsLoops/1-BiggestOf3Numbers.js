function solve([a, b, c]) {
    [a, b, c] = [a, b, c].map(Number);
    let maxNum = Math.max(a, b, c);
    console.log(maxNum);

}
solve([5, -2, 7]);
