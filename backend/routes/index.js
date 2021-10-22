const menuRouter = require('./menus');
const dessertRouter = require('./desserts');
const saladRouter = require('./salads');
const userRouter = require('./users');
const roleRouter = require('./roles');
const loginRouter = require('./authentification');
const favoritRouter = require('./favorites');

module.exports = (app) => {
  app.use('/menus', menuRouter);
  app.use('/desserts', dessertRouter);
  app.use('/salads', saladRouter);
  app.use('/users', userRouter);
  app.use('/roles', roleRouter);
  app.use('/login', loginRouter);
  app.use('/favorites', favoritRouter);
};
