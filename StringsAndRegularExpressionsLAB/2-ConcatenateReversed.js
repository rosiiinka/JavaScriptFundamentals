function solve(arr) {
    let strJoin = arr.join("");
    let chars = Array.from(strJoin);
    let rev = chars.reverse();
    console.log(rev.join(""));
}
solve(['I', 'am', 'student'])
