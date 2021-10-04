function isGreaterThan10(number) {
    let promise = new Promise((resolve, reject) => {
        if (number > 10)
            resolve('true')
        else {
            reject('false')
        }

    })
    return promise
}
isGreaterThan10(4).then(num => {
    console.log(num);
}).catch((error) => {
    console.log(error);
})