var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = [];

// TODO: renders the todo list by creating list items and setting them to the todo input
function renderTodos() {
  // TODO: Describe the functionality of the following two lines of code.
  // displays the number of todos on the list
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;

  // TODO: Describe the functionality of the following `for` loop.
  //depending on the length of the todo, it will create a list element and setting data-index attribute to the index of the for loop.
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li");
    li.textContent = todo;
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = "Complete ✔️";

    li.appendChild(button);
    todoList.appendChild(li);
  }
}

// TODO: What is the purpose of the following function?
// initializes the todo array with an object if there is an object in stored todos
function init() {
  // TODO: What is the purpose of the following line of code?
  // takes todos from local storage and stores it as an object in storedTodos
  var storedTodos = JSON.parse(localStorage.getItem("todos"));
  // TODO: Describe the functionality of the following `if` statement.
  // if there is anything in storedtodos, then it stores the object into todos array.
  if (storedTodos !== null) {
    todos = storedTodos;
  }
  // TODO: Describe the purpose of the following line of code.
  // calls the renderTodos function
  renderTodos();
}

function storeTodos() {
  // TODO: Describe the purpose of the following line of code.
  // takes the todos array and stringifys it and stores it locally in the key todos
  localStorage.setItem("todos", JSON.stringify(todos));
}
// TODO: Describe the purpose of the following line of code.
// when submit is pressed, then it stores the input of the form to todoText
todoForm.addEventListener("submit", function (event) {
  event.preventDefault();
  var todoText = todoInput.value.trim();
  // TODO: Describe the functionality of the following `if` statement.
  // if todoText does not have any values, then just returns of out the function
  if (todoText === "") {
    return;
  }
  // TODO: Describe the purpose of the following lines of code.
  // adds the values in todoText to the end of the array of todo
  todos.push(todoText);
  todoInput.value = "";

  // TODO: What will happen when the following functions are called?
  // store the input of the items into local storage and renders the items to the page
  storeTodos();
  renderTodos();
});

// TODO: Describe the purpose of the following line of code.
// after a click happens then run function
todoList.addEventListener("click", function (event) {
  var element = event.target;
  // TODO: Describe the functionality of the following `if` statement.
  // if the botton is pressed, then it gets the index of the given todo item, then splices only that item from the array which will remove it.
  if (element.matches("button") === true) {
    var index = element.parentElement.getAttribute("data-index");
    todos.splice(index, 1);
    // TODO: What will happen when the following functions are called?
    // it will once again store the todos again to the local storage to update the local storage and will rerender the todo list with the new index values
    storeTodos();
    renderTodos();
  }
});

init();
