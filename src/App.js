import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Navigation from './components/Navigation'
import Home from './pages/Home'
import Favourites from './pages/Favourites'
import Welcome from './pages/Welcome'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <Route path="/" exact component={Welcome} />
        <Route path="/Home" exact component={Home} />
        <Route path="/favourites" exact component={Favourites} />
      </BrowserRouter>
    )
  }
}

export default App
