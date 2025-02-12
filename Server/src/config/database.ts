import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
const prisma = new PrismaClient();

prisma.$use(async(params, next) => {
    if(params.action === "create" || params.action === "update"){
        if(params.args.data.password){
            const salt = await  bcrypt.genSalt(10);

            params.args.data.password = await bcrypt.hash(params.args.data.password, salt);
        }
    }

    return next(params);
})

export default prisma;