const User = require('../models/users');
const { ADMIN_RESULT } = require('../_constants/roles');

const verifyRole = async (req, res, next) => {
  const token = req.tokenContent;

  const parsedToken = await JSON.parse(
    Buffer.from(token.split('.')[1], 'base64').toString()
  );

  const userId = parsedToken && parsedToken.id ? parsedToken.id : '';

  const [[retrieveUsers]] = await User.getOne(userId);

  if (retrieveUsers.role !== ADMIN_RESULT) {
    return res.sendStatus(403); // Forbidden
  }
  next();
};

module.exports = verifyRole;
