import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  IndexRoute,
  hashHistory,
} from 'react-router-dom'
import Home from './Home.js';
import Stuff from './components/Stuff.js';
import Contact from './components/Contact.js';
import App from './App';
import './index.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="stuff" component={Stuff} />
      <Route path="contact" component={Contact} />
    </Route>
  </Router>,
  document.getElementById('root')
);