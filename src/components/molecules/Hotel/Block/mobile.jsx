import React from 'react'
import Box from '@material-ui/core/Box'
import styled from 'styled-components'

import Heading from '../../../atoms/Heading'
import Paragraph from '../../../atoms/Paragraph'
import HotelStars from '../../../molecules/Hotel/Stars'
import Image from '../../../atoms/Image'
import { palette } from '../../../../constants/theme'

const StyledImage = styled(Image)`
  min-width: 120px;
  min-height: 120px;
`

export const Wrapper = styled(Box)`
  height: max-content;
  display: flex;
  background-color: ${palette.white[0]};
  border: 1px solid ${palette.dark[0]};
  padding: 1rem;
  margin-bottom: 1rem;
`

const Mobile = ({ name, address, hotel_rating, image }) => {
  return (
    <Wrapper p='0.5rem'>
      <StyledImage image={image} />

      <Box ml='0.5rem' display='flex' flexDirection='column' justifyContent='space-around'>
        <Heading level={4}>{name}</Heading>
        <HotelStars quantity={Math.floor(hotel_rating)} />
        <Paragraph size='0.8rem'>{address}</Paragraph>
      </Box>
    </Wrapper>
  )
}

export default Mobile
