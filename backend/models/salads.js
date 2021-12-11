const connection = require('../db');

const getAll = () => {
  return connection.query('SELECT * FROM salads');
};

const getOne = (id) => {
  return connection.query('SELECT * FROM salads WHERE id=?', [id]);
};

const deleteOne = (id) => {
  return connection.query('DELETE FROM salads WHERE id=?', [id]);
};

module.exports = {
  getAll,
  getOne,
  deleteOne,
};
