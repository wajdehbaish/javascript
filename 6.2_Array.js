const people = ["Greg", "Mary", "Devon", "James"];

people.forEach((name) => {
    console.log(name)
})

function kickGreg(arr, whoToKick) {
    let temp = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== whoToKick) {
            temp.push(arr[i])
        }
    }
    return temp;
}
console.log(kickGreg(people, "Mary"));


for (let i = 0; i < people.length; i++) {
    if (people[i] !== 'Mary') {
        console.log(people[i])
    }
}
console.log('Mary')


people.unshift('Matt')
console.log(people)