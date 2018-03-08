import React, { Component } from 'react'
import { connect } from 'react-redux'

import { ThemeProvider } from 'glamorous'

import theme from './themes/main'
import Content from './components/content-container'
import TitleBar from './components/titlebar'
import SideBar from './components/sidebar'
import TopBar from './components/topbar'

import {
  Icon,
  Links,
  Link
} from './components/link-list'

import {
  Menu,
  Item
} from './components/menu/vertical'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      selectedLink: '0'
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (type) {
    return (event) => {
      this.setState({
        selectedLink: event.currentTarget.id
      })
    }
  }

  render () {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <Content>
            <h1>Content</h1>
          </Content>
          <TopBar>
            <Links>
              <Link id='3' onClick={this.handleClick()} selected={this.state.selectedLink === '3'} position='top'>
                About
              </Link>
              <Link id='4' onClick={this.handleClick()} selected={this.state.selectedLink === '4'} position='top'>
                My Tasks
              </Link>
              <Link id='5' onClick={this.handleClick()} selected={this.state.selectedLink === '5'} position='top'>
                Account
              </Link>
            </Links>
          </TopBar>
          <SideBar>
            <Menu>
              <Item id='0' onClick={this.handleClick()} selected={this.state.selectedLink === '0'}><Icon className='fa fa-home' /> Home</Item>
              <Item id='1' onClick={this.handleClick()} selected={this.state.selectedLink === '1'}><Icon className='fa fa-tachometer' /> Dashboard</Item>
              <Item id='2' onClick={this.handleClick()} selected={this.state.selectedLink === '2'}><Icon className='fa fa-gears' /> Config</Item>
            </Menu>
          </SideBar>
          <TitleBar />
        </div>
      </ThemeProvider>
    )
  }
}

export default connect()(App)
