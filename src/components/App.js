import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadData } from '../AC/index'
import './style.css'

class App extends Component {
  componentWillMount() {
    this.props.loadData()
  }

  render() {
    const body = this.props.data.map((item) =>
      <tr key={item.id}>
        <td>{item.name}</td>
        <td>{item.price_usd}$</td>
        <td>{item.percent_change_1h}%</td>
        <td>{item.percent_change_24h}%</td>
        <td>{item.percent_change_7d}%</td>
      </tr>
    )
    return (
      <div>
        <h1>Simple CryptoTracker</h1>
        <table className='pure-table pure-table-bordered pure-table-striped'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price USD</th>
              <th>Percent change 1h</th>
              <th>Percent change 24h</th>
              <th>Percent change 7d</th>
            </tr>
          </thead>
          <tbody>
            {body}
          </tbody>
        </table>
      </div>
    )
  }
}

export default connect((state) => {
  return {
    data: state.data
  }
}, { loadData })(App)