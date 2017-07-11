import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// //basic
// import BasicExample from './router-basic';
// class App extends Component {
//   render() {
//     return (
//       <BasicExample />
//     );
//   }
// }

// //login
// import LoginExample from './router-login';
// class App extends Component {
//   render() {
//     return (
//       <LoginExample />
//     );
//   }
// }

// //active menu
// import ActiveMenu from './router-active-menu';
// class App extends Component {
//   render() {
//     return (
//       <ActiveMenu />
//     );
//   }
// }

//recursive
import Recursive from './router-recursive';
class App extends Component {
  render() {
    return (
      <Recursive />
    );
  }
}

export default App;
