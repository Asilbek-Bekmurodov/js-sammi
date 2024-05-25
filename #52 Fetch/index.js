const btn = document.getElementById("btn");
const form = document.getElementById("form");
const formBtn = document.querySelector(".form-btn");
const todosWrapper = document.querySelector(".todos");
const input = document.querySelector(".input");
const postWrapper = document.querySelector(".posts");
const API_URL = "https://jsonplaceholder.typicode.com/posts";

function fetchPost() {
  fetch(API_URL)
    .then((data) => data.json())
    .then((data) => renderPost(data));
}
function renderPost(posts) {
  posts.forEach((item) => {
    const post = document.createElement("li");

    post.innerText = item.title;
    postWrapper.append(post);
  });
}

btn.addEventListener("click", fetchPost);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value === "") return;
  const li = document.createElement("li");
  li.innerHTML = input.value;
  li.addEventListener("click", (e) => {
    e.target.remove();
  });
  todosWrapper.append(li);
  form.reset();
});
