'use strict';

import mongoose from 'mongoose';
import { envs } from '../../config';
import { User } from './user.model';

const connectDb = () => {
  return mongoose.connect(envs.DATABASE_URL, { useNewUrlParser: true });
};

const models = { User };

export { connectDb, models };