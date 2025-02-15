import { expenseResolvers } from "./expense.resolver"
import { incomeResolvers } from "./income.resolver"
import { userResolvers } from "./user.resolver"

export const resolvers = {
    Query: {
        ...userResolvers.Query,
        ...incomeResolvers.Query,
        ...expenseResolvers.Query,
    }, 
    Mutation: {
        ...userResolvers.Mutation,
        ...incomeResolvers.Mutation,
        ...expenseResolvers.Mutation,
    }
}