import { ApolloServer } from 'apollo-server';
import dotenv from 'dotenv';
import typeDefs from './schema';
import resolvers from './resolvers'
import peopleAPI from './dataSource/peopleAPI'

dotenv.config();

const server = new ApolloServer({ 
  typeDefs,
  resolvers,
  dataSources: () => ({
    peopleAPI: new peopleAPI(),
  })
});

server.listen({ port: 9000 }).then(({ url }) => {
  console.log(`
    Server is running!
    🚀 Server ready at ${url}
    Query at https://studio.apollographql.com/dev
  `)
});
