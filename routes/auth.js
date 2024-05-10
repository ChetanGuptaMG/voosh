const express = require("express");
const router = express.Router();
const authController = require("../controller/authController");
const passport = require("../config/passport");

// Auth routes
router.post("/register", authController.register);
// Google OAuth routes
router.get("/google", passport.authenticate("google", { scope: ["profile"] }));
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    // Successful authentication, redirect home.
    res.redirect("/");
  }
);

router.post(
  "/login",
  passport.authenticate("local", {
    failureMessage: "Invalid credentials",
    successMessage: "User logged in",
  }),
  (req, res) => {
    res.json({ message: "User logged in" });
  }
);


router.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

module.exports = router;
