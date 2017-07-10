import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//basic router
// import BasicExample from './router-basic';
// class App extends Component {
//   render() {
//     return (
//       <BasicExample />
//     );
//   }
// }

//redirect login
import LoginExample from './router-login';
class App extends Component {
  render() {
    return (
      <LoginExample />
    );
  }
}

export default App;
