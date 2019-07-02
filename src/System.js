import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { client } from './Client';
import { StylesProvider } from '@material-ui/styles';

import { IntlProviderWrapper } from './Intl';
import App from './App';

const System = () => {
  return (
    <IntlProviderWrapper>
      <ApolloProvider client={client}>
        <StylesProvider injectFirst>
          <App />
        </StylesProvider>
      </ApolloProvider>
    </IntlProviderWrapper>
  );
};

export default System;
