'use strict';
import express from 'express';
import bodeParser from 'body-parser';

import { envs } from './config';
import { connectDb } from './src/models';
import { router } from './src/routes/index';

const app = express();
app.use(bodeParser.json());
app.use('/', router);

connectDb().then(async () => {
    app.listen(process.env.PORT, () =>
      console.log(`Example app listening on port ${process.env.PORT}!`),
    );
  });