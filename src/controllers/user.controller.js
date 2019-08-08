'use strict';

import express from 'express';

import { User } from '../models';
import { userService } from '../services';
const router = express.Router();

router.use('/register', userService.registerUser);

export { router };