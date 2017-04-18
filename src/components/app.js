import React, { Component } from 'react';
import Nav from './nav';
import All from '../containers/all';
import Tech from '../containers/tech';

const App = (props) => {

    return (
      <div >
        <Nav />
        {props.children}
      </div>
    );
 
};

export default App;
