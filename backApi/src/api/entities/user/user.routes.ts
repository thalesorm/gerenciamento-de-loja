import { Router } from 'express';
import userController from './user.controller';

const userRouter = Router();

userRouter.get(`/user`, userController.getAllUsers);
userRouter.get(`/user/:id`, userController.getUserById);
userRouter.post(`/user`, userController.createUser);
userRouter.put(`/user/:id`, userController.updateUser);
userRouter.delete(`/user/:id`, userController.deleteUser);

export default userRouter;