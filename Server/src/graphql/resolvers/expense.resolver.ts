type CreateExpenseInput = {
    pesos: number;
    userId: string;
}

export const expenseResolvers = {
    Query: {
        expenses: async () => {
         
        },
    },
    Mutation: {
        createExpense: async (_: any, {pesos, userId}: CreateExpenseInput) => 
        {

        }
    }
}
