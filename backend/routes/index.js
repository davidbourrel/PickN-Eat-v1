module.exports = (app) => {
  app.use('/register', require('./register'));
  app.use('/auth', require('./auth'));
  app.use('/burgers', require('./burgers'));
  app.use('/desserts', require('./desserts'));
  app.use('/drinks', require('./drinks'));
  app.use('/salads', require('./salads'));
  app.use('/sides', require('./sides'));
  app.use('/users', require('./users'));
};
