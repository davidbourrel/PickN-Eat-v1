const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();
const PORT = process.env.PORT || 3001;
const app = express();

const corsOptions = {
  origin: process.env.CLIENT_URL,
  optionsSuccessStatus: 200,
};

// pre-route middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

// routes
require('./routes')(app);

// post-route middlewares
app.disable('x-powered-by');

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Server running on port ${PORT}`);
  }
});
