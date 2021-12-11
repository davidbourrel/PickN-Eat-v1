const connection = require('../db');

const getAll = () => {
  return connection.query('SELECT * FROM burgers');
};

const getOne = (id) => {
  return connection.query('SELECT * FROM burgers WHERE id=?', [id]);
};

const createOne = (data) => {
  return connection.query('INSERT INTO burgers SET ?', [data]);
};

const deleteOne = (id) => {
  return connection.query('DELETE FROM burgers WHERE id=?', [id]);
};

module.exports = {
  getAll,
  getOne,
  createOne,
  deleteOne,
};
