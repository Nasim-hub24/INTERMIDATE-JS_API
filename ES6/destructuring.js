
const product = {
    name : 'iphone',
    band : 'apple',
    price : 990
};
const identity = product.name;
const brand = product.band;
console.log(identity,brand);

/* 
---------< DESTRUCTURING OBJECT >--------
    Based on property name
    Uses {}

*/
const {name , estd} = {
    name : 'lu',
    estd : 2020,
    location : 'nai'
};
console.log(name , estd);


/* 
-------< DESTRUCTURING ARRAY >---------
    Based on position
    Uses []
*/
const [fist,second] = [10,20,30,40];
console.log(fist,second);

const [one,two, ...rest] = [60,70,809,90,120];
console.log(one,two, ...rest);