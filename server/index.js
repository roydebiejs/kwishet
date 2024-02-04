import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();
const host = process.env.HOST || 'http://localhost:3000';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const corsOptions = {
    origin: host,
    credentials: true,
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const port = process.env.PORT || 4000;

const server = app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});