const express = require("express");
const path = require("path");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/admin", adminRoutes); // Filter for /admin
app.use("/shop", shopRoutes);   // Filter for /shop

// 404 Middleware
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

// Start server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
