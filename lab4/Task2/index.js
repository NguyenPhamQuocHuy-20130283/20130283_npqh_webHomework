function getID(i) {
  return document.getElementById(i);
}
function getVal(i) {
  return getID(i).value;
}

function solve() {
  const a = parseInt(getVal("a")) || 1;
  const b = parseInt(getVal("b")) || 0;
  const c = parseInt(getVal("c")) || 0;

  const D = b * b - 4 * a * c;
  const dis = getID("DIS");
  const nos = getID("NOS");
  const s1 = getID("S1");
  const s2 = getID("S2");

  nos.style.display = "none";
  s1.innerHTML = "";
  s2.innerHTML = "";
  dis.innerHTML = '&#9650 = <span id="D">' + D + "</span>";

  if (D < 0) {
    nos.style.display = "block";
  } else if (D == 0) {
    const S = -b / (2 * a);
    s1.innerHTML = s2.innerHTML = S.toString();
  } else {
    const S1 = (-b - Math.sqrt(D)) / (2 * a),
      S2 = (-b + Math.sqrt(D)) / (2 * a);
    s1.innerHTML = S1.toString();
    s2.innerHTML = S2.toString();
  }
}

const submitButton = document.getElementById("submit");
submitButton.onclick = function () {
  solve();
};
