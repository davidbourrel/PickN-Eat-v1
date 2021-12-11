const connection = require('../db');

const getAll = () => {
  return connection.query('SELECT * FROM desserts');
};

const getOne = (id) => {
  return connection.query('SELECT * FROM desserts WHERE id=?', [id]);
};

const deleteOne = (id) => {
  return connection.query('DELETE FROM desserts WHERE id=?', [id]);
};

module.exports = {
  getAll,
  getOne,
  deleteOne,
};
