// external imports

const express = require('express');

const router = express.Router();

// internal imports

const { getUsers } = require('../controller/usersController');
const decorateHtmResponse = require('../middlewares/common/decorateHtmResponse');

// login page
router.get('/', decorateHtmResponse('Users'), getUsers);

module.exports = router;
