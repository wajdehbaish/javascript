const isString = (str, callback) => {
    if (typeof str === "string")
        callback(str)
}

function callback(str) {
    console.log(str);
}
// isString("wajde", callback)

function firstworduppercase(str, dashWords) {
    let firstword = str.split(' ')[0].toUpperCase();
    str = firstword + str.slice(firstword.length, str.length)
    dashWords(str)
}
const dashWords = (sentence) => {
    console.log(sentence);
    console.log(sentence.split(' ').join('-'));
}
firstworduppercase('im wajde hbaish', dashWords)