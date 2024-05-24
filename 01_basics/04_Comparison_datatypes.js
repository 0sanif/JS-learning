// console.log(2>1);
// console.log("2"==2);//Here string 2 will get converted by compiler into a number 
// console.log("2"===2);//Here compiler will strictly check whether is it a string or a number. No conversion will occur
//This is the triple check 

//console.log(2!=2);

//-----DataTypes Of JavaScript-----
//Primitive----String, Number, Boolean, Null, undefined, Symbol, BigInt
const score = 100;
const scoreValue=100.3;//No Need of explicitly define the type of the variable
console.log(scoreValue);

const isLoggedIn= false;
const outsideTemp=null;
console.log(isLoggedIn);
console.log(outsideTemp);

const id = Symbol('123');
console.log(id.toString);
//Reference Type/Non-Primitive----Array, Objects, Functions

