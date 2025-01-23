// server.js
const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models/user');
const userRoutes = require('./routes/userRoutes');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// API routes
app.use('/api', userRoutes);

// Sync database and start the server
sequelize.sync().then(() => {
  console.log('Database connected and models synced!');
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}).catch((err) => {
  console.error('Error connecting to the database:', err);
});
