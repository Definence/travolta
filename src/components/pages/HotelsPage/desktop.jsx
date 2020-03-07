import React from 'react'

import Main from '../../templates/Main'
import HotelList from '../../molecules/Hotel/List'
import HotelFilter from '../../molecules/Hotel/Filter'
import { Wrapper } from './styled'

const Desktop = ({ filter, noHotel, hasMore, fetchHotels, hotels, page, changeFilter }) => {
  return (
    <Main>
      <Wrapper>
        <HotelFilter filter={filter} changeFilter={changeFilter} />

        <HotelList
          noHotel={noHotel}
          fetchHotels={fetchHotels}
          page={page}
          hasMore={hasMore}
          hotels={hotels}
        />
      </Wrapper>
    </Main>
  )
}

export default Desktop
