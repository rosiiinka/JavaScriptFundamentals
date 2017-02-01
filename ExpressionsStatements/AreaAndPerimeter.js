function areaPerimeter([a, b]) {
    [a,b] = [a,b].map(Number)
    let area = a * b
    let perimeret = 2 * a + 2 * b
    console.log(area)
    console.log(perimeret)
}
areaPerimeter([2, 2])
