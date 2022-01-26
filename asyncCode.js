// Async Code Example

console.log("Start");

// setTimeout(() => {
//   console.log("Entering the timeoutZone");
// }, 2000);

function loginUser(email, password, onSuccess) {
  setTimeout(() => {
    console.log("Now we have the data");
    onSuccess({ userEmail: email, userPassword: password });
  }, 5000);
}

function getUserVideos(email, callback) {
  setTimeout(() => {
    callback(["video1", "video2", "video3"]);
  }, 1000);
}

function videoDetails(video, callback) {
  setTimeout(() => {
    callback("title");
  }, 2000);
}

const user = loginUser("tes@gmail.com", 123456, (user) => {
  console.log("User", user);
  getUserVideos(user.userEmail, (videos) => {
    console.log("Videos", videos);
    videoDetails(videos[0], (title) => {
      console.log("Video details / title", title);
    });
  });
});
console.log(user);

console.log("Finish");
