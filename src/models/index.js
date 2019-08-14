'use strict';

import mongoose from 'mongoose';
import { envs } from '../../config';
import { User } from './user.model';
import { Blog } from './blog.model';

mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

const connectDb = () => {
  return mongoose.connect(envs.DATABASE_URL);
};

const models = { User, Blog };

export { connectDb, models };