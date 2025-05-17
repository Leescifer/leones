import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import admin from '../server/src/routes/admin.route.js'

dotenv.config();

const app = express()
const PORT = process.env.PORT || 3000

app.use('/api', admin)

app.use('/', (req, res) => {
    res.send('Hello Worldsadddsaddsadsad');
})

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`)
})