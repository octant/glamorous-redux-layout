import React from 'react'
import { ThemeProvider } from 'glamorous'

import {
  SubNav,
  SubNavSpacer,
  TitleArea
} from './styles'

const Wrapper = ({theme}) => (
  <ThemeProvider theme={theme}>
    <SubNav>
      <SubNavSpacer />
      <TitleArea>
        <span className='title'><i className='fa fa-tachometer' /> Dashboard</span>
      </TitleArea>
    </SubNav>
  </ThemeProvider>
)

export default Wrapper
