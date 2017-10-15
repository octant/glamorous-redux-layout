import React from 'react'
import { ThemeProvider } from 'glamorous'

import {
  SubNav,
  TitleArea
} from './styles'

const Wrapper = ({layout, theme}) => (
  <ThemeProvider theme={theme}>
    <SubNav layout={layout}>
      <TitleArea>
        <span className='title'><i className='fa fa-tachometer' /> Dashboard</span>
      </TitleArea>
    </SubNav>
  </ThemeProvider>
)

export default Wrapper
