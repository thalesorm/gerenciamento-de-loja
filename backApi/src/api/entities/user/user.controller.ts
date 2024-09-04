import { User } from '@prisma/client';
import { Request, Response, NextFunction } from 'express';
import userService from './user.service';
import ObjectNotFoundError from '../../../utils/errors/ObjectNotFoundError';

const getAllUsers = async (
    req: Request,
    res: Response<User[]>,
    next: NextFunction,
) => {
    try {
        const users = await userService.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
};

const getUserById = async (
    req: Request,
    res: Response<User>,
    next: NextFunction,
) => {
    try {
        const userById = await userService.getUserById(req.params.id);
        if (!userById) {
            res.status(404);
            throw new ObjectNotFoundError('User', req.params.id);
        }
        res.status(200).json(userById);
    } catch (error) {
        next(error);
    }
};

const createUser = async (
    req: Request,
    res: Response<User>,
    next: NextFunction,
) => {
    try {
        const createdUser = await userService.createUser(req.body);
        res.status(201).json(createdUser);
    } catch (error) {
        next(error);
    }
}

const updateUser = async (
    req: Request,
    res: Response<User>,
    next: NextFunction,
) => {
    try {
        const updatedUser = await userService.updateUser(req.params.id, req.body);
        if (!updatedUser) {
            res.status(404);
            throw new ObjectNotFoundError('User', req.params.id);
        }
        res.status(200).json(updatedUser);
    } catch (error) {
        next(error);
    }
};

const deleteUser = async (
    req: Request,
    res: Response<User>,
    next: NextFunction,
) => {
    try {
        const deletedUser = await userService.deleteUser(req.params.id);
        if (!deletedUser) {
            res.status(404);
            throw new ObjectNotFoundError('User', req.params.id);
        }
        res.status(200).json(deletedUser);
    } catch (error) {
        next(error);
    }
};

const userController = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
};

export default userController;