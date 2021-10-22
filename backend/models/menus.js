const connection = require('../db');

const getAll = () => {
  return connection.query('SELECT * FROM menus');
};

const getOne = (id) => {
  return connection.query('SELECT * FROM menus WHERE id=?', [id]);
};

const create = (data) => {
  return connection.query('INSERT INTO menus SET ?', [data]);
};

const update = (id, data) => {
  return connection.query('UPDATE menus SET ? WHERE id=?', [data, id]);
};

const deleteOne = (id) => {
  return connection.query('DELETE FROM menus WHERE id=?', [id]);
};

module.exports = {
  getAll,
  getOne,
  create,
  update,
  deleteOne,
};
