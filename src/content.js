document.documentElement.style.visibility = 'hidden';
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
      document.documentElement.style.visibility = '';

let images = document.getElementsByTagName("div");
let delay = 500;
Array.prototype.map.call(images, function(img) {
  img.style.visibility = "hidden";
});

images = document.getElementsByTagName("div");
Array.prototype.map.call(images, function(img, index) {
  setTimeout(() => {
    img.style.visibility = "visible";
  }, delay + index * 30);
});

}, 1000);
});
