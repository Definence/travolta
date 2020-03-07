import React from 'react'
import Box from '@material-ui/core/Box'

import Main from '../../templates/Main'
import HotelList from '../../molecules/Hotel/List'
import HotelFilter from '../../molecules/Hotel/Filter'
import { Wrapper } from './styled'

const Desktop = ({ filter, noHotel, hasMore, fetchHotels, hotels, page, changeFilter }) => {
  return (
    <Main>
      <Wrapper>
        <Box mr='1rem'>
          <HotelFilter filter={filter} changeFilter={changeFilter} />
        </Box>

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
