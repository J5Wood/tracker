import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

async function StartServer() {
  const typeDefs = `#graphgql
  type Query {
    sayHello: String
  }
`;

  const resolvers = {
    Query: {
      sayHello: () => {
        return "Hello Dude";
      },
    },
  };

  const apolloServer = new ApolloServer({ typeDefs, resolvers });

  // export default apolloServer.createHandler({ path: "/api/graphql" });
  // module.exports = apolloServer.start().then(() => {
  //   return apolloServer.createHandler({ path: "/api/graphql" }); // highlight-line
  // });
  const { url } = await startStandaloneServer(apolloServer, {
    listen: { port: 3001 },
  });
  console.log(`🚀 Server ready at ${url}`);
}
export default StartServer;
