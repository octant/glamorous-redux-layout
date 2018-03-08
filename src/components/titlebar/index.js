import React from 'react'

import {
  TitleBar,
  BrandArea
} from './styles'

const Wrapper = () => (
  <TitleBar>
    <BrandArea>
      <span className='brand'><i className='fa fa-cube' aria-hidden='true' /> Company Name</span>
    </BrandArea>
  </TitleBar>
)

export default Wrapper
