import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import Home from './home/home';

const Root = ({ store }) => {
  const _ensureLoggedIn = (nextState, replace) => {
    // const currentUser = store.getState().session.currentUser;
    // if (!currentUser) {
    //   replace('/login');
    // }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    // const currentUser = store.getState().session.currentUser;
    // if (currentUser) {
    //   replace('/dashboard');
    // }
  };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path='/' component={ App }>
          <IndexRoute
            component={ Home }/>
          <Route path='/admin'
            component={ SessionFormContainer }
            onEnter={_redirectIfLoggedIn}/>
        </ Route>
      </Router>
    </Provider>
  );
};

export default Root;
