'use strict';

import express from 'express';
import { userRouter } from './user.route';

const router = express.Router();

router.get('/', (req, res) => res.send('Hello World!'));
router.use('/user', userRouter);

export { router };