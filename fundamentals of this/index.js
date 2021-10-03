// Question 1 //
// console.log(this);
// well
// return windows //
// because its is object executing
// function ///

//Question 2//
//return hello undefined//
//in this cant read th function//
// const myObj = {
//     name: "Timmy",
//     greet() {
//         console.log(`Hello ${this.name}`);
//     },
// };
// myObj.greet();


//Question 3//
//this will return the function it self (nothing well show)//
//const myFuncDec = function () {
// console.log(this);
//};

//Question 4//
//well return windows//
//because we input myfuncarrow//
//const myFuncArrow = () => {
// console.log(this);
//};
//myFuncArrow();

//Question 5//
//return document is not defined//
// document.querySelector(".element").addEventListener('click', function() {
//     console.log(this);
// });