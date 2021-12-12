const express = require('express');
const app = express();
const cors = require('cors');
const verifyJWT = require('./middlewares/verifyJWT');
const cookieParser = require('cookie-parser');
const SERVER_PORT = process.env.SERVER_PORT || 3001;

// pre-route middlewares
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

// routes
app.use('/register', require('./routes/register'));
app.use('/auth', require('./routes/auth'));
app.use('/refresh', require('./routes/refresh'));
app.use('/logout', require('./routes/logout'));

// routes api
app.use('/burgers', require('./routes/api/burgers'));
app.use('/desserts', require('./routes/api/desserts'));
app.use('/drinks', require('./routes/api/drinks'));
app.use('/salads', require('./routes/api/salads'));
app.use('/sides', require('./routes/api/sides'));

app.use(verifyJWT);
app.use('/users', require('./routes/api/users'));

app.listen(SERVER_PORT, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Server running on port ${SERVER_PORT}`);
  }
});
