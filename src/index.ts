import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import staticServe from 'serve-static';

dotenv.config()
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// eslint-disable-next-line @typescript-eslint/no-var-requires
app.use('/', require('./routes/app'));
app.use('/cdn/', staticServe(path.join(__dirname, 'public')));

app.listen(process.env.port, () => {
    console.log(`Example app listening on port ${process.env.port}`)
}) 