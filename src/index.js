import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {ApolloProvider} from 'react-apollo';
import ApolloClient, {createNetworkInterface} from 'apollo-client';

import routes from './routes';
import './index.css';

// Connection through proxy
const client = new ApolloClient({
  networkInterface: createNetworkInterface({uri: 'https://cors-anywhere.herokuapp.com/https://mobileapi.wp.pl/v1/graphql'})
});

ReactDOM.render((
  <ApolloProvider client={client}>
    <Router history={browserHistory} routes={routes}/>
  </ApolloProvider>
), document.getElementById('root'));
