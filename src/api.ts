import express from 'express';
import cors from 'cors';

export const app = express();

app.use(cors({ origin: true }));

app.use(express.json());
app.use(express.raw({ type: 'application/vnd.custom-type' }));
app.use(express.text({ type: 'text/html' }));

// Healthcheck endpoint
app.get('/', (req, res) => {
  console.log({HELLO:req.data});
  res.status(200).send({ status: 'ok' });
});

const api = express.Router();

api.get('/hello', (req, res) => {
  res.status(200).send({ message: req });
});

app.post('/', (req, res) => {
  console.log({HELLO:req});
  res.status(200).send({ status: 'ok' });
});
// Version the api
app.use('/api/v1', api);
