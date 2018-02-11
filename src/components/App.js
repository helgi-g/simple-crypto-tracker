import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom'
import { plus } from '../AC/index'
import './style.css'

class App extends Component {
  render() {
    return (
    <div>
        <button onClick={this.props.plus} className='red'>{this.props.counter}</button>
        <Switch>
          <Route path='/error' render={this.getError} />
        </Switch>
    </div>  
    )
  }
  getError = () => <h1>Some Error</h1>
}
export default connect((state) => {
  return {
    counter: state.counter
  }
}, { plus })(App)