import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';

export const client = new ApolloClient({
  uri: 'https://image-cloud-server.herokuapp.com/',
  cache: new InMemoryCache()
});
