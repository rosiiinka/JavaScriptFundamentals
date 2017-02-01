function numbers(arr) {
    arr = arr.map(Number);
    let nums = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] < 0){
            nums.unshift(arr[i])
        }else {
            nums.push(arr[i])
        }
    }
    console.log(nums.join('\n'));

}
