const express = require("express");
const mongoose = require("mongoose");
const server = express();
require("dotenv").config();
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("./config/passport.config");
const expressLayouts = require("express-ejs-layouts");
const MongoStore = require("connect-mongo");
const authController = require("./controllers/auth.controllers")
const userController = require("./controllers/user.controller")

mongoose
  .connect(process.env.MONGO_DB)
  .then(() => console.log("Mongo connected"));

server.use(express.static("public"));
server.use(express.urlencoded({ extended: true }));
server.set("view engine", "ejs");
server.use(expressLayouts);
/*-- These must be place in the correct place */
server.use(
  session({
    secret: process.env.SECRET,
    saveUninitialized: true,
    resave: false,
    cookie: { maxAge: 360000 },
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_DB, //Store session in mongodb to preview re-login on server reload
    }),
  })
);
//-- passport initialization
server.use(passport.initialize());
server.use(passport.session());
server.use(flash());
server.use(express.static("public"));

server.use(function (request, response, next) {
  // before every route, attach the flash messages and current user to res.locals
  response.locals.alerts = request.flash(); //{ success: [], error: []}
  response.locals.currentUser = request.user; //Makes logged in user accessibile in ejs as currentUser.
  next();
});

// server.use("/", (req,res) =>{
//   res.render("auth/register")
// })

server.use("/", userController)
server.use("/auth", authController);


server.get("*", (req, res) => {
  res.render("errors/404");
});

server.listen(process.env.PORT, () =>
  console.log(`connected to express on ${process.env.PORT}`)
);
