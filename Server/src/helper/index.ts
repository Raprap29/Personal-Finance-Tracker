import bcrypt from 'bcryptjs';
import { jwt } from 'hono/jwt';
export const comparePassword = async (password: string, hashPassword: string | null) => {

    if(!hashPassword){
        throw new Error("No hash");
    }

    const success = await bcrypt.compare(password, hashPassword);
    return success;
}
