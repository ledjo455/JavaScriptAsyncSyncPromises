// A promise is an object that gives back a result of a asynchronous operation or a failure of such operation
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("got the user");
    resolve({ user: "ed" });
    reject(new Error("User is not logged in"));
  }, 2000);
});

promise
  .then((user) => {
    console.log(user);
  })
  .catch((err) => console.log(err));
