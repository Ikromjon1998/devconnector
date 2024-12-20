const express = require('express');

// Create a new router
const router = express.Router();

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get('/test', (req, res) => res.json({
    msg: 'Users Works'
}));

module.exports = router;