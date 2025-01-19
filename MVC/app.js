// Import required modules
const express = require('express');
const path = require('path');

// Initialize app
const app = express();

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true })); // To handle form submissions

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Import controllers
const homeController = require('./controllers/homeController');
const contactController = require('./controllers/contactController');
const errorController = require('./controllers/errorController');

// Routes
app.get('/', homeController.getHome);
app.get('/contactus', contactController.getContactUs);
app.post('/submit-form', contactController.postForm);
app.get('/success', contactController.getSuccess);

// 404 Error page
app.use(errorController.get404);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
