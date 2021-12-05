const connection = require('../db');

const getAll = () => {
  return connection.query('SELECT * FROM salads');
};

const getOne = (id) => {
  return connection.query('SELECT * FROM salads WHERE id=?', [id]);
};

const createOne = (data) => {
  return connection.query('INSERT INTO salads SET ?', [data]);
};

const updateOne = (id, data) => {
  return connection.query('UPDATE salads SET ? WHERE id=?', [data, id]);
};

const deleteOne = (id) => {
  return connection.query('DELETE FROM salads WHERE id=?', [id]);
};

module.exports = {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne,
};
