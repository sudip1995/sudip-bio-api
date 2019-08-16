'use strict';

import express from 'express';
import passport from 'passport';

import { userRouter } from './user.route';
import { blogRouter } from './blog.route';
import { mailRouter } from './mail.route';

const router = express.Router();

router.get('/', (req, res) => res.send('Hello World!'));
router.use('/user', userRouter);
router.use('/blog', passport.authenticate('jwt', {session: false}), blogRouter);
router.use('/send', mailRouter);

export { router };