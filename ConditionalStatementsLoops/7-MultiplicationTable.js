function table(num) {
    let n = Number(num);
    // let html = '<table border="1">\n';
    // html += "<tr><th>x</th>";
    // for (let i = 1; i <= n; i++) {
    //     html+= `<th>${i}</th>`;
    // }
    // html += "</tr>\n";
    // for (let col = 1; col <=n; col++) {
    //     html += `<tr><th>${col}</th>\n`;
    // }
    // html += "\n</table>";

    let html = '<table border="1">\n';
    html += "<tr><th>x</th>";
    for (let i = 1; i <= n; i++) {
        html += `<th>${i}</th>\n`;
        html += "<tr>";
        for (let j = 1; j <= n; j++) {
            html+= `<th>${j}</th>`;
        }

    }

    html += "\n</table>";



    console.log(html);
}
table('5')