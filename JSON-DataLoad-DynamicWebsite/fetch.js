

/* 
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
*/

const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(Response => Response.json())
        .then(json => console.log(json))
};

/*
const loadPost=() =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(Res => Res.json())
        .then(data => {
            console.log(data);
            displayPost(data);
        })
};

const displayPost = (posts) =>{
    posts.forEach(post => {
        console.log(post);
    });
};
*/

/*
    PRACTICE 

    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json())
        .then(data => console.log(data))
*/

/* 
    --------------------[ FETCH EXPLANATION ]---------------

    fetch() is used to get data from somewhere else (usually a server or API).

    fetch("https://jsonplaceholder.typicode.com/users")

    This line means:
    "Go to this URL and bring me the users data."

    ----------< Why do we need it? >---------
    Suppose you open Facebook or YouTube.

    When the page loads, it needs:
    > User information
    > Posts
    > Videos
    > Comments

    JavaScript uses fetch() to request that data from the server.

    -----< Step 1 >--------
    fetch(...)
    Request data.

    ------< Step 2 >-------
    .then(response => response.json())

    The server sends data back.
    But JavaScript can't read it directly.
    So we convert it into a JavaScript object using:
    response.json()

    -------< Step 3 >-------
    .then(data => console.log(data))

    Now we can use the data.
*/
