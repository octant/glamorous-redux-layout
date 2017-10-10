import React from 'react'
import { ThemeProvider } from 'glamorous'

import { ContentContainer } from './styles'

const Wrapper = ({theme}) => (
  <ThemeProvider theme={theme}>
    <ContentContainer />
  </ThemeProvider>
)

export default Wrapper
