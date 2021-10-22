const connection = require('../db');

const getAll = (id) => {
  return connection.query(
    `SELECT * FROM 
    menus_has_users
    JOIN users on users.id = menus_has_users.menus_id
    WHERE users_id = ?`,
    [id]
  );
};

const create = (data) => {
  return connection.query('INSERT INTO menus_has_users SET ?', [data]);
};

const update = (id, data) => {
  return connection.query('UPDATE menus_has_users SET ? WHERE id=?', [
    data,
    id,
  ]);
};

const deleteOne = (id) => {
  return connection.query('DELETE FROM menus_has_users WHERE menus_id=?', [id]);
};

module.exports = {
  getAll,
  create,
  update,
  deleteOne,
};
