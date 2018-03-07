import React from 'react'

import {
  NavBar,
  BrandArea
} from './styles'

const Wrapper = ({layout, theme}) => (
  <NavBar layout={layout}>
    <BrandArea layout={layout}>
      <span className='brand'><i className='fa fa-cube' aria-hidden='true' /> Company Name</span>
    </BrandArea>
  </NavBar>
)

export default Wrapper
