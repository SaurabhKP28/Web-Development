const express = require('express');
const bodyParser = require('body-parser');
const expenseRoutes = require('./routes/expenseRoutes');
const sequelize = require('./models/Expense').sequelize;

const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));
app.use('/api', expenseRoutes);

sequelize.sync().then(() => {
  app.listen(3000, () => console.log('Server is running on http://localhost:3000'));
}).catch((error) => console.log('Database connection failed:', error));
