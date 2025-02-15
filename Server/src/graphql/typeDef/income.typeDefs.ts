export const incomeTypeDefs = `
  type Income {
    id: ID!
    pesos: Float!
    user: User!
    createdAt: String!
    updatedAt: String! 
  }
 
  extend type Query {
    incomes: [Income!]! @auth
  }

  extend type Mutation {
    createIncome(pesos: Float!, userId: ID!): Income! @auth
  }

  directive @auth on FIELD_DEFINITION
    
`;