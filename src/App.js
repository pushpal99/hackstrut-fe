import React from 'react';
import './App.css';
import Login from './containers/Login';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

const App = ()  => {
  console.log(1);
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
