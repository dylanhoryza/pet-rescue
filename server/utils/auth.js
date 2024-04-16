const jwt = require('jsonwebtoken');

const secret = 'secretKEY'; // Update with your secret key
const expiration = '2h';

module.exports = {
  authenticationError: new Error('Cannot authenticate user'),
  authMiddleware: function (req, res, next) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      // Remove 'Bearer ' from token string
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
      next();
    } catch (error) {
      console.error('Invalid token:', error.message);
      return res.status(401).json({ error: 'Invalid token' });
    }
  },
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
