const userTypeDef = `#graphql
type User{
    _id: ID!
    username: String!
    name: String!
    password: String!
    profilePicture: String
    gender: String!
}
  type Query{
    users
  }

`