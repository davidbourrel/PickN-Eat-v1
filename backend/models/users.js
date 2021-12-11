const argon2 = require('argon2');
const connection = require('../db');
const ROLE_USER = require('../_constants/roles');
const crypto = require('crypto');

const newId = crypto.randomBytes(15).toString('hex');

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

const hashPassword = (plainPassword) => {
  return argon2.hash(plainPassword, hashingOptions);
};

const verifyPassword = (plainPassword, hashedPassword) => {
  return argon2.verify(hashedPassword, plainPassword, hashingOptions);
};

const getAll = () => {
  return connection.query('SELECT * FROM users');
};

const getOne = (id) => {
  return connection.query('SELECT * FROM users WHERE id=?', [id]);
};

const createOne = ({
  id = newId,
  first_name,
  last_name,
  email,
  age,
  password,
  roles_id = ROLE_USER,
}) => {
  return hashPassword(password)
    .then((hashedPassword) =>
      connection.query(
        'INSERT INTO users (id, first_name, last_name, email, age, hashedPassword, roles_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [id, first_name, last_name, email, age, hashedPassword, roles_id]
      )
    )
    .catch((err) => {
      console.log(err);
    });
};

const updateOne = (id, data) => {
  return connection.query('UPDATE users SET ? WHERE id=?', [data, id]);
};

const deleteOne = (id) => {
  return connection.query('DELETE FROM users WHERE id=?', [id]);
};

module.exports = {
  verifyPassword,
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne,
};
