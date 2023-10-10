const main = document.querySelector("main");
const body = document.querySelector("body");

// Function to generate an array of random colors
function generateRandomColors(numColors) {
  const randomColors = [];
  for (let i = 0; i < numColors; i++) {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    randomColors.push(randomColor);
  }
  return randomColors;
}

// Generate an array of 100 random colors
const allColors = generateRandomColors(100);

// Pick 8 random colors from the array
const selectedColors = allColors.slice(0, 8);

selectedColors.forEach((color) => {
  const button = document.createElement("button");
  button.setAttribute("data-button-color", color);
  button.textContent = `Color ${color}`;
  button.style.backgroundColor = color;
  button.classList.add("btn");
  main.insertAdjacentElement("beforeend", button);
});

body.addEventListener("click", function (e) {
  const eTarget = e.target;
  if (eTarget.classList.contains("btn")) {
    const buttonColor = eTarget.getAttribute("data-button-color");
    this.style.backgroundColor = buttonColor;
  }
});
