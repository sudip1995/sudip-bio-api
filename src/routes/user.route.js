import express from 'express';
import userController from '../controllers';

const userRouter = express.Router();

userRouter.use('/register', userController);

export { userRouter };