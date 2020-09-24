import React, { Component } from 'react'
import { Provider } from 'react-redux';
import Nabvar from './components/Navbar'
import Footer from './components/Footer'
import Landing from './components/home/Landing'
import Movie from './components/home/Movie'
import { HashRouter as Router, Route } from 'react-router-dom'

import store from './Store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {/* Router always takes must child element DIV */}
        <Router>
          <div>
            <Nabvar />
            <Route exact path="/" component={Landing}/>
            <Route exact path="/movie/:id" component={Movie}/>
            <Footer />
          </div>
        </Router>
      </Provider>
    )
  }
}
export default App