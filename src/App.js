import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        
        <Switch>
          <Route path="/"><News pagesize={9} country="in" category="general"/></Route>
          <Route path="/business"><News pagesize={9} country="in" category="business"/></Route>
          <Route path="/entertainment"><News pagesize={9} country="in" category="entertainment"/></Route>
          <Route path="/general"><News pagesize={9} country="in" category="general"/></Route>
          <Route path="/health"><News pagesize={9} country="in" category="health"/></Route>
          <Route path="/science"><News pagesize={9} country="in" category="science"/></Route>
          <Route path="/sports"><News pagesize={9} country="in" category="sports"/></Route>
          <Route path="/technology"><News pagesize={9} country="in" category="technology"/></Route>
        </Switch>
        </Router>
      </div>
    )
  }
}

export default App

