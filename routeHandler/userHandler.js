const express = require('express');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const router = express.Router();
const userSchema = require('../schemas/userSchema');

// Create todo model
const User = new mongoose.model('User', userSchema);

// Sign UP
router.post('/signup', async (req, res) => {
  try {
    const hashPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = new User({
      name: req.body.name,
      username: req.body.username,
      password: hashPassword,
    });
    await newUser.save();
    res.status(200).json({
      message: 'Signup successed',
    });
  } catch {
    res.status(500).json({
      error: 'Signup failed',
    });
  }
});

module.exports = router;
