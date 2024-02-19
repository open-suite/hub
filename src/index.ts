import express from 'express';
import dotenv from 'dotenv';

dotenv.config()
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(process.env.port, () => {
    console.log(`Example app listening on port ${process.env.port}`)
}) 