const userNameInput = document.getElementById("username");
const productInput = document.getElementById("product");
const reviewInput = document.getElementById("review");
const reviewForm = document.getElementById("review-form");

// TODO: Add a comment explaining the functionality of this helper function
// function that fetches data from our server on the endpoint of /api/reviews
const postReview = (review) =>
  // TODO: Add a comment explaining what sort of data we need to provide when invoking the fetch function for a POST request
  // makes sure the content of the post has Content-type
  fetch("/api/reviews", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    // TODO: Add a comment describing why one would need to convert the JSON object to a string in this instance
    //the body data cannot receive an object so that object will need to be stringified
    body: JSON.stringify(review),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Successful POST request:", data);
      return data;
    })
    // TODO: Add a comment describing the functionality of the catch statement
    // catches an error if the post request does not have the required information or is not the right type of information
    .catch((error) => {
      console.error("Error in POST request:", error);
    });

// Listen for when the form is submitted
reviewForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Create a new review object from the input values
  const newReview = {
    username: userNameInput.value.trim(),
    product: productInput.value.trim(),
    review: reviewInput.value.trim(),
  };

  // Call our `postReview` method to make a POST request with our `newReview` object.
  postReview(newReview)
    .then((data) => alert(`Review added! Review ID: ${data.body.review_id}`))
    .catch((err) => console.error(err));
});
