import { Context, Next } from "hono"
import { decode, sign, verify } from 'hono/jwt'


export const AuthMiddleware = async (c: Context, next: Next) => {
    const accessToken = c.req.header('Authorization')?.split("Bearer ")[1];

    if(!accessToken){
        throw new Error("Access is token required");
    }

    const secretKey = "Iloveyou";

    const decodedPayload = await verify(accessToken, secretKey)

    if(!decodedPayload){
        throw new Error("Unauthorized pages");
    }

    await next();
}