// console.log(2>1);
// console.log("2"==2);//Here string 2 will get converted by compiler into a number 
// console.log("2"===2);//Here compiler will strictly check whether is it a string or a number. No conversion will occur
//This is the triple check 

//console.log(2!=2);

//-----DataTypes Of JavaScript-----
//Primitive----String, Number, Boolean, Null, undefined, Symbol, BigInt
// const score = 100;
// const scoreValue=100.3;//No Need of explicitly define the type of the variable
// console.log(scoreValue);

// const isLoggedIn= false;
// const outsideTemp=null;
// console.log(isLoggedIn);
// console.log(outsideTemp);

// const id = Symbol('123');
// console.log(id);

//Reference Type/Non-Primitive----Array, Objects, Functions

// const heroes =["Shakhtiman", "Batman", "Superman"];
// //console.log(heroes);
// let myObj={
//     name:"hitesh",
//     age:22
// }

//Stack And Heap 
//Stack gets the copy of a datatype. Stacks are only for primitive dataTypes
let myName = "Sanif";
let anotherName = myName;// myName assigned in anothername---used stack memory
console.log(anotherName);
anotherName = "Basit";
console.log(myName);//Original value is still there
console.log(anotherName);

//In Stack value will not get changed

//Heap gets the reference of a datatype. 

let userOne = {
    email : "user@gmail.com",
    upi:"user@hdfc"
}
let userTwo = userOne;
console.log(userTwo);
userTwo.email = "sanif@gmail.com";
console.log(userTwo);
console.log(userOne);//Here value changed in userOne when we changed it in userTwo then changes also reflected in userOne


