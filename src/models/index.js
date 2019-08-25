'use strict';

import mongoose from 'mongoose';
import { User } from './user.model';
import { Content } from './content.model';

import dotenv from 'dotenv';

dotenv.config();

mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL);
};

const models = { User, Content };

export { connectDb, models };