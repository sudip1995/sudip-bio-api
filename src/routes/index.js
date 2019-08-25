'use strict';

import express from 'express';
import passport from 'passport';

import { userRouter } from './user.route';
import { mailRouter } from './mail.route';
import { contentRouter } from './content.route';

const router = express.Router();

router.get('/', (req, res) => res.send('Hello World!'));
router.use('/user', userRouter);
router.use('/content', passport.authenticate('jwt', {session: false}), contentRouter);
router.use('/send', mailRouter);

export { router };