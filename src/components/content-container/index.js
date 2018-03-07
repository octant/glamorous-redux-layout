import React from 'react'

import { ContentContainer } from './styles'

const Wrapper = ({children, layout, theme}) => (
  <ContentContainer layout={layout}>
    {children}
  </ContentContainer>
)

export default Wrapper
