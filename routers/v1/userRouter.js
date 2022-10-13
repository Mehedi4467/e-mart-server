const express = require('express');
const router = express.Router();

//internal import
const {getUser } = require('../../controller/userController');

router.route('/')
.get(getUser)
.post()

// router.get('/', getUser);
module.exports = router;