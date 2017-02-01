function calculator([a, b, c]) {
    [a, b] = [a, b].map(Number);
    switch (c) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
    }
}
// function calculate([a, b, c]) {
//     [a, b] = [a, b].map(Number);
//     let calc = function(a, b, c) { return c(a, b) };
//     let add = function(a, b) { return a + b };
//     let subtract = function(a, b) { return a - b };
//     let multiply = function(a, b) { return a * b };
//     let divide = function(a, b) { return a / b };
//     switch (c) {
//         case '+': return calc(a, b, add);
//         case '-': return calc(a, b, subtract);
//         case '*': return calc(a, b, multiply);
//         case '/': return calc(a, b, divide);
//     }
// }


calculator(['2', '4', '+'])
calculator(['3', '3', '-'])