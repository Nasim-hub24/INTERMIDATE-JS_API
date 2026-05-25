
/* 
----------< TEMPLATE STRING OR DYNAMIC STRING >-----------
    a dynamic string means a string whose value can change or include variables dynamically.
    The easiest way to create dynamic strings is using template literals with backticks ` `
*/
const fname = 'rohim';
const lname = 'korim';

const fullname = `my full name is ${fname} ${lname}`;
console.log(fullname);

//----- YOU CAN ALSO PERFORM MATHMATICAL CALCULATION ------

const value = `total amount ${(10+20)*2 + 80}`;
console.log(value);

//------< DYNAMIC HTML >-------

function dynamic(name, price, description){
    const div =`
        <h2> ${name} </h2>;
        <p> price: $ ${price} </p>;
        <p> ${description} </P>;
    `;
    console.log(div);
}
dynamic('iphone 16', 900 , 'its a base model of iphone ')

