function numbers(n) {
    let html = "<ul> \n";
    for (let i = 1; i <= n; i++) {
        let color = (i % 2 == 0) ? "blue" : "green";
        html += ` <li><span style='color:${color}'>${i}</span></li> \n`;
    }
    html +="</ul>";
    console.log(html)
}
numbers(7);