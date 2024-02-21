import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import staticServe from 'serve-static';

dotenv.config()
const app = express();

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

import compression from 'compression';
app.use(compression({ threshold: 150, level: 9 }));

app.use ((req, res, next) => {
    res.removeHeader('X-Powered-By')
    next();
});

// Routes
import appRouter from './routes/app';
app.use('/', appRouter);
app.use('/cdn/', staticServe(path.join(__dirname, 'public')));

// Start Listening
app.listen(process.env.port, () => {
    console.log(`Example app listening on port ${process.env.port}`)
}) 

// Error Handling
app.on('error', (err) => {
    console.error(err);
});