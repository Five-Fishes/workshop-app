import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphqlError, networkError }) => {
  if (graphqlError) {
    graphqlError.map(({ message, location, path }) => {
      console.log("GRAPHQL ERROR: ", message);
    });
  }
  if (networkError) {
    console.log("NETWORK ERROR: ", networkError.message);
  }
});
// TODO: replace with prod url
const SERVER_LINK = from([
  errorLink,
  new HttpLink("http://192.168.1.51:3000/graphql"),
]);

/**
 * Fix
 */
export default new ApolloClient({
  uri: "http://192.168.1.51:3000/graphql",
  cache: new InMemoryCache(),
});
