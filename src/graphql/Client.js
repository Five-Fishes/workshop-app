import { ApolloClient, InMemoryCache } from "@apollo/client";

// TODO: replace with prod url
const uri = "http://192.168.43.160:3000/graphql";

export default new ApolloClient({
  uri: uri.toString(),
  cache: new InMemoryCache(),
});
