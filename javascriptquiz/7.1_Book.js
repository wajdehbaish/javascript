const book = {
    title: "the lord of the ring",
    anotherTitle: "the hobbit",
    writtenBy: "Allen",
    year: "1954",
}

function bookdecsription(book) {
    return `The book ${book.title} was written by ${book.writtenBy} in
    the year ${book.year}`
}
console.log(bookdecsription(book));