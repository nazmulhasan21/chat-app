// external imports

const express = require('express');

const router = express.Router();

// internal imports

const { getInbox } = require('../controller/inboxController');
const decorateHtmResponse = require('../middlewares/common/decorateHtmResponse');

// inbox page
router.get('/', decorateHtmResponse('Inbox'), getInbox);

module.exports = router;
