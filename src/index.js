import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { client } from './Client';

import App from './App';
import { IntlProviderWrapper } from './Intl';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <IntlProviderWrapper>
    <ApolloProvider client={client}><App /></ApolloProvider>
  </IntlProviderWrapper>
  , document.getElementById('root'));
registerServiceWorker();
