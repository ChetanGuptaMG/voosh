require("dotenv").config();
require("./config/passport");

const express = require("express");
const bodyParser = require("body-parser");
const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const passport = require("passport");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./openapi2.yaml');
const cors = require('cors');
// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI);
const app = express();
app.use(cors("*"));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: ["COOKIE_KEY"],
  })
);

app.use(passport.initialize());
app.use(passport.session());
// Middleware
app.use(bodyParser.json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/auth", authRouter);
app.use("/profile", profileRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
