import React from 'react'

import {
  SubNav,
  TitleArea
} from './styles'

const Wrapper = ({children, layout}) => (
  <SubNav layout={layout}>
    <TitleArea>
      {children}
    </TitleArea>
  </SubNav>
)

export default Wrapper
