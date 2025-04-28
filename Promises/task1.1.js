function timer(miliseconds) {
  return new Promise((resolve) => setTimeout(resolve, miliseconds));
}

async function saySmth(text, miliseconds) {
  await timer(miliseconds);
  console.log(text);
}

saySmth("some new text", 2000);
