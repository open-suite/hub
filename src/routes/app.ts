/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';

import express from 'express';
const router = express.Router();

router.use('/', require('./app/landing'));
router.use('/', require('./app/security'));

export default router;
