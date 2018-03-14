import React, { Component } from 'react'
import { connect } from 'react-redux'

import { ThemeProvider } from 'glamorous'

import theme from './themes/main'
import Content from './components/content-container'
import TitleBar from './components/titlebar'
import SideBar from './components/sidebar'
import TopBar from './components/topbar'

import { Nav } from './components/menu/'
import * as Horizontal from './components/menu/horizontal'
import * as Vertical from './components/menu/vertical'

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
            <Nav horizontal>
              <Horizontal.Menu menuStyle='inline'>
                <Horizontal.Item id='3' onClick={this.handleClick()} selected={this.state.selectedLink === '3'}>
                  About
                </Horizontal.Item>
                <Horizontal.Item id='4' onClick={this.handleClick()} selected={this.state.selectedLink === '4'}>
                  My Tasks
                </Horizontal.Item>
                <Horizontal.Item id='5' onClick={this.handleClick()} selected={this.state.selectedLink === '5'}>
                  Account
                </Horizontal.Item>
              </Horizontal.Menu>
            </Nav>
          </TopBar>
          <SideBar>
            <Nav>
              <Vertical.Menu>
                <Vertical.Item id='0' onClick={this.handleClick()} selected={this.state.selectedLink === '0'}>
                  <Vertical.Icon className='fa fa-home' /> Home
                </Vertical.Item>
                <Vertical.Item id='1' onClick={this.handleClick()} selected={this.state.selectedLink === '1'}>
                  <Vertical.Icon className='fa fa-tachometer' /> Dashboard
                </Vertical.Item>
                <Vertical.Item id='2' onClick={this.handleClick()} selected={this.state.selectedLink === '2'}>
                  <Vertical.Icon className='fa fa-gears' /> Config
                </Vertical.Item>
              </Vertical.Menu>
            </Nav>
          </SideBar>
          <TitleBar />
        </div>
      </ThemeProvider>
    )
  }
}

export default connect()(App)
