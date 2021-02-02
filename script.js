var slider = document.getElementById("box");

var img = ["a", "b", "c", "d", "e"];

var i = img.length;

function nextImg() {
  if (i < img.length) {
    i = i + 1;
  } else {
    i = 1;
  }
  slider.innerHTML = "<img src=" + img[i - 1] + ".jpg>";
}
function prewImg() {
  if (i < img.length + 1 && i > 1) {
    i = i - 1;
  } else {
    i = img.length;
  }
  slider.innerHTML = "<img src=" + img[i - 1] + ".jpg>";
}
