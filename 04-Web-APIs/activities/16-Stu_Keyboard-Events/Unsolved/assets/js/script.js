function keydownAction(event) {
  // TODO: Complete keydown function
  var key = event.key;
  var keyCode = event.code;
  console.log(event);

  document.querySelector("#key").textContent = key;
  document.querySelector("#code").textContent = keyCode;
  document.querySelector("#Status").textContent = "KEYDOWN Event";
}

function keyupAction() {
  document.querySelector("#status").innerHTML = "KEYUP Event";
}

document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event

document.addEventListener("keydown", keydownAction);
