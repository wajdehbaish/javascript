let foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];
let sorted = foods.sort();

// console.log(sorted);

let sorted1 = sorted.reverse();



// console.log(sorted1);

let foodsWithUpperCase = [
    "falafel",
    "Sabich",
    "hummus",
    "pizza with extra pineapple",
];

let sorted3 = foodsWithUpperCase.sort();
// console.log(sorted3);

let sorted4 = sorted3.reverse();
// console.log(sorted4);

let words = ["apple", "supercalifragilisticexpialidocious",
    "hi", "zoo"
];

let sorted5 = words.sort((a, b) => {
    return b.length - a.length;
})
console.log(sorted5);