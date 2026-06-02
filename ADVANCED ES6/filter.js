/* 
    -----[ FILTER AND FIND IN JS ]-----
*/

/* 
    -----{ FILTER }-----
    (1) =>  filter() is used to select multiple elements 
            from an array based on a condition.
    (2) =>  Returns an array
    (3) => Continues checking all elements        
*/
const numbers = [ 1 ,2 ,3, 4,5,7];
const evenIt = numbers.filter(num => num%2 === 0);
console.log(evenIt);

const names = [ 'rohim ', 'korim' , 'solim', 'kartik', 'kunal'];
const fName = names.filter(first => first[0] === 'k');
console.log(fName);

const products = [
    {name : 'phone', price : 900 },
    { name : 'air buds' , price : 800},
    { name : 'mouse ', price : 1000},
    { name: 'mouse pad' , price : 3000}
];
const high = products.filter(quality => quality.price >= 800);
console.log(high);

/* 
    ------{ FIND }-----
    (1) => find() is used to find the first element that matches a condition.
    (2) => Returns a single value/object
    (3) => Stops after first match

*/

const value = [ 2 , 4, 5, 6, 7];
const sonka = value.find( son => son > 2);
console.log(sonka);
