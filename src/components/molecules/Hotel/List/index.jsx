import React from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import Box from '@material-ui/core/Box'

import { Wrapper } from './styled'
import Heading from '../../../atoms/Heading'
import Spinner from '../../../atoms/Spinner'
import HotelBlock from '../../../molecules/Hotel/Block'

const HotelList = (props) => {
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
          {props.hotels.map((hotel) => <HotelBlock key={hotel.id} {...hotel} />)}
        </InfiniteScroll>
      )}
    </Wrapper>
  )
}

export default HotelList
