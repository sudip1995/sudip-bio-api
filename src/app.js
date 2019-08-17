'use strict';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import passport from 'passport';

import { connectDb } from './models';
import { router } from './routes/index';
import { options } from './passport';

import dotenv from 'dotenv';

dotenv.config();

const IN_PROD = process.env.NODE_ENV === 'production'

const app = express();

connectDb().then(() => {
  console.log('MongoDB Connected');
})
.catch(err => {
  console.log(err);
  console.log('MongoDB Not Connected');
});

app.use(cors());

app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

options(passport);

app.use('/', router);

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}!`);
});