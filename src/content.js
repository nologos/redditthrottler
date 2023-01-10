let images = document.getElementsByTagName("div");
let delay = 2000;
Array.prototype.map.call(images, function(img) {
  img.style.visibility = "hidden";
});

images = document.getElementsByTagName("div");
Array.prototype.map.call(images, function(img, index) {
  setTimeout(() => {
    img.style.visibility = "visible";
  }, delay + index * 30);
});