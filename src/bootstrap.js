import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, Route, Switch } from 'react-router-dom';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(compose((window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)));

import './style/main.scss';

import history from './history';

import Layout from './components/layout';

import requireAuth from './components/requireAuth';

//AUTH
import SignUp from './components/auth/signup';
import SignIn from './components/auth/signin';

//DASHBOARD
import Dashboard from './components/dashboard';

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={history}>
        <Switch>
          <Layout>
            <Route path="/" exact component={SignIn} />
            <Route path="/signin" exact component={SignIn} />
            <Route path="/signup" exact component={SignUp} />

            <Route path="/dashboard" exact component={requireAuth(Dashboard)} />
          </Layout>
        </Switch>
      </Router>
    </Provider>
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);
