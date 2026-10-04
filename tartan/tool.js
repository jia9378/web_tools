let tones = [0, 35, 135, 195, 245, 320];
let sizes = [180, 120, 240, 180, 120, 240];
let swatches = document.getElementsByClassName("swatch");

function setupTools() {
  toneSlider.oninput = function () { redraw(); };
  sizeSlider.oninput = function () { redraw(); };

  // Use the same drawing function to make the six gallery images.
  for (let i = 0; i < swatches.length; i++) {
    drawTartan(tones[i], sizes[i]);
    swatches[i].querySelector("img").src = canvas.elt.toDataURL("image/png");
    swatches[i].disabled = false;
    swatches[i].onclick = function () {
      toneSlider.value = tones[i];
      sizeSlider.value = sizes[i];
      redraw();
    };
  }

  document.getElementById("download").disabled = false;
  document.getElementById("download").onclick = function () {
    saveCanvas(canvas, "royal-tartan", "png");
  };
}

function updateLabels() {
  document.getElementById("toneValue").textContent = toneSlider.value + "°";
  document.getElementById("sizeValue").textContent = sizeSlider.value + " px";

  for (let i = 0; i < swatches.length; i++) {
    let selected = Number(toneSlider.value) === tones[i] && Number(sizeSlider.value) === sizes[i];
    swatches[i].setAttribute("aria-pressed", selected);
  }
}
