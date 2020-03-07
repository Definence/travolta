import React from 'react'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'

import { Wrapper, BtnWrapper } from './styled'
import Button from '../../atoms/Button'
import Logo from '../../molecules/Logo'

const Main = ({ children }) => (
  <Wrapper>
    <Container width='80%'>
      <Box display='flex' justifyContent='space-between' width='100%'>
        <Logo />

        <BtnWrapper alignItems='center' display='flex'>
          <Button kind='secondary'>About Us</Button>
          <Button kind='secondary'>My bookings</Button>
          <Button kind='secondary'>Sign in</Button>
        </BtnWrapper>
      </Box>
    </Container>

    {children}
  </Wrapper>
)


export default Main
