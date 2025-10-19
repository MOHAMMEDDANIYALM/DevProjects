const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authmiddleware');
const Progress = require('../models/progress');

// Add progress
router.post('/', authMiddleware, async (req, res) => {
  try {
    const newProgress = new Progress({
      user: req.user.id,
      ...req.body
    });
    const savedProgress = await newProgress.save();
    res.json(savedProgress);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get progress
router.get('/', authMiddleware, async (req, res) => {
  try {
    const progress = await Progress.find({ user: req.user.id });
    res.json(progress);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
