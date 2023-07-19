// //GET Users Way 1
// function getUsers() {
//   return new Promise((resolve, reject) => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => {
//         if (res.ok) {
//           return res.json();
//         }
//       })
//       .then((res) => {
//         res.map((user) => {
//           document.querySelector(".names").innerHTML += `
//           <div class="user" onclick="userClicked(${user.id})">
//           <h4 class="userName">${user.name}</h4>
//           <span class="userEmail">${user.email}</span>
//           </div>`;
//         });
//         resolve();
//       });
//   });
// }

// //GET Posts Way 1
// function getPosts(usId) {
//   fetch("https://jsonplaceholder.typicode.com/posts?userId=" + usId)
//     .then((res) => res.json())
//     .then((res) => PostsData(res));
// }
// function PostsData(res) {
//   document.querySelector(".start").innerHTML = "";
//   document.querySelector(".content").innerHTML = "";
//   res.map((post) => {
//     document.querySelector(".content").innerHTML += `
//           <div class="post">
//           <h3 class="TitlePost">${post.title}</h3>
//           <p class="bodyPost">${post.body}</p>
//           </div>`;
//   });
// }

// function userClicked(id) {
//   getPosts(id);
// }
// getUsers().then(() => {
//   getPosts();
// });

// ============================================================================================

//GET Users Way 2
// function getUsers() {
//   let request = new XMLHttpRequest();
//   request.open("GET", "https://jsonplaceholder.typicode.com/users");
//   request.responseType = "json";
//   request.send();
//   request.onload = function () {
//     if (request.status >= 200 && request.status < 300) {
//       let users = request.response;
//       users.map((user) => {
//         document.querySelector(".names").innerHTML += `
//         <div class="user" onclick="userClicked(${user.id})">
//         <h4 class="userName">${user.name}</h4>
//         <span class="userEmail">${user.email}</span>
//         </div>`;
//       });
//     } else {
//       alert("error");
//     }
//   };
// }

//GET Posts Way 2
// function getPosts(usId) {
//   let request = new XMLHttpRequest();
//   request.open(
//     "GET",
//     "https://jsonplaceholder.typicode.com/posts?userId=" + usId
//   );
//   request.responseType = "json";
//   request.send();
//   request.onload = function () {
//     if (request.status >= 200 && request.status < 300) {
//       let posts = request.response;
//       document.querySelector(".start").innerHTML = "";
//       document.querySelector(".content").innerHTML = "";
//       posts.map((post) => {
//         document.querySelector(".content").innerHTML += `
//         <div class="post">
//         <h3 class="TitlePost">${post.title}</h3>
//         <p class="bodyPost">${post.body}</p>
//         </div>`;
//       });
//     } else {
//       alert("error");
//     }
//   };
// }

// //Filteration

// getUsers();

// function userClicked(id) {
//   getPosts(id);
// }

// ============================================================================================
// GET Users Way 3
function getUsersAxios() {
  return new Promise((resolve, reject) => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      let users = res.data;
      users.map((user) => {
        document.querySelector(".names").innerHTML += `
          <div class="user" onclick="userClicked(${user.id})">
          <h4 class="userName">${user.name}</h4>
          <span class="userEmail">${user.email}</span>
          </div>`;
      });
      resolve();
    });
  });
}
// GET Posts Way 3
function getPostsAxios(usId) {
  let url = "https://jsonplaceholder.typicode.com/posts?userId=" + usId;
  axios.get(url).then((res) => {
    let posts = res.data;

    document.querySelector(".content").innerHTML = "";
    posts.map((post) => {
      document.querySelector(".content").innerHTML += `
              <div class="post">
              <h3 class="TitlePost">${post.title}</h3>
              <p class="bodyPost">${post.body}</p>
              </div>`;
    });
  });
}
function userClicked(id) {
  document.querySelector(".start").innerHTML = "";
  getPostsAxios(id);
}
getUsersAxios().then(() => {
  getPostsAxios();
});
