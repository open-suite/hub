'use strict';

import express from 'express';
import dotenv from 'dotenv';

dotenv.config()
const router = express.Router();

router.get('/', (_r, res) => {
    res.render('landing');
});

module.exports = router;
