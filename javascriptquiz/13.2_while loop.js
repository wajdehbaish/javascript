let arr = ["boo", "doooo", "hoo", "ro"]

function stringLength(arr) {
    let newarr = [];
    let i = 0;
    while (i < arr.length) {
        newarr[i] = arr[i].length;
        i++;

    }
    return newarr
}

stringLength(arr)
console.log(stringLength(arr));