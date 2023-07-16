//GET Users
function getUsers() {
  let request = new XMLHttpRequest();
  request.open("GET", "https://jsonplaceholder.typicode.com/users");
  request.responseType = "json";
  request.send();
  request.onload = function () {
    if (request.status >= 200 && request.status < 300) {
      let users = request.response;
      users.map((user) => {
        document.querySelector(".users").innerHTML += `
        <div class="user" onclick="userClicked(${user.id})">
        <h4 class="userName">${user.name}</h4>
        <span class="userEmail">${user.email}</span>
        </div>`;
      });
    } else {
      alert("error");
    }
  };
}

//GET Posts
function getPosts(usId) {
  let request = new XMLHttpRequest();
  request.open(
    "GET",
    "https://jsonplaceholder.typicode.com/posts?userId=" + usId
  );
  request.responseType = "json";
  request.send();
  request.onload = function () {
    if (request.status >= 200 && request.status < 300) {
      let posts = request.response;
      document.querySelector(".posts").innerHTML = "";

      posts.map((post) => {
        document.querySelector(".posts").innerHTML += `
        <div class="post">
        <h3 class="TitlePost">${post.title}</h3>
        <p class="bodyPost">${post.body}</p>
        </div>`;
      });
    } else {
      alert("error");
    }
  };
}

//Filteration

getUsers();

function userClicked(id) {
  getPosts(id);
}
