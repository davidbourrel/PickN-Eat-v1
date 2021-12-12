const connection = require('../db');

const getAll = () => connection.query('SELECT * FROM salads');

const getOne = (id) =>
  connection.query('SELECT * FROM salads WHERE id=?', [id]);

const deleteOne = (id) =>
  connection.query('DELETE FROM salads WHERE id=?', [id]);

module.exports = {
  getAll,
  getOne,
  deleteOne,
};
