import bcrypt from 'bcryptjs';
import { verify } from 'hono/jwt';

export const comparePassword = async (password: string, hashPassword: string | null) => {

    if(!hashPassword){
        throw new Error("No hash");
    }

    const success = await bcrypt.compare(password, hashPassword);
    return success;
}

export const authTokenHelper = async (token: string) => {
    const SECRET_KEY = Bun.env.SECRET_KEY;

    if(!SECRET_KEY){
        throw new Error("No key");
    }

    const decodePayload = await verify(token, SECRET_KEY);

    return decodePayload;
}