const numbers = [175, 50, 1000, 25];

function mymaxfunc(nums) {
    return nums.reduce((pre, current) => {
        if (pre > current) return pre;

        return current
    })
}
// console.log(mymaxfunc(numbers));

const array1 = [1, 2, 3, 4];

function reducer(arr) {
    return arr.filter(ele => {
        return (ele % 2 == 0 ? ele : 0)
    }).reduce((pre, curr) => pre + curr)
}


// console.log(reducer(array1));

function average(nums) {
    return nums.reduce((a, b) => (a + b)) / nums.length;
}
console.log(average(array1));