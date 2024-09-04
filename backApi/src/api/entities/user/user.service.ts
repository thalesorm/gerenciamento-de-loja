import { User } from '@prisma/client';
import { prismaClient } from '../../../utils/prismaUtils';
import { UserType } from './user.model';

const { user } = prismaClient;

const getAllUsers = async (): Promise<User[]> => {
    const users =  user.findMany();
    return users;
}

const getUserById = async (id: string): Promise<User | null> => {
    const userById = user.findUnique({
        where: {
            id,
        }
    });
    return userById;
};

const createUser = async (data: UserType): Promise<User> => {
    const createUser = user.create({
        data,
    });
    return createUser;
};

const updateUser = async (id: string, data: UserType): Promise<User | null> => {
    const updatedUser = user.update({
        where: {
            id,
        },
        data,
    });
    return updatedUser;
};

const deleteUser = async (id: string): Promise<User | null> => {
    const deletedUser = user.delete({
        where: {
            id,
        }
    });
    return deletedUser;
}

const userService = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
};

export default userService;