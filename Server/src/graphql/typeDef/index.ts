import { expenseTypeDefs } from "./expence.typeDefs";
import { incomeTypeDefs } from "./income.typeDefs";
import { userTypeDefs } from "./user.typeDefs";

export const typeDefs = `#graphql
    type Query {
        _empty: String
    }

    type Mutation {
        _empty: String
    }

    ${userTypeDefs}
    ${incomeTypeDefs}
    ${expenseTypeDefs}
`;