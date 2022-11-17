const loginFormHandler = async (event) => {
  // TODO: Add a comment describing the functionality of this statement
  //prevents the default action of the form
  event.preventDefault();

  // TODO: Add a comment describing the functionality of these expressions
  // retrieves the email and password from the form and trims excess spaces
  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    // TODO: Add a comment describing the functionality of this expression
    //if both email and password exist, the create a user using a post request
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to log in");
    }
  }
};

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
