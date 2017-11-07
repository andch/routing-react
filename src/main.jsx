
// ./src/index.jsx
import React, { Component } from 'react';
import {render} from 'react-dom';
// Import routing components
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import Home from './common/home.component.jsx'
import About from './common/about.component.jsx'
import Car from './car/car.component.jsx'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path="/cars" component={Car}/>
      <Route path="/about" component={About}/>
    </Switch>
  </main>
)

export default Main