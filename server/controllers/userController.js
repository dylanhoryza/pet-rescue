const User = require('../models/User'); 
const { authenticationError, authMiddleware, signToken } = require('../utils/auth');

// Register a new user
const registerUser = async (req, res) => {
  try {
    const { username, email, password, roles } = req.body;
    // Create a new user based on request body
    const newUser = await User.create({ username, email, password, roles });
    
    // Generate JWT token for the new user
    const token = signToken(newUser);

    // Send response with token
    res.status(201).json({ token, user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

// Login user
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });

    // If user not found or password doesn't match, return authentication error
    if (!user || !(await user.isCorrectPassword(password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Check if the user is an admin or foster parent
    const isAdmin = user.roles.includes('admin');
    const isFoster = user.roles.includes('foster');

    // Generate JWT token for the user
    const token = signToken(user);

    // Send response with token
    res.json({ token, isAdmin, isFoster, user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

// GET user profile
const getUserProfile = async (req, res) => {
  try {
    // Fetch user profile data from the database based on userId
    const userId = req.params.userId;
    const user = await User.findById(userId);

    if (user) {
      // Send user profile data as JSON response
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error fetching user profile:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

// Example protected route
const protectedRoute = (req, res) => {
  res.json({ message: 'Protected route', user: req.user });
};

module.exports = { registerUser, loginUser, protectedRoute, getUserProfile };
