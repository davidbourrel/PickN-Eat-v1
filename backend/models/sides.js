const connection = require('../db');

const getAll = () => {
  return connection.query('SELECT * FROM sides');
};

const getOne = (id) => {
  return connection.query('SELECT * FROM sides WHERE id=?', [id]);
};

const create = (data) => {
  return connection.query('INSERT INTO sides SET ?', [data]);
};

const update = (id, data) => {
  return connection.query('UPDATE sides SET ? WHERE id=?', [data, id]);
};

const deleteOne = (id) => {
  return connection.query('DELETE FROM sides WHERE id=?', [id]);
};

module.exports = {
  getAll,
  getOne,
  create,
  update,
  deleteOne,
};
