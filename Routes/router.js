const express = require('express');
const router = express.Router();
const path = require('path');
const bodyparser = require('body-parser');
var srv = require('../services/sip.service');

router.use(bodyparser.json());



// SIP Calculation
router
.route('/')
.post(srv.sip);

module.exports = router;