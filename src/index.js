import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory, Route, IndexRoute} from 'react-router';
import { ApolloProvider} from 'react-apollo';
import ApolloClient, { createNetworkInterface} from 'apollo-client';
import App from './components/app';
import All from './containers/all';
import Post from './containers/post';
import Tech from './containers/tech';
import Gwiazdy from './containers/gwiazdy';
import Wiadomosci from './containers/wiadomosci';

import './index.css';

const client = new ApolloClient({
    networkInterface: createNetworkInterface({uri: 'https://mobileapi.wp.pl/v1/graphql'}),

 });

ReactDOM.render((
  <ApolloProvider client={client}>
    <Router history={browserHistory}>
        <Route path="/" component={App}> 
        <IndexRoute component={All}/>
        <Route path="/posts/:id" component={Post}/>
        <Route path="tech" component={Tech}/> 
        <Route path="gwiazdy" component={Gwiazdy}/> 
        <Route path="wiadomosci" component={Wiadomosci}/> 
        </Route>
    </Router>
</ApolloProvider>), 
  document.getElementById('root'));
