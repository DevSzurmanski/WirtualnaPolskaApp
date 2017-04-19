import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import All from './containers/all';
import Post from './containers/post';
import Tech from './containers/tech';
import Gwiazdy from './containers/gwiazdy';
import Wiadomosci from './containers/wiadomosci';

export default (
        <Route path="/" component={App}> 
        <IndexRoute component={All}/>
        <Route path="/posts/:id" component={Post}/>
        <Route path="tech" component={Tech}/> 
        <Route path="gwiazdy" component={Gwiazdy}/> 
        <Route path="wiadomosci" component={Wiadomosci}/> 
        </Route>
);