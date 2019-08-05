'use strict';
import express from 'express';
import envs from './config';
import { connectDb } from './src/models';

const app = express();
app.get('/', (req, res) => res.send('Hello World!'));

connectDb().then(async () => {
    app.listen(process.env.PORT, () =>
      console.log(`Example app listening on port ${process.env.PORT}!`),
    );
  });