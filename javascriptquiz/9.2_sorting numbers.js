let numbers = [1, -5, 666, 2, 400, 11];
let sorted = numbers.sort((a, b) => {
    return a - b
})

let numbers1 = [1, -5, 666, 2, 400, 11];
let sorted1 = numbers1.sort((a, b) => {
    return b - a
})
console.log(sorted);
console.log(sorted1);