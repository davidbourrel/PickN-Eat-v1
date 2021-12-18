const express = require('express');
const app = express();
const helmet = require('helmet');
const cors = require('cors');
const verifyJWT = require('./middlewares/verifyJWT');
const cookieParser = require('cookie-parser');
const SERVER_PORT = process.env.SERVER_PORT || 3001;

app.use(helmet());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use('/register', require('./routes/register'));
app.use('/auth', require('./routes/auth'));

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
