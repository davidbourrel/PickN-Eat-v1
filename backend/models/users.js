const Joi = require('joi');
const argon2 = require('argon2');
const connection = require('../db');

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

const validate = (data, forCreation = true) => {
  const presence = forCreation ? 'required' : 'optional';
  return Joi.object({
    email: Joi.string().email().max(100).presence(presence),
    last_name: Joi.string().max(50).presence(presence),
    first_name: Joi.string().max(50).presence(presence),
    age: Joi.number().max(3).presence(presence),
    password: Joi.string().max(255).presence(presence),
  }).validate(data, { abortEarly: false }).error;
};

const getAll = () => {
  return connection.query('SELECT * FROM users');
};

const getOne = (id) => {
  return connection.query('SELECT * FROM users WHERE id=?', [id]);
};

const createOne = ({
  first_name,
  last_name,
  email,
  age,
  password,
  roles_id,
}) => {
  return hashPassword(password).then((hashedPassword) =>
    connection.query(
      'INSERT INTO users (first_name, last_name, email, age, hashedPassword, roles_id) VALUES (?, ?, ?, ?, ?, ?)',
      [first_name, last_name, email, age, hashedPassword, roles_id]
    )
  );
};

const updateOne = (id, data) => {
  return connection.query('UPDATE users SET ? WHERE id=?', [data, id]);
};

const deleteOne = (id) => {
  return connection.query('DELETE FROM users WHERE id=?', [id]);
};

module.exports = {
  validate,
  verifyPassword,
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne,
};
