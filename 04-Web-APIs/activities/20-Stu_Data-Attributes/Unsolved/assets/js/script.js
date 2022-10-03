var container = document.querySelector(".container");

container.addEventListener("click", function (event) {
  var element = event.target;
  console.log(element);

  if (element.matches(".box")) {
    var state = element.getAttribute("data-state");

    if (state === "hidden") {
      element.textContent = element.getAttribute("data-number");
      element.setAttribute("data-state", "visible");
    } else {
      element.textContent = "";
      element.setAttribute("data-state", "hidden");
    }
    // TODO: Complete function
  }
});
