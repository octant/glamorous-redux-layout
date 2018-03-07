import React from 'react'

import {
  SideBar,
  SideBarSpacer as Spacer
} from './styles'

const Wrapper = ({children}) => (
  <SideBar>
    <Spacer />
    {children}
  </SideBar>
)

export default Wrapper
