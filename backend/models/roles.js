const connection = require('../db');

const getAll = () => {
  return connection.query('SELECT * FROM roles');
};

const getOne = (id) => {
  return connection.query('SELECT * FROM roles WHERE id=?', [id]);
};

const create = (data) => {
  return connection.query('INSERT INTO roles SET ?', [data]);
};

const update = (id, data) => {
  return connection.query('UPDATE roles SET ? WHERE id=?', [
    data,
    id,
  ]);
};

const deleteOne = (id) => {
  return connection.query('DELETE FROM roles WHERE id=?', [id]);
};

module.exports = {
  getAll,
  getOne,
  create,
  update,
  deleteOne,
};
