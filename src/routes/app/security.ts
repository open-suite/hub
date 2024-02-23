'use strict';

import express from 'express';
import dotenv from 'dotenv';

dotenv.config()
const router = express.Router();

router.get('/login', (_r, res) => {
    res.render('login', { layout: false });
});

module.exports = router;
