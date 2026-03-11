const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { createSummary, getSummaries } = require('../controllers/summaryController');

// @route   POST /summarize
// @desc    Summarize text
// @access  Private
router.post('/summarize', auth, createSummary);

// @route   GET /summaries
// @desc    Get user summaries
// @access  Private
router.get('/summaries', auth, getSummaries);

module.exports = router;
