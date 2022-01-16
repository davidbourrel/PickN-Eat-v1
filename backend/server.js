const express = require('express');
const app = express();
const helmet = require('helmet');
const cors = require('cors');
const verifyJWT = require('./middlewares/verifyJWT');
const verifyRole = require('./middlewares/verifyRole');
require('dotenv').config();
const SERVER_PORT = process.env.SERVER_PORT || 3001;

app.use(cors({ origin: process.env.CLIENT_URL }));
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Public routes
app.use('/register', require('./routes/register'));
app.use('/auth', require('./routes/auth'));
app.use('/burgers', require('./routes/api/burgers'));
app.use('/desserts', require('./routes/api/desserts'));
app.use('/drinks', require('./routes/api/drinks'));
app.use('/salads', require('./routes/api/salads'));
app.use('/sides', require('./routes/api/sides'));

// Routes with auth
app.use(verifyJWT);
app.use('/users', require('./routes/api/users'));

// Admin routes
app.use(verifyRole);
app.use('/burgers', require('./routes/api/adminRoutes/burgers'));
app.use('/desserts', require('./routes/api/adminRoutes/desserts'));
app.use('/drinks', require('./routes/api/adminRoutes/drinks'));
app.use('/salads', require('./routes/api/adminRoutes/salads'));
app.use('/sides', require('./routes/api/adminRoutes/sides'));

app.listen(SERVER_PORT, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Server running on port ${SERVER_PORT}`);
  }
});
