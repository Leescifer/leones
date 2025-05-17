import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express()
const PORT = process.env.PORT || 3000

app.use('/', (req, res) => {
    res.send('Hello Worldsadddsad');
})

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`)
})