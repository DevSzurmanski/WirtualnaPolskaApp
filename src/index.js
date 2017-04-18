import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory, Route, IndexRoute} from 'react-router';
import { ApolloProvider} from 'react-apollo';
import ApolloClient, { createNetworkInterface} from 'apollo-client';
import App from './components/app';
import All from './containers/all';
import Allpost from './containers/all_post';
import Tech from './containers/tech';

import './index.css';

const client = new ApolloClient({
    networkInterface: createNetworkInterface({uri: 'https://mobileapi.wp.pl/v1/graphql'}),

 });

ReactDOM.render((
  <ApolloProvider client={client}>
    <Router history={browserHistory}>
    
        <Route path="/" component={App}> 
        <IndexRoute component={All}/>
        <Route exact path="/:id" component={Allpost}/>
        <Route path="tech" component={Tech}/> 
        </Route>
      
    </Router>
</ApolloProvider>), 
  document.getElementById('root'));
