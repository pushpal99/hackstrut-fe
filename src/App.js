import React from 'react';
import Login from './containers/Login';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import './App.scss';

const App = ()  => {
  // return (
  //  <Login> 
  //     <Router>
  //         <Routes />
  //     </Router>
  //  </Login>);
  return (
    <Router>
          <Routes />
      </Router>
  )
}

export default App;
