let words = ["ball", "apple", "banana"];
let words1 = [5, 7, 7, 1];

function isStringArray(arr) {
    for (let words of arr)
        if (typeof words == "string") {
            return true;
        } else {
            return false;
        }
}

function makeAllCaps(words) {
    return new Promise((resolve, reject) => {
        if (!isStringArray(words))
            reject("your array contain number");
        else {
            const capitalizedWords = words.map((word) => word.toUpperCase());
            resolve(capitalizedWords);
        }
    });
}

function sortWords(words) {
    return new Promise((resolve, reject) => {
        if (!isStringArray(words)) {
            reject("your array contain number");
        } else {
            sortarray = words.sort();
            sortarray = sortarray.map((word) => word.toUpperCase())
            resolve(sortarray);
        }
    });
}
makeAllCaps(words).then((data) => console.log(data)).catch((err) => console.log(err));
sortWords(words).then((data) => console.log(data)).catch((err) => console.log(err));

makeAllCaps(words1).then((data) => console.log(data)).catch((err) => console.log(err));
sortWords(words1).then((data) => console.log(data)).catch((err) => console.log(err));