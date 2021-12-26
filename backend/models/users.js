const argon2 = require('argon2');
const connection = require('../db');
const { ROLE_USER } = require('../_constants/roles');
const crypto = require('crypto');

const getAll = () => connection.query('SELECT * FROM users');

const getOne = (id) =>
  connection.query(
    'SELECT * FROM users INNER JOIN roles ON roles.id=users.roles_id WHERE users.id=?',
    [id]
  );

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

const verifyPassword = (plainPassword, hashedPassword) =>
  argon2.verify(hashedPassword, plainPassword, hashingOptions);

const hashPassword = (plainPassword) =>
  argon2.hash(plainPassword, hashingOptions);

const newId = crypto.randomBytes(15).toString('hex'); // newId.length = 30

const createOne = async ({ first_name, last_name, email, age, password }) => {
  try {
    const hashedPassword = await hashPassword(password);
    return await connection.query(
      'INSERT INTO users (id, first_name, last_name, email, age, hashedPassword, roles_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [newId, first_name, last_name, email, age, hashedPassword, ROLE_USER]
    );
  } catch (err) {
    console.log(err);
  }
};

const updateOne = (id, data) =>
  connection.query('UPDATE users SET ? WHERE id=?', [data, id]);

const deleteOne = (id) =>
  connection.query('DELETE FROM users WHERE id=?', [id]);

module.exports = {
  getAll,
  getOne,
  verifyPassword,
  createOne,
  updateOne,
  deleteOne,
};
