const candyStore = {
    candies: [{
            name: "mint gum",
            id: "as12f",
            price: 2,
            amount: 2
        },
        {
            name: "twix",
            id: "5hd7y",
            price: 5,
            amount: 4
        },
    ],
    cashRegister: 200
}

function getCandy(candyStore, id) {
    let candiesArray = candyStore.candies
    for (let i = 0; i < candiesArray.length; i++) {
        if (candiesArray[i].id == id) {
            return candiesArray[i]
        }
    }



}
// let x = getCandy(candyStore, "as12f")
// console.log(x);

function getPrice(candyStore, id) {
    let candiesArray = candyStore.candies
    for (let i = 0; i < candiesArray.length; i++) {
        if (candiesArray[i].id == id) {
            return candiesArray[i]
        }
    }
}
let x = getCandy(candyStore, "as12f")
console.log(x);

function addCandy(candyStore, id, name, price) {
    //your code 
}

function buy(candyStore, id) {
    //your code 
}