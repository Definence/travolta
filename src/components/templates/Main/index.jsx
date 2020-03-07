import React from 'react'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'

import { Wrapper, BtnWrapper } from './styled'
import Heading from '../../atoms/Heading'
import Icon from '../../atoms/Icon'
import { palette } from '../../../constants/theme'
import Button from '../../atoms/Button'

const Main = ({ children }) => (
  <Wrapper>
    <Container width='80%'>
      <Box display='flex' justifyContent='space-between' width='100%'>
        <Box display='flex' alignItems='center'>
          <Icon name='circle' fill={palette.pink[0]} />
          <Heading>Travolta</Heading>
        </Box>

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
