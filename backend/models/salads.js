const connection = require('../db');

const getAll = () => {
  return connection.query('SELECT * FROM salads');
};

const getOne = (id) => {
  return connection.query('SELECT * FROM salads WHERE id=?', [id]);
};

const create = (data) => {
  return connection.query('INSERT INTO salads SET ?', [data]);
};

const update = (id, data) => {
  return connection.query('UPDATE salads SET ? WHERE id=?', [data, id]);
};

const deleteOne = (id) => {
  return connection.query('DELETE FROM salads WHERE id=?', [id]);
};

module.exports = {
  getAll,
  getOne,
  create,
  update,
  deleteOne,
};
