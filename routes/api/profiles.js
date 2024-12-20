const express = require('express');

// Create a new router
const router = express.Router();

// @route   GET api/profiles/test
// @desc    Tests profiles route
// @access  Public
router.get('/test', (req, res) => res.json({
    msg: 'Profiles Works'
}));

module.exports = router;
