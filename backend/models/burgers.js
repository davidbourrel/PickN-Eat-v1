const connection = require('../db');

const getAll = () => {
  return connection.query('SELECT * FROM burgers');
};

const getOne = (id) => {
  return connection.query('SELECT * FROM burgers WHERE id=?', [id]);
};

const create = (data) => {
  return connection.query('INSERT INTO burgers SET ?', [data]);
};

const update = (id, data) => {
  return connection.query('UPDATE burgers SET ? WHERE id=?', [data, id]);
};

const deleteOne = (id) => {
  return connection.query('DELETE FROM burgers WHERE id=?', [id]);
};

module.exports = {
  getAll,
  getOne,
  create,
  update,
  deleteOne,
};
