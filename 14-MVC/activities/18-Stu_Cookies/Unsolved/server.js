const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
// Initializes Sequelize with session store
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const routes = require("./controllers");
const sequelize = require("./config/connection");
const helpers = require("./utils/helpers");

const app = express();
const PORT = process.env.PORT || 3001;

// Sets up session and connect to our Sequelize db
const sess = {
  secret: "Super secret secret",
  // TODO: Add a comment describing the purpose of adding a cookies object to our options to our session object
  //cookies allow the server to store session information even if the browser is closed
  cookie: {
    // TODO: Add a comment describing the functionality of the maxAge attribute
    //gives the cookie an expiration date
    maxAge: 3600,
    // TODO: Add a comment describing the functionality of the httpOnly attribute

    httpOnly: true,
    // TODO: Add a comment describing the functionality of the secure attribute
    //makes it so the client cannnot access the information in the cookie
    secure: false,
    // TODO: Add a comment describing the functionality of the sameSite attribute
    //the cookie can only be used on the site it was created on
    sameSite: "strict",
  },
  resave: false,
  saveUninitialized: true,
  // Sets up session store
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(
      `\nServer running on port ${PORT}. Visit http://localhost:${PORT} and create an account!`
    )
  );
});
