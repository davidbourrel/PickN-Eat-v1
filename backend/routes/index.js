const burgerRouter = require('./burgers');
const dessertRouter = require('./desserts');
const drinkRouter = require('./drinks');
const roleRouter = require('./roles');
const saladRouter = require('./salads');
const sideRouter = require('./sides');
const loginRouter = require('./authentification');
const userRouter = require('./users');

module.exports = (app) => {
  app.use('/burgers', burgerRouter);
  app.use('/desserts', dessertRouter);
  app.use('/drinks', drinkRouter);
  app.use('/roles', roleRouter);
  app.use('/salads', saladRouter);
  app.use('/sides', sideRouter);
  app.use('/login', loginRouter);
  app.use('/users', userRouter);
};
