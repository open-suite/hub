import express from 'express';
import dotenv from 'dotenv';

dotenv.config()
const app = express();

// eslint-disable-next-line @typescript-eslint/no-var-requires
app.use('/', require('./routes/app'));

app.listen(process.env.port, () => {
    console.log(`Example app listening on port ${process.env.port}`)
}) 