import React from 'react'
import Box from '@material-ui/core/Box'

import { Wrapper } from './mobileStyled'
import Logo from '../../molecules/Logo'

const Mobile = ({ children }) => {
  return (
    <Wrapper>
      <Logo />
      {children}
    </Wrapper>
  )
}

export default Mobile
