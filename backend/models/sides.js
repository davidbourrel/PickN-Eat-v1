const connection = require('../db');

const getAll = () => connection.query('SELECT * FROM sides');

const getOne = (id) => connection.query('SELECT * FROM sides WHERE id=?', [id]);

const deleteOne = (id) =>
  connection.query('DELETE FROM sides WHERE id=?', [id]);

module.exports = {
  getAll,
  getOne,
  deleteOne,
};
