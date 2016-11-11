import './main.scss';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';

ReactDOM.render((
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
      </Route>
    </Router>
  ), document.getElementById('app')
);
