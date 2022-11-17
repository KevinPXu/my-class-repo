const withAuth = (req, res, next) => {
  // TODO: Add a comment describing the functionality of this if statement
  //if user is not logged in, it will redirect to the login page, otherwise will allow user to use other routes 
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;
