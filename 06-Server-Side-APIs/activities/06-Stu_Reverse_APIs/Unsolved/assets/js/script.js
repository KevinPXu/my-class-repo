var requestUrl = "https://api.github.com/orgs/Netflix/repos";

// JQuery AJAX
// TODO: Comment on how AJAX returns an API call
//ajax takes a URL that we give it to make a request to a server, It will then give us a JSON object as a return
$.ajax({
  url: requestUrl,
  method: "GET",
}).then(function (response) {
  console.log("AJAX Response \n-------------");
  console.log(response);
});

// Browser Fetch Method
// TODO: Comment on how Fetch returns an API call
//makes a request to the server via URL and returns a string that we will need to parse with response.json() to return a JSON object
fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log("Fetch Response \n-------------");
    console.log(data);
  });

// Browser XMLHttpRequest
// TODO: Comment on how XMLHttpRequest returns an API call
// uses a state change to call for information from the web, will return a string of the object so requires JSON.parse to retrieve the usable object
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    console.log("XMLHttpRequest Response \n-------------");
    console.log(xhr.response);
  }
};
xhr.open("GET", requestUrl);
xhr.send();

// TODO: Comment on the differences on the format of the data that was returned
//both fetch and AJAX return an array of the object while XHR returns a string of the object which will need to be parsed.
