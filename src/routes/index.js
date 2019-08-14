'use strict';

import express from 'express';
import { userRouter } from './user.route';
import { blogRouter } from './blog.route';

const router = express.Router();

router.get('/', (req, res) => res.send('Hello World!'));
router.use('/user', userRouter);
router.use('/blog', blogRouter);

export { router };