import userService from "@/services/user.service";
import { Context } from "hono";

interface CreateUserInput {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export const userResolvers = {
    Query: {
        users: async () => {
            const users = await userService.findAll();
            return users;
        },
    },
    Mutation: {
        createUser: async (_: any, {firstName, lastName, email, password}: CreateUserInput) => 
        {
            const success = await userService.createUser({firstName, lastName, email, password});
            return success;
        },
        login: async (_:any, {email, password}: {email: string, password: string}) => {
            const response = await userService.Login({email, password});

            return {token: response.token, user: response.user};
        }
    }
}

