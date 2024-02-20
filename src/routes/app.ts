/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';

import express from 'express';
const router = express.Router();

router.use('/', require('./app/landing'));

export default router;
