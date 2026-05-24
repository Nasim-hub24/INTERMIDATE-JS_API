
/* 
---------< LET >--------
    LATER YOU CAN CHANGE THE VALUE
*/
let name = "nasim";
name = "ahmed";
console.log(name);

/* 
---------< CONST >-------
    Value cannot be reassigned.
    Safer for fixed values.
*/
const age = 20;
console.log(age);

//---- YOU CAN PUSH THE VALUE IN THE ARRAY BUT YOU CAN'T REASSIGNED-----
const list = ['shirt', 't-shirt', 'pant']
list.push('snickers','glass');
console.log(list);

/* 
-----------< DEFAULT PARAMETER IN JS >------------
    A default parameter in JavaScript means giving a function parameter a default value.
    If no value is passed, JavaScript uses the default value automatically.
*/

function add (num1 , num2 =0){
    const add = num1 + num2;
    console.log(add);
}
add(10);

function fullname(fname, lname = ' '){
    const name = fname +' ' +lname;
    console.log(name);
}
fullname('ahmed');