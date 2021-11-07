const connection = require('../db');

const getAll = () => {
  return connection.query('SELECT * FROM drinks');
};

const getOne = (id) => {
  return connection.query('SELECT * FROM drinks WHERE id=?', [id]);
};

const create = (data) => {
  return connection.query('INSERT INTO drinks SET ?', [data]);
};

const update = (id, data) => {
  return connection.query('UPDATE drinks SET ? WHERE id=?', [data, id]);
};

const deleteOne = (id) => {
  return connection.query('DELETE FROM drinks WHERE id=?', [id]);
};

module.exports = {
  getAll,
  getOne,
  create,
  update,
  deleteOne,
};
