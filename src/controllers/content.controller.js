'use strict';

import express from 'express';

import contentService from '../services/content.service';
const router = express.Router();

router.get('/getAllContentByContentType/:contentType', contentService.getAllContentByType);
router.get('/getContentById/:id', contentService.getContentById);
router.post('/write', contentService.saveContent);


export { router as contentController};