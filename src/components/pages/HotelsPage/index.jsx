import React from 'react'
import Box from '@material-ui/core/Box'
import throttle from 'lodash.throttle'

import { Context } from '../../../services/context'
import Main from '../../templates/Main'
import { hotels } from '../../../api/responses'
import HotelList from '../../molecules/Hotel/List'
import HotelFilter from '../../molecules/Hotel/Filter'

class HotelsPage extends React.PureComponent {
  static contextType = Context
  state = { page: 0, isFetching: false, matchedQuantity: hotels.length, filter: { name: null, rating: null } }

  fetchHotels = throttle(() => {
    console.log('Fetch')
    const { dispatch } = this.context
    const { page, isFetching, filter: { name, rating } } = this.state
    const perPage = 10
    const matchedHotels = hotels.filter((h) => {
      return (
        (!name || (h.name.toLowerCase().includes(name.toLowerCase()))) &&
        (!rating || (h.hotel_rating === rating))
      )
    })

    const fetchedHotels = matchedHotels.slice(page * perPage, (page + 1) * perPage)

    if (isFetching === false) (
      setTimeout(() => {
        this.setState((prevState) => ({
          page: prevState.page + 1,
          isFetching: false,
          matchedQuantity: matchedHotels.length
        }), dispatch({ type: 'FETCH_HOTELS', payload: fetchedHotels }))
      }, 800)
    )
    this.setState({ isFetching: true })
  }, 1500)

  changeFilter = (params) => {
    const { dispatch } = this.context
    dispatch({ type: 'RESET_HOTELS' })
    this.setState((prevState) => ({ page: 0, filter: { ...prevState, ...params } }))
  }

  render() {
    const { state } = this.context
    const { matchedQuantity, filter } = this.state

    return (
      <Main>
        <Box display='flex'>
          <HotelFilter filter={filter} changeFilter={this.changeFilter} />
          <HotelList fetchHotels={this.fetchHotels} page={state.page} matchedQuantity={matchedQuantity}  hotels={state.hotels} />
        </Box>
      </Main>
    )
  }
}

export default HotelsPage
