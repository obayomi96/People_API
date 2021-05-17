import { gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    """
    Test Message.
    """
    searchPerson(name: String): [Person]

    getPeople: [Person]

    getNextPage(page: Int): [Person]
  }

  type Person {
    name: String!
    height: String!
    mass: String!
    gender: String!
    homeworld: String!
  }
`

export default typeDefs;
