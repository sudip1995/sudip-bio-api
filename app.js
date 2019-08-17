'use strict';
import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import cors from 'cors';
import passport from 'passport';

import { envs } from './config';
import { connectDb } from './src/models';
import { router } from './src/routes/index';
import { options } from './src/passport';

const {
  PORT = 3000,
  NODE_ENV = 'development'
} = envs;

const IN_PROD = NODE_ENV === 'production'

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

options(passport);

app.use('/', router);

connectDb().then(async () => {
    app.listen(PORT, () =>
      console.log(`Example app listening on port ${PORT}!`),
    );
  });