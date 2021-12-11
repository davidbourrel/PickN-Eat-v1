const User = require('../models/users');
const MILLISECONDS_PER_DAY = require('../_constants/time');

const handleLogout = async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(204);
  const refreshToken = cookies.jwt;

  const retrieveUsers = await User.getAll();
  const foundUser = retrieveUsers[0].find(
    (person) => person.refreshToken === refreshToken
  );

  if (!foundUser) {
    res.clearCookie('jwt', {
      httpOnly: true,
      sameSite: 'None',
      secure: true,
      maxAge: MILLISECONDS_PER_DAY,
    });
    return res.sendStatus(204);
  }

  await User.updateOne(foundUser.id, {
    ...foundUser,
    refreshToken: '',
  });

  res.clearCookie('jwt', {
    httpOnly: true,
    sameSite: 'None',
    secure: true,
    maxAge: MILLISECONDS_PER_DAY,
  });
  res.sendStatus(204);
};

module.exports = { handleLogout };
