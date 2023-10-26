import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import News from './components/News';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route path="/" exact component={News} />
        </div>
      </Router>
    );
  }
}

export default App;

