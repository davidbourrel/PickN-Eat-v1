const express = require('express');
const app = express();
const helmet = require('helmet');
const cors = require('cors');
const verifyJWT = require('./middlewares/verifyJWT');
const verifyRole = require('./middlewares/verifyRole');
require('dotenv').config();
const SERVER_PORT = process.env.SERVER_PORT || 3001;

app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_URL }));
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

// Public routes with auth
app.use(verifyJWT);
app.use('/users', require('./routes/api/users'));

// Private routes
app.use(verifyRole);
app.use('/burgers', require('./routes/api/privateRoutes/burgers'));
app.use('/desserts', require('./routes/api/privateRoutes/desserts'));
app.use('/drinks', require('./routes/api/privateRoutes/drinks'));
app.use('/salads', require('./routes/api/privateRoutes/salads'));
app.use('/sides', require('./routes/api/privateRoutes/sides'));

app.listen(SERVER_PORT, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Server running on port ${SERVER_PORT}`);
  }
});
