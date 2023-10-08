let textA = document.getElementById("textA");
let textB = document.getElementById("textB");
let result = document.getElementById("result");

function solve() {
  let lastIndex = 0;
  let count = 0;
  const a = textA.value.toString().toLowerCase();
  b = textB.value.toString().toLowerCase();

  while (lastIndex != -1) {
    lastIndex = a.indexOf(b, lastIndex);
    if (lastIndex != -1) {
      count++;
      lastIndex += b.length;
    }
  }
  result.innerHTML = count.toString();
}

var btn = document.getElementById("btn");
btn.onclick = function () {
  solve();
};
