const connection = require('../db');

const getAll = () => connection.query('SELECT * FROM desserts');

const getOne = (id) =>
  connection.query('SELECT * FROM desserts WHERE id=?', [id]);

const deleteOne = (id) =>
  connection.query('DELETE FROM desserts WHERE id=?', [id]);

module.exports = {
  getAll,
  getOne,
  deleteOne,
};
