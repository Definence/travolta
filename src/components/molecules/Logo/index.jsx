import React from 'react'
import Box from '@material-ui/core/Box'

import Heading from '../../atoms/Heading'
import Icon from '../../atoms/Icon'
import { palette } from '../../../constants/theme'

const Logo = () => {
  return (
    <Box display='flex' alignItems='center'>
      <Icon name='circle' fill={palette.pink[0]} />
      <Heading level={2}>TRAVOLTA</Heading>
    </Box>
  )
}

export default Logo
