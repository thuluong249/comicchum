const express = require("express");
const exphbs = require("express-handlebars");
const helpers = require("./utils/helpers");
const session = require("express-session");

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const hbs = exphbs.create({ helpers });

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));
// connectDB();

//init middleware
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// app.get("/users", (req, res) => {
//   res.render("index");
// });
// app.get("/", (req, res) => res.send("API RUNNING"));
// define routes
app.use("/api", require("./controllers/api"));
app.use("/", require("./controllers/homeRoutes"));

const PORT = process.env.PORT || 3001;
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log("Now listening"));
});