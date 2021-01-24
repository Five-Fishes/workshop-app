import { ApolloClient, InMemoryCache, HttpLink, ApolloLink, concat } from "@apollo/client";
import { getToken } from "../utils/AuthenticationUtils";

// TODO: replace with prod url
const uri = "http://192.168.43.160:3000/graphql";

const httpLink = new HttpLink({ uri: uri.toString() });

const authMiddleware = new ApolloLink(async (operation, forward) => {
  const token = await getToken();
  // add the authorization to the headers
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : "",
    }
  });

  return forward(operation);
})

export default new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache(),
});
