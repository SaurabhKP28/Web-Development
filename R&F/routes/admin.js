const express = require("express");
const path = require("path");

const router = express.Router();

// Serve an admin page
router.get("/", (req, res) => {
  res.send("<h1>Welcome to the Admin Page</h1>");
});

// Add Product route
router.get("/add-product", (req, res) => {
  res.send(`
    <form action="/admin/add-product" method="POST">
      <input type="text" name="title" placeholder="Product Title" required>
      <button type="submit">Add Product</button>
    </form>
  `);
});

// Handle Add Product form submission
router.post("/add-product", (req, res) => {
  console.log("Product Added:", req.body.title);
  res.redirect("/admin");
});

module.exports = router;
