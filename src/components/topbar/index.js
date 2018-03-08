import React from 'react'

import {
  TopBar,
  TitleArea
} from './styles'

const Wrapper = ({children}) => (
  <TopBar>
    <TitleArea>
      {children}
    </TitleArea>
  </TopBar>
)

export default Wrapper
