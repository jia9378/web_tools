// Redraw only when a slider changes.
toneSlider.oninput = drawTartan;
sizeSlider.oninput = drawTartan;

function downloadImage() {
  let link = document.createElement("a");
  link.download = "tartan.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
}

document.getElementById("download").onclick = downloadImage;
drawTartan();
