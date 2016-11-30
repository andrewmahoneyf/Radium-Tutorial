import React from 'react';
import ReactDOM from 'react-dom';
import {App, Part1, Part2, Part3} from './App';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

import '../node_modules/bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App} >
      <IndexRoute component={Part1} />
      <Route path="part1" component={Part1} />
      <Route path="part2" component={Part2} />
      <Route path="part3" component={Part3} />
    </Route>
  </Router>,
  document.getElementById('root')
);