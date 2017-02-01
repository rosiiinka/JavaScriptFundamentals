function solve([string]) {
    string = string.toLowerCase().split(' ');
    for(let i = 0; i < string.length; i++){
        string[i] = string[i].split('');
        string[i][0] = string[i][0].toUpperCase();
        string[i] = string[i].join('');
    }
    console.log(string.join(' ')) ;
}
solve(["Capitalize these words"])