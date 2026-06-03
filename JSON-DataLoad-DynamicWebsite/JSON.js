/* 
    ---------< JSON >--------

    JSON stands for JavaScript Object Notation.
    It is a format used to store and exchange data between applications, servers, and APIs.

    ---------< OBJECT >--------

    An object is a collection of related data stored as key-value pairs.

    ---------< DIFFERENCE BETWEEN JSON AND OBJECT >-----------

        | JavaScript Object             | JSON                              
    | ------------------------------ | ----------------------------------    |
    |. Used inside JavaScript code    | . Used for storing/transferring data |
    |. Keys can be without quotes     | . Keys must be in double quotes      |
    |. Can contain functions          | . Cannot contain functions           |
    |. Variable can store it directly | . Usually stored as text/string      |

*/


const person = {
    name : 'korim',
    age : 30,
    food : 'bef',
    fruit : 'mango',
    friends : ['solim', 'rahim', 'rohim', 'uddin']
};
console.log(person, typeof person);

//     -------< OBJECT FORMAT TO JSON FORMAT >---------
//     STRINGIFY Converts a JavaScript object → JSON string

const personJson = JSON.stringify(person);
console.log(personJson , typeof personJson);

//      -------< STRING TO OBJECT >---------
//      Converts a JSON string → JavaScript object

const parseJson = JSON.parse(personJson);
console.log(parseJson);