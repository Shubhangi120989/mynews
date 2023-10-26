import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element ={<News />}/>
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App

