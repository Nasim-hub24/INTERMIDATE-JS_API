
/* 
    Object.keys(), 
    Object.values(),
    Object.entries(), 
    are called Object Methods in JavaScript.
    More specifically, they are built-in static methods of the Object class.
*/

/* 
        --------< KEYS >---------
    Returns all property names (keys) of an object as an array.
*/
const product ={
    name : 'phone',
    brand : 'iphone',
    series : 16,
    price : 15000
};
const keys = Object.keys(product);
console.log(keys);


/* 
    --------< VALUES >--------
    Returns all property values of an object as an array.
*/
const uni ={
    name : 'lu',
    location : 'not found',
    condition : 'very bad'
};
const varsity = Object.values(uni);
console.log(varsity);

/* 
    ---------< ENTRIES >-------
    Returns both key and value together as nested arrays.
*/
const name ={
    nickName : 'nasim',
    age : 21,
    study: 'CSE'
};
const details = Object.entries(name);
console.log(details);