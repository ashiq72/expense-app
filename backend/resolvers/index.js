import { mergeResolvers } from "@graphql-tools/merge";

import userResolver from "./user.resolvers";
import transactionResolver from "./transaction.resolvers";

const mergedResolvers = mergeResolvers([userResolver, transactionResolver]);

export default mergedResolvers;