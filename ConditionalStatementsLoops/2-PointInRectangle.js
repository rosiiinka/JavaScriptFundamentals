function solve([x, y, xMin, xMax, yMin, yMax]) {
    [x, y, xMin, xMax, yMin, yMax] = [x, y, xMin, xMax, yMin, yMax].map(Number);
    if (xMin <= x && x <= xMax && yMin <= y && y <= yMax) {
        console.log("inside")
    } else {
        console.log("outside")
    }
}
solve([8, -1, 2, 12 , -3, 3])
