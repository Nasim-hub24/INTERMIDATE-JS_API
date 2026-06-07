
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
    postContainer.innerHTML = "";

    posts.forEach(post => {
        //console.log(post.title);

        // 2=> CREATE HTML ELEMENT
        const postCard = document.createElement("div");
        postCard.innerHTML = `<div class="post-card">
            <h1> ${post.title} </h1>
            <p>
                ${post.body}
            </p>
        </div>`;

        postContainer.append(postCard);
    });
};