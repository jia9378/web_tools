let canvas = document.getElementById("tartan");
let context = canvas.getContext("2d");
let toneSlider = document.getElementById("tone");
let sizeSlider = document.getElementById("size");

// Each number chooses a color for one stripe in the repeating pattern.
let stripes = [0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 2, 1,
               1, 2, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0];

function drawTartan() {
  let tone = Number(toneSlider.value);
  let size = Number(sizeSlider.value);
  let colors = [
    "hsl(" + tone + ", 18%, 12%)",
    "hsl(" + tone + ", 65%, 42%)",
    "hsl(" + tone + ", 20%, 88%)"
  ];

  // Small squares alternate two threads over, two under, like woven cloth.
  for (let y = 0; y < canvas.height; y += 2) {
    for (let x = 0; x < canvas.width; x += 2) {
      let column = Math.floor(x / size * stripes.length) % stripes.length;
      let row = Math.floor(y / size * stripes.length) % stripes.length;
      let color = colors[stripes[column]];

      if ((x / 2 + y / 2) % 4 < 2) {
        color = colors[stripes[row]];
      }

      context.fillStyle = color;
      context.fillRect(x, y, 2, 2);
    }
  }

  document.getElementById("toneValue").textContent = tone + "°";
  document.getElementById("sizeValue").textContent = size + " px";
}
