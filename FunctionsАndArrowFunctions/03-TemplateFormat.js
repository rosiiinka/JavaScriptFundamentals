function format(input) {

    let html = '<?xml version="1.0" encoding="UTF-8"?>\n';
    html += '<quiz>\n';
    for (let i = 0; i < input.length; i += 2) {
        let answer = input[1];
        let question = input[0];

        html += " <question>\n";
        html += question;
        html += "\n </question>\n";
        html += " <answer>\n";
        html += answer;
        html += "\n </answer>\n";

    }
    html += "</quiz>";
    console.log(html);
}

format(["Dry ice is a frozen form of which gas?",
    "Carbon Dioxide",
    "What is the brightest star in the night sky?",
    "Sirius"]
);
// <?xml version="1.0" encoding="UTF-8"?>
// <quiz>
// <question>
// {question text}
// </question>
// <answer>
// {answer text}
// </answer>
// </quiz>
