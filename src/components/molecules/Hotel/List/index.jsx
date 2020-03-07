import React from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import Box from '@material-ui/core/Box'

import { HotelBlock, StyledButton, Wrapper } from './styled'
import Heading from '../../../atoms/Heading'
import Image from '../../../atoms/Image'
import Paragraph from '../../../atoms/Paragraph'
import Spinner from '../../../atoms/Spinner'
import HotelStars from '../../../molecules/Hotel/Stars'

const HotelList = (props) => {
  const buildHotelBlock = (hotel) => {
    const min = 1
    const max = 10
    let random = Math.floor(Math.random() * (max - min) + min)
    const image = `${random}.jpg`
    const { name, id, address, city, state, country_code, hotel_rating } = hotel
    const addressItems = [address, city, state, country_code].filter((el) => el)

    return (
      <HotelBlock key={id}>
        <Image image={image} />

        <Box ml='1rem' display='flex' flexDirection='column' justifyContent='space-around'>
          <Heading level={4}>{name}</Heading>
          <HotelStars quantity={Math.floor(hotel_rating)} />
          <Paragraph>{addressItems.join(', ')}</Paragraph>
        </Box>

        <StyledButton kind='primary'>DETAILS</StyledButton>
      </HotelBlock>
    )
  }

  return (
    <Wrapper>
      {props.noHotel ? (
        <Heading>No hotels found</Heading>
      ) : (
        <InfiniteScroll
          pageStart={props.page}
          loadMore={props.fetchHotels}
          hasMore={props.hasMore}
          loader={<Box key={0} m='1rem'><Spinner /></Box>}
        >
          {props.hotels.map(buildHotelBlock)}
        </InfiniteScroll>
      )}
    </Wrapper>
  )
}

export default HotelList
