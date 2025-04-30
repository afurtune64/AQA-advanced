function saySmth(phrase, timer) {
  setTimeout(() => {
    console.log(phrase);
  }, timer);
}
saySmth('Some text', 5000);

// Option 2
let promise = new Promise((resolve) => {
  setTimeout(() => resolve('Some new random text'), 2000);
});

promise.then(console.log);
