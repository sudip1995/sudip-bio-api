'use strict';

import express from 'express';

import userService from '../services/user.service';
const router = express.Router();

router.post('/register', userService.registerUser);

router.post('/authenticate', userService.authenticateUser);

export { router as userController};