import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Layout from './components/layout/index'
import Home from './components/home/index'
import Search from "./components/search";
import MenuDetail from './components/menudetail/index'
import My from "./components/my";
import Find from "./components/find";
import OrderForm from "./components/orderform";


class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route exact path={'/'} component={Home} />
            <Route path={'/search'} component={Search} />
            <Route path={'/menudetail/:id'} component={MenuDetail} />
            <Route path={'/find'} component={Find}/>
            <Route path={'/orderform'} component={OrderForm} />
            <Route path={'/my'} component={My} />
          </Switch>
        </Layout>
      </Router>

    );
  }
}

export default App;
