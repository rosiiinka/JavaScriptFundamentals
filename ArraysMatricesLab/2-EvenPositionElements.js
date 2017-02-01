function even(arr) {
    let evenNum = [];
    for (let i in arr){
        if(i % 2 == 0){
            evenNum.push(arr[i]);
        }
    }
    console.log(evenNum.join(' '));
}
even(['20', '30', '40'])