import React from 'react'
import { ThemeProvider } from 'glamorous'

import {
  NavBar,
  BrandArea
} from './styles'

const Wrapper = ({theme}) => (
  <ThemeProvider theme={theme}>
    <NavBar>
      <BrandArea>
        <span className='brand'><i className='fa fa-cube' aria-hidden='true' /> Company Name</span>
      </BrandArea>
    </NavBar>
  </ThemeProvider>
)

export default Wrapper
