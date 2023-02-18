/* Modules */
import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

/* Pages */
import Home from './pages/Home';
import Error from './pages/Error';

const App = () => {
  return (
    <HashRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route component={Error} />
        </Switch>
    </HashRouter>
  );
};

export default App;