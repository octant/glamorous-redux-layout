import React from 'react'

import {
  SideBar,
  SideBarSpacer as Spacer
} from './styles'

const Wrapper = ({layout, children}) => (
  <SideBar layout={layout}>
    <Spacer layout={layout} />
    {children}
  </SideBar>
)

export default Wrapper
