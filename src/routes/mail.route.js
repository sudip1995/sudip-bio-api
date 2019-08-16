'use strict';

import express from 'express';
import { mailController } from '../controllers/mail.controller';

const mailRouter = express.Router();

mailRouter.use('/', mailController);

export { mailRouter };