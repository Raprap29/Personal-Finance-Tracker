import incomeService from "@/services/income.service";
interface CreateIncomeInput {
    pesos: number;
    userId: string;
}


export const incomeResolvers = {
    Query: {
        incomes: async () => {
            const incomes = await incomeService.findAll();
            return incomes;
        },
    },
    Mutation: {
        createIncome: async (_: any, {pesos, userId}: CreateIncomeInput) => 
        {
            const success = await incomeService.createIncome({pesos, userId});
            return success;
        },
    }
}

