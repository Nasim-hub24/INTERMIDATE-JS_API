
/* 
---------< FUNCTION DECLARATION >---------
    A normal function created using the function keyword.

    1. Has a function name
    2. Can be called before declaration (hoisting)
*/
console.log(add(30,40))
function add(num1, num2){
    const total = num1 + num2;
    return total;
}
//console.log(add(10,20));

/* 
--------< FUNCTION EXPRESSION >--------
    A function stored inside a variable.

    1. Function is assigned to a variable
    2. Cannot call before declaration
*/
const fullname = function(fname, lname){
    return fname+ ' ' + lname;
}
console.log(fullname('korim', 'mia'));

/* 
--------< ARROW FUNCTION >---------
    Shorter modern syntax introduced in ES6.
*/
const total = (a, b) => a + b;
console.log(total(2, 8));

const multiple = (a,b) => a*b;
console.log(multiple(5,10));

//------{ FOR MULTI LINE }-------
const doMath = (x,y) => {
    const multiplactaion = x*y;
    const divide = x/y;
    const totalAmount = multiplactaion + divide;
    return totalAmount;
}
console.log('total amount is', doMath(20,10));