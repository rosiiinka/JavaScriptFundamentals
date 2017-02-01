function numbers(arr) {
    arr = arr.map(Number);
   let nums = [];
    for (let ar in arr){
        if(!(ar % 2 == 0)){
            nums.unshift(arr[ar] * 2);

        }
    }
    console.log(nums.join(" "));
}
numbers(['10', '15', '20', '25'])