const express = require('express');
const app = express();
const cors = require('cors');
const verifyJWT = require('./middlewares/verifyJWT');
const cookieParser = require('cookie-parser');
const credentials = require('./middlewares/credentials');
const PORT = process.env.PORT || 3001;

// pre-route middlewares
app.use(credentials);
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

// routes
app.use('/auth', require('./routes/auth'));

// routes api
app.use('/burgers', require('./routes/api/burgers'));
app.use('/desserts', require('./routes/api/desserts'));
app.use('/drinks', require('./routes/api/drinks'));
app.use('/salads', require('./routes/api/salads'));
app.use('/sides', require('./routes/api/sides'));

app.use(verifyJWT);
app.use('/users', require('./routes/api/users'));

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Server running on port ${PORT}`);
  }
});
