// Refactor for the async Code using Promises

console.log("Start");

// setTimeout(() => {
//   console.log("Entering the timeoutZone");
// }, 2000);

function loginUser(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Now we have the data");
      resolve({ userEmail: email, userPassword: password });
    }, 5000);
  });
}

function getUserVideos(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["video1", "video2", "video3"]);
    }, 1000);
  });
}

function videoDetails(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("title");
    }, 2000);
  });
}

// old version
// const user = loginUser("tes@gmail.com", 123456, (user) => {
//   console.log("User", user);
//   getUserVideos(user.userEmail, (videos) => {
//     console.log("Videos", videos);
//     videoDetails(videos[0], (title) => {
//       console.log("Video details / title", title);
//     });
//   });
// });
// // console.log(user);

//Async
loginUser("fedx", "le23321")
  .then((user) => getUserVideos(user.email))
  .then((videos) => videoDetails(videos[0]))
  .then((detail) => console.log(detail));

//Sync way

const yt = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Getting data from Youtube");
    resolve({ videos: [1, 2, 3, 4, 5, 6] });
  }, 2000);
});

const fb = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Retreiving data from Facebook");
    const data = ["user1", "user2", "user3"];
    if (data.length > 0) {
      resolve({ user: data });
    } else {
      reject(new Error("This is not correct"));
    }
  }, 3000);
});

Promise.all([yt, fb]).then((result) =>
  console.log("Promise All Result", result)
);

//SYNC Await
async function displayUser() {
  const loggedUser = await loginUser("email", 13443223);
  const videos = await getUserVideos(loggedUser.userEmail);
  const detail = await videoDetails(videos[0]);
  console.log("Async Wait", detail);
}

displayUser();
console.log("Finish");
