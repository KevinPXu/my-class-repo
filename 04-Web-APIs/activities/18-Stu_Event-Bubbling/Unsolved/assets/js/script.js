// TODO: it is selecting the div containing the buttons with class prev and next
var carousel = document.querySelector(".carouselbox");
// TODO: it is selecting the button elements containing class prev and next
var next = carousel.querySelector(".next");
var prev = carousel.querySelector(".prev");
var index = 0;
var currentImage;

var images = [
  "https://picsum.photos/300/200",
  "https://picsum.photos/300/201",
  "https://picsum.photos/300/202",
  "https://picsum.photos/300/203",
];

carousel.style.backgroundImage = "url('https://picsum.photos/300/200')";

function navigate(direction) {
  index += direction;
  if (index < 0) {
    index = images.length - 1;
  } else if (index > images.length - 1) {
    index = 0;
  }
  currentImage = images[index];
  carousel.style.backgroundImage = "url('" + currentImage + "')";
}

// TODO: Describe the functionality of the following event listener.
// on click, it is returning the URL of the current image
carousel.addEventListener("click", function () {
  window.location.href = images[index];
});

// TODO: Describe the functionality of the following event listener.
// Calls the function navigate on click and will change the image to the previous image
next.addEventListener("click", function (event) {
  // TODO: stops ballooning from occurring from the parent
  event.stopPropagation();

  navigate(1);
});

// TODO: Calls the function navigate on click and will change the image to the previous image
prev.addEventListener("click", function (event) {
  // TODO: What would happen if we didn't add the following line of code?
  // it would balloon to the parent element which would open the image in a different URL. 
  event.stopPropagation();

  navigate(-1);
});

navigate(0);
