const connection = require('../db');

const getAll = () => {
  return connection.query('SELECT * FROM sides');
};

const getOne = (id) => {
  return connection.query('SELECT * FROM sides WHERE id=?', [id]);
};

const deleteOne = (id) => {
  return connection.query('DELETE FROM sides WHERE id=?', [id]);
};

module.exports = {
  getAll,
  getOne,
  deleteOne,
};
