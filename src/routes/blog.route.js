'use strict';

import express from 'express';
import { blogController } from '../controllers/blog.controller';

const blogRouter = express.Router();

blogRouter.use('/', blogController);

export { blogRouter };