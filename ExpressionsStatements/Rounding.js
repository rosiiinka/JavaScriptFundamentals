function round([num, symbol]) {
    [num, symbol] = [num, symbol].map(Number);
    if(symbol > 15){
        symbol = 15;
    }
    console.log(Number(num.toFixed(symbol)));
}
round([3.146677, 2])
