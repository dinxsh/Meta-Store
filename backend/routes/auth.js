const express = require("express")
const Router = express()

Router.get("/register", function (req, res) {
    res.render("register");
});
 
// Handling user signup
Router.post("/register", function (req, res) {
    var username = req.body.username
    var password = req.body.password
    User.register(new User({ username: username }),
            password, function (err, user) {
        if (err) {
            console.log(err);
            return res.render("register");
        }
 
        passport.authenticate("local")(
            req, res, function () {
            res.render("secret");
        });
    });
});
 
//Showing login form
Router.get("/login", function (req, res) {
    res.render("login");
});
 
//Handling user login
Router.post("/login", passport.authenticate("local", {
    successRedirect: "/secret",
    failureRedirect: "/login"
}), function (req, res) {
});
 
//Handling user logout
Router.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
});

// Temp data filled in

module.exports = Router