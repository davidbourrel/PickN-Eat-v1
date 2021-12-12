const connection = require('../db');

const getAll = () => connection.query('SELECT * FROM burgers');

const getOne = (id) =>
  connection.query('SELECT * FROM burgers WHERE id=?', [id]);

const createOne = (data) =>
  connection.query('INSERT INTO burgers SET ?', [data]);

const deleteOne = (id) =>
  connection.query('DELETE FROM burgers WHERE id=?', [id]);

module.exports = {
  getAll,
  getOne,
  createOne,
  deleteOne,
};
