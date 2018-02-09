import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { plus } from '../AC/index'
import './style.css'

class App extends Component {
  render() {
    return (
    <div>
        <button onClick={this.props.plus} className='red'>{this.props.counter}</button>
    </div>  
    )
  }
}
export default connect((state) => {
  return {
    counter: state.counter
  }
}, { plus })(App)