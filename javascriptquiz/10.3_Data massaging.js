const data = [{
        name: "John",
        birthday: "1-1-1995",
        favoriteFoods: {
            meats: ["hamburgers", "sausages"],
            fish: ["salmon", "pike"],
        },
    },
    {
        name: "Mark",
        birthday: "10-5-1980",
        favoriteFoods: {
            meats: ["hamburgers", "steak", "lamb"],
            fish: ["tuna", "salmon", "barracuda"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["ham", "chicken"],
            fish: ["pike"],
        },
    },
    {
        name: "Thomas",
        birthday: "1-10-1990",
        favoriteFoods: {
            meats: ["bird", "rooster"],
            fish: ["salmon"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["hamburgers", "lamb"],
            fish: ["anchovies", "tuna"],
        },
    },
];

let data1 = data.map(function(val) {
    return val.name

})

function before1990(arr) {
    return arr.filter(function(ztam) {
        return (Number(ztam.birthday.split('-')[2]) < 1990);
    })

}
console.log(before1990(data));

function foodcounter(cowboy) {
    let object1 = {};
    const result1 = cowboy.map((num) => num.favoriteFoods.meats + "," + num.favoriteFoods.fish).join(',').split(',')
    result1.map(function(value) {
        return object1[value] = (result1.filter(function(val) {
            return (val === value)
        })).length
    });

    console.log(object1);

}
foodcounter(data)