import React from 'react'
import { ThemeProvider } from 'glamorous'

import { ContentContainer } from './styles'

const Wrapper = ({children, layout, theme}) => (
  <ThemeProvider theme={theme}>
    <ContentContainer layout={layout}>
      {children}
    </ContentContainer>
  </ThemeProvider>
)

export default Wrapper
