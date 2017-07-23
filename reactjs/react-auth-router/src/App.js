import React, { Component } from 'react';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';

import './App.css';
import {isAuthenticated, auth, storageKey} from './firebase';

import {Home} from './home';
import {DayForm} from './day-form';
import {Login} from './login';
import {Register} from './register';

class App extends Component {
  state = {
    uid: null,
    user: null
  };
  static childContextTypes = {
    uid: PropTypes.string
  }
  getChildContext() {
    return {uid: this.state.uid};
  }
  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        window.localStorage.setItem(storageKey, user.uid);
        this.setState({uid: user.uid, user});
      } else {
        window.localStorage.removeItem(storageKey);
        this.setState({uid: null, user: null});
      }
    });
  }
  componentWillUnmount() {
    // this.unsubscribe();
  }
  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register}/>
          <MatchWhenAuthorized path="/days" component={DayForm} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

const MatchWhenAuthorized = ({component: Component, ...rest}) => (
  <Route {...rest} render={renderProps => (
    isAuthenticated() ? (
      <Component {...renderProps} />
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: {from: renderProps.location}
      }} />
    )
  )}/>
)

MatchWhenAuthorized.propTypes = {
  component: PropTypes.any
}