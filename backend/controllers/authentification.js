const User = require('../models/users');
const { createToken } = require('../services/jwt');

const autentificationCheck = async (req, res) => {
  try {
    const { email, password } = req.body;
    User.findEmail(email).then((user) => {
      if (!user) res.status(401).send('Invalid credentials');
      else {
        const { id, roles_id } = user[0];
        if (user.length <= 0) res.status(401).send('Invalid credentials');
        else {
          User.verifyPassword(password, user[0].hashedPassword).then(
            (passwordIsCorrect) => {
              if (passwordIsCorrect) {
                const token = createToken(id, roles_id);
                res.cookie('token', token, {
                  httpOnly: true,
                });
                res.status(200).json({
                  id,
                  roles_id,
                  token,
                });
              } else res.status(401).send('Invalid credentials');
            }
          );
        }
      }
    });
  } catch (error) {
    console.log('auth ', error);
    res.status(500).send('An error occured while retrieving authentification');
  }
};

module.exports = { autentificationCheck };
