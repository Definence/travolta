import React from 'react'
import { withRouter } from 'react-router-dom'
import Box from '@material-ui/core/Box'
import InfiniteScroll from 'react-infinite-scroller'

import { Context } from '../../../services/context'
import Main from '../../templates/Main'
import { hotels } from '../../../api/responses' // TODO remove
import { HotelBlock, StyledButton } from './styled'
import Heading from '../../atoms/Heading'
import Image from '../../atoms/Image'
import Paragraph from '../../atoms/Paragraph'
import HotelStars from '../../molecules/Hotel/Stars'

class HotelsPage extends React.PureComponent {
  static contextType = Context

  state = { page: 0, isFetching: false }

  fetchHotels = () => {
    const { dispatch } = this.context
    const { page, isFetching } = this.state
    const perPage = 10
    const fetchedHotels = hotels.slice(page * perPage, (page + 1) * perPage)

    console.log('Fetch')

    this.setState({ isFetching: true })
    if (isFetching === false) (
      setTimeout(() => {
        dispatch({ type: 'FETCH_HOTELS', payload: fetchedHotels })
        this.setState((prevState) => ({ page: prevState.page + 1, isFetching: false }))
      }, 1000)
    )
  }

  buildHotelBlock = (hotel) => {
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
          <HotelStars quantity={hotel_rating} />
          <Paragraph>{addressItems.join(', ')}</Paragraph>
        </Box>

        <StyledButton kind='primary'>SHOW DETAILS</StyledButton>
      </HotelBlock>
    )
  }

  render() {
    const { state } = this.context

    return (
      <Main>
        {hotels && hotels.length ? (
          <InfiniteScroll
            pageStart={this.state.page}
            loadMore={this.fetchHotels}
            hasMore={hotels.length !== state.hotels.length}
            loader={<div className="loader" key={0}>Loading ...</div>}
          >
            {state.hotels.map(this.buildHotelBlock)}
          </InfiniteScroll>
        ) : (
          <Heading>To hotels available</Heading>
        )}
      </Main>
    )
  }
}

export default withRouter(HotelsPage)
