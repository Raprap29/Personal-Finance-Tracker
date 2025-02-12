import { createSchema } from "graphql-yoga";
import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDef";

export const server = createSchema({typeDefs, resolvers});