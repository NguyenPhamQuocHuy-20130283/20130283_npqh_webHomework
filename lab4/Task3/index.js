let btnRandom = document.querySelector("button");
let result = document.querySelector("#text");
let users = [
  "Hi",
  "Hello",
  "Chào",
  "Ni hǎo",
  "hola",
  "hallo",
  "hoi",
  "Bonjour",
  "Ciao",
  "Konnichiwa",
];
function getRandomNumber(min, max) {
  let step1 = max - min + 1;
  let step2 = Math.random() * step1;
  let result = Math.floor(step2) + min;
  return result;
}
btnRandom.addEventListener("click", () => {
  let index = getRandomNumber(0, users.length - 1);
  result.innerText = users[index];
});
