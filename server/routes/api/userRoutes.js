const router = require('express').Router();
const { authMiddleware } = require('../../utils/auth')

const {
  registerUser,
  loginUser,
  protectedRoute,
} = require('../../controllers/userController');

// api/users
router.route('/').post(registerUser);

// api/users/login
router.route('/login').post(loginUser);

// api/users/profile
router.get('/profile', authMiddleware, protectedRoute);

module.exports = router;