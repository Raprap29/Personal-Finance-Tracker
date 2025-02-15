export const expenseTypeDefs = `
    type Expense {
        id: ID!
        pesos: Float!
        user: User!
        createdAt: String!
        updatedAt: String! 
    }
    
    extend type Query {
        expenses: [Expense!]! @auth
    }

    extend type Mutation {
        createExpense(pesos: Float!, userId: ID!): Expense! @auth
    }

    directive @auth on FIELD_DEFINITION
`