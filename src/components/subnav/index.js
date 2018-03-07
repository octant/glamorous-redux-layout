import React from 'react'

import {
  SubNav,
  TitleArea
} from './styles'

const Wrapper = ({children}) => (
  <SubNav>
    <TitleArea>
      {children}
    </TitleArea>
  </SubNav>
)

export default Wrapper
