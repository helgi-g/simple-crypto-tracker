import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { plus } from '../AC/index'
import App from './App'
import store from '../store'

class Root extends Component {

  render() {
    return (
      <Provider store={store}>
        <App/>
      </Provider>  
    )
  }
}

export default Root

