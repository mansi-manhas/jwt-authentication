const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const router = express.Router();

const users = []; //temp DB

router.post("/register", async (req, res) => {
  const { usermame, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  users.push({
    username: usermame,
    password: hashedPassword,
  });

  res.status(201).send();
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  //To be replaced with DB query
  const encyptedValidPassword = await bcrypt.hash("admin", 10);

  //To be replaced with DB query
  const validUsers = [
    { username: "admin", password: encyptedValidPassword },
    { username: "abc", password: encyptedValidPassword },
  ];

  const user = validUsers.find((user) => user.username === username);

  if (user && (await bcrypt.compare(password, encyptedValidPassword))) {
    const token = jwt.sign(
      {
        username: username,
      },
      'process.env.ACCESS_TOKEN_SECRET', //replace with access token secret using env variables
      { expiresIn: "1h" }
    );

    res.status(200).json({
      token,
    });
  } else {
    res.status(400).send("Invalid credentials");
  }
});

module.exports = router;
