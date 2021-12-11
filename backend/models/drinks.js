const connection = require('../db');

const getAll = () => {
  return connection.query('SELECT * FROM drinks');
};

const getOne = (id) => {
  return connection.query('SELECT * FROM drinks WHERE id=?', [id]);
};

const deleteOne = (id) => {
  return connection.query('DELETE FROM drinks WHERE id=?', [id]);
};

module.exports = {
  getAll,
  getOne,
  deleteOne,
};
