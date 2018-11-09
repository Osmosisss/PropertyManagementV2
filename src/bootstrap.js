import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const createStoreWithMiddleware = applyMiddleware()(createStore);

import './style/main.scss';

import Layout from './components/layout';

import SignUp from './components/auth/signup';
import SignIn from './components/auth/signin';


function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <Switch>
          <Layout>
            <Route path="/" exact component={SignIn} />
            <Route path="/signin" exact component={SignIn} />
            <Route path="/signup" exact component={SignUp} />
          </Layout>
        </Switch>
      </BrowserRouter>
    </Provider>
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);
