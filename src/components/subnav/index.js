import React from 'react'
import { ThemeProvider } from 'glamorous'

import {
  SubNav,
  TitleArea
} from './styles'

const Wrapper = ({children, layout, theme}) => (
  <ThemeProvider theme={theme}>
    <SubNav layout={layout}>
      <TitleArea>
        {children}
      </TitleArea>
    </SubNav>
  </ThemeProvider>
)

export default Wrapper
