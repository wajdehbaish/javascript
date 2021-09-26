const array = ["Hello", "Good Day", "Your Welcome", "hotdog",
    "hamburgers"
];

let count = arr => {
    let temp = {}
    arr.forEach(val => {


        val = val.toLowerCase();
        for (i = 0; i < val.length; i++) {
            if (val[i] !== " ") {
                if (temp[val[i]] === undefined)
                    temp[val[i]] = 1;
                else
                    temp[val[i]]++;
            }
        }
    });
    max = Object.keys(temp)[0];
    for (let val in temp) {
        if (temp[max] < temp[val])
            max = val;
    }
    return ([temp, max]);
}
console.log(count(array));