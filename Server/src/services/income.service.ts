import prisma from "@/config/database";
interface CreateIncomeData {
    pesos: number;
    userId: string;
}
class Income {

    async findAll () {
        try{
            const incomes = await prisma.income.findMany({
                include: {
                    user: true
                }
            });
            return incomes;
        }catch(error){
            throw new Error("Unable to fetch income");
        }
    }

    async createIncome(data: CreateIncomeData) {
        try {
            const create = await prisma.income.create({
                data: {
                    pesos: data.pesos,
                    user: {
                        connect: {id: data.userId}
                    }
                },
            });
            return create;
        } catch (error) {
            console.error('Error creating income:', error);
            throw new Error('Unable to create income');
        }
    }
}

export default new Income();