import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Layout from './components/layout/index'

import routers from './router/router'

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            {
              routers.map((item, index) => {
                if(item.exact){
                  return (
                    <Route
                      path={item.path}
                      exact
                      key={index}
                      component={item.component}
                    />
                  )
                }else{
                  return (
                    <Route
                      key={index}
                      path={item.path}
                      render={(props) => {
                        return (
                          <item.component
                            {...props}
                          />
                        )
                      }}
                    />
                  )
                }
              })
            }

          </Switch>
        </Layout>
      </Router>
      
    );
  }
}

export default App;
