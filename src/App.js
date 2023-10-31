import React, { Component } from 'react'
import Navbar from './components/Navbar'
import LoadingBar from 'react-top-loading-bar'
import News from './components/News';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

export class App extends Component {
  state={
    progress:10
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <BrowserRouter defaultRoute="/">
        <Navbar />
        <LoadingBar
        color='#f11946'
        height={4}
        progress={this.state.progress}
        
      />
      
        <Routes>
          <Route exact path="/newsNinja" element ={<News setProgress={this.setProgress} key="general1"/>}/>
          <Route exact path="/" element ={<News setProgress={this.setProgress} key="general1"/>}/>
          <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" category="entertainment"/>}/>
          <Route exact path="/business" element={<News setProgress={this.setProgress} key="business" category="business"/>}/>
          <Route exact path="/general" element={<News setProgress={this.setProgress} key="general" category="general"/>}/>
          <Route exact path="/health" element={<News setProgress={this.setProgress} key="health" category="health"/>}/>
          <Route exact path="/science" element={<News setProgress={this.setProgress} key="science" category="science"/>}/>
          <Route exact path="/sports" element={<News setProgress={this.setProgress} key="sports" category="sports"/>}/>
          <Route exact path="/technology" element={<News setProgress={this.setProgress} key="technology" category="technology"/>}/>

        </Routes>
      </BrowserRouter>
    )
  }
}

export default App

//we need to have exact path and unique key for each new component to force the new News setProgress={this.setProgress}component