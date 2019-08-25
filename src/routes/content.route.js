'use strict';

import express from 'express';
import { contentController } from '../controllers/content.controller';

const contentRouter = express.Router();

contentRouter.use('/', contentController);

export { contentRouter };