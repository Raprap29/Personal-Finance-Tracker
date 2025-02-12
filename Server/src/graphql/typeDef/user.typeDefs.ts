export const userTypeDefs = `
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    incomes: [Income!]!
    password: String!
    createdAt: String!
    updatedAt: String!
  }

  type AuthPayload {
    token: String!
    user: User!
  }
 
  extend type Query {
    users: [User!]!
  }

  extend type Mutation {
    createUser(firstName: String!, lastName: String!, email: String!, password: String!): User!
    login(email: String!, password: String!): AuthPayload!
  }
    
`;