const express = require('express');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 3001;
const app = express();

// pre-route middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
require('./routes')(app);

const server = app.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Server listening on port ${port}`);
  }
});

module.exports = server;
