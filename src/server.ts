import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import staticServe from 'serve-static';
import compression from 'compression';
import { engine } from 'express-handlebars';

import appRouter from './routes/app';

dotenv.config()

const app = express();

// View engine setup
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
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