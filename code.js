let a;
let b;

function add(a,b) {
    return a + b;
}

function sub(a,b) {
    return a - b;
}

function Mul(a,b) {
    return a * b; 
}

function div(a,b) {
    return a / b;
}

// console.log("Addition :" , add());
// console.log("Subtraction :" ,sub());
// console.log("Multiply :",Mul());
// console.log("Divide :", div());

module.exports = {add,sub,Mul,div};