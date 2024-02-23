import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import staticServe from 'serve-static';
import compression from 'compression';
import { create } from 'express-handlebars';

import appRouter from './routes/app';

dotenv.config()

const app = express();
const hbs = create({extname: '.hbs'});

// View engine setup
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(compression({ threshold: 150, level: 9 }));

app.use((req, res, next) => {
    res.removeHeader('X-Powered-By')
    next();
});

// Routes
app.use('/', appRouter);
app.use('/cdn/', staticServe(path.join(__dirname, 'public')));

// Error Handling
app.on('error', (err) => {
    console.error(err);
});

export default app;