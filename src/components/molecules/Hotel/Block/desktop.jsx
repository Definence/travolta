import React from 'react'
import Box from '@material-ui/core/Box'

import { Wrapper, StyledButton, StyledImage } from './styled'
import Heading from '../../../atoms/Heading'
import Paragraph from '../../../atoms/Paragraph'
import HotelStars from '../../../molecules/Hotel/Stars'

const HotelBlock = ({ name, address, hotel_rating, image }) => {
  return (
    <Wrapper>
      <StyledImage image={image} />

      <Box ml='1rem' display='flex' flexDirection='column' justifyContent='space-around'>
        <Heading level={4}>{name}</Heading>
        <HotelStars quantity={Math.floor(hotel_rating)} />
        <Paragraph>{address}</Paragraph>
      </Box>

      <StyledButton kind='primary'>DETAILS</StyledButton>
    </Wrapper>
  )
}

export default HotelBlock
