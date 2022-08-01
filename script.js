let score = 20;
let secretNumber = Math.floor(Math.random() * 20 + 1);
let hiScore = 20;
console.log(secretNumber);

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guessing").value);
  // console.log("type of check", guess, "is", typeof guess);

  console.log(guess);
  let result = "";
  if (!guess) {
    result = "No Number found";
    document.body.className = "failure  ";
  } else if (guess === secretNumber) {
    result = "equal";
    document.querySelector(".sec-no").textContent = secretNumber;
    document.body.className = "success";
  } else {
    result = guess > secretNumber ? "too High" : "too Low";
    document.body.className = "failure  ";
  }
  document.querySelector(".message").textContent = result;
});
