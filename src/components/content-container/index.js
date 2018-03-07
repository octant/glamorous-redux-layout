import React from 'react'

import { ContentContainer } from './styles'

const Wrapper = ({children, layout}) => (
  <ContentContainer layout={layout}>
    {children}
  </ContentContainer>
)

export default Wrapper
