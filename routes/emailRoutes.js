const express = require('express');
const router = express.Router();
const { generateEmail, resetConversation } = require('../controllers/emailController');

router.post('/generate-email', generateEmail);
router.post('/reset', resetConversation);

module.exports = router;
