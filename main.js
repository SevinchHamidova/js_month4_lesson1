const user_site_link = "https://jsonplaceholder.typicode.com/users";
const post_site_link = "https://jsonplaceholder.typicode.com/posts";
const comment_site_link = "https://jsonplaceholder.typicode.com/comments";
const elSection = document.querySelector(".site-main");
const userList = document.querySelector('.user-list');
const postList = document.querySelector('.post-list');
const commentsList = document.querySelector('.comments-list');
const userTemplate = document.querySelector('.user-template');
const postTemplate = document.querySelector('.post-template');
const commentTemplate = document.querySelector('.comment-template');


fetch(user_site_link)
    .then(response => response.json())
    .then(users => {
        users.slice(0, 10).forEach(user => {
            const userItem = userTemplate.content.cloneNode(true);
            userItem.querySelector('.item-id').textContent = user.id;
            userItem.querySelector('.user-name').textContent = user.name;
            userItem.querySelector('.user-email').textContent = user.email;
            userItem.querySelector('.user-phone').textContent = user.phone;
            userItem.querySelector('.user-address').textContent = user.address.street;
            userList.appendChild(userItem);
        });
    })
    .catch(error => {
        console.error('Error fetching user data:', error);
    });

userList.addEventListener('click', function () {
    fetch(post_site_link)
        .then(response => response.json())
        .then(posts => {
            postList.innerHTML = '';
            posts.slice(0, 10).forEach(post => {
                const postItem = postTemplate.content.cloneNode(true);
                postItem.querySelector('.item-id').textContent = post.id;
                postItem.querySelector('.post-text').textContent = post.body;
                postList.appendChild(postItem);
            });
        })
        .catch(error => {
            console.error('Error fetching post data:', error);
        });
});

postList.addEventListener('click', function () {
    fetch(comment_site_link)
        .then(response => response.json())
        .then(comments => {
            commentsList.innerHTML = '';
            comments.slice(0, 10).forEach(comment => {
                const commentItem = commentTemplate.content.cloneNode(true);
                commentItem.querySelector('.item-id').textContent = comment.id;
                commentItem.querySelector('.user-email').textContent = comment.email;
                commentItem.querySelector('.user-comments').textContent = comment.body;

                commentsList.appendChild(commentItem);
            });
        })
        .catch(error => {
            console.error('Error fetching comments data:', error);
        });
});

