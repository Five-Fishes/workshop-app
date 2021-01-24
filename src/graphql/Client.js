import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphqlError, networkError }) => {
  if (graphqlError) {
    graphqlError.map(({ message, location, path }) => {
      console.log("GRAPHQL ERROR: ", message);
    })
  }
  if (networkError) {
    console.log("NETWORK ERROR: ", networkError.message)
  }
})
// TODO: replace with prod url
const SERVER_LINK = from([
  errorLink,
  new HttpLink("http://localhost:3000/graphql")
]);

export default new ApolloClient({
  link: SERVER_LINK,
  cache: new InMemoryCache()
});