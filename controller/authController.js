const argon2 = require('argon2');
const User = require('../model/user');
const passport = require('passport');

// Register a new user or admin
exports.register = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;

    // Check if user already exists
    const user = await User
        .findOne({ email })
        .select('_id');

    if (user) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await argon2.hash(password);

    // Create new user
    const newUser = new User({
      name,  
      email,
      password: hashedPassword,
      role
    });

    await newUser.save();

    if (role === 'admin') {
      res.status(201).json({ message: 'Admin created' });
    } else {
      res.status(201).json({ message: 'User created' });
    }
  } catch (error) {
    next(error);
  }
}

// Login user
exports.login = passport.authenticate("local", {
  failureMessage: "Invalid credentials",
  successMessage: "User logged in",
})

// Logout user
exports.logout = async (req, res, next) => {
  try {
    req.session.destroy(); // redis session destroy
    res.clearCookie("token"); // clear cookie

    res.json({ message: 'User logged out' });
  } catch (error) {
    next(error);
  }
}

// Google login 
exports.googleLogin = async (req, res, next) => {
  passport.authenticate('google', { scope: ['profile', 'email'] })(req, res, next);
}

// Google login callback
exports.googleLoginCallback = async (req, res, next) => {
  passport.authenticate('google', { failureRedirect: '/login' })(req, res, next);
  
  res.redirect('/');
}
