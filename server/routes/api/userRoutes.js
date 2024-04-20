const router = require('express').Router();
const { authMiddleware } = require('../../utils/auth')

const {
  registerUser,
  loginUser,
  protectedRoute,
  getUserProfile,
  getUserName
} = require('../../controllers/userController');

// api/users
router.route('/').post(registerUser);

// api/users/login
router.route('/login').post(loginUser);

// api/users/profile
router.get('/profile/:userId', authMiddleware, getUserProfile);

// api/users/username/:username
router.get('/username/:username', getUserName);

module.exports = router;