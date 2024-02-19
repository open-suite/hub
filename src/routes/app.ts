/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';

import fs from 'fs';
import path from 'path';
import express from 'express';

const router = express.Router();
const appDir = path.join(__dirname, 'app')

fs.readdirSync(appDir).forEach(function(file) {
    if (file.substring(file.length -3) !== '.js') {
        return;
    }

    const name = file.substring(0, file.indexOf('.'));
    const r = require(appDir + '/' + name);

    router.use('/', r);
});

module.exports = router;
