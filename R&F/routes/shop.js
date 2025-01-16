const express = require("express");
const router = express.Router();

// Example: Add a shop route
router.get("/", (req, res) => {
  res.send("<h1>Welcome to the Shop</h1>");
});

// Other shop routes can be added here.

module.exports = router;
