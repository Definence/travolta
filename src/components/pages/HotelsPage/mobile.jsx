import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import Box from '@material-ui/core/Box'

import Main from '../../templates/Main'
import HotelList from '../../molecules/Hotel/List'
import HotelFilter from '../../molecules/Hotel/Filter'
import Button from '../../atoms/Button'

const Mobile = ({ filter, noHotel, hasMore, fetchHotels, hotels, page, changeFilter }) => {
  const [state, setState] = React.useState({ left: false })
  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    setState({ ...state, [side]: open })
  }

  return (
    <Main>
      <Box display='flex' justifyContent='center' mb='1rem'>
        <Button kind='secondary' onClick={toggleDrawer('left', true)}>FILTER</Button>
      </Box>

      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        <HotelFilter filter={filter} changeFilter={changeFilter} />
      </Drawer>

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
