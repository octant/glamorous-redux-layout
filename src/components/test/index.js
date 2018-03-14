import React, { Component } from 'react'
import axios from 'axios'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

class Fetcher extends Component {
  constructor (props) {
    super(props)

    this.state = {
      columns: [{
        Header: 'Caller name',
        accessor: 'caller_name' // String-based value accessors!
      }, {
        Header: 'Caller Number',
        accessor: 'caller_number',
        Cell: props => <span className='number'>{props.value}</span>
      }, {
        Header: 'Callee name',
        accessor: 'callee_name' // String-based value accessors!
      }, {
        Header: 'Callee Number',
        accessor: 'callee_number'
      }],
      data: []
    }

    this.handleClick = this.handleClick.bind(this)
  }
  getCalls () {

  }

  handleClick (e) {
    axios.get('http://aph-dev5:4000/calls')
      .then((response) => {
        this.setState({data: response.data})
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render () {
    return (
      <div>
        <h1>Calls</h1>
        <button onClick={this.handleClick}>Get calls</button>

        <ReactTable data={this.state.data} columns={this.state.columns} />
      </div>
    )
  }
}

export default Fetcher
