import prisma from "@/config/database";
import { comparePassword } from "@/helper";
import { jwt, sign } from "hono/jwt";
interface User {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

class UserService {

    async createUser(data: User){ 

       try{

            const emailExist = await prisma.user.findUnique({
                where: {
                    email: data.email
                }
            });


            if(emailExist){
                throw new Error("Email already exist");
            }

            const newUser = await prisma.user.create({
                data: data
            });

            return newUser;
       }catch(err)
       {
        return console.log(err);
       }
    }
    
    async findAll(){
        const users = await prisma.user.findMany({
            include: {
                incomes: true
            }
        });
        return users;
    }

    async Login(data: {email: string, password: string}){
        try{
            const user = await prisma.user.findUnique({
                where: {email: data.email}
            });

            if(!user){
                throw new Error('Invalid email and password');
            }

            const valid = await comparePassword(data.password, user.password);

            if(!valid){
                throw new Error('Invalid email and password');
            }

            const payload = {
                id: user.id,
                exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7, // 1 week login
            };

            const token = sign(payload, "Iloveyou");
            
            return {token, user};

        }catch(error: any){
            throw new Error(error);
        }
    }

}

export default new UserService();