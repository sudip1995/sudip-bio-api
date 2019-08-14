'use strict';

import express from 'express';

import blogService from '../services/blog.service';
const router = express.Router();

router.get('/', blogService.getAllBlogs);
router.get('/:id', blogService.getBlogPostById);

router.post('/write', blogService.saveBlogPost);


export { router as blogController};