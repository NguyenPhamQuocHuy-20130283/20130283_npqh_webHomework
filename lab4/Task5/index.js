document.addEventListener("DOMContentLoaded", function () {
  const rotatingImage = document.getElementById("rotatingImage");
  let currentRotation = 0;

  function rotateImage() {
    currentRotation += 15;
    rotatingImage.style.transform = `rotate(${currentRotation}deg)`;
  }

  setInterval(rotateImage, 1000);
});
