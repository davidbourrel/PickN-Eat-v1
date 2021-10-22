const connection = require('../db');

const getAll = () => {
  return connection.query('SELECT * FROM desserts');
};

const getOne = (id) => {
  return connection.query('SELECT * FROM desserts WHERE id=?', [id]);
};

const create = (data) => {
  return connection.query('INSERT INTO desserts SET ?', [data]);
};

const update = (id, data) => {
  return connection.query('UPDATE desserts SET ? WHERE id=?', [data, id]);
};

const deleteOne = (id) => {
  return connection.query('DELETE FROM desserts WHERE id=?', [id]);
};

module.exports = {
  getAll,
  getOne,
  create,
  update,
  deleteOne,
};
