import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import App from './components/views/App';
import Home from './components/views/Home';
import BuildingContainer from './components/container/BuildingContainer';
import RoomContainer from './components/container/RoomContainer';

import './static/css/index.css';

ReactDOM.render(
  <div>
    <Router history={hashHistory}>
      <Route path="/">
        <Route component={App}>
          <IndexRoute component={Home} />
          <Route path="building/:id" component={BuildingContainer} />
          <Route path="room/:id" component={RoomContainer} />
        </Route>
      </Route>
    </Router>
  </div>, document.getElementById('root')
);
registerServiceWorker();
