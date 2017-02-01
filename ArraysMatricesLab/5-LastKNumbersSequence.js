function number([n, k]) {
    [n, k] = [n, k].map(Number);
    let arr = [];
    arr.push(1);

    for (let i = 0; i < n; i++) {
        let start = Math.max(0, i - k);
        let end = i - 1;
        // let sum = ;
        arr[i] = sum;
    }
    console.log(arr.join(" "));
}
number(['6', '3'])