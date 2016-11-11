import './main.scss';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './components/App';
import About from './components/About';
import Projects from './components/Projects';

ReactDOM.render((
    <Router history={hashHistory}>
      <Route path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
    </Router>
  ), document.getElementById('app')
);
