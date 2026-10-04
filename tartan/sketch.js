let canvas;
let toneSlider = document.getElementById("tone");
let sizeSlider = document.getElementById("size");

// Each number chooses a thread color in the repeating pattern.
let stripes = [0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 2, 1,
               1, 2, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0];

function setup() {
  canvas = createCanvas(720, 720);
  canvas.parent("canvas-holder");
  canvas.attribute("role", "img");
  canvas.attribute("aria-label", "Your generated tartan pattern");
  pixelDensity(1);
  noStroke();
  noLoop();
  setupTools();
}

function draw() {
  drawTartan(Number(toneSlider.value), Number(sizeSlider.value));
  updateLabels();
}

function drawTartan(tone, size) {
  let colors = [
    color("hsl(" + tone + ", 18%, 12%)"),
    color("hsl(" + tone + ", 65%, 42%)"),
    color("hsl(" + tone + ", 20%, 88%)")
  ];

  // Two threads over, two under create the diagonal woven texture.
  for (let y = 0; y < height; y += 2) {
    for (let x = 0; x < width; x += 2) {
      let column = floor(x / size * stripes.length) % stripes.length;
      let row = floor(y / size * stripes.length) % stripes.length;
      let threadColor = colors[stripes[column]];

      if ((x / 2 + y / 2) % 4 < 2) {
        threadColor = colors[stripes[row]];
      }

      fill(threadColor);
      rect(x, y, 2, 2);
    }
  }
}
