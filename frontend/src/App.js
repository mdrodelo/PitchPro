import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Instructions from './components/Instructions';
import MyData from './components/MyData';
import Login from './components/Login';
import AccountCreation from "./components/AccountCreation";
import './App.css';

function App() {
  return (
<Router>
      <div className="App">
        <header className="App-header">
          <h1>PitchPro</h1>
          <nav className="nav-bar">
            <div className="left-nav">
              <Link to="/" className="nav-link">HOME</Link>
              <Link to="/about" className="nav-link">ABOUT</Link>
              <Link to="/instructions" className="nav-link">INSTRUCTIONS</Link>
              <Link to="/mydata" className="nav-link">MY DATA</Link>
            </div>
            <div className="right-nav">
              <Link to="/login" className="nav-link">LOGIN</Link>
            </div>
          </nav>
        </header>

        <Route path="/about" component={About} />
        <Route path="/instructions" component={Instructions} />
        <Route path="/mydata" component={MyData} />
        <Route path="/login" component={Login} />
        <Route path="/account-creation" component={AccountCreation} />
        <Route path="/" exact component={Home} />
      </div>
    </Router>
  );
}

export default App;
