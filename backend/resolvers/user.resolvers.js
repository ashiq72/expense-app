import {users} from "../dummyData/data"

const userResolver = {
    Query: {
        users: () => {
            return users
        }
    },
    Mutation: {}
}


export default userResolver