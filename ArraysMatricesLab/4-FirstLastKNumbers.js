function numbers(arr) {
    arr = arr.map(Number);
    let k = arr[0];
    console.log(arr.slice(1,k+1).join(" "))
    console.log(arr.slice(arr.length-k,arr.length).join(" "))
}
numbers(['3',
    '6', '7', '8', '9']
)