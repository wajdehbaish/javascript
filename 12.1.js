const numbers = [175, 50, 1000, 25];

function mymaxfunc(nums) {
    return nums.reduce((pre, current) => {
        if (pre > current) return pre;

        return current
    })
}
console.log(mymaxfunc(numbers));

const array1 = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => previousValue + currentValue;
// console.log(array1.reduce(reducer));

function average(nums) {
    return nums.reduce((a, b) => (a + b)) / nums.length;
}