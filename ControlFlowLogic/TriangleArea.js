function triangleArea([a,b,c]) {

    [a,b,c] = [a,b,c].map(Number)
    let pr = (a + b + c)/2
    let area = Math.sqrt(pr * (pr - a)*(pr - b)*(pr - c))
    return area;

}
