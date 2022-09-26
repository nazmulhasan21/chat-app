// external imports

const express = require('express');

const router = express.Router();

// internal imports

const { getLogin } = require('../controller/loginController');
const decorateHtmResponse = require('../middlewares/common/decorateHtmResponse');

// login page
router.get('/', decorateHtmResponse('Login'), getLogin);

module.exports = router;
