
const loadPost = () =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            displayPost(data);
        })
}




// FOR SHOWING IN USER INTERFACE OR UI
const displayPost = (posts) =>{

    // 1=> GET THE CONTAINER
    const postContainer = document.getElementById("post-container");

    posts.forEach(post => {
        //console.log(post.title);

        // 2=> CREATE HTML ELEMENT
        const li = document.createElement("li");
        li.innerText = post.title;
        console.log(li);

        // 3=> ADD LI INTO CONTAINER
        postContainer.appendChild(li);
    });
};