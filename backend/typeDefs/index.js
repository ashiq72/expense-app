import { mergeTypeDefs } from "@graphql-tools/merge";

// typeDefs
import userTypeDef from "./user.typeDef";
import transactionTypeDef from "./transaction.typeDef";

const mergedTypeDefs = mergeTypeDefs([userTypeDef,transactionTypeDef]);

export default mergedTypeDefs