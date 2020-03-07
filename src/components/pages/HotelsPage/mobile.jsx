import React from 'react'

import Main from '../../templates/Main'
import HotelList from '../../molecules/Hotel/List'

const Mobile = ({ filter, noHotel, hasMore, fetchHotels, hotels, page, changeFilter }) => {
  return (
    <Main>
      {/* <HotelFilter filter={filter} changeFilter={changeFilter} /> */}

      <HotelList
        noHotel={noHotel}
        fetchHotels={fetchHotels}
        page={page}
        hasMore={hasMore}
        hotels={hotels}
      />
    </Main>
  )
}

export default Mobile
