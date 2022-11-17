const logout = async () => {
  // TODO: Add a comment describing the functionality of this expression
  // removes the session after fetching the post request for logout, uses RESTful API standards
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    // TODO: Add a comment describing the functionality of this statement
    //if the response returns 200 then redirect the user to the login page
    document.location.replace("/login");
  } else {
    alert("Failed to log out");
  }
};

document.querySelector("#logout").addEventListener("click", logout);
