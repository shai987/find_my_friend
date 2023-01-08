import express from 'express';
import router from './routes/route.js';
import cors from 'cors'
import { } from 'dotenv/config';

const port = process.env.PORT || 8080;

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(cors());

app.use('/route', router);

const connection = async () => {
        app.listen(port, () => console.log(`Listen on port ${port}`))
}
connection().catch(err => console.log(err.message));