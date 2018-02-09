import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import WrappedApp from "./components/food"
import WrappedDemo from "./components/food"

import './components/forms/forms.css';
import Forms from "./components/forms";
import './utils/API.js'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">

        <header className="App-header">   
          <h1 className="App-title">Welcome to Meal Ticket!</h1>

        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <WrappedDemo />
        <Forms />
      </div>
     </Router> 
    );
  }
}

export default App;
