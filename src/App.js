import React, { Component } from 'react'

import { connect } from 'react-redux'

import theme from './themes/main'
import Content from './components/content-container'
import NavBar from './components/navbar'
import SideBar from './components/sidebar'
import SubNav from './components/subnav'

import {
  Icon,
  Links,
  Link
} from './components/link-list'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      selectedLink: '0'
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (event) {
    this.setState({
      selectedLink: event.currentTarget.id
    })
  }

  render () {
    return (
      <div>
        <Content theme={theme} layout={this.props.layout}>
          <h1>Content</h1>
        </Content>
        <SubNav theme={theme} layout={this.props.layout}>
          <Links>
            <Link id='3' onClick={this.handleClick} selected={this.state.selectedLink === '3'} position='top'>
              About
            </Link>
            <Link id='4' onClick={this.handleClick} selected={this.state.selectedLink === '4'} position='top'>
              My Tasks
            </Link>
            <Link id='5' onClick={this.handleClick} selected={this.state.selectedLink === '5'} position='top'>
              Account
            </Link>
          </Links>
        </SubNav>
        <SideBar theme={theme} layout={this.props.layout}>
          <Links>
            <Link id='0' onClick={this.handleClick} selected={this.state.selectedLink === '0'}><Icon className='fa fa-home' /> Home</Link>
            <Link id='1' onClick={this.handleClick} selected={this.state.selectedLink === '1'}><Icon className='fa fa-tachometer' /> Dashboard</Link>
            <Link id='2' onClick={this.handleClick} selected={this.state.selectedLink === '2'}><Icon className='fa fa-gears' /> Config</Link>
          </Links>
        </SideBar>
        <NavBar theme={theme} layout={this.props.layout} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    layout: state.layout
  }
}

export default connect(mapStateToProps)(App)
