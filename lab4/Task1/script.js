const main = document.querySelector("main");
const body = document.querySelector("body");
const colors = [
  "#ff8c00",
  "#4caf50",
  "#ffeb3b",
  "#795548",
  "#607d8b",
  "#e91e63",
  "#8bc34a",
  "#9e9e9e",
];

// Create buttons with colors and append them to the main element
colors.forEach((color) => {
  const button = document.createElement("button");
  button.setAttribute("data-button-thing", color);
  button.textContent = `Color ${color}`;
  button.style.backgroundColor = color;
  button.classList.add("btn");
  main.insertAdjacentElement("beforeend", button);
});

// Change the body's background color when a button is clicked
body.addEventListener("click", function (event) {
  const target = event.target;
  if (target?.classList.contains("btn"))
    this.style.backgroundColor = target.dataset.buttonThing;
});
