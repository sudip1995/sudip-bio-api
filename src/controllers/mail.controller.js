'use strict';

import express from 'express';

import mailService from '../services/mail.service';
const router = express.Router();

router.post('/', mailService.sendMail);


export { router as mailController};