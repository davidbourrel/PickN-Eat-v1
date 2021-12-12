const connection = require('../db');

const getAll = () => connection.query('SELECT * FROM drinks');

const getOne = (id) =>
  connection.query('SELECT * FROM drinks WHERE id=?', [id]);

const deleteOne = (id) =>
  connection.query('DELETE FROM drinks WHERE id=?', [id]);

module.exports = {
  getAll,
  getOne,
  deleteOne,
};
