import { ApolloClient, InMemoryCache, createHttpLink, ApolloLink, split } from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';

interface ApolloConfig {
    headers: Headers
}

function extractTokenFromCookies(cookies: string) {
  const cookieArray = cookies.split(';').map(cookie => cookie.trim());
  for (const cookie of cookieArray) {
    const [name, value] = cookie.split('=');
    if (name.trim() === 'jwtToken') { // Ajusta 'jwtToken' al nombre de la cookie que contiene el token
      return value;
    }
  }
  return null;
}

const httpLink = createHttpLink({
  uri: import.meta.env.VITE_API_URL,
});
  
const authLink = new ApolloLink((operation, forward) => {
  const token = extractTokenFromCookies(document.cookie);
  
  operation.setContext(({ headers }: ApolloConfig) => ({
    headers: {
      ...headers,
      authorization: token ? token : '',
    },
  }));
  
  return forward(operation);
});
const wsLink = new WebSocketLink({
  uri: import.meta.env.VITE_API_WS_URL,
  options: {
    reconnect: true,
    connectionParams: {
      Authorization: document.cookie,
    },
    lazy: true,
  },});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  }, wsLink, authLink.concat(httpLink)
);

export const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});