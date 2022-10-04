var shoppingFormEl = $("#shopping-form");
var shoppingListEl = $("#shopping-list");
var input = $("#shopping-input");
// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`

function formSubmit(event) {
  event.preventDefault();
  var newLi = $("<li>");
  newLi.text(input.val());
  shoppingListEl.append(newLi);
}

$(shoppingFormEl).on("submit", formSubmit);

// TODO: Add an event listener to the `shoppingFormEl` to handle submission
