
/* 
    In JavaScript, every value is checked as either:
        Truthy → acts like true
        Falsy → acts like false
    Usually inside if condition.
*/

let data;
data = 0;
data = '';
data = ' '
data = '0';
data = undefined;
data = null;

if (data){
    console.log('truthy');
}
else
{
    console.log('falsy');
}


let price = false;
if (!price){
    console.log('price is truthy');
}
