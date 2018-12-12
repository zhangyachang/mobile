import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Layout from './components/layout/index'
import Home from './components/home/index'
import Search from "./components/search";

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route exact path={'/'} component={Home} />
            <Route exact path={'/search'} component={Search} />
          </Switch>
        </Layout>
      </Router>

    );
  }
}

export default App;
