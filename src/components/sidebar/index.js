import React from 'react'
import { ThemeProvider } from 'glamorous'

import {
  SideBar,
  SideBarSpacer as Spacer
} from './styles'

const Wrapper = ({theme, layout, children}) => (
  <ThemeProvider theme={theme}>
    <SideBar layout={layout}>
      <Spacer layout={layout} />
      {children}
    </SideBar>
  </ThemeProvider>
)

export default Wrapper
