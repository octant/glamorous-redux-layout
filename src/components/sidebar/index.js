import React from 'react'
import { ThemeProvider } from 'glamorous'

import {
  SideBar,
  SideBarSpacer as Spacer
} from './styles'

const Wrapper = ({theme, children}) => (
  <ThemeProvider theme={theme}>
    <SideBar>
      <Spacer />
      {children}
    </SideBar>
  </ThemeProvider>
)

export default Wrapper
