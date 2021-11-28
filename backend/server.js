const express = require('express');
const app = express();
const cors = require('cors');
const verifyJWT = require('./services/jwt');
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT || 3001;

// pre-route middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// routes
require('./routes')(app);

app.use(verifyJWT);

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Server running on port ${PORT}`);
  }
});
