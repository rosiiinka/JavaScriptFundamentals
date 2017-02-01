function distanceOverTime([v1, v2, t]) {
    [v1, v2, t] = [v1, v2, t].map(Number)
    let disOne = v1 * 1000 * (t/3600)
    let disTwo = v2 * 1000 * (t/3600)
    let delta = Math.abs(disOne - disTwo)
    console.log(delta)
}
distanceOverTime([11, 10, 120])