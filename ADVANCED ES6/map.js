

const numbers = [ 2, 3, 4, 5];

const double = [];
for(const number of numbers)
{
    double.push(number*2);
}
console.log(double);

/* 
        ----{ USING MAP }----
    map() is an array method that iterates over each element and 
    returns a new array containing the transformed values.
*/

const sonka = [8, 9, 7,6,];
const doubleIt = num => num*2;
const doubled = sonka.map (doubleIt);
console.log(doubled);

const value = [3, 4, 5, 6];
const gunIt = valus => valus*2;
const twoGun = value.map(gunIt);
console.log(twoGun);

const products = [
    {name: 'phone' , price : 5999},
    { name: 'pc', price : 50000}
];
const outCome = products.map (pd => pd.price);
console.log(outCome);

const fruits = [
    'apple' , 'banana' , 'mango' 
];
const iLike = fruits.map( fruit => `i like ${fruit}`);
console.log(iLike);